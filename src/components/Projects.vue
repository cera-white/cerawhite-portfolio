<template>
  <div class="projects text-center">
    <div class="container pt-5 pb-5">
      <h2 class="font-weight-bold mb-4">Projects</h2>

      <div class="container">
        <div class="project-grid row justify-content-center">
          <div class="project-box col-4 mb-4 p-0 mr-3 position-relative"
            v-for="project in projects" :key="project.name">
            <a :href="project.url" target="_blank">
              <img class="d-block w-100" :alt="project.title"
                :src="require(`../assets/projects/${project.name}.jpg`)">

              <div class="project-overlay position-absolute w-100 h-100 top-0 left-0 p-3 align-middle text-dark" :class="`bg-${project.color}`">
                <div class="d-lg-flex flex-column justify-content-center align-items-center w-100 h-100">
                  <h3 class="d-none d-lg-block">{{ project.title }}</h3>
                  <p class="d-none d-md-block">{{ project.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Projects',
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .project-box {
    .project-overlay {
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    &:hover,
    &:focus {
      .project-overlay {
        opacity: 0.95;
      }
    }
  }
</style>
