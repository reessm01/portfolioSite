<template>
    <b-col md="6" align-self="center" class="content">
        <div 
            v-for="skill in skills" 
            :key="skill.tech" 
            class="skillWrapper"
        >
            <div class="label">
                {{skill.tech}}
            </div>
            <div 
                class="level"
                v-bind:style="calculateBarWidth(skill.level)"
                v-if="skill.tech !== 'Python'"
            />
            <b-progress 
                v-else
                height="24px"
                :value="100"
                :max="100"
                class="rounded-0 width" 
                animated
                striped
            >
            </b-progress>
        </div>
    </b-col>
</template>

<script>
export default {
  name: "SkillBars",
  data: function () {
      return {
      skills: [
          {
              tech: "HTML",
              level: .95
          },
          {
              tech: "CSS",
              level: .95
          },
          {
              tech: "Javascript",
              level: .80
          },
          {
              tech: "React",
              level: .70
          },
          {
              tech: "Vue",
              level: .70
          },
          {
              tech: "Node",
              level: .60
          },
          {
              tech: "Express",
              level: .60
          },
          {
              tech: "Python",
              level: .20
          },
          {
              tech: "Java",
              level: .33
          }
      ],
      counter: 45,
      max: 100
      }
  },
  methods: {
      calculateBarWidth: function(factor) {
          return {
              width: 60 * factor + "%"
          }
      }
  }
};
</script>

<style scoped>
    .skillWrapper {
        display: flex;
        flex-wrap: nowrap;
        margin: 15px 20px 15px 20px;
        height: 24px;
    }

    .label {
        display: block;
        border-style: hidden;
        background-color:#001dbf;
        height: auto;
        width: 40%;
        color:white;
        line-height: 2em;
    }

    .level{
        display: block;
        border-style: hidden;
        background-color: #50a2ff;
    }

    .update {
        background-color:#42c6ff
    }

    .content {
        font-size: 12px;
    }

    .width {
        width: 20%;
    }
</style>