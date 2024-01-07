import { z, defineCollection, reference } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        author: reference("authors"),
        category: z.enum([
          "Internet",
          "5 To 9",
          "Inspirations",
          "Internet fix",
        ]),
        image: image(),
        draft: z.boolean(),
      }),
  }),
  authors: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        image: image(),
      }),
  }),
};
