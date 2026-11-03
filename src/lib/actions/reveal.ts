import type { Action } from 'svelte/action';

/** 滚动进入视口时追加 .revealed,配合全局 [data-reveal] 样式做一次性 reveal */
export const reveal: Action<HTMLElement, { threshold?: number } | undefined> = (
	node,
	params
) => {
	const threshold = params?.threshold ?? 0.15;

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
