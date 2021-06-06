<template v-if="dataIsLoaded">
  <div class="header-title">
    Our Latest Developments
  </div>
  <search-component v-model="filterHomes"></search-component>
  <div class="cards">
    <card-component
        v-for="home in computedHomes"
        :key="home.id"
        :title="home.title"
        :address="home.address"
        :price="home.price"
        :type="home.type"
        :id="home.id"
    ></card-component>
  </div>
  <button-more-component v-if="!hiddenButton"
      v-on:see-more="seeMore"
  ></button-more-component>
</template>

<script>
  import SearchComponent from "./SearchComponent";
  import CardComponent from "./CardComponent";
  import axios from "axios";
  import ButtonMoreComponent from "./ButtonMoreComponent";
    export default {
        name: "DevelopmentsComponent",
        components: {
            ButtonMoreComponent,
            SearchComponent,
            CardComponent
        },
        data() {
            return {
                homes: [],
                limitItems: 9,
                hiddenButton: false,
                filterHomes: '',
                dataIsLoaded: false,
            }
        },
        mounted() {
            axios.get(`https://603e38c548171b0017b2ecf7.mockapi.io/homes`).then(response => {
                this.homes = response.data;
                this.dataIsLoaded = true;
            });
        },
        computed: {
            computedHomes() {
                let limitedHoses = this.limitItems ? this.homes.slice(0, this.limitItems) : this.homes;
                if (this.filterHomes.length > 3) {
                    return limitedHoses.filter(item => item.title.indexOf(this.filterHomes) !== -1);
                }
                return limitedHoses
            },
        },
        methods: {
            seeMore() {
                this.limitItems = 0;
                this.hiddenButton = true;
            },
        }
    }
</script>

<style scoped>
  .header-title {
    font-weight: bold;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #45852D;
  }
  .cards {
    margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    display: flex;
    margin: 10px;
  }
</style>