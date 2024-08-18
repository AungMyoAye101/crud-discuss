"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";
import type { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostPrps {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}
export const createPost = async (
  slug: string,
  formState: CreatePostPrps,
  formData: FormData
): Promise<CreatePostPrps> => {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
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
        _form: ["You must be sign in"],
      },
    };
  }

  return {
    errors: {},
  };
};
