import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <a className="m-0 h-auto" href="/">
      <div className="w-full sticky top-0 bg-zinc-800 z-50">
        <div className="flex gap-5 border border-zinc-800">
          <div className="w-full max-w-xl py-3 bg-white flex gap-4 items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:text-white">
            <h1 className="w-full mr-24 font-semibold text-right text-4xl">
              Blog
            </h1>
          </div>
          <div className="w-full bg-zinc-800 box-border"></div>
        </div>
      </div>
      <button
        type="button"
        className="absolute m-4 w-16 h-16 flex justify-center items-center cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:text-white"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowLeft className="h-full w-10" />
      </button>
    </a>
  );
}
