<template>
  <div class="card" @click="$router.push({ name: 'currentHome', params: { homeId: id } })">
    <div class="image">
      <img class="card__image" src="../assets/images/house.png" alt="House">
      <span class="image__tag" :class="type === 'IndependentLiving' ? 'image__tag_independent' : 'image__tag_support'">
        {{ type === 'IndependentLiving' ? 'Independent living' : 'Restaurant & Support available' }}
      </span>
    </div>

    <div class="card-info">
      <div class="card-info__title">
        {{ title }}
      </div>
      <div class="card-info__address">
        {{ address }}
      </div>
      <div class="card-info__sale">
        New Properties for Sale from <b>£{{ toSale(price) }}</b>
      </div>
      <div class="card-info__notice">
        Shared Ownership Available
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CardComponent",
        props: {
            title: String,
            address: String,
            price: Number,
            type: String,
            id: String
        },
        methods: {
            toSale(price) {
                let val = (price/1).toFixed(0).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        },
    }
</script>

<style scoped lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    background: #F8F8F8;
    border: 1px solid #D8D8D8;
    margin: 0 11px 38px 11px;
    cursor: pointer;

    &__image {
      display: block;
    }
  }
  .card-info {
    padding: 20px 17px 17px 20px;

    &__title {
      font-weight: bold;
      font-size: 20px;
      line-height: 27px;
      color: #363636;
    }

    &__address {
      margin-top: 2px;

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #363636;
    }

    &__sale {
      margin-top: 15px;

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #363636;
    }

    &__notice {
      margin-top: 7px;

      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      color: #363636;
    }
  }
  .image {
    position: relative;
    &__tag {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #FFFFFF;
      position: absolute;
      bottom: 0;
      right: 0;

      &_support {
        background: #EC6608;
        padding: 8px 8px 5px 8px;
      }

      &_independent {
        background: #006F79;
        padding: 8px 10px 5px 11px;
      }
    }
  }
  
  @media (max-width: 500px) {
    .card {
      width: 290px;

      &__image {
        width: 290px;
      }
    }
  }
</style>