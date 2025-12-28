// 首页组件 - 展示网站的主要介绍和统计数据
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  // 模拟数据统计
  const statistics = {
    adapted: 45,      // 已影视化作品数量
    notAdapted: 78,   // 未影视化作品数量
    inPreparation: 12 // 筹备中作品数量
  };

  // 特色功能介绍
  const features = [
    {
      icon: '🎬',
      title: '已影视化作品',
      description: '查看已经成功改编为电影或电视剧的音乐剧作品',
      link: '/adapted'
    },
    {
      icon: '🎭',
      title: '未影视化作品',
      description: '探索尚未进行影视改编的经典音乐剧作品',
      link: '/not-adapted'
    },
    {
      icon: '📝',
      title: '筹备影视化',
      description: '了解正在进行影视化筹备的音乐剧项目',
      link: '/in-preparation'
    }
  ];

  return (
    <div className="home">
      {/* 英雄区域 - 主要的视觉吸引区域 */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight">音乐剧影视化</span>
            </h1>
            <p className="hero-subtitle">
              探索音乐剧与影视艺术的完美融合，发现经典舞台剧作的银幕新生
            </p>
            <div className="hero-buttons">
              <Link to="/adapted" className="btn btn-primary">
                开始探索
              </Link>
              <Link to="/not-adapted" className="btn btn-secondary">
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据区域 */}
      <section className="statistics">
        <div className="container">
          <h2 className="section-title">作品统计</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🎬</div>
              <div className="stat-number">{statistics.adapted}+</div>
              <div className="stat-label">已影视化作品</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎭</div>
              <div className="stat-number">{statistics.notAdapted}+</div>
              <div className="stat-label">未影视化作品</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div className="stat-number">{statistics.inPreparation}+</div>
              <div className="stat-label">筹备中项目</div>
            </div>
          </div>
        </div>
      </section>

      {/* 特色功能区域 */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">探索内容</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-link">
                  查看更多 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态区域 */}
      <section className="latest-news">
        <div className="container">
          <h2 className="section-title">最新动态</h2>
          <div className="news-card">
            <div className="news-content">
              <h3>欢迎来到音乐剧影视化世界</h3>
              <p>
                在这里，您可以了解到音乐剧作品从舞台到银幕的转换过程。
                探索那些已经在影视领域取得成功的音乐剧改编作品，
                发现那些等待被发掘的舞台杰作，关注正在筹备中的影视化项目。
              </p>
              <div className="news-meta">
                <span className="news-date">2025-12-28</span>
                <span className="news-category">公告</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;