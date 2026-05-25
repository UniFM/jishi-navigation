# 济事楼导览系统

**项目定位**
- 面向高校教学楼的室内导览 SPA，当前以 4F 地图为核心实现。
- PNG 视觉底图 + SVG 热点层双层架构，所有交互仅作用在 SVG 热点层。

**技术栈**
- Vue 3 + Composition API
- TypeScript
- Vite
- 组件化开发与数据驱动 UI
- CSS 动效与响应式布局

**项目结构与文件职责**
- 入口与应用骨架
	- [index.html](index.html) 入口 HTML 模板
	- [src/main.ts](src/main.ts) 应用挂载与全局样式引入
	- [src/App.vue](src/App.vue) 状态中枢与页面布局（楼层、搜索、地图、详情）
- 样式与视觉
	- [src/style.css](src/style.css) 全局样式、布局、动画、地图与面板视觉
- 核心组件
	- [src/components/FloorMap.vue](src/components/FloorMap.vue) 地图渲染与 SVG 热点交互绑定
	- [src/components/RoomTooltip.vue](src/components/RoomTooltip.vue) hover 提示卡片
	- [src/components/RoomDetailPanel.vue](src/components/RoomDetailPanel.vue) 右侧详情栏与图片轮播/放大
	- [src/components/SearchBar.vue](src/components/SearchBar.vue) 搜索与结果列表
	- [src/components/FloorSelector.vue](src/components/FloorSelector.vue) 楼层切换
	- [src/components/RoomHotspot.vue](src/components/RoomHotspot.vue) 搜索结果条目组件
	- [src/components/HelloWorld.vue](src/components/HelloWorld.vue) 模板残留组件，当前未使用
- 数据与类型
	- [src/data/rooms.ts](src/data/rooms.ts) 房间数据与占位图数据
	- [src/types/room.ts](src/types/room.ts) Room 与 Staff 类型定义
- 资源
	- [src/assets/map4-only-pic.png](src/assets/map4-only-pic.png) 4F PNG 底图
	- [src/assets/map4-without-pic.svg](src/assets/map4-without-pic.svg) 4F SVG 热点层
	- [src/assets/hero.png](src/assets/hero.png) 详情/工具提示占位图

**系统实现的功能点**
- 4F 地图展示：PNG 视觉层 + SVG 热点层叠加对齐
- 房间 hover：高亮填充、轻微缩放、提示卡片
- 房间 click：地图平滑缩放左移 + 右侧详情栏展开
- 详情栏：图片轮播、放大查看、房间信息、人员信息
- 楼层切换与搜索（当前为 4F 数据；5F 作为预留）
- 流式导航：地图与面板之间保持空间连续的动态过渡
- 分隔条拖拽：在详情展开时调整左右布局比例

**交互实现要点**
- SVG 热点通过 `data-room` 与房间数据进行映射
- 交互事件绑定在 SVG DOM 节点上（mouseenter / mousemove / mouseleave / click）
- 右侧面板与地图位移动画使用 CSS 过渡保持连续性

**公网访问与仓库同步**
- 公网地址（GitHub Pages）：https://unifm.github.io/jishi-navigation/
- 仓库地址：https://github.com/UniFM/jishi-navigation
- 同步方式：推送到 `main` 分支后由 GitHub Actions 自动部署到 Pages
- 若出现 404，通常是 Actions 构建/部署未完成或失败，等待完成后刷新

**运行与开发**
- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 构建：`npm run build`
