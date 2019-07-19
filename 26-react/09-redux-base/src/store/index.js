
import { createStore } from 'redux'
import reducer from './reducer.js'

//创建store
//整个应用只有一个store,这个store负责维护数据
const store = createStore(reducer);

export default store;