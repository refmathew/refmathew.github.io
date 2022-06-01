<template>
  <div :class="[
    'logo-wrapper',
    { 'logo-animate': animate === true }
  ]">
    <g-link to="/" class="logo">
      <div class="logo__line"></div>
      <span class="logo__itself">
        rmathew
      </span>
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo',
  props: ['animate'],
}
</script>
