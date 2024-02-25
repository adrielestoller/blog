import { Github, Instagram, Twitter } from "lucide-react";
import { Header } from "../components/Header";
import { ImageBox } from "../components/ImageBox";
import { PostCardTagsList } from '../components/PostCardTagsList';

export function PostPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto my-12">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Título Interessante</h1>
          <p className="text-xl italic">00/00/0000, 00:00h</p>
        </div>

        <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-800"></hr>

        <ImageBox url="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" description="Descrição da imagem exemplo" />

        <article className="max-w-full my-4 text-xl text-justify tracking-wide leading-relaxed font-serif flex flex-col gap-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
        </article>

        <div className="flex gap-1">
          <p>Tags: </p>
          <PostCardTagsList items={['tag1', 'tag2']} />
        </div>
      </main>

      <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-800"></hr>

      <footer className="max-w-3xl mx-auto my-12">
        <div className="flex gap-3 items-center">
          <img className="cursor-pointer rounded-full w-28 h-28 transition-all duration-300 hover:blur-sm hover:scale-105" src="https://media.discordapp.net/attachments/1207509084367102042/1211193520333791242/BLEACHJET.jpg?ex=65ed4ede&is=65dad9de&hm=ab1cb5bdec70ec582454af0c0eb004994ea842c37d06616e001bfbe765e22017&=&format=webp&width=458&height=458" alt="Author profile image" />
          <div>
            <p><span className="text-zinc-600">Autor: </span>Adriel Estoller</p>
            <p><span className="text-zinc-600">Postado em: </span>00/00/0000, às 00:00h</p>
            <div className="my-2 flex gap-2 text-zinc-600">
              <Instagram className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
              <Twitter className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
              <Github className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
            </div>
          </div>
        </div>
      </footer>

      <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-800"></hr>

      <div className="max-w-3xl mx-auto my-12">
        Fórum
      </div>
    </>
  )
}