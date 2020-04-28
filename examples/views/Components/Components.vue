<template>
  <main
    id="components"
    class="components"
  >
    <SideNav
      :list="atComponents"
    />
    <router-view />
  </main>
</template>

<script>
import atComponents from '../../router/components';
import SideNav from '../../components/SideNav.vue';

export default {
  name: 'Components',
  components: {
    SideNav,
  },
  data: () => ({
    atComponents,
  }),
};
</script>

<style lang="scss">
#components{

}
.components{
  display: flex;
  height: 100%;
}
</style>
