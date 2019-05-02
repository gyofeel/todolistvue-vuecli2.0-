<template>
  <section class="todo">
    <transition-group class="items" name="list" tag="div">
      <div v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="item">
        <span class="check" @click="addDone(todoItem, index)">
          <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        </span>
        <span>{{todoItem}}</span>
        <span class="removebutton" @click="removeTodo(todoItem, index)">삭제</span>
      </div>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    addDone(item, idx) {
      this.$emit("addDone", item, idx);
    },
    removeTodo(item, idx) {
      this.$emit("removeTodo", item, idx);
    }
  }
};
</script>

<style>
.todo {
  width: 40%;
  min-height: 100px;
  max-height: 400px;
  overflow-y: scroll;
  background-color: #badc58;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.todo::-webkit-scrollbar{
  display:none;
}

.todo .items {
  width: 70%;
  height: 100%;
  padding: 10px 0;
}

.todo .item {
  font-size: 1rem;
  padding: 10px 10px;
  margin: 6px 0;
  border: 1px solid #130f40;
  border-radius: 4px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.todo .check {
  width: 17px;
  height: 17px;
  border: 1px solid #130f40;
  border-radius: 9px;
  cursor: pointer;
}

.removebutton {
  font-size: 0.5rem;
  cursor: pointer;
  color: red;
  padding: 4px;
}
</style>