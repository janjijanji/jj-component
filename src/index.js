import JjLogo from './others/JjLogo'

module.exports = function install (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true

  Vue.component(JjLogo.name, JjLogo)
}
