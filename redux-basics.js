const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
  counter: 0
};
//Create a Reducer
const rootReducer = (state = initalState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

//Create a Store
const store = createStore(rootReducer);

//Create a Subscribe
store.subscribe(() => {
  console.log('SubScribe', store.getState());
});

//Store Dispatch
store.dispatch({
  type: 'INC_COUNTER'
});
store.dispatch({
  type: 'ADD_COUNTER',
  value: 10
});

console.log(store.getState());
