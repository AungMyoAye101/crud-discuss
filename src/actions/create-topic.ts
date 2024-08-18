"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

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

  let topic: Topic;

  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.title,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }
  revalidatePath("/");
  redirect(paths.topic(topic.slug));
  return {
    errors: {},
  };
};
