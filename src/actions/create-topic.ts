"use server";

import { auth } from "@/auth";
import { strict } from "assert";
import { title } from "process";
import { z } from "zod";

const createTopicSchema = z.object({
  title: z
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
    _form?: string[];
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

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in"],
      },
    };
  }

  return {
    errors: {},
  };
};
