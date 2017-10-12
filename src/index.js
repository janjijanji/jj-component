import JjNewsItem from './news/JjNewsItem'
import JjLogo from './others/JjLogo'
import JjImg from './others/JjImg'
import JjAvatar from './promise-makers/JjAvatar'
import JjStatement from './promises/JjStatement'
import JjVote from './promises/JjVote'

module.exports = function install (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true

  Vue.prototype.$getJjVerdictKeys = () => ["NOT_RATED", "BROKEN", "STUCK", "COMPROMISE", "IN_PROGRESS", "KEPT"]
  const indexOfVerdict = verdict => Vue.prototype.$getJjVerdictKeys().indexOf(verdict)

  Vue.prototype.$getJjVerdictLabel = verdict => ["Not rated", "Broken", "Stuck", "Compromise", "In progress", "Kept"][indexOfVerdict(verdict)]
  Vue.prototype.$getJjVerdictColor = (verdict, opacity) => {
    const index = indexOfVerdict(verdict)
    const colors = [[170,170,170], [170,0,0], [229,175,42], [237,237,68], [52,170,207], [98,133,25]]
    return "rgba(" + colors[index][0] + ", " + colors[index][1] + ", " + colors[index][2] + ", " + opacity + ")"
  }

  Vue.prototype.$getJjVerdictKeyByIndex = index => Vue.prototype.$getJjVerdictKeys()[index]
  Vue.prototype.$getJjVerdictLabelByIndex = index => Vue.prototype.$getJjVerdictLabel(Vue.prototype.$getJjVerdictKeyByIndex(index))
  Vue.prototype.$getJjVerdictColorByIndex = (index, opacity) => Vue.prototype.$getJjVerdictColor(Vue.prototype.getJjVerdictKeyByIndex(index), opacity)

  Vue.component(JjNewsItem.name, JjNewsItem)
  Vue.component(JjLogo.name, JjLogo)
  Vue.directive(JjImg.name, JjImg)
  Vue.component(JjAvatar.name, JjAvatar)
  Vue.component(JjStatement.name, JjStatement)
  Vue.component(JjVote.name, JjVote)
}
