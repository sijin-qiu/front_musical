// 导航组件 - 提供网站各页面之间的导航
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  // 使用useState控制移动端菜单的展开/收起状态
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 使用useLocation获取当前页面路径，用于高亮显示当前页面
  const location = useLocation();

  // 导航菜单项配置
  const menuItems = [
    { path: '/', name: '首页', icon: '🏠' },
    { path: '/adapted', name: '已经影视化', icon: '🎬' },
    { path: '/not-adapted', name: '未影视化', icon: '🎭' },
    { path: '/in-preparation', name: '筹备影视化', icon: '📝' }
  ];

  // 切换移动端菜单状态
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo和网站标题 */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <span className="logo-icon">🎪</span>
            <span className="logo-text">音乐剧影视化</span>
          </Link>
        </div>

        {/* 桌面端导航菜单 */}
        <ul className="nav-menu desktop-menu">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* 移动端菜单按钮 */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* 移动端导航菜单 */}
      <ul className={`nav-menu mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link 
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)} // 点击后关闭菜单
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;