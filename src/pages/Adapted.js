// 已经影视化页面 - 展示已经成功改编为影视作品的音乐剧
import React, { useState } from 'react';
import ImageCard from '../components/ImageCard';
import '../styles/Adapted.css';

const Adapted = () => {
  // 模拟数据 - 已影视化的音乐剧作品
  const adaptedMusicals = [
    {
      id: 1,
      title: "悲惨世界",
      original: "Les Misérables",
      year: 2012,
      director: "汤姆·霍伯",
      mainActors: ["休·杰克曼", "罗素·克劳", "安妮·海瑟薇"],
      musicalPremiere: "1985年",
      description: "这部经典音乐剧讲述了一个关于爱、牺牲和救赎的史诗故事，在法国大革命的背景下展开。",
      achievements: ["奥斯卡最佳女配角", "金球奖最佳音乐喜剧片", "英国电影学院奖最佳音效"],
      boxOffice: "$4.38亿",
      imageUrl: "/images/悲惨世界.jpg",
      videoUrl: "https://www.bilibili.com/bangumi/play/ep746940?theme=movie&spm_id_from=333.337.0.0", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/bangumi/play/ep746940?theme=movie&spm_id_from=333.337.0.0" // 在这里填入观看原片链接
    },
    {
      id: 2,
      title: "芝加哥",
      original: "Chicago",
      year: 2002,
      director: "罗伯·马歇尔",
      mainActors: ["蕾妮·齐薇格", "凯瑟琳·泽塔-琼斯", "理查德·基尔"],
      musicalPremiere: "1975年",
      description: "以1920年代的芝加哥为背景，讲述了两名女杀人犯在监狱中如何利用媒体炒作来获得名声的故事。",
      achievements: ["奥斯卡最佳影片", "奥斯卡最佳女配角", "奥斯卡最佳艺术指导"],
      boxOffice: "$3.06亿",
      imageUrl: "/images/芝加哥.jpg",
      videoUrl: "https://www.bilibili.com/bangumi/play/ep774352?theme=movie&spm_id_from=333.337.0.0", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/bangumi/play/ep774352?theme=movie&spm_id_from=333.337.0.0" // 在这里填入观看原片链接
    },
    {
      id: 3,
      title: "妈妈咪呀！",
      original: "Mamma Mia!",
      year: 2008,
      director: "菲莉达·劳埃德",
      mainActors: ["梅丽尔·斯特里普", "皮尔斯·布鲁斯南", "阿曼达·塞弗里德"],
      musicalPremiere: "1999年",
      description: "以瑞典超级乐队ABBA的歌曲为基础，讲述了一位年轻女孩寻找父亲身份的温馨故事。",
      achievements: ["金球奖最佳音乐喜剧片提名", "格莱美最佳原声带提名"],
      boxOffice: "$6.11亿",
      imageUrl: "/images/妈妈咪呀.png",
      videoUrl: "https://www.bilibili.com/bangumi/play/ep747822?theme=movie&spm_id_from=333.337.0.0", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/bangumi/play/ep747822?theme=movie&spm_id_from=333.337.0.0" // 在这里填入观看原片链接
    },
    {
      id: 4,
      title: "红磨坊",
      original: "Moulin Rouge!",
      year: 2001,
      director: "巴兹·鲁赫曼",
      mainActors: ["妮可·基德曼", "伊万·麦克格雷格"],
      musicalPremiere: "2001年（电影原创）",
      description: "以1900年巴黎的红磨坊为背景，讲述了一位英国诗人和一位歌舞女明星的悲剧爱情故事。",
      achievements: ["奥斯卡最佳艺术指导", "奥斯卡最佳服装设计", "金球奖最佳音乐喜剧片"],
      boxOffice: "$1.79亿",
      imageUrl: "/images/红磨坊.jpg",
      videoUrl: "https://www.bilibili.com/bangumi/play/ep790260?theme=movie&spm_id_from=333.337.0.0", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/bangumi/play/ep790260?theme=movie&spm_id_from=333.337.0.0" // 在这里填入观看原片链接
    },
    {
      id: 5,
      title: "魔法坏女巫",
      original: "Wicked",
      year: 2024,
      director: "朱浩伟",
      mainActors: ["辛西娅·艾莉佛", "爱莉安娜·格兰德"],
      musicalPremiere: "2003年",
      description: "《绿野仙踪》的前传，讲述了西方坏女巫和格林达两个女巫的友谊故事。",
      achievements: ["金球奖最佳音乐喜剧片提名"],
      boxOffice: "$3.8亿",
      imageUrl: "/images/Wicked.jpg",
      videoUrl: "https://www.bilibili.com/bangumi/play/ss47839?theme=movie&spm_id_from=333.337.0.0", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/bangumi/play/ss47839?theme=movie&spm_id_from=333.337.0.0" // 在这里填入观看原片链接
    },
    {
      id: 6,
      title: "雨中曲",
      original: "Singin' in the Rain",
      year: 1952,
      director: "吉恩·凯利、斯坦利·多南",
      mainActors: ["吉恩·凯利", "黛比·雷诺斯", "唐纳德·奥康纳"],
      musicalPremiere: "1952年（电影原创音乐剧）",
      description: "好莱坞黄金时代的经典音乐电影，讲述了从默片过渡到有声电影时期的好莱坞故事。",
      achievements: ["奥斯卡最佳原创配乐提名", "美国电影学会评选百年百大音乐电影第5位", "美国国家电影注册表收录"],
      boxOffice: "$300万（首映）",
      imageUrl: "/images/雨中曲.jpg",
      videoUrl: "https://www.bilibili.com/bangumi/play/ep330332?theme=movie&spm_id_from=333.337.0.0", // 在这里填入音乐剧视频链接
      originalFilmUrl: "https://www.bilibili.com/bangumi/play/ep330332?theme=movie&spm_id_from=333.337.0.0" // 在这里填入观看原片链接
    }
  ];

  // 状态管理
  const [selectedMusical, setSelectedMusical] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('year');

  // 过滤和排序逻辑
  const filteredAndSortedMusicals = adaptedMusicals
    .filter(musical => 
      musical.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      musical.original.toLowerCase().includes(searchTerm.toLowerCase()) ||
      musical.director.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'year') return b.year - a.year;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'boxOffice') return parseFloat(b.boxOffice.replace(/[^0-9.]/g, '')) - parseFloat(a.boxOffice.replace(/[^0-9.]/g, ''));
      return 0;
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

  return (
    <div className="adapted">
      {/* 页面头部 */}
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">🎬 已影视化作品</h1>
          <p className="page-subtitle">
            这些经典音乐剧已经成功搬上大银幕，用电影语言重新诠释了舞台魅力
          </p>
        </div>
      </header>

      {/* 筛选和搜索区域 */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-wrapper">
            {/* 搜索框 */}
            <div className="search-box">
              <input
                type="text"
                placeholder="搜索音乐剧名称、导演或演员..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>

            {/* 排序选择器 */}
            <div className="sort-selector">
              <label htmlFor="sort-select">排序方式：</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="year">上映年份（新到旧）</option>
                <option value="title">作品名称（A-Z）</option>
                <option value="boxOffice">票房收入</option>
              </select>
            </div>
          </div>

          {/* 统计信息 */}
          <div className="stats-info">
            <span>共找到 {filteredAndSortedMusicals.length} 部作品</span>
          </div>
        </div>
      </section>

      {/* 作品卡片网格 */}
      <main className="main-content">
        <div className="container">
          <div className="musicals-grid">
            {filteredAndSortedMusicals.map((musical) => (
              <article key={musical.id} className="musical-card">
                {/* 图片区域 */}
                <div className="card-image">
                  <ImageCard 
                    src={musical.imageUrl !== "placeholder-image.jpg" ? musical.imageUrl : null}
                    alt={musical.title}
                    title={musical.title}
                    className="adapted"
                    fallbackIcon="🎬"
                  />
                  <div className="card-overlay">
                    <button 
                      className="view-details-btn"
                      onClick={() => openDetails(musical)}
                    >
                      查看详情
                    </button>
                  </div>
                </div>

                {/* 卡片内容 */}
                <div className="card-content">
                  <h3 className="musical-title">{musical.title}</h3>
                  <p className="musical-original">{musical.original}</p>
                  
                  <div className="musical-meta">
                    <div className="meta-item">
                      <span className="meta-label">上映年份：</span>
                      <span className="meta-value">{musical.year}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">导演：</span>
                      <span className="meta-value">{musical.director}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">票房：</span>
                      <span className="meta-value highlight">{musical.boxOffice}</span>
                    </div>
                  </div>

                  <p className="musical-description">
                    {musical.description.substring(0, 100)}...
                  </p>

                  <div className="card-actions" style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                    <button 
                      className="btn btn-primary"
                      onClick={() => openDetails(musical)}
                    >
                      了解更多
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
        </div>
      </main>

      {/* 详情模态框 */}
      {selectedMusical && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* 模态框头部 */}
            <header className="modal-header">
              <h2>{selectedMusical.title}</h2>
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
                  <span className="placeholder-icon">🎬</span>
                  <p>{selectedMusical.title}</p>
                </div>
              </div>

              <div className="modal-info">
                <h3>基本信息</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <strong>原版音乐剧：</strong> {selectedMusical.original}
                  </div>
                  <div className="info-item">
                    <strong>音乐剧首演：</strong> {selectedMusical.musicalPremiere}
                  </div>
                  <div className="info-item">
                    <strong>电影上映：</strong> {selectedMusical.year}
                  </div>
                  <div className="info-item">
                    <strong>导演：</strong> {selectedMusical.director}
                  </div>
                  <div className="info-item">
                    <strong>主要演员：</strong> {selectedMusical.mainActors.join('、')}
                  </div>
                  <div className="info-item">
                    <strong>全球票房：</strong> {selectedMusical.boxOffice}
                  </div>
                </div>

                <h3>剧情简介</h3>
                <p className="description">{selectedMusical.description}</p>

                <h3>获奖情况</h3>
                <ul className="achievements">
                  {selectedMusical.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
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

export default Adapted;