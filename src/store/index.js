import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        name: 'memoirsofanangel',
        color: 'info',
        title: 'Memoirs of an Angel (2010)',
        description: 'A full-length game made with Ren\'Py, a Python-based visual novel engine.',
      },
      {
        name: 'memoirscharactercreator',
        color: 'primary',
        title: 'The Memoirs Character Creator',
        description: 'A browser-based dress up game designed and exported with GameMaker: Studio.',
      },
    ],
  },
  getters: {
    projects: (state) => state.projects,
    projectDetails: (state) => (name) => state.projects.find((project) => project.name === name),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
