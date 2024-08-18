"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import FormBtn from "../common/formBtn";
import { createPost } from "@/actions/create-post";
import { db } from "@/db";

interface PostCreateFormProps {
  slug: string;
}

const PostCreateForm = async ({ slug }: PostCreateFormProps) => {
  const [formState, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });

  const topic = await db.topic.findFirst({
    where: { slug },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Cannot find Topic"],
      },
    };
  }
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form className="flex flex-col gap-2 p-2 mt-2">
          <Input
            name="title"
            label="Title"
            labelPlacement="outside"
            placeholder="title"
          />
          <Input
            name="content"
            label="Content"
            labelPlacement="outside"
            placeholder="Content"
          />
          {formState.errors._form ? (
            <div>{formState.errors._form.join()}</div>
          ) : null}
          <FormBtn>Create</FormBtn>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
