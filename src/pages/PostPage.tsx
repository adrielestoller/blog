import { Header } from "../components/Header";

export function PostPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto my-12">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Título Interessante</h1>
          <p className="text-xl italic">00/00/0000, 00:00h</p>
        </div>
        <article className="my-4 text-lg font-serif flex flex-col gap-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque quae provident corrupti quaerat voluptatem repudiandae cumque! A enim rerum mollitia sit ipsum earum, expedita eos, cupiditate adipisci neque voluptas.</p>
        </article>
      </main>
    </>
  )
}