const msToMm = {};

function convertMsToMm(ms) {
  const min = Math.floor(ms / 60000);
  const sec = (ms % 60000 / 1000).toFixed(0);
  return `${min}:${sec < 10 ? '0' + sec : sec}`;
  //return min + ':' + (sec < 10 ? '0' + sec : sec)
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return convertMsToMm(val);
  }); // Este método devolvería el valor modificado sin que se afecte el valor original
}

export default msToMm;