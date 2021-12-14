const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);
const nodemailer = require(`nodemailer`);
const app = express();
const PORT = process.env.port || 3001; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.post(`/sendmail`, (request, response) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>You have the following message</h3>
            <ul>
                <li>Email: ${request.body.email}</li>
                <li>Name: ${request.body.user}</li>
            </ul>
            <h3>Message</h3>
            <p>${request.body.comment}</p>
        `;
        let transporter = nodemailer.createTransport({
            host: `smtp.gmail.com`,
            port: 587,
            // service: `Gmail`,
            auth: {
                user: `portfolioalexandrakuchinskaya@gmail.com`,
                pass: `portfolioalexandra1`
            }
        });
        let mailOptions = {
            to: `alexkuchynsk@gmail.com`,
            from: request.body.email,
            replyTo: request.body.email,
            subject: `new contact`,
            text: request.body.comment,
            html: htmlEmail,
        }
    
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log(`Message sent: %s`, info.messageId);
            
    
        })
    })
    
})

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en el puerto ${PORT}`);
})