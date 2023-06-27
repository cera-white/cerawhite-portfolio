import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        name: 'whitesuncrafts',
        color: 'primary',
        title: 'White Sun Crafts',
        description: 'An e-commerce website for a small business selling handmade jewelry.',
        url: 'https://whitesuncrafts.anigrams.org',
      },
      {
        name: 'anigrams',
        color: 'success',
        title: 'Anigrams.org',
        description: 'The original website for Anigrams Productions, featuring games and other projects.',
        url: 'https://anigrams.org',
      },
      {
        name: 'anigramssupport',
        color: 'warning',
        title: 'Anigrams Support',
        description: 'An ticket-tracking application designed to keep track of bugs and issues in Anigrams apps.',
        url: 'https://support.anigrams.org',
      },
      {
        name: 'memoirsofanangel',
        color: 'info',
        title: 'Memoirs of an Angel (2010)',
        description: 'A full-length game made with Ren\'Py, a Python-based visual novel engine.',
        url: 'https://anigrams.itch.io/memoirs-of-an-angel-2010',
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
