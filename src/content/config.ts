import { defineCollection, z } from 'astro:content';

const proposals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    client: z.string(),
    consultant: z.string().optional(),
    date: z.date(),
    duration: z.string().optional(),
    status: z.enum(['draft', 'sent', 'accepted', 'archived']).default('sent'),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(),
    password: z.string().optional(),
  }),
});

export const collections = { proposals };
