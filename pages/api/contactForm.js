// var nodemailer = require('nodemailer');

export default (req, res) => {
    if (req.method === 'POST') {
        res.status(200).json({
            service_id:  process.env.SERVICE_ID,
            user_id: process.env.USER_ID,
            template_id: process.env.TEMPLATE_ID,
        });
        //  const {
        //    name: senderName,
        //    email: senderEmail,
        //    message,
        //    subject,
        //  } = req.body;
        // 
        //  var transporter = nodemailer.createTransport({
        //      host: 'smtp.cloudmta.net',
        //      port: 587,
        //    auth: {
        //      user: process.env.USER,
        //      pass: process.env.PASSWORD,
        //    }
        //  });
        //
        //
        //  var mailOptions = {
        //    from: "mailtrap@benedikthofirek.com",
        //    to: process.env.EMAIL,
        //    subject: 'CONTACT FORM from' + senderEmail,
        //    text: `sender: ${senderEmail}\n
        //           name: ${senderName}
        //           subject: ${subject} \n
        //           message: ${message}`
        //  };
        //
        //  transporter.sendMail(mailOptions, function(error, info){
        //    if (error) {
        //      console.log('err', error);
        //      res.status(500).end();
        //    } else {
        //      res.status(200).end();
        //    }
        //  });
    }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

