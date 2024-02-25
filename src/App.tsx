import { Header } from "./components/Header";
import { InfoBox } from "./components/InfoBox";

export function App() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto my-12">
        <InfoBox text="0000 - Mês" />
      </main>
    </>
  )
}