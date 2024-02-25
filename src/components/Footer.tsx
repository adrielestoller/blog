import { CreativeCommons, Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="h-20 w-screen flex flex-col gap-2 items-center justify-center text-white bg-zinc-800">
      <div className="flex gap-1">
        <CreativeCommons className="w-4 text-md" />
        <p>2024 Adriel Estoller. Todos os Direitos Reservados.</p>
      </div>
      <div className="flex gap-4">
        <a href="https://www.instagram.com/adrielestoller_/" target="_blank">
          <Instagram className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-white hover:scale-110" />
        </a>
        <a href="https://twitter.com/adrielestoller_" target="_blank">
          <Twitter className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-white hover:scale-110" />
        </a>
        <a href="https://github.com/adrielestoller" target="_blank">
          <Github className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-white hover:scale-110" />
        </a>
      </div>
    </footer>
  );
}
