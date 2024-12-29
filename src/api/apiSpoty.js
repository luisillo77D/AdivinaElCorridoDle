import axios from 'axios';
import { getSongs, getDailySong } from './apiSongs.js';

const clientId = "5f49bb2bd6d24e96a3cbfdeffb9071f8";
const clientSecret = "b579f422e44f4b289ec5cecb40e1d208";

// Función para obtener un token de acceso
async function obtenerTokenAcceso() {
  const respuesta = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const datos = await respuesta.json();
  return datos.access_token;
}

let token;

const createAxiosInstance = async () => {
  token = await obtenerTokenAcceso();
  return axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const getSongSpoty = async () => {
  const axiosInstance = await createAxiosInstance();
  try {
    const id = await getDailySong();
    console.log(id);
    const response = await axiosInstance.get(`/tracks/${id.idSpoty}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSongsSpoty = async () => {
  const axiosInstance = await createAxiosInstance();
  try {
    const ids = await getSongs();
    const songs = [];
    for (const id of ids) {
      const response = await axiosInstance.get(`/tracks/${id.idSpoty}`);
      songs.push(response.data);
    }
    console.log(songs);
    return songs;
  } catch (error) {
    console.error(error);
  }
};