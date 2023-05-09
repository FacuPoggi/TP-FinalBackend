import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "facundopoggiprueba@gmail.com",
        pass: process.env.EMAILPASSWORD,
        authMethod: 'LOGIN'
    }
})

export const sendEmail = async (req, res) => {
    await transporter.sendMail({
        from: 'Test Coder facundopoggiprueba@gmail.com',
        to: req.session.user.email,
        subject: "Prueba del email",
        html: `
            <div>
            <h2>Prueba del email</h2>
            <p>Prueba del email nuevamente</p>
            </div>
        `,
        attachments: []
    })
    res.send("Email enviado")
}