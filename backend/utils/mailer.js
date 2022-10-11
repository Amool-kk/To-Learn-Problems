const { MAILER_HOST, MAILER_PORT, MAILER_USER, MAILER_PASS, MAILER_NAME } = require('../config')
const mailer = require('nodemailer')


const transporter = mailer.createTransport({
    host: MAILER_HOST,
    port: MAILER_PORT,
    auth: {
        user: MAILER_USER,
        pass: MAILER_PASS,
    }
})

async function sendMail(to, subject, message) {
    await transporter.sendMail({
        from: `${MAILER_NAME} <${MAILER_HOST}>`,
        to: to,
        subject: subject,
        html: `<h1>${message}</h1>`
    })
        .then(console.info)
        .catch(console.error)
}

module.exports = { sendMail }
