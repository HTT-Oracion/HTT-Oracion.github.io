<script lang="ts">
	let theme = $state<'dark' | 'light'>('dark');

	$effect(() => {
		// hydration 后从 html 上取真实主题(app.html 内联脚本已设置)
		const current = document.documentElement.dataset.theme;
		if (current === 'light' || current === 'dark') theme = current;
	});

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {
			/* 隐私模式下静默失败 */
		}
	}
</script>

<button
	type="button"
	onclick={toggle}
	aria-label={theme === 'dark' ? '切换到亮色主题' : '切换到暗色主题'}
	title={theme === 'dark' ? '切换到亮色主题' : '切换到暗色主题'}
	class="toggle"
>
	{#if theme === 'dark'}
		<!-- 太阳:当前暗色,点击切亮 -->
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
		</svg>
	{:else}
		<!-- 月亮:当前亮色,点击切暗 -->
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	{/if}
</button>

<style>
	.toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border: 1px solid var(--border);
		border-radius: var(--radius-chip);
		color: var(--text-2);
		transition:
			color var(--dur-fast) var(--ease),
			border-color var(--dur-fast) var(--ease),
			transform var(--dur-fast) var(--ease);
	}

	.toggle:hover {
		color: var(--text);
		border-color: var(--border-strong);
	}

	.toggle:active {
		transform: scale(0.97);
	}
</style>
