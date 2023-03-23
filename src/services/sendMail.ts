import axios from 'axios';

export const sendContactMail = async (name, senderMail, content) => {
  const data = {
    name,
    senderMail,
    content
  };

  try {
    const res = await axios.post(
      'https://developer-albert.vercel.app/api/contact',
      data,
      { timeout: 20000 }
    );
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
};
