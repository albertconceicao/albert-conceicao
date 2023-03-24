import nodemailer from 'nodemailer';
import cors from 'cors';

const email = process.env.MAILADDRESS;
const emailPass = process.env.MAILPASSWORD;

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    type: 'login',
    user: email,
    pass: emailPass
  }
});
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages', success);
  }
});
const mailer = ({ senderMail, name, text }) => {
  const from = `${email}`;
  const mailList = [email];
  const message = {
    from,
    to: mailList,
    subject: `Nova mensagem de contato - ${name} <${senderMail}`,
    html: `
      <h3>Solicitação de serviço direto do Portfólio</h3>
      <br />
      <ul>
        <li>Cliente: <strong>${name}</strong></li>
      </ul>
      <br />
        <p> A mensagem enviada foi: <br />
        <ul>
          <li>${text}</li>
        </ul>
        <br />
        <h3>Code Solutions</h3>
      `,
    replyTo: senderMail
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  cors()(req, res, async () => {
    const { senderMail, name, content } = req.body;

    if (senderMail === '' || name === '' || content === '') {
      res.status(403).send();
      return;
    }
    const mailerRes = await mailer({ senderMail, name, text: content });
    res.send(mailerRes);
  });
};
