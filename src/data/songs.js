import { getSongsSpoty, getSongSpoty } from '../api/apiSpoty.js';

const songsSpoty =  getSongsSpoty();
const songsParse = [];

songsSpoty.then((songs) => {
  songs.forEach((song) => {
    songsParse.push({
        titulo: song.name,
        artista: song.artists.map((artist) => artist.name),
        año: song.album.release_date.slice(0, 4),
        album: song.album.name,
        popularidad: song.popularity.toString()
        });
  });
});

const dailySongSpoty = getSongSpoty();
const dailySongParse = [];

dailySongSpoty.then((song) => {
  dailySongParse.push({
    titulo: song.name,
    artista: song.artists.map((artist) => artist.name),
    año: song.album.release_date.slice(0, 4),
    album: song.album.name,
    popularidad: song.popularity.toString()
  });
});

export const songs = songsParse;

export const dailySong = dailySongParse;