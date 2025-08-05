/**
 * 根据 VuePress config.js sidebar 配置自动创建目录和 .md 文件
 * 使用方法：node createSidebarFiles.js
 */

const fs = require('fs');
const path = require('path');

// 读取 config.js 文件
const CONFIG_PATH = path.join(__dirname, 'docs', '.vuepress', 'config.js');
const DOCS_PATH = path.join(__dirname, 'docs');

// 读取 sidebar 配置
function getSidebarConfig() {
  const configContent = fs.readFileSync(CONFIG_PATH, 'utf-8');
  // 提取 sidebar 配置对象
  const sidebarMatch = configContent.match(/sidebar:\s*\[(.*)\],\s*sidebarDepth/s);
  if (!sidebarMatch) throw new Error('未找到 sidebar 配置');
  let sidebarStr = sidebarMatch[1];

  // 将 sidebar 字符串转换为 JS 对象
  // 先做简单的替换以适配 JSON 格式
  sidebarStr = sidebarStr
    .replace(/([a-zA-Z0-9_]+):/g, '"$1":')  // 属性加引号
    .replace(/'/g, '"');                    // 单引号改双引号

  // 用安全方式解析
  let sidebar;
  try {
    sidebar = JSON.parse(`[${sidebarStr}]`);
  } catch (e) {
    // 如果 JSON.parse 失败，尝试使用 eval（需确保 config.js 没有恶意代码）
    sidebar = eval(`[${sidebarStr}]`);
  }
  return sidebar;
}

// 创建文件夹和文件
function createFilesForSidebar(sidebar, baseDir = DOCS_PATH) {
  sidebar.forEach(item => {
    if (item.link) {
      const linkPath = item.link.replace(/^\//, '').replace(/\.md$/, '');
      let dir = baseDir;
      let file = linkPath;
      if (linkPath.includes('/')) {
        const parts = linkPath.split('/');
        dir = path.join(baseDir, ...parts.slice(0, -1));
        file = parts[parts.length - 1];
        // 创建目录
        fs.mkdirSync(dir, { recursive: true });
      }
      // 创建 .md 文件
      const filePath = path.join(dir, `${file}.md`);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `# ${item.text}\n`, 'utf8');
        console.log('创建文件:', filePath);
      }
    }
    // 处理 children
    if (item.children && item.children.length > 0) {
      createFilesForSidebar(item.children, baseDir);
    }
  });
}

// 主逻辑
function main() {
  const sidebar = getSidebarConfig();
  createFilesForSidebar(sidebar);
}

main();