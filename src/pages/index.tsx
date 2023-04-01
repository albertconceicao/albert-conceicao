import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Aos from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { Projects } from '../components/Projects';
import { Knowledges } from '../components/Knowledges';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.jpg" />
        <meta property="og:image:secure_url" content="/ogimage.jpg" />
        <meta name="twitter:image" content="/ogimage.jpg" />
        <meta name="twitter:image:src" content="/ogimage.jpg" />
        <meta
          property="og:description"
          content="Sou desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim, sinta-se à vontade para conferir e solicitar o seu serviço também!"
        />
        <meta
          name="keywords"
          content="Albert Conceição, albert conceicao, albertconceicao, albertconceição, front end developer, desenvolvedor front end, programador, desenvolvedor de sites, criador de sites, criar um site, criar landing pages, landing pages, desenvolvedor de software, software"
        />
      </Head>
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
    type: project.data.type,
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
