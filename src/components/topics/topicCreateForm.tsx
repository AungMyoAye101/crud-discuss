import React from "react";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

const TopicCreateForm = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action="">
          <div className="flex flex-col gap-4 p-4">
            <h3 className="text-lg font-bold">Create a Topic</h3>
            <Input label="Title" labelPlacement="outside" placeholder="Title" />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Descride your topic"
            />
            <Button color="primary" variant="bordered">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
