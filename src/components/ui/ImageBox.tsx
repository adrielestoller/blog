interface ImageBoxProps {
  url: string;
  description?: string;
}

export function ImageBox({ url, description }: ImageBoxProps) {
  return (
    <div className="w-full my-5 flex flex-col justify-center items-center">
      <img
        className="h-auto max-w-full rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:scale-105"
        src={url}
        alt="Image example"
      />
      <p className="italic mt-2 text-sm">{description}</p>
    </div>
  );
}
