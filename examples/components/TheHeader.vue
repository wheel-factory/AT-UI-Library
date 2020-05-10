<template>
  <header
    id="header"
    class="header"
  >
    <h1 class="logo">
      AT UI Library
    </h1>

    <nav
      id="main-nav"
      class="main-nav"
    >
      <ul class="main-nav__list">
        <li
          v-for="item in mainNav"
          :key="item.name.toLowerCase()"
          class="main-nav__item"
        >
          <router-link
            class="main-nav__link"
            active-class="main-nav__link--active"
            :to="item.path"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import routes from '../router/routes';

export default {
  name: 'Header',
  data: () => ({

  }),
  computed: {
    mainNav() {
      return routes.map((cur) => ({
        name: cur.name,
        path: cur.path,
      }));
    },
  },
};
</script>

<style lang="scss">
.header{
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px $color-dark-10;
}

.logo{
  width: 180px;
  height: 32px;
  padding: 0;
  // background-color: $color-dark-20;
  margin: 8px;
  line-height: 32px;
}

.main-nav{

  &__list{
    list-style: none;
    display: flex;
  }

  &__link{
    display: inline-block;
    padding: 0 10px;
  }
}
</style>
