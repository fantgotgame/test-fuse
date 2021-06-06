<template>
  <button class="button" @click="seeMore">
    See more
    <svg class="button__svg" width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" stroke-width="2" stroke-linecap="round"/>
    </svg>

  </button>
</template>

<script>
    export default {
        name: "ButtonMoreComponent",
        emits: ['see-more'],
        methods: {
            seeMore() {
                this.$emit('see-more');
            }
        }
    }
</script>

<style scoped lang="scss">
  .button {
    border: 1px solid #D8D8D8;
    border-radius: 25px;
    width: 150px;
    margin: 60px auto 78px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: #363636;
    background-color: #FFFFFF;
    padding: 12px 0;

    &__svg {
      margin-left: 8px;
     }
  }
</style>