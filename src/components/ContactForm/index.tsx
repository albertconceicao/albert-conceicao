import { SectionTitle } from '../SectionTitle';
// import { Form } from './Form';
import { Container } from './styles';

export function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos <br /> meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo <br /> que irei retornar em breve
          </>
        }
      />
      {/* <Form /> */}
      <button
        type="button"
        data-tf-popup="X45Q3xjI"
        data-tf-opacity="100"
        data-tf-size="100"
        data-tf-iframe-props="title=Portfólio"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        style={{
          all: 'unset',
          fontFamily: 'Helvetica, Arial ,sans-serif',
          display: 'inline-block',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          backgroundColor: '#0445AF',
          color: '#fff',
          fontSize: '20px',
          borderRadius: '25px',
          padding: '0 33px',
          fontWeight: 'bold',
          height: '50px',
          cursor: 'pointer',
          lineHeight: '50px',
          textAlign: 'center',
          margin: '0',
          textDecoration: 'none'
        }}
        // style={{all:'unset',fontFamily:'Helvetica',Arial,sans-serif,display:'inline-block',maxWidth:'100%',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',backgroundColor:'#0445AF',color:'#fff',fontSize:'20px',borderRadius:'25px',padding:'0 33px',fontWeight:'bold',height:'50px',cursor:'pointer',lineHeight:'50px',textAlign:'center',margin:'0',textDecoration:'none'}}
      >
        Try me!
      </button>
      <script src="//embed.typeform.com/next/embed.js" />
    </Container>
  );
}
