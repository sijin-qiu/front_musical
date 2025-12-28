// 优化图片显示组件 - 智能比例适配和填充
import React from 'react';
import '../styles/ImageCard.css';

const ImageCard = ({ src, alt, title, className = '', fallbackIcon = '🎬' }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  const [imageDimensions, setImageDimensions] = React.useState({ width: 0, height: 0 });

  const handleImageLoad = (e) => {
    const img = e.target;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // 计算最佳显示方式
  const getOptimalObjectFit = () => {
    if (!imageDimensions.width || !imageDimensions.height) return 'contain';
    
    const aspectRatio = imageDimensions.width / imageDimensions.height;
    
    // 如果图片太宽（横版），使用contain避免裁剪
    if (aspectRatio > 1.5) return 'contain';
    // 如果图片太高（竖版），使用contain
    if (aspectRatio < 0.7) return 'contain';
    // 标准海报比例，使用cover填满
    return 'cover';
  };

  const optimalFit = getOptimalObjectFit();

  return (
    <div className={`image-card-container ${className}`}>
      {/* 实际图片 */}
      {src && !imageError && (
        <img
          src={src}
          alt={alt || title}
          className={`image-card-img ${imageLoaded ? 'loaded' : 'loading'}`}
          style={{ 
            objectFit: optimalFit,
            display: 'block',
            margin: 'auto',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
      )}
      
      {/* 占位符 */}
      {(!src || imageError) && (
        <div className="image-card-placeholder">
          <span className="placeholder-icon">{fallbackIcon}</span>
          <p className="placeholder-text">{title}</p>
        </div>
      )}
      
      {/* 加载状态指示器 */}
      {src && !imageLoaded && !imageError && (
        <div className="image-card-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;