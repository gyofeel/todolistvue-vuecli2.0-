<template>
  <div id="app">
    <Header v-on:addTodo="addTodo"></Header>
    <Todo
      v-bind:propsdata="todoItems"
      v-bind:memoid="memoId"
      v-on:addDone="addDone"
      v-on:removeTodo="removeTodoItem"
      v-on:setMemoId="setMemoId"
    ></Todo>
    <Done
      v-bind:propsdata="todoItems"
      v-on:removeDone="removeTodoItem"
      v-on:cancelDone="cancelDone"
    ></Done>
    <!-- <MemoInput
      v-bind:propsdata="memoId"
      v-if="this.showingMemo"
      v-on:addMemo="addMemo"
      v-on:hideInputMemo="hideInputMemo"
    ></MemoInput>-->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";
import Done from "./components/Done.vue";
import MemoInput from "./components/MemoInput.vue";

import { initTodoItem } from "./functions/todoItemData.js";

import router from "./router/index.js";

import EventBus from "./functions/eventbus.js";

export default {
  name: "app",
  data() {
    return {
      todoItems: [],
      memoId: ""
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
      this.todoItems[idx].done = false;
    },
    setMemoId(id) {
      console.log(id);
      this.memoId = id;
    }
    // hideInputMemo() {},
    // addMemo(id, value) {
    //   let idx = this.todoItems.findIndex(o => o.id === id);
    //   this.memoId = "";
    //   this.todoItems[idx].memo = value;
    //   this.showingMemo = !this.showingMemo;
    // }
  },
  created() {
    let that = this;
    EventBus.$on("addMemo", function(value) {
      console.log(that.memoId);
      let idx = that.todoItems.findIndex(o => o.id === that.memoId);
      that.memoId = "";
      that.todoItems[idx].memo = value;
      that.showingMemo = !that.showingMemo;
    });
    EventBus.$on("hideInputMemo", function() {
      console.log("llkj");
    });
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
    Done,
    MemoInput
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
