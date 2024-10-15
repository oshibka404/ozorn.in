import { defineCollection, z } from 'astro:content';

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
		tags: z.array(z.string()).optional(),
		lang: z.enum(['ru', 'en']),
	}),
});

export const collections = { blog };
