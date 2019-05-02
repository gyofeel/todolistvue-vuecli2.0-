<template>
  <div id="app">
    <Header v-on:addTodo="addTodo"></Header>
    <Todo v-bind:propsdata="todoItems" v-on:addDone="addDone" v-on:removeTodo="removeTodo"></Todo>
    <Done v-bind:propsdata="doneItems" v-on:removeDone="removeDone" v-on:cancelDone="cancelDone"></Done>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";
import Done from "./components/Done.vue";

export default {
  name: "app",
  data() {
    return {
      todoItems: [],
      doneItems: []
    };
  },
  methods: {
    addTodo(item) {
      // localStorage.todoItems.setItem(item, item);
      this.todoItems.push(item);
    },
    addDone(item, idx) {
      // remove
      // localStorage.todoItems.removeItem(item);
      this.todoItems.splice(idx, 1);

      // add
      // localStorage.doneItems.setItem(item, item);
      this.doneItems.push(item);
    },
    removeTodo(item, idx) {
      // localStorage.todoItems.removeItem(item);
      this.todoItems.splice(idx, 1);
    },
    removeDone(item, idx) {
      // localStorage.done.removeItem(item);
      this.doneItems.splice(idx, 1);
    },
    cancelDone(item, idx) {
      // remove
      // localStorage.doneItems.removeItem(item);
      this.doneItems.splice(idx, 1);

      //add
      // localStorage.todoItems.addItem(item, item);
      this.todoItems.push(item);
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
