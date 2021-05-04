/**
 * @Author: raotaohub
 * @Date: 2021-02-19 23:23:58
 * @LastEditTime: 2021-02-19 23:28:22
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\store\index.jsx
 * @Description: Edit......
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
