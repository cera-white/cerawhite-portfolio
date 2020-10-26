<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand to="/">Cera White</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/skills">Skills</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <b-nav-item to="/resume">Resume</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>

    <footer class="bg-dark text-white pb-5 pt-5">
      <div class="container-fluid">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <ul class="social-networks list-unstyled">
            <li v-for="link in socialLinks" :key="link.name"
              class="d-inline-block mr-2" :class="link.name"
              v-b-tooltip.hover :title="link.title">
              <a :href="link.url" target="_blank">
                <font-awesome-icon :icon="['fab', link.icon]"
                  class="social-icon bg-lighter-dark rounded-circle p-2 fa-3x default-transition"
                  :class="`hover-bg-${link.color}`">
                </font-awesome-icon>
              </a>
            </li>
          </ul>
          <p class="copyright">&copy; {{ currentYear }} Cera White. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import './assets/site.scss';

export default {
  data() {
    return {
      socialLinks: [
        {
          name: 'linked-in',
          icon: 'linkedin-in',
          color: 'primary',
          url: 'https://www.linkedin.com/in/cera-white-284a6041',
          title: 'View my professional profile on Linked In',
        },
        {
          name: 'tumblr',
          icon: 'tumblr',
          color: 'info',
          url: 'http://anigrams-games.tumblr.com/',
          title: 'Check out my blog where I support indie game devs',
        },
        {
          name: 'twitch',
          icon: 'twitch',
          color: 'success',
          url: 'http://www.twitch.tv/anigrams/profile',
          title: 'Watch me play and review cool games on Twitch',
        },
        {
          name: 'youtube',
          icon: 'youtube',
          color: 'danger',
          url: 'https://www.youtube.com/channel/UCODp-QC2dsOn_3HJ32TfsIQ',
          title: 'Visit the official Anigrams YouTube channel',
        },
        {
          name: 'facebook',
          icon: 'facebook-f',
          color: 'warning',
          url: 'https://www.facebook.com/cera.white.94',
          title: 'Take a peek into my life outside of programming',
        },
        {
          name: 'github',
          icon: 'github',
          color: 'primary',
          url: 'https://github.com/anigrams-productions',
          title: 'See what code projects I\'ve been working on',
        },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
