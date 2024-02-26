import { Header } from "../components/Header";
import { ImageBox } from "../components/ui/ImageBox";
import { PostTagsList } from "../components/PostTagsList";
import { BackToTopButton } from "../components/ui/BackToTopButton";
import { Footer } from "../components/Footer";
import { PostTitle } from "../components/PostTitle";
import { PostContent } from "../components/PostContent";
import { AuthorSection } from "../components/AuthorSection";

export function PostPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto my-12">
        <PostTitle title="Título Interessante" date="00/00/0000, 00:00h" />

        <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-800"></hr>

        <ImageBox
          url="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Descrição da imagem exemplo"
        />

        <PostContent
          content={[
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolorem accusantium corporis a quam eveniet fugit facilis, natus dolorum ex? Dolorem aperiam dolorum excepturi architecto quibusdam numquam eos magni suscipit.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolorem accusantium corporis a quam eveniet fugit facilis, natus dolorum ex? Dolorem aperiam dolorum excepturi architecto quibusdam numquam eos magni suscipit.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolorem accusantium corporis a quam eveniet fugit facilis, natus dolorum ex? Dolorem aperiam dolorum excepturi architecto quibusdam numquam eos magni suscipit.",
          ]}
        />

        <div className="flex gap-1">
          <p>Tags: </p>
          <PostTagsList items={["tag1", "tag2", "tag2", "tag2"]} />
        </div>
      </main>

      <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-800"></hr>

      <AuthorSection
        name="Adriel Estoller"
        postDate="00/00/0000, 00:00h"
        imageURL="https://media.discordapp.net/attachments/1207509084367102042/1211193520333791242/BLEACHJET.jpg?ex=65ed4ede&is=65dad9de&hm=ab1cb5bdec70ec582454af0c0eb004994ea842c37d06616e001bfbe765e22017&=&format=webp&width=458&height=458"
        instagramURl="#"
        twitterURL="#"
        githubURL="#"
      />

      <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-800"></hr>

      <div className="max-w-3xl mx-auto my-12">Fórum</div>

      <BackToTopButton />
      <Footer />
    </>
  );
}
