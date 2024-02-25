import { Header } from "../components/Header";
import { ImageBox } from "../components/ImageBox";

export function PostPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto my-12">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Título Interessante</h1>
          <p className="text-xl italic">00/00/0000, 00:00h</p>
        </div>

        <ImageBox url="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" description="Descrição da imagem exemplo" />

        <article className="max-w-full my-4 text-xl text-justify tracking-wide leading-relaxed font-serif flex flex-col gap-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
        </article>
      </main>
    </>
  )
}