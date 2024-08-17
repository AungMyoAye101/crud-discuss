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

interface CreateTopicFormState {
  errors: {
    title?: string[];
    description?: string[];
  };
}

export const createTopic = async (
  formStae: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> => {
  const result = createTopicSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {},
  };
};
