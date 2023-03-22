import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { Projects } from '../components/Projects';
import { Knowledges } from '../components/Knowledges';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { getPrismicClient } from '../services/prismic';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <Knowledges />
        <ContactForm />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    { orderings: '[document.first_publication_date_desc]' }
  );
  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.type,
    description: project.data.description,
    link: project.data.live_project.url,
    thumbnail: project.data.thumbnail.url
  }));
  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
