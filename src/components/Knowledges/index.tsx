import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTypescript, SiMysql, SiSass, SiJquery } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
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
        <KnowledgeItem title="TS" icon={<SiTypescript />} />
        <KnowledgeItem title="JQuery" icon={<SiJquery />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
        <KnowledgeItem title="Next.js" icon={<TbBrandNextjs />} />
        <KnowledgeItem title="Node.js" icon={<FaNodeJs />} />
        <KnowledgeItem title="MySQL" icon={<SiMysql />} />
        <KnowledgeItem title="Git" icon={<BsGit />} />
        <KnowledgeItem title="SASS" icon={<SiSass />} />
      </section>
    </Container>
  );
}
