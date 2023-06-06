import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SENDER,
        pass: process.env.EMAILPASSWORD,
        authMethod: 'LOGIN'
    }
})

export const sendEmail = async (req, res) => {
    try{
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
        res.status(200).send({ message: "Email enviado" })
    }
        catch (error) {
        res.status(400).send({
            message: "Problema con el email que envia",
            error: error
        })
    }
}