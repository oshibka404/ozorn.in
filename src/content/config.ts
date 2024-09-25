import { defineCollection, z } from 'astro:content';
import License from '../components/License.astro';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		license: z.string().optional(),
		original: z.string().optional(),
	}),
});

export const collections = { blog };
