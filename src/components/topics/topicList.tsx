import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => (
    <div key={topic.id}>
      <Link href={paths.topic(topic.slug)}>
        <Chip variant="solid" color="secondary">
          {topic.slug}
        </Chip>
      </Link>
    </div>
  ));
  return (
    <section className="max-w-52 p-2 border border-gray-300 rounded shadow mt-4">
      <h1 className="text-lg font-semibold font-serif mb-2">Topic List</h1>
      <div className=" flex flex-wrap gap-2">{renderedTopics}</div>
    </section>
  );
};

export default TopicList;
