<template>
  <div class="home text-center">
    <h1 class="sr-only">Cera White's Game Design Portfolio</h1>

    <div class="container-fluid bg-light pt-5 pb-5">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <img class="d-block" alt="Cera, the Game Knight" src="../assets/Cera-Icon.png">
        <h2 class="introduction mt-2">
          Hi! I'm <span class="font-weight-bold text-success">Cera White</span>,<br />
          <strong>game designer</strong> and <strong>programmer</strong>.
        </h2>
      </div>
    </div>

    <about-section class="d-none d-md-block"></about-section>

    <skills-section></skills-section>

    <projects-section></projects-section>

    <contact-section></contact-section>
  </div>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContactSection from '@/components/ContactSection.vue';

export default {
  name: 'HomeView',
  components: {
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
  },
};
</script>

<style lang="scss" scoped>

</style>
