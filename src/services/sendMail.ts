import axios from 'axios';

export const sendContactMail = async (name, senderMail, content) => {
  const data = {
    name,
    senderMail,
    content
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
};
