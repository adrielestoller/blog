interface PostTitleProps {
  title: string;
  date: string;
}

export function PostTitle({ title, date }: PostTitleProps) {
  return (
    <>
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl italic">{date}</p>
      </div>
    </>
  );
}
