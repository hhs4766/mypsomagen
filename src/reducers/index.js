import { combineReducers } from 'redux'; // 흩어진 reducer 들을 하나로 모아준다.

const initialState = {
    urlroot:"http://123.214.66.202:1201/",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

const rootReducer = combineReducers({
   user,
});

export default rootReducer;