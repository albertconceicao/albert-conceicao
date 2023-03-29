import Link from 'next/link';
import { RiWhatsappFill } from 'react-icons/ri';

export function WhatsApp() {
  return (
    <Link
      href="https://wa.me/5571996850880?text=Olá, desejo saber mais sobre seus serviços que vi no seu site"
      target="_blank"
      style={{
        textDecoration: 'none'
      }}
    >
      <RiWhatsappFill
        fontSize={2}
        style={{
          position: 'fixed',
          width: '70px',
          height: '65px',
          bottom: '80px',
          right: '20px',
          borderRadius: '50px',
          textAlign: 'center',
          opacity: '0.9',
          color: '#0EE7B7',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
        }}
      />
    </Link>
  );
}
