<template>
  <section class="done">
    <h3>Done</h3>
    <transition-group class="doneitems" name="list" tag="div">
      <div v-for="(todoItem) in propsdata" v-bind:key="todoItem.id">
        <div v-if="todoItem.done" class="doneitem">
          <span>{{todoItem.todo}}</span>
          <div class="buttons">
            <span class="backtotodo" @click="cancelDone(todoItem.id)">다시 할일로</span>
            <span class="removebutton" @click="removeDone(todoItem.id)">삭제</span>
          </div>
        </div>
      </div>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    cancelDone(id) {
      this.$emit("cancelDone", id);
    },
    removeDone(id) {
      this.$emit("removeDone", id);
    }
  }
};
</script>

<style>
.done {
  width: 40%;
  min-height: 50px;
  max-height: 250px;
  overflow-y: scroll;
  background-color: #6ab04c;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 15px;
  padding: 10px 0;
}
.done::-webkit-scrollbar {
  display: none;
}
.done .doneitems {
  display: flex;
  flex-flow: column nowrap;
  width: 70%;
}
.done .doneitem {
  padding: 5px 10px;
  margin: 2px 0;
  background-color: #badc58;
  border-radius: 4px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.done .backtotodo {
  font-size: 0.5rem;
  cursor: pointer;
  color: #130f40;
  padding: 4px;
}
</style>