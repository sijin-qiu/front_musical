// 筹备影视化页面 - 展示正在进行影视化筹备的音乐剧项目
import React, { useState } from 'react';
import ImageCard from '../components/ImageCard';
import '../styles/InPreparation.css';

const InPreparation = () => {
  // 模拟数据 - 筹备影视化的音乐剧项目
  const preparationProjects = [
    {
      id: 1,
      title: "小美人鱼（音乐剧版）",
      original: "The Little Mermaid: The Musical",
      status: "前期开发",
      progress: 25,
      studio: "迪士尼影业",
      director: "罗伯·马歇尔",
      screenplay: "大卫·马吉",
      composer: "艾伦·曼肯、林-曼努尔·米兰达",
      cast: ["待定"],
      expectedRelease: "2026年夏",
      filmingLocation: "洛杉矶、澳大利亚",
      budget: "$2亿",
      description: "将经典的迪士尼动画《小美人鱼》改编为真人音乐剧电影，融合原版动画音乐和新的原创歌曲。",
      latestNews: "项目已经获得绿灯，正在与百老汇顶级演员进行接洽。罗伯·马歇尔将带来《芝加哥》《芝加哥》的成功经验。",
      challenges: ["超越经典动画的影响力", "水下场景的复杂拍摄", "音乐与实景的完美融合"],
      opportunities: ["迪士尼品牌的强大号召力", "经典故事的新诠释", "现代电影技术的运用"],
      imageUrl: "/images/小美人鱼.jpg"
    },
    {
      id: 2,
      title: "汉密尔顿动画电影",
      original: "Hamilton: Animated Movie",
      status: "前期开发",
      progress: 35,
      studio: "迪士尼动画",
      director: "林-曼努尔·米兰达",
      screenplay: "林-曼努尔·米兰达",
      composer: "林-曼努尔·米兰达",
      cast: ["原班人马回归配音"],
      expectedRelease: "2026年中",
      filmingLocation: "洛杉矶（动画制作）",
      budget: "$2亿",
      description: "将现象级音乐剧《汉密尔顿》以动画形式重新演绎，用现代动画技术展现18世纪的美国独立战争场景。",
      latestNews: "剧本初稿已完成，目前正在角色设计和概念艺术创作阶段。迪士尼顶级动画团队加入制作。",
      challenges: ["历史准确性与艺术创作的平衡", "复杂的历史场景还原", "保持原作精神"],
      opportunities: ["全新的视觉体验", "吸引年轻观众", "拓展国际市场"],
      imageUrl: "/images/Hamilton.jpg"
    },
    {
      id: 3,
      title: "悲惨世界重制版",
      original: "Les Misérables: Reimagined",
      status: "剧本创作",
      progress: 20,
      studio: "华纳兄弟",
      director: "丹尼斯·维伦纽瓦",
      screenplay: "乔纳森·诺兰",
      composer: "克劳德-米歇尔·勋伯格",
      cast: ["待定"],
      expectedRelease: "2027年",
      filmingLocation: "巴黎、伦敦",
      budget: "$1.8亿",
      description: "重新改编经典音乐剧《悲惨世界》，采用更现代的拍摄手法和叙事结构，由科幻片大师丹尼斯·维伦纽瓦执导。",
      latestNews: "正在与编剧乔纳森·诺兰合作改编剧本，计划加入更多历史背景和人物深度。主演阵容即将公布。",
      challenges: ["超越前作的影响力", "平衡现场演唱与后期制作", "宏大历史场景的呈现"],
      opportunities: ["顶级导演和制作团队", "现代电影技术加持", "经典故事的全新诠释"],
      imageUrl: "/images/悲惨世界音乐剧.jpg"
    },
    {
      id: 4,
      title: "致埃文·汉森（重制）",
      original: "Dear Evan Hansen: The Director's Cut",
      status: "筹备阶段",
      progress: 15,
      studio: "环球影业",
      director: "达米恩·查泽雷",
      screenplay: "史蒂文·莱文森",
      composer: "本吉·帕塞克、贾斯廷·保罗",
      cast: ["待定"],
      expectedRelease: "2026年底",
      filmingLocation: "洛杉矶",
      budget: "$8000万",
      description: "对2021年电影版《致埃文·汉森》的重新诠释，由《爱乐之城》导演达米恩·查泽雷执导，希望能更好地呈现这部关于青少年心理健康的重要作品。",
      latestNews: "项目刚刚获得绿灯，导演正在与原创作团队合作重新构思故事框架。计划启用全新的年轻演员阵容。",
      challenges: ["敏感题材的处理", "建立与年轻观众的连接", "音乐与情感的平衡"],
      opportunities: ["《爱乐之城》导演的加入", "社会议题的重要性", "原创作团队的深度参与"],
      imageUrl: "/images/致埃文·汉森.jpeg"
    },
    {
      id: 5,
      title: "摩门经电影",
      original: "The Book of Mormon: The Movie",
      status: "剧本审批",
      progress: 10,
      studio: "派拉蒙影业",
      director: "特雷·帕克",
      screenplay: "马特·斯通、特雷·帕克",
      composer: "罗伯特·洛佩兹",
      cast: ["原音乐剧演员回归"],
      expectedRelease: "2027年",
      filmingLocation: "洛杉矶、乌干达",
      budget: "$1.2亿",
      description: "将备受争议但广受欢迎的音乐剧《摩门经》搬上大银幕，由原创作团队亲自操刀，保持原作的讽刺精神和幽默风格。",
      latestNews: "剧本正在与各大制片公司协商中，由于题材敏感性，找到合适的发行平台是当前的主要挑战。",
      challenges: ["敏感的宗教题材", "审查风险", "平衡讽刺与商业"],
      opportunities: ["《南方公园》创作团队的号召力", "强大的粉丝基础", "流媒体平台的灵活性"],
      imageUrl: "/images/摩门经.jpg"
    },
    {
      id: 6,
      title: "屋顶上的提琴手（现代版）",
      original: "Fiddler on the Roof: Reimagined",
      status: "前期筹备",
      progress: 25,
      studio: "索尼影业",
      director: "待定",
      screenplay: "待定",
      composer: "杰瑞·博克",
      cast: ["待定"],
      expectedRelease: "2027年",
      filmingLocation: "待定",
      budget: "$9000万",
      description: "重新构想经典音乐剧《屋顶上的提琴手》，用现代电影技术重新诠释这个关于传统与现代冲突的永恒故事。",
      latestNews: "项目正在寻找合适的导演团队，希望延续原作的精神内核，同时赋予现代观众全新的视觉体验。",
      challenges: ["避免与经典版本的重复", "现代视角的把握", "文化敏感性的处理"],
      opportunities: ["经典IP的持久影响力", "现代电影技术的运用", "跨代际观众的基础"],
      imageUrl: "/images/屋顶上的提琴手（现代版）.jpg"
    }
  ];

  // 状态管理
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProgress, setFilterProgress] = useState('all');

  // 过滤逻辑
  const filteredProjects = preparationProjects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.studio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesProgress = filterProgress === 'all' || 
      (filterProgress === 'early' && project.progress < 30) ||
      (filterProgress === 'middle' && project.progress >= 30 && project.progress < 70) ||
      (filterProgress === 'late' && project.progress >= 70);
    
    return matchesSearch && matchesStatus && matchesProgress;
  });

  // 打开详情模态框
  const openDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  // 关闭详情模态框
  const closeDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // 获取状态颜色
  const getStatusColor = (status) => {
    switch (status) {
      case '后期制作': return '#00b894';
      case '前期开发': return '#0984e3';
      case '剧本创作': return '#fdcb6e';
      case '筹备阶段': return '#e17055';
      case '剧本审批': return '#6c5ce7';
      default: return '#666';
    }
  };

  // 获取进度条颜色
  const getProgressColor = (progress) => {
    if (progress >= 70) return '#00b894';
    if (progress >= 30) return '#fdcb6e';
    return '#e17055';
  };

  // 获取状态图标
  const getStatusIcon = (status) => {
    switch (status) {
      case '后期制作': return '🎬';
      case '前期开发': return '🎨';
      case '剧本创作': return '✍️';
      case '筹备阶段': return '📋';
      case '剧本审批': return '📝';
      default: return '📽️';
    }
  };

  return (
    <div className="in-preparation">
      {/* 页面头部 */}
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">📝 筹备影视化</h1>
          <p className="page-subtitle">
            正在进行影视化筹备的音乐剧项目，从前期开发到后期制作的全方位跟踪
          </p>
        </div>
      </header>

      {/* 筛选区域 */}
      <section className="filters-section">
        <div className="container">
          {/* 搜索框 */}
          <div className="search-box">
            <input
              type="text"
              placeholder="搜索项目名称、导演或制片厂..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          {/* 筛选器 */}
          <div className="filters-grid">
            <div className="filter-group">
              <label>项目状态：</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option value="all">全部状态</option>
                <option value="剧本审批">剧本审批</option>
                <option value="筹备阶段">筹备阶段</option>
                <option value="剧本创作">剧本创作</option>
                <option value="前期开发">前期开发</option>
                <option value="后期制作">后期制作</option>
              </select>
            </div>

            <div className="filter-group">
              <label>项目进度：</label>
              <select
                value={filterProgress}
                onChange={(e) => setFilterProgress(e.target.value)}
                className="filter-select"
              >
                <option value="all">全部进度</option>
                <option value="early">早期阶段 (0-30%)</option>
                <option value="middle">中期阶段 (30-70%)</option>
                <option value="late">后期阶段 (70%+)</option>
              </select>
            </div>
          </div>

          {/* 统计信息 */}
          <div className="stats-info">
            <span>共找到 {filteredProjects.length} 个筹备项目</span>
          </div>
        </div>
      </section>

      {/* 项目时间轴视图 */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">项目进展时间轴</h2>
          <div className="timeline">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-icon">{getStatusIcon(project.status)}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="timeline-status">
                        <span 
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(project.status) }}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="progress-section">
                      <div className="progress-info">
                        <span>项目进度</span>
                        <span className="progress-percentage">{project.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${project.progress}%`,
                            backgroundColor: getProgressColor(project.progress)
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="project-meta">
                      <div className="meta-item">
                        <span className="meta-label">制片厂：</span>
                        <span className="meta-value">{project.studio}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">导演：</span>
                        <span className="meta-value">{project.director}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">预计上映：</span>
                        <span className="meta-value highlight">{project.expectedRelease}</span>
                      </div>
                    </div>

                    <p className="project-description">
                      {project.description.substring(0, 120)}...
                    </p>

                    <button 
                      className="btn btn-primary"
                      onClick={() => openDetails(project)}
                    >
                      查看详细进展
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态区域 */}
      <section className="latest-updates">
        <div className="container">
          <h2 className="section-title">最新动态</h2>
          <div className="updates-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="update-card">
                <div className="update-header">
                  <h4>{project.title}</h4>
                  <span 
                    className="update-status"
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="update-content">
                  <p>{project.latestNews}</p>
                </div>
                <div className="update-footer">
                  <span className="update-date">最新更新</span>
                  <button 
                    className="link-btn"
                    onClick={() => openDetails(project)}
                  >
                    了解详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 详情模态框 */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* 模态框头部 */}
            <header className="modal-header">
              <div>
                <h2>{selectedProject.title}</h2>
                <p className="modal-original">{selectedProject.original}</p>
              </div>
              <button className="close-btn" onClick={closeDetails}>×</button>
            </header>

            {/* 模态框主体 */}
            <div className="modal-body">
              <div className="modal-image">
                <ImageCard 
                  src={selectedProject.imageUrl !== "placeholder-image.jpg" ? selectedProject.imageUrl : null}
                  alt={selectedProject.title}
                  title={selectedProject.title}
                  className="in-preparation"
                  fallbackIcon="📽️"
                />
              </div>

              <div className="modal-info">
                {/* 项目状态和进度 */}
                <div className="status-progress-section">
                  <div className="status-badge-container">
                    <span className="status-icon">{getStatusIcon(selectedProject.status)}</span>
                    <span 
                      className="status-badge large"
                      style={{ backgroundColor: getStatusColor(selectedProject.status) }}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                  
                  <div className="progress-container">
                    <div className="progress-info">
                      <span>项目整体进度</span>
                      <span className="progress-percentage large">{selectedProject.progress}%</span>
                    </div>
                    <div className="progress-bar large">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${selectedProject.progress}%`,
                          backgroundColor: getProgressColor(selectedProject.progress)
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <h3>项目基本信息</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <strong>制片厂：</strong> {selectedProject.studio}
                  </div>
                  <div className="info-item">
                    <strong>导演：</strong> {selectedProject.director}
                  </div>
                  <div className="info-item">
                    <strong>编剧：</strong> {selectedProject.screenplay}
                  </div>
                  <div className="info-item">
                    <strong>作曲：</strong> {selectedProject.composer}
                  </div>
                  <div className="info-item">
                    <strong>预计上映：</strong> {selectedProject.expectedRelease}
                  </div>
                  <div className="info-item">
                    <strong>拍摄地点：</strong> {selectedProject.filmingLocation}
                  </div>
                  <div className="info-item">
                    <strong>预算：</strong> {selectedProject.budget}
                  </div>
                  <div className="info-item">
                    <strong>主要演员：</strong> {selectedProject.cast.join('、')}
                  </div>
                </div>

                <h3>📖 项目概述</h3>
                <p className="description">{selectedProject.description}</p>

                <h3>📢 最新动态</h3>
                <div className="latest-news-box">
                  <p>{selectedProject.latestNews}</p>
                </div>

                <h3>⚠️ 面临挑战</h3>
                <ul className="challenges-list">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>

                <h3>🌟 发展机遇</h3>
                <ul className="opportunities-list">
                  {selectedProject.opportunities.map((opportunity, index) => (
                    <li key={index}>{opportunity}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 模态框底部 */}
            <footer className="modal-footer">
              <button className="btn btn-secondary" onClick={closeDetails}>
                关闭
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default InPreparation;