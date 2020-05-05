<template>
  <div class="view view-at-color">
    <h3>Color</h3>
    <hr>
    <div class="color-swatches color-swatches-gray">
      <h4>Gray</h4>
      <div class="color-swatches__row">
        <AtColorCard
          v-for="g in gray"
          :key="g"
          :color="g.repeat(3)"
          :label="g"
        />
      </div>
    </div>
    <!-- <div class="color-swatches__row">
      <div class="color-swatches">
        <div
          v-for="row in [...colors].reverse()"
          :key="`${row}**00`"
          class="color-swatches__row"
        >
          <AtColorCard
            v-for="col in [...colors].reverse()"
            :key="`${row}${col}00`"
            :color="`${row}${col}00`"
          />
        </div>
      </div>
      <div class="color-swatches">
        <div
          v-for="row in [...colors].reverse()"
          :key="`${row}00**`"
          class="color-swatches__row"
        >
          <AtColorCard
            v-for="col in colors"
            :key="`${row}00${col}`"
            :color="`${row}00${col}`"
          />
        </div>
      </div>
    </div>
    <div class="color-swatches__row">
      <div class="color-swatches">
        <div
          v-for="row in colors"
          :key="`00**${row}`"
          class="color-swatches__row"
        >
          <AtColorCard
            v-for="col in [...colors].reverse()"
            :key="`00${col}${row}`"
            :color="`00${col}${row}`"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import AtColorCard from './components/AtColorCard.vue';

export default {
  name: 'ViewAtColor',
  components: {
    AtColorCard,
  },
  data: () => ({
    gray: ['00', '1A', '33', '66', '99', 'CC', 'E6', 'F4', 'FF'],
    colors: ['00', '33', '66', '99', 'CC', 'FF'],
  }),
};
</script>

<style lang="scss">
.color-swatches{
  &__row{
    display: flex;
    font-display: row;
  }
}
</style>
