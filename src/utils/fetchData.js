import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'ccc063bb5emsh134f70931ac8cc9p14346bjsnca198af32df0',     // r88malviya api key
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();  

  return data;
};


const API_URL = 'http://localhost:5000/api'; 

export const login = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })        // jo chiz bhejni hein
  });
  return await response.json(); 
};


export const signup = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })        // jo chiz bhejni hein
  });
  return await response.json(); 
};


export const addEntry = async (userId, weight, calories, waterIntake, sleepDuration) => {
  return await axios.post(`${API_URL}/tracker/add`, { userId, weight, calories, waterIntake, sleepDuration });
};

export const deleteLatestEntry = async (userId) => {
  return await axios.delete(`${API_URL}/tracker/delete-latest`, { data: { userId } });
};

export const getProgressData = async (userId) => {
  return await axios.get(`${API_URL}/tracker/${userId}/data`);
};

export const deleteAllEntries = async (userId) => {
  return await axios.delete(`${API_URL}/tracker/delete-all`, { data: { userId } });
};
