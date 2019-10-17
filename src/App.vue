<template>
  <div class="d-flex h-100 align-items-center justify-content-center">
    <div class="calculator p-3">
      <c-screen class="" :calculation="this.calculation" />
      <div class="buttons-container d-flex flex-wrap buttons mt-3">
        <c-button
          :class="button.class"
          :key="button.value"
          :obj="button"
          v-for="button in buttons"
          @btnClick="doBtnClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cbutton from "./components/Cbutton";
import Cscreen from "./components/Cscreen";
export default {
  name: "Calculator",
  data: () => {
    return {
      buttons: [
        { class: "btn btn-secondary special", value: "MRC" },
        { class: "btn btn-secondary special", value: "M-" },
        { class: "btn btn-secondary special", value: "M+" },
        { class: "btn btn-info", value: "C" },
        { class: "btn btn-warning", value: "7" },
        { class: "btn btn-warning", value: "8" },
        { class: "btn btn-warning", value: "9" },
        { class: "btn btn-danger", value: "/" },
        { class: "btn btn-warning", value: "4" },
        { class: "btn btn-warning", value: "5" },
        { class: "btn btn-warning", value: "6" },
        { class: "btn btn-danger", value: "*" },
        { class: "btn btn-warning", value: "1" },
        { class: "btn btn-warning", value: "2" },
        { class: "btn btn-warning", value: "3" },
        { class: "btn btn-danger", value: "-" },
        { class: "btn btn-warning", value: "0" },
        { class: "btn btn-warning", value: "." },
        { class: "btn btn-success", value: "=" },
        { class: "btn btn-danger", value: "+" }
      ],
      calculation: "",
      specials: ["C", "=", "M+", "M-", "MRC"],
      memory: ""      
    };
  },
  components: {
    "c-screen": Cscreen,
    "c-button": Cbutton
  },
  methods: {
    doBtnClick(data) {
      if (this.specials.indexOf(data) === -1) {
        this.calculation += data;
      } else {
        switch (data) {
          case "C":
            this.calculation = "";
            this.memory = "";
            break;
          case "=":
            this.calculation = eval(this.calculation).toString();
            break;
          case "M+":
            this.memory = `${this.memory}+${eval(this.calculation)}`;
            break;
          case "MRC":
            this.calculation = eval(this.memory);
            break;
        }
      }
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background-color: #303030 !important;
  color: white !important;
}

.calculator {
  width: 320px;
  height: 445px;
  background-color: rgb(67, 67, 67);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);

  .buttons-container {
    width: 100%;

    .special {
      visibility: hidden;
      display: flex;
      justify-content: center;
      font-size: 20px;
    }
  }
}
</style>
