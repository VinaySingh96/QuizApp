import axios from 'axios';
import marked from 'marked';

const baseUrl = 'https://res.cloudinary.com'
export const imageBaseUrl = `${baseUrl}/dbg5xqub7/image/upload/v1730141118/`;
export const fileBaseUrl = `${baseUrl}/dbg5xqub7/raw/upload/v1730139041`;
export const pdfBaseUrl = `${baseUrl}/dbg5xqub7/image/upload/v1730140981`;

export const fetchMarkdown = async (fileName) => {
  try {
    const url = `${fileBaseUrl}/${fileName}`;
    const response = await axios.get(url);
    const html = marked.parse(response.data.replaceAll('assets/', imageBaseUrl));

    return html;
  } catch (error) {
    console.error('Error fetching markdown file:', error);
  };
}

export const fetchAllMaterials = async () => {
  try {
    const response = await axios.get('https://joblient.com/api/v1/course/ws?key=learning');
    return response.data;
  } catch (error) {
    console.error('Error fetching learing materials', error);
  }
}
