import TopicCreateForm from "@/components/topics/topicCreateForm";
import TopicList from "@/components/topics/topicList";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-4 ">
      <div className="col-span-3">
        <h1>Top Posts </h1>
      </div>
      <div>
        <TopicCreateForm />
        <TopicList />
      </div>
    </main>
  );
}
