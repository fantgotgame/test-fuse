<template>
  <div class="search-form">
    <label class="search-form__title" for="search">
      Filter
    </label>
    <input
        :value="modelValue"
        @input="change"
        class="search-form__input"
        type="text"
        id="search">
  </div>
</template>

<script>
    export default {
        name: "SearchComponent",
        emits: ['update:modelValue'],
        props: {
            modelValue: String
        },
        methods: {
            change(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped lang="scss">
  .search-form {
    margin-top: 43px;

    &__title {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.3px;
      color: #363636;
      margin-right: 15px;
    }

    &__input {
      border: 1px solid #D8D8D8;
      border-radius: 25px;
      outline: none;
      height: 50px;
      width: 418px;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.3px;
      color: #363636;
      padding: 0 20px;
    }
  }
</style>