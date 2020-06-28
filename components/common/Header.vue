<template>
  <div class="header mt-5">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar toggleable="sm" variant="Light" class="header__navbar">
            <b-navbar-brand href="#" class="header__logo">
              <img src="images/logo.png" alt="logo" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="header__nav-collapse">
              <b-navbar-nav class="header__nav">
                <b-nav-item
                  v-for="item in menu"
                  :key="item.name"
                  class="header__nav-item px-3"
                  :href="item.link"
                >{{ item.name }}</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: "Главная", link: "/" },
        { name: "О нас", link: "about" },
        { name: "Контакты", link: "contacts" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  border-top: 1px solid var(--light);
  &__navbar {
    padding: 0.5rem 0;
  }
  &__nav-collapse {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  &__logo {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__nav-item {
    position: relative;
    &::after {
      content: "|";
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      color: var(--gray);
    }
    &:last-child::after {
      content: none;
    }
  }
}
</style>