/**
 * 站点内容单一数据源 — 改内容只需要动这个文件
 * 文案基于个人简历整理润色,项目亮点含对线上产品的实地观察
 */

export interface Profile {
	name: string;
	title: string;
	tagline: string;
	/** Hero 打字机轮播关键词 */
	keywords: string[];
	stats: { value: string; label: string }[];
	about: string;
	email: string;
	github: string;
	links: { label: string; url: string }[];
}

export interface Experience {
	company: string;
	role: string;
	period: string;
	points: string[];
}

export interface SkillGroup {
	label: string;
	items: string[];
}

export interface Project {
	id: string;
	name: string;
	subtitle: string;
	period: string;
	role: string;
	description: string;
	/** 功能亮点:简历描述 + 实地观察 */
	highlights: { title: string; detail: string }[];
	stack: string[];
	/** 截图:主图 + 可选细节图 */
	cover: { src: string; alt: string; width: number; height: number };
	gallery?: { src: string; alt: string; width: number; height: number }[];
	link?: { label: string; url: string };
	/** 图片组件留替换位:后续换内部截图时仅改此处 */
	note?: string;
}

export const profile: Profile = {
	name: 'lvjinbin',
	title: '前端开发工程师',
	tagline:
		'三年多前端开发经验,做过企业级 SaaS、Chrome 插件、出海产品和数据平台。习惯从数据的角度做界面:把采集、分析到呈现的链路,做成用户真正愿意用的产品。',
	keywords: ['React / Vue 双栈', '数据可视化', 'Chrome 插件全流程', 'SSR 性能优化', 'AI 应用落地'],
	stats: [
		{ value: '3 年+', label: '前端开发经验' },
		{ value: '4 组', label: '完整项目' },
		{ value: '100+', label: '服务企业租户' },
		{ value: '5.0★', label: '上架插件评分' }
	],
	about:
		'2021 年起从事前端开发,从媒体数据平台的四端开发起步,在跨境电商工具团队独立负责插件与站点,再到企业级客户体验管理平台负责分析看板与 AI 功能。技术上以 React / Vue 双栈为主,长期做数据可视化与工程化落地:主导过团队图表库封装与迁移、前端 CI 质量门禁、SSR 性能优化,也完整做过一款 Chrome 插件的从零到上架。日常重度使用 AI 工具提效,能独立跟进海外产品需求与英文技术文档。',
	email: 'hello@example.com',
	github: 'https://github.com/HTT-Oracion',
	links: [{ label: 'GitHub', url: 'https://github.com/HTT-Oracion' }]
};

export const experience: Experience[] = [
	{
		company: '深圳数阔信息技术有限公司',
		role: '前端开发工程师',
		period: '2023.06 — 2025.07',
		points: [
			'主导 VoC 电商评论分析系统前端从 0 到 1 建设:设计分析面板在亚马逊多站点的注入与适配方案,完成评论数据实时采集、多维度可视化看板与报告导出模块',
			'负责云听 CEM 分析、预警、消息模块的需求评审与技术方案设计,推动组件复用与模块解耦,减少跨模块重复开发',
			'制定团队前端代码评审规范,引入 AI 辅助代码生成与 Review,减少重复编码,提升研发交付效率'
		]
	},
	{
		company: '深圳市筝云科技有限公司',
		role: '前端负责人',
		period: '2022.10 — 2023.05',
		points: [
			'负责技术选型与架构设计,独立承担两条海外产品线的前端业务开发',
			'主导 EzTalks 通讯平台从 0 到 1 前端建设,完成聊天消息、邮件模板等核心模块交付',
			'负责 Sharkfoto 站前端升级与 SEO 优化:SSR 改造、语义化重构及性能调优,提升搜索引擎收录与首屏加载速度'
		]
	},
	{
		company: '广州麦媒信息科技有限公司',
		role: '前端开发工程师(实习)',
		period: '2021.04 — 2022.09',
		points: [
			'负责牛媒数据 PC 官网、微信小程序及 H5 三端日常开发与迭代,设计跨端复用方案降低多端重复开发成本',
			'主导前端项目 Vue 3 升级重构,抽离公共组件与逻辑层,解决老项目可维护性问题',
			'独立承接运营线活动落地页,抽象常用活动模板,缩短后续活动页交付周期'
		]
	}
];

export const skills: SkillGroup[] = [
	{ label: '框架与语言', items: ['Vue 3', 'React', 'TypeScript', 'Next.js', 'Nuxt.js', 'UniApp'] },
	{
		label: '工程化与协作',
		items: ['Vite', 'Jenkins CI', 'Chrome 插件全流程', 'SSR 性能优化', 'GitLab Webhook', '代码评审规范']
	},
	{ label: '可视化与数据', items: ['ECharts', 'AntV G2 / F2', '高德地图 API', 'WebSocket', 'SSE 流式渲染'] },
	{ label: 'UI 与生态', items: ['Ant Design', 'Element Plus', 'Vant UI', 'TailwindCSS', 'Redux Toolkit', 'Pinia'] }
];

