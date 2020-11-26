<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default { };

</script>

<style scoped>
    .v-main-wrapper {
        border: 0px solid black;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>