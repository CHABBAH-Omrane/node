var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'chabbahomrane@outlook.fr',
      pass: '15061993'
    }
  });
  
  var mailOptions = {
    from: 'chabbahomrane@outlook.fr',
    to: 'omrane@lazitouna.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });