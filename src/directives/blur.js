const blur = {};

function setBlur(el, binding) {
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'; // Si se usa ! antes es porque se activa si el valor es falsy: 0, '', false, undefined, []
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit';

  el.querySelectorAll('button').forEach(element => {
    if (!binding.value) {
      element.setAttribute('disabled', true);
    }
    else {
      element.removeAttribute('disabled');
    }
  });
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind(el, binding) {
      setBlur(el, binding);
    }
  });
}

export default blur;