<template>
  <div class="container"><p>{{ calculation }}</p></div>
</template>

<script>
export default {
  props: {
    calculation: String
  }
};
</script>
<style lang="scss" scoped>
.container {
  p {
    margin-bottom: 5px;
  }
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 278px;
  height: 65px;
  background-color: black;
  border-radius: 5px;
  font-size: 17px;
  line-height: 18px; 
  word-break: break-all;
}
</style>
