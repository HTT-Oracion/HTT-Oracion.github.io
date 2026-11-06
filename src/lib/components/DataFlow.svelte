<script lang="ts">
	/**
	 * Hero 环境动效:数据节点缓慢漂移、近邻连线。
	 * 零依赖 Canvas 2D,不引入 three.js / lottie 运行时。
	 * 低频 ambient、尊重 reduced-motion、离开视口暂停、跟随主题取色。
	 */
	let canvas: HTMLCanvasElement | undefined = $state();

	$effect(() => {
		if (!canvas) return;
		const el = canvas;
		const context = el.getContext('2d');
		if (!context) return;
		const ctx: CanvasRenderingContext2D = context;

		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		let reduced = mq.matches;
		let w = 0;
		let h = 0;
		let raf = 0;
		let visible = true;
		let colors = { accent: '', line: '' };

		type Node = { x: number; y: number; vx: number; vy: number; r: number };
		let nodes: Node[] = [];

		function readColors() {
			const cs = getComputedStyle(document.documentElement);
			colors = {
				accent: cs.getPropertyValue('--accent').trim(),
				line: cs.getPropertyValue('--border-strong').trim()
			};
		}

		function resize() {
			const rect = el.getBoundingClientRect();
			if (rect.width === 0 || rect.height === 0) return;
			w = rect.width;
			h = rect.height;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			el.width = Math.round(w * dpr);
			el.height = Math.round(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

			// 移动端减半,避免低端机持续重绘
			const count = w < 720 ? 18 : 48;
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - 0.5) * 0.24,
				vy: (Math.random() - 0.5) * 0.24,
				r: 1.4 + Math.random() * 1.4
			}));
			draw();
		}

		function draw() {
			ctx.clearRect(0, 0, w, h);

			// 近邻连线:极淡,只做结构暗示,不抢文字
			ctx.strokeStyle = colors.line;
			ctx.lineWidth = 1;
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const a = nodes[i]!;
					const b = nodes[j]!;
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const d2 = dx * dx + dy * dy;
					if (d2 > 150 * 150) continue;
					ctx.globalAlpha = (1 - Math.sqrt(d2) / 150) * 0.34;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}

			// 节点:小方点,呼应工程图纸的刻度
			ctx.fillStyle = colors.accent;
			ctx.globalAlpha = 0.45;
			for (const n of nodes) {
				ctx.fillRect(n.x - n.r / 2, n.y - n.r / 2, n.r, n.r);
			}
			ctx.globalAlpha = 1;
		}

		function frame() {
			if (!visible || reduced) return;
			for (const n of nodes) {
				n.x += n.vx;
				n.y += n.vy;
				if (n.x < -10) n.x = w + 10;
				else if (n.x > w + 10) n.x = -10;
				if (n.y < -10) n.y = h + 10;
				else if (n.y > h + 10) n.y = -10;
			}
			draw();
			raf = requestAnimationFrame(frame);
		}

		function start() {
			cancelAnimationFrame(raf);
			if (!reduced && visible) raf = requestAnimationFrame(frame);
			else draw();
		}

		readColors();
		resize();

		const ro = new ResizeObserver(resize);
		ro.observe(el);

		// 主题切换时重取色(亮色强调色更深)
		const themeObserver = new MutationObserver(() => {
			readColors();
			draw();
		});
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		// 离开首屏即停,不空转
		const io = new IntersectionObserver((entries) => {
			visible = entries.some((e) => e.isIntersecting);
			start();
		});
		io.observe(el);

		const onMotionChange = () => {
			reduced = mq.matches;
			start();
		};
		mq.addEventListener('change', onMotionChange);

		start();

		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			themeObserver.disconnect();
			io.disconnect();
			mq.removeEventListener('change', onMotionChange);
		};
	});
</script>

<canvas bind:this={canvas} class="data-flow" aria-hidden="true"></canvas>

<style>
	.data-flow {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
		/* 底部淡出,不干扰统计带的可读性 */
		-webkit-mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);
		mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);
	}
</style>
