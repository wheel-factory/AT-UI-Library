<template>
  <nav
    id="side-nav"
    class="side-nav"
  >
    <div
      v-for="group in groupedList"
      :key="group.id"
      class="side-nav__group"
    >
      <h4 class="side-nav__group-label">
        {{ group.id }}
      </h4>
      <ul>
        <li
          v-for="item in group.components"
          :key="item.name.toLowerCase()"
          class="side-nav__item"
        >
          <router-link
            :to="item.path"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {
    groupedList() {
      return this.list.reduce((acc, cur) => {
        if (acc.map[cur.group] === undefined) {
          acc.map[cur.group] = {
            id: cur.group,
            components: [],
          };
          acc.set.push(acc.map[cur.group]);
        }
        acc.map[cur.group].components.push(cur);
        return acc;
      }, {
        set: [],
        map: {},
      }).set;
    },
  },
};
</script>

<style lang="scss">
.side-nav{
  &__group{
    &-label{
      text-transform: uppercase;
    }
  }
}
</style>
