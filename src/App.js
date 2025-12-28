// 主应用组件 - 应用的根组件，负责路由配置和整体布局
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Adapted from './pages/Adapted';
import NotAdapted from './pages/NotAdapted';
import InPreparation from './pages/InPreparation';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* 导航栏组件 */}
        <Navigation />
        
        {/* 主要内容区域 */}
        <main className="main-content">
          <Routes>
            {/* 路由配置 */}
            <Route path="/" element={<Home />} />
            <Route path="/adapted" element={<Adapted />} />
            <Route path="/not-adapted" element={<NotAdapted />} />
            <Route path="/in-preparation" element={<InPreparation />} />
          </Routes>
        </main>
        
        {/* 页脚 */}
        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 音乐剧影视化项目. 保留所有权利.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;