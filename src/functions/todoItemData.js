const initTodoItem = function (todoItem, memo = "") {
  return ({
    id: makeId(todoItem),
    todo: todoItem,
    memo: memo,
    done: false
  })
};

const makeId = function (todoItem) {
  let date = new Date().getTime();
  return todoItem + date + '';
}

export {
  initTodoItem
};
