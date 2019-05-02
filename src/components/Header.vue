<template>
  <section class="header">
    <h1 class="title">To Do List</h1>
    <input
      v-model="newTodoItem"
      v-on:keypress.enter="addTodo"
      class="input"
      type="text"
      placeholder="할 일 입력 ..."
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit("addTodo", value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style>
.header {
  width: 70%;
  height: 150px;
  background-color: #badc58;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.header .title {
  text-decoration: underline;
}
.header .input {
  width: 70%;
  height: 30%;
  border-radius: 10px;
  border: none;
  padding: 5px 20px;
  font-size: 1.3rem;
  opacity: 0.5;
  transition: 0.7s;
}
.header .input:focus {
  outline: none;
  opacity: 1;
}
.header .input::placeholder {
  opacity: 0.5;
}
</style>