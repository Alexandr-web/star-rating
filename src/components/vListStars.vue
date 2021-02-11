<template>
  <ul class="list-stars">
    <vStar 
      v-for="(star, i) of stars"
      :key="i"
      :star="star"
      v-on:choice-star="choiceStar"
      v-on:leave-on-star="leaveOnStar"
      v-on:choice-value="choiceValue"
    />
  </ul>
</template>

<script>
import vStar from './vStar';

export default {
  data() {
    return {
      stars: [
        {
          active: false,
          value: 1
        },
        {
          active: false,
          value: 2
        },
        {
          active: false,
          value: 3
        },
        {
          active: false,
          value: 4
        },
        {
          active: false,
          value: 5
        }
      ]
    }
  },
  components: {
    vStar
  },
  methods: {
    choiceStar(star) {
      const { value } = star;

      for (let i = 0; i < value; i++) {
        this.stars[i].active = true;
      }
    },
    leaveOnStar() {
      this.stars.forEach(star => star.active = false);
    },
    choiceValue(star) {
      const { value } = star;
      
      alert(`Вы поставили ${value} звезд!`);
    },
  }
}
</script>