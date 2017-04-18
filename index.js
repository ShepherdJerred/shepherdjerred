const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.use(express.static('dist'))

// app.post('/contact', function (req, res) {
//   var helper = require('sendgrid').mail
//   var from = new helper.Email(req.params.email)
//   var to = new helper.Email('shepherdjerred@gmail.com')
//   var subject = req.params.subject
//   var content = new helper.Content(req.params.message)
//   var mail = new helper.Mail(from, subject, to, content)
//
//   var sg = require('sendgrid')('key')
//
//   var request = sg.emptyRequest({
//     method: 'POST',
//     path: '/v3/mail/send',
//     body: mail.toJSON()
//   })
//
//   sg.API(request)
//     .then(response => {
//       res.send(response.statusCode)
//     })
//     .catch(error => {
//       res.send(error.response.statusCode)
//     })
// })

app.listen(port)
