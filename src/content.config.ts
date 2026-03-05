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
    downloadUrl: z.string().optional(),
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
    services: z.array(z.string()).optional(),
    results: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    cta: z.string().optional(),
    related: z.array(z.string()).optional(),
    order: z.number().optional(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

const evergreen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evergreen' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    lastUpdated: z.coerce.date(),
    related: z.array(z.string()).optional(),
  }),
});

const brand = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/brand' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    layout: z.string().optional(),
  }),
});

export const collections = {
  blog,
  research,
  customerStories,
  services,
  evergreen,
  brand,
};
