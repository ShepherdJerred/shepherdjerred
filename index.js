const express = require('express')
const bodyParser = require('body-parser')
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const helper = require('sendgrid').mail
const validator = require('validator')
const Recaptcha = require('recaptcha2')

const port = process.env.PORT || 3000
const app = express()

const captcha = new Recaptcha({
  siteKey: '6Lff6xsTAAAAAJz6DLCysZZw70vapFYaFhvhPLIU',
  secretKey: process.env.RECAPTCHA_SECRET
})

app.use(express.static('dist'))
app.use(bodyParser.json())

app.post('/contact', function (req, res) {
  captcha.validateRequest(req)
    .then(function () {
      let subject = req.body.subject
      let content = req.body.content
      let email = req.body.email
      let name = req.body.name

      if (!validator.isEmail(email) || validator.isEmpty(content)) {
        res.sendStatus(400)
        return
      }

      const to = new helper.Email('shepherdjerred@gmail.com')
      const from = new helper.Email('contact@shepherdjerred.com')

      content = new helper.Content('text/html', 'Name: ' + name + '<br>' +
        'Email: ' + email + '<br>' +
        'Message: ' + content)

      let mail = new helper.Mail(from, subject, to, content)

      let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
      })

      sg.API(request)
        .then(response => {
          res.sendStatus(response.statusCode)
        })
        .catch(error => {
          res.sendStatus(error.response.statusCode)
        })
    })
    .catch(function (errorCodes) {
      res.sendStatus(401)
    })
})

app.listen(port)
