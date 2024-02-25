import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (showButton) {
    return (
      <button className="fixed z-90 bottom-10 right-8 bg-zinc-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-zinc-800 hover:drop-shadow-2xl duration-300"
        onClick={handleScrollToTop}>
        <ArrowUp className="h-10 w-10" />
      </button>
    )
  } else {
    return (
      <></>
    )
  }
}