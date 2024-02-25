interface ImageBoxProps {
  url: string;
  description: string | null;
}

export function ImageBox({ url, description }: ImageBoxProps) {
  return (
    <div className="w-full my-5 flex flex-col justify-center items-center">
      <img className="h-auto max-w-full rounded-lg" src={url} alt="Image example" />
      <p className="italic mt-2 text-sm">{description}</p>
    </div>
  )
}