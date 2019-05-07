<template>
  <transition>
    <div class="memoinput modalmask" @keyup.esc="hideInputMemo">
      <h2>Insert memo</h2>
      <input v-model="newMemo" @keyup.enter="addMemo" type="text" placeholder="메모 입력 ...">
    </div>
  </transition>
</template>


<script>
import EventBus from "../functions/eventbus.js";
import router from "../router/index.js";

export default {
  data() {
    return {
      newMemo: ""
    };
  },
  props: ["memoid"],
  methods: {
    addMemo() {
      let value = this.newMemo;
      EventBus.$emit("addMemo", value);
      router.push({ path: "/" });
      this.newMemo = "";
    },
    hideInputMemo() {
      EventBus.$emit("hideInputMemo");
      router.push({ path: "/" });
      this.newMemo = "";
    }
  }
};
</script>

<style>
.memoinput.modalmask {
  width: 40%;
  height: 200px;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: gold;
  border-radius: 20px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.memoinput.modalmask input {
  width: 50%;
  height: 20%;
  border-radius: 10px;
  border: none;
  padding: 5px 20px;
  font-size: 1.3rem;
  opacity: 0.7;
  transition: 0.7s;
}
.memoinput.modalmask input:focus {
  outline: none;
  opacity: 1;
}
.memoinput.modalmask input::placeholder {
  opacity: 0.5;
}
</style>
