import state from './gameState.js'
import mutations from './gameMutations.js'
import actions from './gameActions.js'
import getters from './gameGetters.js'

export default {
  isRegistered: true,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}