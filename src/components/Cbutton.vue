<template>
  <button @click="btnClick" class="container">{{obj.value}}</button>
</template>

<script>
export default {
  props: {
    obj: Object
  },
  methods: {
    btnClick(){
      this.$emit("btnClick", this.obj.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 64px;
  height: 60px;
  font-size: 30px;
  font-weight: bold;  
  margin-bottom: 7px;
  border-radius: 5px;
}
</style>
