import { Header } from "./../components/Header";
import { InfoBox } from "./../components/InfoBox";
import { PostCard } from "./../components/PostCard";
import { BackToTopButton } from '../components/BackToTopButton';
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto my-12">
        <InfoBox text="0000 - Mês" />
        <PostCard title="Título Interessante" date="00/00/0000, 00:00h" tags={['tag1', 'tag2', 'tag3']} />
        <InfoBox text="0000 - Mês" />
        <PostCard title="Título Interessante" date="00/00/0000, 00:00h" tags={['tag1', 'tag2', 'tag3']} />
        <PostCard title="Título Interessante" date="00/00/0000, 00:00h" tags={['tag1', 'tag2', 'tag3']} />
        <PostCard title="Título Interessante" date="00/00/0000, 00:00h" tags={['tag1', 'tag2', 'tag3']} />
        <BackToTopButton />
      </main>
      <Footer />
    </>
  )
}