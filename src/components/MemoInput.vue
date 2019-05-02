<template>
  <transition class="memoinput">
    <div class="modalmask">
      <h2>Insert memo</h2>
      <input v-model="newMemo" v-on:keypress.enter="addMemo" v-on:keypress.esc="clearInput">
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
  methods: {
    addMemo() {},
    clearInput() {
      this.newMemo = "";
    }
  }
};
</script>

<style>
.memoInput .modalmask {
  width: 30%;
  height: 200px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
