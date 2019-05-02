<template>
  <transition>
    <div class="memoinput modalmask" @keyup.esc="hideInputMemo">
      <h2>Insert memo</h2>
      <input v-model="newMemo" @keyup.enter="addMemo" type="text" placeholder="메모 입력 ...">
    </div>
  </transition>
</template>


<script>
export default {
  data() {
    return {
      newMemo: ""
    };
  },
  props: ["propsdata"],
  methods: {
    addMemo() {
      let id = this.propsdata;
      let value = this.newMemo;
      console.log(id, value);
      this.$emit("addMemo", id, value);
      this.newMemo = "";
    },
    hideInputMemo() {
      this.$emit("hideInputMemo");
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
