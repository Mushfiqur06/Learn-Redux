const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
  counter: 0
};
//Create a Reducer
const rootReducer = (state = initalState, action) => {
  return state;
};

//Create a Store
const store = createStore(rootReducer);

console.log(store.getState());
