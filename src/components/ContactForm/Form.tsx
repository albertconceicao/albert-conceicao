import { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { sendContactMail } from '../../services/sendMail';
// import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   if (!name || !email.includes('@') || !message) {
  //     toast('Preencha todos os campos para enviar sua mensagem', {
  //       style: {
  //         background: theme.error,
  //         color: '#fff'
  //       }
  //     });
  //     return;
  //   }
  //   try {
  //     await sendContactMail(name, email, message);
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //     toast('Email enviado com sucesso', {
  //       style: {
  //         background: theme.secondary,
  //         color: '#fff'
  //       }
  //     });
  //   } catch (error) {
  //     toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
  //       style: {
  //         background: theme.error,
  //         color: '#fff'
  //       }
  //     });
  //   }
  // };
  return (
    <FormContainer
      data-aos="fade-up"
      // onSubmit={handleSubmit}
      action="https://formsubmit.co/developer.albert@outlook.com"
      method="POST"
    >
      <Input
        placeholder="Nome"
        type="text"
        onChange={({ target }) => setName(target.value)}
        name="name"
        value={name}
      />
      <Input
        placeholder="Email"
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        name="email"
      />
      <TextArea
        placeholder="Mensagem"
        onChange={({ target }) => setMessage(target.value)}
        value={message}
        name="message"
      />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
