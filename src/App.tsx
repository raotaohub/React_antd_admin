/*
 * @Author: raotaohub
 * @Date: 2021-02-19 17:00:44
 * @LastEditTime: 2021-04-27 22:37:17
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\App.tsx
 * @Description: App外壳组件
 */
import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index';
import store from './store/index';

/***
 * react中的代码分割实现
 * (1) React.lazy 和 Suspense 实现代码分割
 * 1、React.lazy(() => import()) 参数是一个函数，函数返回值必须是一个promsie对象，React.lazy 目前仅支持默认导出
 * 2、Suspense组件，fallback 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 Suspense 组件置于懒加载组
 * 件之上的任何位置。你甚至可以用一个 Suspense 组件包裹多个懒加载组件。
 * */
function App() {
  return (
    <Suspense fallback={<div>Login...</div>}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch> {renderRoutes(routes)} </Switch>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default React.memo(App);
