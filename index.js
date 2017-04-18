const express = require('express')
const bodyParser = require('body-parser')
const sg = require('sendgrid')('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')
const helper = require('sendgrid').mail

const port = process.env.PORT || 3000
const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())

app.post('/contact', function (req, res) {
  const to = new helper.Email('shepherdjerred@gmail.com')
  let from = new helper.Email(req.body.email)
  let subject = req.body.subject
  let content = new helper.Content('text/plain', 'Name: ' + req.body.name + '\n' + req.body.content)

  let mail = new helper.Mail(from, subject, to, content)

  console.log(req.body.email)
  console.log(req.body.subject)
  console.log(req.body.content)
  console.log(req.body.name)

  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  })

  sg.API(request)
    .then(response => {
      res.send(response.statusCode)
    })
    .catch(error => {
      console.log(error.response.statusCode)
      console.log(error.response.body)
    })
})

app.listen(port)
