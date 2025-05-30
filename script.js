// 脚本：简单的交互功能，包括展开/收起成员介绍、图片预览等

// 成员折叠展开功能
const members = document.querySelectorAll('.member');
members.forEach(member => {
  member.addEventListener('click', () => {
    member.classList.toggle('expanded');
    const details = member.querySelector('div');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  });
});

// 图片点击预览功能
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '90%';
    overlay.appendChild(largeImg);

    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});
