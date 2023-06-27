<template>
  <div class="skills text-center">
    <div class="container-fluid bg-light pt-5 pb-5">
      <h2 class="font-weight-bold mb-4">Skills</h2>

      <div class="container">
        <div class="skill-filter mb-5 row justify-content-center">
          <b-button pill size="sm" variant="outline-dark" class="mr-3 col" :pressed="isPressed('all')" @click="setCategory('all')">
            All Skills
          </b-button>
          <b-button pill size="sm" variant="outline-dark" class="mr-3 col" :pressed="isPressed('games')" @click="setCategory('games')">
            Game Design
          </b-button>
          <b-button pill size="sm" variant="outline-dark" class="mr-3 col" :pressed="isPressed('backend')" @click="setCategory('backend')">
            Back End
          </b-button>
          <b-button pill size="sm" variant="outline-dark" class="mr-3 col" :pressed="isPressed('frontend')" @click="setCategory('frontend')">
            Front End
          </b-button>
          <b-button pill size="sm" variant="outline-dark" class="col" :pressed="isPressed('cloud')" @click="setCategory('cloud')">
            Cloud
          </b-button>
        </div>

        <div class="skill-grid row justify-content-center">
          <div
            class="col-2 col-md-1 mb-4 hover-bg-darker-light embed-responsive embed-responsive-1by1 default-transition"
            v-for="skill in filteredSkills" :key="skill.name">
            <div class="embed-responsive-item p-2" v-b-tooltip.hover :title="skill.title">
              <img class="d-block w-100 h-100" :alt="skill.title"
                :src="require(`../assets/icons/${skill.name}.png`)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      category: 'all',
      skills: [
        {
          name: 'gamedesign',
          title: 'Game Design',
          category: 'games',
        },
        {
          name: 'gamemaker',
          title: 'Game Maker: Studio',
          category: 'games',
        },
        {
          name: 'renpy',
          title: 'Ren\'Py Visual Novel',
          category: 'games',
        },
        {
          name: 'unity',
          title: 'Unity',
          category: 'games',
        },
        {
          name: 'ruby',
          title: 'Ruby',
          category: 'backend',
        },
        {
          name: 'csharp',
          title: 'C#',
          category: 'backend',
        },
        {
          name: 'perl',
          title: 'Perl',
          category: 'backend',
        },
        {
          name: 'python',
          title: 'Python',
          category: 'backend',
        },
        {
          name: 'sql',
          title: 'SQL',
          category: 'backend',
        },
        {
          name: 'html5',
          title: 'HTML5',
          category: 'frontend',
        },
        {
          name: 'css3',
          title: 'CSS3',
          category: 'frontend',
        },
        {
          name: 'javascript',
          title: 'JavaScript',
          category: 'frontend',
        },
        {
          name: 'nodejs',
          title: 'Node.js',
          category: 'frontend',
        },
        {
          name: 'vue',
          title: 'Vue.js',
          category: 'frontend',
        },
        {
          name: 'jquery',
          title: 'jQuery',
          category: 'frontend',
        },
        {
          name: 'quasar',
          title: 'Quasar Framework',
          category: 'frontend',
        },
        {
          name: 'bootstrap',
          title: 'Bootstrap',
          category: 'frontend',
        },
        {
          name: 'docker',
          title: 'Docker',
          category: 'cloud',
        },
        {
          name: 'aws',
          title: 'Amazon Web Services',
          category: 'cloud',
        },
      ],
    };
  },
  computed: {
    filteredSkills() {
      const filteredSkills = [];

      if (this.category === 'all') {
        return this.skills;
      }

      for (let i = 0; i < this.skills.length; i += 1) {
        if (this.skills[i].category === this.category) {
          filteredSkills.push(this.skills[i]);
        }
      }

      return filteredSkills;
    },
  },
  methods: {
    isPressed(category) {
      return this.category === category;
    },
    setCategory(category) {
      this.category = category;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
