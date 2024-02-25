import { ArrowRight } from "lucide-react";

export interface PostTagsListProps {
  items: string[];
}

export function PostTagsList(props: PostTagsListProps) {
  const { items } = props;
  const displayedItems = items.slice(0, 5); // Pegue apenas os primeiros cinco itens

  return (
    <>
      <div className="flex gap-1">
        {displayedItems.map((item, index) => (
          <span key={index} className="relative">
            <span className="absolute inset-0 cursor-pointer border-transparent border-b-2 ease-linear hover:border-zinc-600" />
            {item}
          </span>
        ))}
        {items.length > 5 && (
          <>
            <ArrowRight className="cursor-pointer text-zinc-800 hover:text-zinc-600" />
          </>
        )}
      </div>
    </>
  )
}