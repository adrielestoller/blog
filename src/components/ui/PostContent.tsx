interface PostContentProps {
  content: string[];
}

export function PostContent({ content }: PostContentProps) {
  return (
    <article className="max-w-full my-4 text-xl text-justify tracking-wide leading-relaxed font-serif flex flex-col gap-2">
      {content.map((text) => (
        <p>{text}</p>
      ))}
    </article>
  );
}
