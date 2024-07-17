import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.wheresrhys.co.uk',
  base: '/astro-test',
	integrations: [
		starlight({
			title: 'fetch-mock',
			social: {
				github: 'https://github.com/fetch-mock/packages/fetch-mock',
			},
			sidebar: [
				{
					label: 'Usage',
					autogenerate: { directory: 'fetch-mock/usage' },
				},
				{
					label: 'API reference',
					items: [
						{label: "Mocking", autogenerate: { directory: 'fetch-mock/API/Mocking' }},
						{label: "Inspection", autogenerate: { directory: 'fetch-mock/API/Inspection' }},
						{label: "Lifecycle", autogenerate: { directory: 'fetch-mock/API/Lifecycle' }}
					],
				},
				{
					label: 'Troubleshooting',
					autogenerate: { directory: 'fetch-mock/troubleshooting' },
				},

			],
		})
	],
});
