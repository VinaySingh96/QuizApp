import {a2b} from '../utils/decodeUtil';
import axios from 'axios';

const baseUrl = 'https://joblient.com';

const API = {
  skill: `${baseUrl}/api/v1/skill`,
};

export const getData = async (api, message) => {
  // const token = localStorage.getItem("token");
  let token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY0YjY3YzZlMTU2ZjQwZmQxYjg3YzIiLCJpYXQiOjE3MDEwOTkxMzJ9.RUCQevhqXg3C1G5jfrfC8N4lu1r7Tt5p6-nO4-jhVZ8';
  try {
    let result = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('FETCH:', message, result.data);

    return result.data;
  } catch (err) {
    console.log(err.response);
  }
  return null;
};

export const getQuestions = async (topic, count = 10) => {
  let address = `${
    API.skill
  }/quiz?topic=${topic.toLocaleLowerCase()}&count=${count}`;
  let quizzes = await getData(address, 'Quiz score');
  let questions = [];
  for (let quiz of quizzes) {
    let temp = JSON.parse(a2b(quiz));
    temp.question = temp.question.replace(/^[^.]*\. /, '');
    temp.check = null;
    questions.push(temp);
  }

  return questions;
};

export const getQuizTopics = async () => {
  let url = 'https://joblient.com/api/v1/skill/skill?topic=skills';
  
  let token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY0YjY3YzZlMTU2ZjQwZmQxYjg3YzIiLCJpYXQiOjE3MDEwOTkxMzJ9.RUCQevhqXg3C1G5jfrfC8N4lu1r7Tt5p6-nO4-jhVZ8';
  try {
    let result = await getData(url, 'Quiz topics');
    console.log('FETCH:', 'Quiz topics', result);

    return result.data;
  } catch (err) {
    console.log(err);
  }
}