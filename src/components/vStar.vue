<template>
  <li 
    class="star" 
    v-on:mouseenter="$emit('choice-star', star)" 
    v-on:mouseleave="$emit('leave-on-star')" 
    v-on:click="$emit('choice-value', star)"
  >
    <div :class="`star__block ${star.active ? 'active-star' : ''}`"></div>
    <span :class="`star__value ${star.active ? 'active-value' : ''}`">{{ star.value }}</span>
  </li>
</template>

<script>
export default {
  props: ['star']
}
</script>