import { Github, Instagram, Twitter } from "lucide-react";

interface AuthorSectionProps {
  name: string;
  imageURL: string;
  postDate: string;
  instagramURl: string;
  twitterURL: string;
  githubURL: string;
}

export function AuthorSection({
  name,
  imageURL,
  postDate,
  instagramURl,
  twitterURL,
  githubURL,
}: AuthorSectionProps) {
  return (
    <>
      <section className="max-w-3xl mx-auto my-12">
        <div className="flex gap-3 items-center">
          <a href="/author">
            <img
              className="cursor-pointer rounded-full w-28 h-28 transition-all duration-300 hover:blur-sm hover:scale-105"
              src={imageURL}
              alt="Author profile image"
            />
          </a>
          <div className="flex flex-col gap-1">
            <p>
              <span className="text-zinc-600 ">Autor: </span>
              <span className="border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600">
                {name}
              </span>
            </p>
            <p>
              <span className="text-zinc-600">Postado em: </span>
              <span className="border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600">
                {postDate}
              </span>
            </p>
            <div className="my-2 flex gap-2 text-zinc-600">
              <a href={instagramURl} target="_blank">
                <Instagram className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
              </a>
              <a href={twitterURL} target="_blank">
                <Twitter className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
              </a>
              <a href={githubURL} target="_blank">
                <Github className="cursor-pointer border-transparent border-b-2 transition-all duration-150 ease-linear hover:border-zinc-600 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
