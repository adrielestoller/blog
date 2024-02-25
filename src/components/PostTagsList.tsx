export interface PostTagsListProps {
  items: string[];
}

export function PostTagsList(props: PostTagsListProps) {
  const { items } = props;

  return (
    <>
      <div className="flex flex-wrap gap-1 font-semibold ">
        {items.map((item, index) => (
          <span key={index} className="relative">
            <span className="absolute inset-0 cursor-pointer border-transparent border-b-2 ease-linear hover:border-zinc-600" />
            {item}
          </span>
        ))}
      </div>
    </>
  )
}