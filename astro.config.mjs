// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ozorn.in',
	integrations: [mdx(), sitemap()],
	redirects: {
		'/why-typeof-null-object/': '/blog/typeof-null',
		'/utro-stepana-nikolaevicha/': '/blog/stepan-nikolaevich',
		'/2048/': '/blog/2048',
		'/norma-2-0/': '/blog/norma-2-0',
		'/quit-smoking/': '/blog/quit-smoking-1',
		'/quit-day-3/': '/blog/quit-smoking-2',
		'/quit-2w/': '/blog/quit-smoking-3',
		'/propaganda/': '/blog/propaganda',
		'/antimat/': '/blog/no-swearing-browser-extension',
		'/nth-digit-of-pi/': '/blog/nth-digit-of-pi',
		'/konung-vyiebal-ovtsu/': '/blog/konung',
		'/necropolis/': '/blog/necropolis',
		'/js-performance-xakep/': '/blog/js-performance-xakep',
		'/elementary-cellular-automata/': '/blog/elementary-cellular-automata',
	}
});
