// 未影视化页面 - 展示尚未改编为影视作品的音乐剧
import React, { useState } from 'react';
import ImageCard from '../components/ImageCard';
import '../styles/NotAdapted.css';

const NotAdapted = () => {
  // 模拟数据 - 未影视化的音乐剧作品
  const notAdaptedMusicals = [
    {
      id: 1,
      title: "摩门经",
      original: "The Book of Mormon",
      composer: "罗伯特·洛佩兹、马特·斯通",
      premiereYear: "2011年",
      premiereLocation: "百老汇",
      description: "讲述了两名摩门教传教士在乌干达的冒险经历，用幽默讽刺的方式探讨宗教和文化冲突。",
      whyNotAdapted: "题材敏感，幽默风格可能不适合大众电影市场，涉及宗教话题需要谨慎处理。",
      potentialAdaptation: "可能更适合流媒体平台，在题材处理上需要平衡讽刺与商业价值。",
      difficulty: "高",
      popularity: "现代经典",
      broadwayRuns: "12年+（百老汇）",
      imageUrl: "/images/摩门经.jpg",
      videoUrl: "https://www.bilibili.com/video/BV1ux411B7DZ/?spm_id_from=333.337.search-card.all.click", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/video/BV1ux411B7DZ/?spm_id_from=333.337.search-card.all.click" // 在这里填入观看原片链接
    },
    {
      id: 2,
      title: "六位皇后",
      original: "Six",
      composer: "托比·马洛、露西·莫斯",
      premiereYear: "2017年",
      premiereLocation: "爱丁堡边缘艺术节",
      description: "以音乐形式讲述亨利八世的六位妻子的故事，每位妻子都有机会讲述自己的故事并争夺谁是最惨的受害者。",
      whyNotAdapted: "音乐剧形式独特，主要是演唱形式，改编成电影需要更多戏剧化元素。",
      potentialAdaptation: "可以结合现代女性主义视角，用创新的拍摄手法重新诠释历史故事。",
      difficulty: "中高",
      popularity: "现代热门",
      broadwayRuns: "5年+（百老汇）",
      imageUrl: "/images/SIX.png",
      videoUrl: "https://www.bilibili.com/video/BV1qa4y1Y7S6?spm_id_from=333.788.videopod.episodes&p=2", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/video/BV1qa4y1Y7S6?spm_id_from=333.788.videopod.episodes&p=2" // 在这里填入观看原片链接
    },
    {
      id: 3,
      title: "西贡小姐",
      original: "Miss Saigon",
      composer: "克劳德-米歇尔·勋伯格",
      premiereYear: "1989年",
      premiereLocation: "伦敦西区",
      description: "改编自普契尼歌剧《蝴蝶夫人》，讲述越战期间美国士兵和越南女孩的爱情悲剧。",
      whyNotAdapted: "虽然有1992年电影版讨论，但涉及敏感的历史和政治话题，难以平衡各方观点。",
      potentialAdaptation: "需要更加谨慎处理历史背景，可能更适合制作成艺术电影而非商业大片。",
      difficulty: "高",
      popularity: "经典",
      broadwayRuns: "10年（百老汇）",
      imageUrl: "/images/西贡小姐.jpg",
      videoUrl: "https://www.bilibili.com/video/BV1aj411W7dR/?spm_id_from=333.337.search-card.all.click", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/video/BV1aj411W7dR/?spm_id_from=333.337.search-card.all.click" // 在这里填入观看原片链接
    },
    {
      id: 4,
      title: "化身博士",
      original: "Jekyll & Hyde",
      composer: "弗兰克·怀德霍恩",
      premiereYear: "1990年",
      premiereLocation: "休斯顿",
      description: "改编自罗伯特·路易斯·史蒂文森的经典小说，讲述医生亨利·杰基尔试图分离人性的善恶两面，创造出可怕的海德先生。",
      whyNotAdapted: "多次改编导致观众审美疲劳，需要全新的诠释角度。",
      potentialAdaptation: "可以采用现代心理学视角，深入探讨人性善恶的双重性。",
      difficulty: "中",
      popularity: "经典",
      broadwayRuns: "4年（百老汇）",
      imageUrl: "/images/Jekyll & Hyde.jpg",
      videoUrl: "https://www.bilibili.com/video/BV15x42117FE/?spm_id_from=333.337.search-card.all.click", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/video/BV15x42117FE/?spm_id_from=333.337.search-card.all.click" // 在这里填入观看原片链接
    },
    {
      id: 5,
      title: "莫里哀",
      original: "Molière",
      composer: "雷诺·巴舍",
      premiereYear: "2016年",
      premiereLocation: "法国",
      description: "讲述17世纪法国喜剧作家莫里哀的生平，展现他与路易十四的复杂关系以及他的艺术追求。",
      whyNotAdapted: "法国历史文化背景特殊，国际市场认知度有限，改编成本较高。",
      potentialAdaptation: "需要平衡历史准确性和娱乐性，可能更适合艺术电影市场。",
      difficulty: "高",
      popularity: "小众经典",
      broadwayRuns: "法国本土演出",
      imageUrl: "/images/莫里哀.jpg",
      videoUrl: "https://www.bilibili.com/video/BV11Ki1YAEpj/?spm_id_from=333.337.search-card.all.click", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/video/BV11Ki1YAEpj/?spm_id_from=333.337.search-card.all.click" // 在这里填入观看原片链接
    },
    {
      id: 6,
      title: "摇滚红与黑",
      original: "Le Rouge et le Noir",
      composer: "刘洲、张然",
      premiereYear: "2018年",
      premiereLocation: "上海",
      description: "改编自司汤达名著《红与黑》，讲述野心青年于连·索雷尔的奋斗和爱情故事，融入现代摇滚音乐元素。",
      whyNotAdapted: "中国音乐剧国际影响力有限，文学改编需要平衡原著精神和现代观众口味。",
      potentialAdaptation: "需要找到合适的国际合作平台，平衡东西方文化元素。",
      difficulty: "高",
      popularity: "中文音乐剧经典",
      broadwayRuns: "中国各地巡演",
      imageUrl: "/images/摇滚红与黑.png",
      videoUrl: "https://www.bilibili.com/video/BV16FSgYtEDx/?spm_id_from=333.337.search-card.all.click", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/video/BV16FSgYtEDx/?spm_id_from=333.337.search-card.all.click" // 在这里填入观看原片链接
    },
    {
      id: 7,
      title: "风声",
      original: "The Wind",
      composer: "王铮",
      premiereYear: "2021年",
      premiereLocation: "北京",
      description: "改编自麦家同名小说，讲述抗战时期一群人物在封闭环境中互相试探、暗斗的悬疑故事。",
      whyNotAdapted: "虽然有电影版，但音乐剧版本需要更加注重悬疑氛围的营造。",
      potentialAdaptation: "可以结合现代电影技术，在音乐中营造更强烈的悬疑感。",
      difficulty: "中高",
      popularity: "中文音乐剧新作",
      broadwayRuns: "中国各地巡演",
      imageUrl: "/images/风声.jpg",
      videoUrl: "https://www.bilibili.com/video/BV1xJxnznEo1/?spm_id_from=333.337.search-card.all.click", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/video/BV1xJxnznEo1/?spm_id_from=333.337.search-card.all.click" // 在这里填入观看原片链接
    }
  ];

  // 状态管理
  const [selectedMusical, setSelectedMusical] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterPopularity, setFilterPopularity] = useState('all');

  // 过滤逻辑
  const filteredMusicals = notAdaptedMusicals.filter(musical => {
    const matchesSearch = 
      musical.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      musical.composer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      musical.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDifficulty = filterDifficulty === 'all' || musical.difficulty === filterDifficulty;
    const matchesPopularity = filterPopularity === 'all' || musical.popularity === filterPopularity;
    
    return matchesSearch && matchesDifficulty && matchesPopularity;
  });

  // 打开详情模态框
  const openDetails = (musical) => {
    setSelectedMusical(musical);
    document.body.style.overflow = 'hidden';
  };

  // 关闭详情模态框
  const closeDetails = () => {
    setSelectedMusical(null);
    document.body.style.overflow = 'auto';
  };

  // 打开视频链接
  const openVideo = (videoUrl) => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  // 打开原片链接
  const openOriginalFilm = (originalFilmUrl) => {
    if (originalFilmUrl) {
      window.open(originalFilmUrl, '_blank');
    } else {
      alert('原片链接暂未提供，您可以手动在影片平台搜索相关影片。');
    }
  };

  // 获取难度等级的颜色
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '高': return '#ff4757';
      case '中高': return '#ff7675';
      case '中': return '#fdcb6e';
      case '低': return '#00b894';
      default: return '#666';
    }
  };

  // 获取人气等级的颜色
  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case '现象级': return '#e17055';
      case '超经典': return '#fdcb6e';
      case '热门': return '#00b894';
      case '经典': return '#6c5ce7';
      case '现代经典': return '#74b9ff';
      default: return '#666';
    }
  };

  return (
    <div className="not-adapted">
      {/* 页面头部 */}
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">🎭 未影视化作品</h1>
          <p className="page-subtitle">
            这些经典音乐剧尚未进行影视化改编，或是需要更好的电影诠释
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
              placeholder="搜索音乐剧名称、作曲家..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          {/* 筛选器 */}
          <div className="filters-grid">
            <div className="filter-group">
              <label>改编难度：</label>
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="filter-select"
              >
                <option value="all">全部难度</option>
                <option value="低">低</option>
                <option value="中">中</option>
                <option value="中高">中高</option>
                <option value="高">高</option>
              </select>
            </div>

            <div className="filter-group">
              <label>人气级别：</label>
              <select
                value={filterPopularity}
                onChange={(e) => setFilterPopularity(e.target.value)}
                className="filter-select"
              >
                <option value="all">全部级别</option>
                <option value="现象级">现象级</option>
                <option value="超经典">超经典</option>
                <option value="热门">热门</option>
                <option value="经典">经典</option>
                <option value="现代经典">现代经典</option>
              </select>
            </div>
          </div>

          {/* 统计信息 */}
          <div className="stats-info">
            <span>共找到 {filteredMusicals.length} 部未影视化作品</span>
          </div>
        </div>
      </section>

      {/* 作品列表 */}
      <main className="main-content">
        <div className="container">
          <div className="musicals-grid">
            {filteredMusicals.map((musical) => (
              <article key={musical.id} className="musical-card">
                {/* 卡片头部 */}
                <header className="card-header">
                  <div className="musical-info">
                    <h3 className="musical-title">{musical.title}</h3>
                    <p className="musical-original">{musical.original}</p>
                  </div>
                  <div className="musical-tags">
                    <span 
                      className="difficulty-tag"
                      style={{ backgroundColor: getDifficultyColor(musical.difficulty) }}
                    >
                      难度：{musical.difficulty}
                    </span>
                    <span 
                      className="popularity-tag"
                      style={{ backgroundColor: getPopularityColor(musical.popularity) }}
                    >
                      {musical.popularity}
                    </span>
                  </div>
                </header>

                {/* 图片区域 */}
                <div className="card-image">
                  <ImageCard 
                    src={musical.imageUrl !== "placeholder-image.jpg" ? musical.imageUrl : null}
                    alt={musical.title}
                    title={musical.title}
                    className="not-adapted"
                    fallbackIcon="🎭"
                  />
                </div>

                {/* 卡片内容 */}
                <div className="card-content">
                  <div className="musical-meta">
                    <div className="meta-item">
                      <span className="meta-label">作曲家：</span>
                      <span className="meta-value">{musical.composer}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">首演年份：</span>
                      <span className="meta-value">{musical.premiereYear}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">首演地点：</span>
                      <span className="meta-value">{musical.premiereLocation}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">百老汇演出：</span>
                      <span className="meta-value highlight">{musical.broadwayRuns}</span>
                    </div>
                  </div>

                  <p className="musical-description">
                    {musical.description}
                  </p>

                  <div className="adaptation-potential">
                    <h4>🎬 影视化潜力</h4>
                    <p>{musical.potentialAdaptation}</p>
                  </div>

                  <div className="card-actions" style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                    <button 
                      className="btn btn-primary"
                      onClick={() => openDetails(musical)}
                    >
                      查看详细信息
                    </button>
                    {musical.videoUrl && (
                      <button 
                        className="btn btn-video"
                        onClick={() => openVideo(musical.videoUrl)}
                        title="观看音乐剧视频"
                      >
                        🎥 观看视频
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 空状态 */}
          {filteredMusicals.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3>没有找到匹配的作品</h3>
              <p>请尝试调整搜索条件或筛选器</p>
            </div>
          )}
        </div>
      </main>

      {/* 详情模态框 */}
      {selectedMusical && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* 模态框头部 */}
            <header className="modal-header">
              <div>
                <h2>{selectedMusical.title}</h2>
                <p className="modal-original">{selectedMusical.original}</p>
              </div>
              <button className="close-btn" onClick={closeDetails}>×</button>
            </header>

            {/* 模态框主体 */}
            <div className="modal-body">
              <div className="modal-image">
                {selectedMusical.imageUrl && selectedMusical.imageUrl !== "placeholder-image.jpg" ? (
                  <img 
                    src={selectedMusical.imageUrl} 
                    alt={selectedMusical.title}
                    style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px'}}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="image-placeholder large" style={{display: selectedMusical.imageUrl && selectedMusical.imageUrl !== "placeholder-image.jpg" ? 'none' : 'flex'}}>
                  <span className="placeholder-icon">🎭</span>
                  <p>{selectedMusical.title}</p>
                </div>
              </div>

              <div className="modal-info">
                {/* 标签信息 */}
                <div className="tags-section">
                  <span 
                    className="difficulty-tag large"
                    style={{ backgroundColor: getDifficultyColor(selectedMusical.difficulty) }}
                  >
                    改编难度：{selectedMusical.difficulty}
                  </span>
                  <span 
                    className="popularity-tag large"
                    style={{ backgroundColor: getPopularityColor(selectedMusical.popularity) }}
                  >
                    人气：{selectedMusical.popularity}
                  </span>
                </div>

                <h3>基本信息</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <strong>作曲家：</strong> {selectedMusical.composer}
                  </div>
                  <div className="info-item">
                    <strong>首演年份：</strong> {selectedMusical.premiereYear}
                  </div>
                  <div className="info-item">
                    <strong>首演地点：</strong> {selectedMusical.premiereLocation}
                  </div>
                  <div className="info-item">
                    <strong>百老汇演出：</strong> {selectedMusical.broadwayRuns}
                  </div>
                </div>

                <h3>作品简介</h3>
                <p className="description">{selectedMusical.description}</p>

                <h3>🤔 未影视化原因</h3>
                <div className="reason-box">
                  <p>{selectedMusical.whyNotAdapted}</p>
                </div>

                <h3>🎯 影视化潜力分析</h3>
                <div className="potential-box">
                  <p>{selectedMusical.potentialAdaptation}</p>
                </div>
              </div>
            </div>

            {/* 模态框底部 */}
            <footer className="modal-footer">
              <div className="modal-footer-actions">
                <button className="btn btn-secondary" onClick={closeDetails}>
                  关闭
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => openOriginalFilm(selectedMusical.originalFilmUrl)}
                  title="观看原版影片"
                >
                  🎬 观看原片
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotAdapted;