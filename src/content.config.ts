import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const customerStories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/customer-stories' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    industry: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog,
  research,
  customerStories,
};
