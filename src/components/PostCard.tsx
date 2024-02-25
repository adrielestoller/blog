import { PostCardTagsList } from './PostCardTagsList';

interface PostCardProps {
  title: string;
  date: string;
  tags: string[];
}


export function PostCard({ title, date, tags }: PostCardProps) {
  return (
    <div className="p-3 my-5 flex flex-col gap-3 rounded-md bg-zinc-300 shadow transition-transform duration-300 hover:shadow-2xl hover:scale-105">
      <h3 className="w-fit font-bold text-xl cursor-pointer transition-all duration-150 hover:text-zinc-600">{title}</h3>
      <div className="mr-2 flex gap-1 justify-between">
        <p>{date}</p>
        <PostCardTagsList items={tags} />
      </div>
    </div>
  );
}