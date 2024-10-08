import PostCreateForm from "@/components/posts/postCreateForm";
import React from "react";
interface TopicShowProps {
  params: {
    slug: string;
  };
}
const PostShowPage = ({ params }: TopicShowProps) => {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-lg font-semibold">{slug}</h1>
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
};

export default PostShowPage;
