import { FormContainer, Input, TextArea } from './styles';

export function Form() {
  return (
    <FormContainer data-aos="fade-up">
      <Input placeholder="Nome" type="text" required />
      <Input placeholder="Nome" type="email" required />
      <TextArea placeholder="Mensagem" required />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
