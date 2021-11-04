import axios from 'axios'; // Como en la URL no hay ../ entonces webpack lo entiende como una dependencia de npm
import configService from './config';

/**
 * Instancia de Axios
 * Utiliza la baseURL para no repetir la url
 * Servicio que se usa para interactuar con la api de Platzi music
 * Si hubiera otras API's se crearían otros servicios para cada una para centralizar las llamadas
 */
/* const platziMusicService = axios.create({
  baseUrl: configService.apiUrl
}); */

const trackMocks = [
  { id: '1', name: "Madhouse", artist: "Anthrax", album_img: "src/assets/album-img-anthrax-madhouse.jpg", audio: "src/assets/music/Anthrax - Madhouse.mp3", duration_ms: 258000, preview: true },
  { id: '2', name: "Don't Stop Me Now", artist: "Queen", album_img: "src/assets/album-img-queen-dontstopmenow.jpg", audio: "src/assets/music/Queen - Don't Stop Me Now.mp3", duration_ms: 210000, preview: true },
  { id: '3', name: "Nuclear", artist: "Mike Oldfield", album_img: "src/assets/album-img-mikeoldfield-nuclear.jpg", audio: "src/assets/music/Mike Oldfield - Nuclear.mp3", duration_ms: 304000, preview: true },
  { id: '4', name: "The Unforgiven II", artist: "Metallica", album_img: "src/assets/album-img-metallica-theunforgivenII.jpg", audio: "src/assets/music/Metallica - The Unforgiven II.mp3", duration_ms: 396000, preview: true }
];

const platziMusicService = {
  get() {
    return {
      data: trackMocks
    }
  },
  getById(id) {
    return {
      data: trackMocks.find(e => e.id === id)
    }
  },
  getByName(name) {
    return {
      data: trackMocks.filter(e => e.name.toLowerCase() === name.toLowerCase())
    }
  }
}

// Lo exporta para que sea utilizado por otros componentes
export default platziMusicService;