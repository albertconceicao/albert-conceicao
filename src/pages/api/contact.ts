import nodemailer from 'nodemailer';

const email = process.env.MAILADDRESS;
const emailPass = process.env.MAILPASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  auth: {
    type: 'login',
    user: email,
    pass: emailPass
  }
});

const mailer = async ({ senderMail, name, text }) => {
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

export default async (req: any, res: any) => {
  const { senderMail, name, content } = req.body;

  try {
    const mailerRes = await mailer({ senderMail, name, text: content });
    res.send(mailerRes);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: 'An error occurred while sending the email' });
  }
};
