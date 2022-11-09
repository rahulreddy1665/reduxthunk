export const CreateTodo = TodoData => {
  console.log(TodoData);
  return {
    type: 'AddTodoData',
    payload: TodoData,
  };
};
