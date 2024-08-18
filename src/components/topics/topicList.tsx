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
        <Chip>{topic.slug}</Chip>
      </Link>
    </div>
  ));
  return <div>{renderedTopics}</div>;
};

export default TopicList;
