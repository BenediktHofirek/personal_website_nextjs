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
        host: 'smtp.mailtrap.io',
        port: 587,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
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

