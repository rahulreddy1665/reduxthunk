let initialState = {
  TodoData: '',
  isLoading: false,
  error: null,
};

export default DummyData = (state = initialState, action) => {
  switch (action.type) {
    case 'Todo_Added':
      return {...state, TodoData: action.payload};
    default:
      return state;
  }
};
