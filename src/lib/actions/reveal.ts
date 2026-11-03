import type { Action } from 'svelte/action';

/**
 * 滚动进入视口时追加 .revealed,配合全局 [data-reveal] 样式做一次性 reveal。
 * params.delay: 错峰延迟(ms),写入 CSS 变量 --reveal-delay
 */
export const reveal: Action<HTMLElement, { threshold?: number; delay?: number } | undefined> = (
	node,
	params
) => {
	const threshold = params?.threshold ?? 0.15;
	const delay = params?.delay ?? 0;

	if (delay > 0) {
		node.style.setProperty('--reveal-delay', `${delay}ms`);
	}

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('revealed');
					io.unobserve(node);
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -40px 0px' }
	);

	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
};
