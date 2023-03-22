import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyle';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title="Projeto 01"
        type="website"
        imgUrl="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          incidunt asperiores quidem deserunt pariatur. Doloremque, vel
          praesentium explicabo sit ex illum eaque cum delectus id veritatis
          quasi maiores aspernatur saepe quis ullam asperiores suscipit quia sed
          accusantium blanditiis a expedita quidem fugiat. Recusandae quidem
          pariatur voluptatem? Veritatis, non hic facilis ducimus possimus est
          illum, ex quos, reiciendis inventore totam deserunt blanditiis. Aut,
          eveniet dolores. Sapiente rerum commodi est iusto, quas magni tempore
          voluptatibus nihil placeat, praesentium excepturi, pariatur magnam ab!
        </p>

        <button type="button">
          <a href="/">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
