<template>
  <div
    class="at-color-card"
    :style="{
      background: `#${color}`,
      color: HSB.B<0.6 ? '#CCC' : undefined
    }"
  >
    {{ label ? label : color }}
  </div>
</template>

<script>
export default {
  name: 'AtColorCard',
  props: {
    color: {
      type: String,
      required: true,
      default: '000000',
      validator: (color) => /[0-9a-fA-F]{6}/g.test(color),
    },
    label: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    RGB() {
      return {
        R: parseInt(this.color.substr(0, 2), 16),
        G: parseInt(this.color.substr(2, 2), 16),
        B: parseInt(this.color.substr(4, 2), 16),
      };
    },
    HSB() {
      const max = Math.max(...Object.values(this.RGB));
      const min = Math.min(...Object.values(this.RGB));
      const B = Math.round((max / 255) * 100) / 100;
      const S = (() => {
        if (B === 0 || max === min) return 0;
        return 1 - min / max;
      })();
      const H = (() => {
        if (max === min) return 0;
        if (this.RGB.G === max) return 60 * ((this.RGB.B - this.RGB.R) / (max - min)) + 120;
        if (this.RGB.B === max) return 60 * ((this.RGB.R - this.RGB.G) / (max - min)) + 240;
        return 60 * ((this.RGB.G - this.RGB.B) / (max - min)) + (this.RGB.B > this.RGB.G ? 360 : 0);
      })();
      return {
        H,
        S,
        B,
      };
    },
  },
};
</script>

<style lang="scss">
.at-color-card{
  width: 64px;
  height: 64px;

  padding: 8px;

  font-size: 12px;
}
</style>
