import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import home from '@/views/home/store';
// 分模块 写 状态
const reducer = combineReducers({
  home
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
