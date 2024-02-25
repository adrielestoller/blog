interface InfoBoxProps {
  text: string;
}

export function InfoBox({ text }: InfoBoxProps) {
  return (
    <div className="w-60 p-3 my-5 font-bold text-center text-xl cursor-pointer rounded-lg bg-zinc-800 text-white">
      <h2>{text}</h2>
    </div>
  );
}
