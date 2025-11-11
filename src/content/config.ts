import { defineCollection, z } from 'astro:content';

const proposals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    date: z.date(),
    status: z.enum(['draft', 'sent', 'accepted', 'archived']).default('sent'),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(),
    password: z.string().optional(),
  }),
});

export const collections = { proposals };
