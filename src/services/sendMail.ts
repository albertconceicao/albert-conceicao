import axios from 'axios';

export const sendContactMail = async (name, senderMail, content) => {
  const data = {
    name,
    senderMail,
    content
  };

  try {
    const res = await axios.post(
      'https://ubiquitous-bienenstitch-b45864/api/contact',
      data
    );
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
};
