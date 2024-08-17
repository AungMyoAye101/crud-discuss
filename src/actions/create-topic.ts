"use server";

import { title } from "process";
import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "Must be lowercase leter",
    }),
  description: z.string().min(10),
});
export const createTopic = async (formStae: number, formData: FormData) => {
  const result = createTopicSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }

  return 5;
};
