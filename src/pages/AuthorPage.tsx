import { Github, Instagram, Twitter } from "lucide-react";
import { Header } from "../components/Header";
import { InfoBox } from "../components/InfoBox";
import { PostCard } from "../components/PostCard";
import { BackToTopButton } from "../components/ui/BackToTopButton";
import { Footer } from "../components/Footer";

export function AuthorPage() {
  return (
    <>
      <Header />
      <main className="max-h-min max-w-3xl mx-auto my-12">
        <div className="flex gap-6">
          <img
            className="cursor-pointer rounded-full w-48 h-48 shadow transition-all duration-300 hover:shadow-lg hover:scale-105"
            src="https://media.discordapp.net/attachments/1207509084367102042/1211193520333791242/BLEACHJET.jpg?ex=65ed4ede&is=65dad9de&hm=ab1cb5bdec70ec582454af0c0eb004994ea842c37d06616e001bfbe765e22017&=&format=webp&width=458&height=458"
            alt="Author profile image"
          />
          <div>
            <h1 className="text-4xl font-semibold">Adriel Estoller</h1>
            <div className="my-2 flex gap-2 text-zinc-800">
              <a href="" target="_blank">
                <Instagram className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
              </a>
              <a href="" target="_blank">
                <Twitter className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
              </a>
              <a href="" target="_blank">
                <Github className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
              </a>
            </div>
            <p className="mt-4 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              vero dolore ipsam temporibus eaque voluptates ex. Doloremque
              maiores commodi cum perferendis aliquid ducimus consectetur,
              dolores, quisquam officiis, provident eum ratione!
            </p>
          </div>
        </div>

        <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-800"></hr>

        <InfoBox text="0000 - Mês" />
        <PostCard
          title="Título Interessante"
          date="00/00/0000, 00:00h"
          tags={["tag1", "tag2", "tag3"]}
        />
        <InfoBox text="0000 - Mês" />
        <PostCard
          title="Título Interessante"
          date="00/00/0000, 00:00h"
          tags={["tag1", "tag2", "tag3"]}
        />
        <PostCard
          title="Título Interessante"
          date="00/00/0000, 00:00h"
          tags={["tag1", "tag2", "tag3"]}
        />
        <PostCard
          title="Título Interessante"
          date="00/00/0000, 00:00h"
          tags={["tag1", "tag2", "tag3"]}
        />
        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
}
