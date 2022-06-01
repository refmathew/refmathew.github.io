<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="header__main">
        <div class="header__main__left">
        </div>
        <div class="header__main__right">
        </div>
      </div>
      <div class="header__extra">
        <div class="page-title-wrapper">
          <div class="page-title">
            <div class="page-title__line"></div>
            <span class="page-title__itself">{{ pageTitle }}</span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ['pageTitle'],
}

</script>
