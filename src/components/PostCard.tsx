import { PostCardTagsList } from "./PostCardTagsList";

interface PostCardProps {
  title: string;
  date: string;
  tags: string[];
}

export function PostCard({ title, date, tags }: PostCardProps) {
  return (
    <div className="p-3 my-5 flex flex-col gap-3 rounded-md bg-zinc-200 shadow transition-transform duration-300 hover:shadow-md hover:scale-105">
      <a href="/post">
        <h3 className="w-fit font-bold text-xl cursor-pointer transition-all duration-150 hover:text-zinc-600">
          {title}
        </h3>
      </a>
      <div className="mr-2 flex gap-1 justify-between">
        <p>{date}</p>
        <PostCardTagsList items={tags} />
      </div>
    </div>
  );
}
