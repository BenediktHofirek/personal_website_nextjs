var nodemailer = require('nodemailer');

export default (req, res) => {
  if (req.method === 'POST') {
    const {
      name: senderName,
      email: senderEmail,
      message,
      subject,
    } = req.body;
   
    var transporter = nodemailer.createTransport({
      service: 'smtp.seznam.cz',
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'CONTACT FORM from' + senderEmail,
      text: `sender: ${senderEmail}\n
             name: ${senderName}
             subject: ${subject} \n
             message: ${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log('err', error);
        res.status(500).end();
      } else {
        res.status(200).end();
      }
    });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

