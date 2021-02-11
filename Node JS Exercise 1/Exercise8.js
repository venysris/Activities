var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'sris.veny@gmail.com',
    pass: 'Sris@veny@9596'
}
});

var mailOptions = {
    from: 'sris.veny@gmail.com',
    to: 'sris.veny96@gmail.com',
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