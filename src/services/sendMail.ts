import axios from 'axios';

export const sendContactMail = async (name, senderMail, content) => {
  const data = {
    name,
    senderMail,
    content
  };

  try {
    const res = await axios.post(
      'https://main--ubiquitous-bienenstitch-b45864.netlify.app/api/contact',
      data
    );
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
};