export const projects: Project[] = [
	{
		id: 'yunting',
		name: '云听 CEM',
		subtitle: '企业级客户体验管理平台',
		period: '2023.06 — 2025.07',
		role: '前端开发工程师',
		description:
			'面向企业级客户的体验管理 SaaS:多渠道采集用户反馈与舆情数据,构建分析、预警、洞察一体化能力。服务 vivo、雷鸟、安踏、马自达等上百家租户。',
		highlights: [
			{
				title: 'JSONSchema 视图设计器',
				detail:
					'参与设计基于 JSONSchema 的视图设计器,支持组件拖拽配置与页面级事件联动,让分析看板做到全场景可配置——运营同学不写代码也能搭出自己的看板。'
			},
			{
				title: '团队图表库建设',
				detail:
					'主导图表库建设:基于 AntV/G2 扩展自定义图形,推动 ECharts 向 G2 迁移,封装通用图表组件统一可视化渲染层,视图设计器与业务看板共用一套渲染能力。'
			},
			{
				title: 'AI 对话式分析',
				detail:
					'开发 AI 对话分析模块:自然语言输入一键生成数据分析面板,处理 SSE 流式内容渲染与实时响应。产品官网已将"大模型深度洞察分析"作为核心能力对外输出。'
			},
			{
				title: '前端 CI 质量门禁',
				detail:
					'搭建 Jenkins + GitLab Webhook 的 CI 流水线,集成 AI 代码校验,通过飞书机器人推送构建状态与告警通知,问题在合入前暴露。'
			}
		],
		stack: ['React', 'Redux Toolkit', 'TypeScript', 'Ant Design', 'ECharts', 'AntV/G2', 'Jenkins'],
		cover: {
			src: '/projects/yunting-mcp.jpg',
			alt: 'AI 对话式分析:选择业务场景后 Agent 调用云听 MCP 展开分析',
			width: 1600,
			height: 796
		},
		gallery: [
			{
				src: '/projects/yunting-channels.jpg',
				alt: '云听 CEM 全渠道体验数据整合:电商评论、社媒、问卷、客服会话、API、全球电商',
				width: 1280,
				height: 740
			},
			{
				src: '/projects/yunting-bi.jpg',
				alt: '云听 CEM 数据决策页:客户体验管理驾驶舱与可视化看板',
				width: 1280,
				height: 740
			},
			{
				src: '/projects/yunting-ai.jpg',
				alt: '云听 CEM 官网:基于行业 Know-How 的自研数阔大模型页',
				width: 1280,
				height: 740
			}
		],
		link: { label: '产品官网', url: 'https://www.yuntingai.com/' },
		note: 'MCP 演示图为内部功能截图;其余为产品官网公开资料。'
	},
	{
		id: 'voc',
		name: 'Skieer VOC',
		subtitle: '跨境电商评论分析 Chrome 插件',
		period: '2023.06 — 2025.07',
		role: '前端开发工程师(0 → 1 主导)',
		description:
			'面向跨境电商卖家的一站式分析工具:在亚马逊商品页直接注入分析面板,自动采集评论与商品数据,结合 AI 生成分析报告,辅助选品与内容优化。已上架 Chrome 商店。',
		highlights: [
			{
				title: '跨上下文通信与登录态同步',
				detail:
					'基于 Chrome Runtime Messaging 构建跨上下文通信通道,Background 统一管理 Token 并在多页面间同步登录态;配合 Chrome Storage 缓存实现无感加载。'
			},
			{
				title: '动态采集方案',
				detail:
					'针对平台动态加载与反采集机制,设计 DOM 变化监听 + 接口拦截的混合采集方案,覆盖视频评论、商品信息及音频流链接,为 AI 分析提供结构化输入;持续跟进平台 DOM 与接口变更快速迭代。'
			},
			{
				title: 'ShadowDOM 安全注入',
				detail:
					'插件 UI 基于 ShadowDOM 注入宿主页面,样式完全隔离。实测在亚马逊商品页顶部呈现 Quick / Deep Analysis 两档分析入口,评论、排名、评分数据即时可见。'
			},
			{
				title: 'WebSocket 稳定性治理',
				detail:
					'封装 WebSocket 工具类:断线自动重连、超时重试与预警埋点,异常通过飞书机器人实时上报,缩短线上问题定位时间。'
			}
		],
		stack: ['React', 'Next.js', 'Chrome Extensions', 'Ant Design', 'ECharts', 'TailwindCSS'],
		cover: {
			src: '/projects/voc/voc-inject.jpg',
			alt: 'Skieer VOC 注入亚马逊商品页:Quick/Deep Analysis 入口与综合建议面板',
			width: 1280,
			height: 800
		},
		gallery: [
			{
				src: '/projects/voc/voc-analysis.jpg',
				alt: 'Skieer VOC 评论分析面板:客户画像、使用场景、正负反馈、未满足需求与购买顾虑',
				width: 1280,
				height: 800
			}
		],
		link: {
			label: 'Chrome 商店',
			url: 'https://chromewebstore.google.com/detail/skieer-voc/bcniifmdiagmbieijjpmnlfnbhimcmde'
		},
		note: '截图来自 Chrome 商店官方展示材料。'
	},
	{
		id: 'overseas',
		name: 'Sharkfoto & EzTalks',
		subtitle: '两条海外产品线:图片工具站 + 通讯服务平台',
		period: '2022.10 — 2023.05',
		role: '前端负责人',
		description:
			'Sharkfoto 图片工具站提供图片下载、裁剪、压缩等在线处理能力;EzTalks 通讯平台支持号码购买、在线拨号、邮件收发与实时聊天。两条产品线均由我完成前端从 0 到 1。',
		highlights: [
			{
				title: 'SPA → Nuxt SSR 迁移',
				detail:
					'完成 Sharkfoto 从 SPA 到 Nuxt.js SSR 的架构迁移,配合服务端渲染、缓存策略与 unlighthouse 优化建议解决性能问题,搜索引擎收录与首屏速度明显提升。'
			},
			{
				title: '响应式瀑布流相册',
				detail:
					'重构图片相册模块:响应式瀑布流布局,图片懒加载与广告位动态插入,大图列表滚动不再卡顿。'
			},
			{
				title: '在线聊天室',
				detail:
					'开发 EzTalks 在线聊天室:消息分页加载、新消息提醒与一键已读,基于虚拟列表解决长消息列表渲染卡顿。'
			},
			{
				title: '邮件服务中间层',
				detail:
					'基于 Koa2 搭建邮件服务中间层,统一多场景邮件模板管理与转发逻辑,保障多平台邮件下发的兼容性。'
			}
		],
		stack: ['Vue 3', 'Nuxt.js', 'Element Plus', 'TypeScript', 'TailwindCSS', 'Koa2'],
		cover: {
			src: '/projects/sharkfoto-compressor.jpg',
			alt: 'Sharkfoto 图片压缩工具页:免注册在线压缩,支持批量处理',
			width: 1280,
			height: 800
		},
		gallery: [
			{
				src: '/projects/sharkfoto-tools.jpg',
				alt: 'Sharkfoto 免费工具区:243+ 个免注册在线工具',
				width: 1280,
				height: 800
			},
			{
				src: '/projects/eztalks-sms-chat.jpg',
				alt: 'EzTalks 双向短信聊天产品演示',
				width: 680,
				height: 540
			},
			{
				src: '/projects/eztalks-products.jpg',
				alt: 'EzTalks 产品矩阵:短信、传真、语音与号码服务',
				width: 1280,
				height: 800
			}
		],
		link: { label: 'Sharkfoto', url: 'https://www.sharkfoto.com/' },
		note: '产品仍在迭代中,截图为当前版本;两条产品线的前端均由本人 0 → 1 建设。'
	},
	{
		id: 'niumedia',
		name: '牛媒数据',
		subtitle: '新闻影响力洞察与评价大数据平台',
		period: '2021.04 — 2022.09',
		role: '前端开发工程师',
		description:
			'覆盖记者、人物、媒体、机构多维度数据统计与分析的媒体大数据平台,连接记者、专家、品牌方与线人,覆盖 PC 官网、微信小程序、H5 及 APP 四端。',
		highlights: [
			{
				title: '四端开发与跨端复用',
				detail:
					'负责 PC 官网、小程序及 H5 三端日常迭代,设计跨端复用方案降低重复开发成本;处理多端兼容与图表渲染层级冲突,落地微信支付等核心能力。'
			},
			{
				title: '通用图表组件库',
				detail:
					'基于 AntV G2 封装通用图表组件库,支持自定义事件与 Tooltip 定制;集成高德地图 API 开发媒体城市分布热点图,实现数据与地图双向交互。'
			},
			{
				title: '路由权限体系',
				detail:
					'设计自定义路由中间件,搭建基于用户等级的页面权限鉴权体系,完成访问控制与重定向。'
			},
			{
				title: '列表与检索体验',
				detail:
					'官网数据列表支持分页与无限滚动双模切换;开发多维度复合检索的全局搜索模块,"找记者、查媒体、搜新闻"三大搜索至今仍是平台核心入口。'
			}
		],
		stack: ['Vue', 'Vuex', 'UniApp', 'Element UI', 'Vant UI', 'AntV G2/F2', 'TypeScript'],
		cover: {
			src: '/projects/niumedia-home.jpg',
			alt: '牛媒数据官网:新闻影响力大数据平台,找记者、查媒体、搜新闻',
			width: 1280,
			height: 800
		},
		gallery: [
			{
				src: '/projects/niumedia-detail.jpg',
				alt: '牛媒数据文章详情页:各渠道影响力数据、热点追踪与文章特征分析',
				width: 1600,
				height: 916
			},
			{
				src: '/projects/niumedia-list.jpg',
				alt: '牛媒数据资讯流:分类筛选与数据列表',
				width: 1280,
				height: 800
			}
		],
		link: { label: '访问平台', url: 'https://niumedia.cn/' }
	}
];
