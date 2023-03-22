import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';

export function Knowledges() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="JS" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}
