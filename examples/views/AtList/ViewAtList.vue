<template>
  <div class="example example-at-list">
    <div class="box-a">
      <div class="box-b">
        <div class="box-c">
        <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleAtList',
};
</script>

<style lang="scss">
.box-a{
  width: 400px;
  height: 400px;
  overflow: visible;
}
.box-b{
  display: inline-block;
  padding: 0 20px;
  background: #FFF;
  overflow: visible;
}
.box-c{
  width: 800px;
  height: 600px;
  background: #CCC;
}
</style>
