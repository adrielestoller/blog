import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  if (useLocation().pathname == "/") {
    return (
      <div className="w-full sticky top-0 bg-zinc-800">
        <div className="flex gap-5 border border-zinc-800">
          <a
            href="/"
            className="w-full max-w-xl py-3 bg-white text-right cursor-pointer transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:text-white"
          >
            <h2 className="mr-24 font-semibold text-4xl">Blog</h2>
          </a>
          <div className="w-full bg-zinc-800 box-border"></div>
        </div>
      </div>
    );
  } else {
    return (
      <a href="/">
        <div className="w-full sticky top-0 bg-zinc-800">
          <div className="flex gap-5 border border-zinc-800">
            <div className="w-full max-w-xl py-3 bg-white flex gap-4 items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:text-white">
              <button
                type="button"
                className="h-full w-full"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ArrowLeft className="ml-6 h-full w-10" />
              </button>
              <h1 className="mr-24 font-semibold text-4xl">Blog</h1>
            </div>
            <div className="w-full bg-zinc-800 box-border"></div>
          </div>
        </div>
      </a>
    );
  }
}
