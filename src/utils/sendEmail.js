const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASS
        }
      });
    const mensaje={
        from: `AgroConexión ${process.env.EMAIL_USERNAME}`,
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;