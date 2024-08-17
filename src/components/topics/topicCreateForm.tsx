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
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Descride your topic"
            />
            <Button type="submit" color="primary" variant="bordered">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
