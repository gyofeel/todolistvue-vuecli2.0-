<template>
  <section class="todo">
    <transition-group class="items" name="list" tag="div">
      <div v-for="(todoItem) in propsdata" v-bind:key="todoItem.id">
        <!-- .self : prevent event capturing. -->
        <router-link
          tag="div"
          to="/memoinput"
          class="item"
          v-if="!todoItem.done"
          @click.native="submitMemoId(todoItem.id)"
        >
          <span class="check" @click.stop="addDone(todoItem.id)">
            <i class="checkBtn fas fa-check" aria-hidden="true"></i>
          </span>
          <span>{{todoItem.todo}}</span>
          <span class="memo">{{todoItem.memo}}</span>
          <span class="removebutton" @click.stop="removeTodo(todoItem.id)">삭제</span>
        </router-link>
      </div>
    </transition-group>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    addDone(id) {
      this.$emit("addDone", id);
    },
    removeTodo(id) {
      this.$emit("removeTodo", id);
    },
    submitMemoId(id) {
      this.$emit("setMemoId", id);
    }
  }
};
</script>

<style>
.todo {
  width: 70%;
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

.todo::-webkit-scrollbar {
  display: none;
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
  cursor: pointer;
}
.todo .memo {
  font-size: 0.7rem;
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