<template>
  <b-container>
    <b-row>
      <b-col sm="10">
        <b-row>
          <b-col sm="6" v-for="n in 8" :key="n">
            <b-card class="home-card mb-3">
              <div class="home-card__band"></div>
              <span class="home-card__title">Мои счета</span>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="2" class="home-aside">
        <b-card
          v-for="n in 3"
          :key="n"
          no-body
          style="max-width: 20rem;"
          :img-src="`https://picsum.photos/200/200/?image=${n * 10}`"
          img-alt="Image"
          img-top
          class="home-aside__card mb-3"
        >
          <b-card-footer class="home-aside__card-footer">lorem ipsum</b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageProps: {
        center: true,
        fluidGrow: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.home-card {
  position: relative;
  min-height: 250px;
  background-color: #fafafa;

  &__band {
    position: absolute;
    top: -3px;
    left: 10px;
    width: 20px;
    height: 40px;
    border-radius: 3px;
    background-color: var(--red);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
  }
  &__title {
    position: absolute;
    top: 5px;
    left: 40px;
    color: var(--red);
    font-weight: 500;
  }
  &::after {
    content: "";
    position: absolute;
    width: calc(100% - 50px);
    height: 1px;
    background-color: var(--red);
    top: 30px;
    left: 40px;
  }
}
.home-aside {
  &__card-footer {
    font-size: 0.8rem;
    background-color: var(--red);
    color: var(--light);
  }
}
</style>

