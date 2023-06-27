<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand to="/">Anigrams Productions, LLC</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/skills">Skills</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
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
                <span class="sr-only">{{ link.title }}</span>
                <font-awesome-icon :icon="['fab', link.icon]"
                  class="social-icon bg-lighter-dark rounded-circle p-2 fa-3x default-transition"
                  :class="`hover-bg-${link.color}`">
                </font-awesome-icon>
              </a>
            </li>
          </ul>
          <p class="copyright">&copy; {{ currentYear }} Anigrams Productions, LLC. All rights reserved.</p>
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
          name: 'tumblr',
          icon: 'tumblr',
          color: 'info',
          url: 'http://anigrams-productions.tumblr.com/',
          title: 'Check out our blog where we support indie game devs',
        },
        {
          name: 'twitch',
          icon: 'twitch',
          color: 'success',
          url: 'http://www.twitch.tv/anigrams/profile',
          title: 'Watch us play and review cool games on Twitch',
        },
        {
          name: 'youtube',
          icon: 'youtube',
          color: 'danger',
          url: 'https://www.youtube.com/@anigramsproductions',
          title: 'Visit the official Anigrams YouTube channel',
        },
        {
          name: 'itch-io',
          icon: 'itch-io',
          color: 'info',
          url: 'https://anigrams.itch.io/',
          title: 'Play our games on itch.io',
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
