<template>
  <div class="details text-center">
    <div class="container pt-5 pb-5">
      <h2 class="font-weight-bold mb-4">{{ projectDetails(name).title }}</h2>

      <p>{{ projectDetails(name).description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Details',
  props: {
    name: String,
  },
  computed: {
    ...mapGetters([
      'projectDetails',
    ]),
  },
};
</script>
