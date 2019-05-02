<template>
  <transition>
    <div class="memoinput modalmask">
      <h2>Insert memo</h2>
      <input
        v-model="newMemo"
        v-on:keypress.enter="addMemo"
        v-on:keypress.esc="clearInput"
        type="text"
        placeholder="메모 입력 ..."
      >
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
  id: "iddata",
  methods: {
    addMemo() {
      let id = this.id;
      let value = this.newMemo;
      this.$emit("addMemo", id, value);
    },
    clearInput() {
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
