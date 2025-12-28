// React应用的主入口文件
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 引入全局样式
import App from './App'; // 引入主应用组件

// 创建React根节点并渲染App组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
base: '/vuecompositions20251224/'
