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
const PostCreateForm = () => {
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
          <Button variant="solid" color="secondary">
            Create
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
