"use client";

import React from "react";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { createTopic } from "@/actions/create-topic";
import { useFormState } from "react-dom";
import FormBtn from "@/components/common/formBtn";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4">
            <h3 className="text-lg font-bold">Create a Topic</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Descride your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(",")}
            />

            {formState.errors._form ? (
              <div>{formState.errors._form?.join(", ")}</div>
            ) : null}
            <FormBtn>Create</FormBtn>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
