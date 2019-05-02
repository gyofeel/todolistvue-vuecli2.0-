<template>
  <div id="app">
    <Header v-on:addTodo="addTodo"></Header>
    <Todo v-bind:propsdata="todoItems" v-on:addDone="addDone" v-on:removeTodo="removeTodoItem"></Todo>
    <Done
      v-bind:propsdata="todoItems"
      v-on:removeDone="removeTodoItem"
      v-on:cancelDone="cancelDone"
    ></Done>
    <MemoInput></MemoInput>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";
import Done from "./components/Done.vue";
import MemoInput from "./components/MemoInput.vue";

import { initTodoItem } from "./functions/todoItemData.js";

export default {
  name: "app",
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    addTodo(item) {
      let _item = initTodoItem(item);
      this.todoItems.push(_item);
    },
    addDone(id) {
      let idx = this.todoItems.findIndex(o => o.id === id);
      this.todoItems[idx].done = true;
    },
    removeTodoItem(id) {
      let idx = this.todoItems.findIndex(o => o.id === id);
      this.todoItems.splice(idx, 1);
    },
    cancelDone(id) {
      let idx = this.todoItems.findIndex(o => o.id === id);
      this.doneItems[idx].done = false;
    }
  },
  // created() {
  //   if (localStorage.todoItems.length > 0) {
  //     for (let el of localStorage.todoItems) {
  //       this.todoItems.push(el);
  //     }
  //   }
  //   if (localStorage.doneItems.length > 0) {
  //     for (let el of localStorage.doneItems) {
  //       this.doneItems.push(el);
  //     }
  //   }
  // },
  components: {
    Header,
    Todo,
    Done
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  color: #130f40;
}
#app {
  font-family: Helvetica, "Avenir", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  background-color: #dff9fb;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
