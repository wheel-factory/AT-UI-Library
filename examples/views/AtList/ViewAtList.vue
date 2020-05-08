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
  overflow: auto;
}
.box-b{
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background: #FFF;
  overflow: auto;
}
.box-c{
  display: table;
  width: 800px;
  height: 600px;
  background: #CCC;
}
</style>
