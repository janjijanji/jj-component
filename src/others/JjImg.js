// Lazy loading image
// value is either a string url to image or object with members `src`, `loading`, & `error`
// Use modifier `.lazy` to enable lazy loading
export default {
  name: 'jj-img',

  inserted: function (el, binding) {
    el.style.margin = 'auto'

    if (binding.modifiers.lazy) {
      let img = new Image()
      el.src = binding.value.loading
      img.src = binding.value.src || binding.value

      img.onload = function () {
        el.src = img.src
      }

      img.onerror = function (e) {
        el.src = binding.value.error
      }
    } else {
      el.src = binding.value.src || binding.value
    }
  }
}
