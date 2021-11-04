import platziMusicService from "./platzi-music";

/**
 * Interactua con platziMusic para buscar canciones y su información
 */
const trackService = {};

/**
 * Interactua con PlatziMusic y busca canciones
 */
/* trackService.search = function (q) { // q = query
  const type = "track";
  return platziMusicService.get('/breeds')
  .then(res => res.data);
}

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
} */

trackService.get = function () {
  return platziMusicService.get().data;
}

trackService.getById = function (id) {
  return platziMusicService.getById(id).data;
}

trackService.getByName = function (name) {
  return platziMusicService.getByName(name).data;
}

export default trackService;