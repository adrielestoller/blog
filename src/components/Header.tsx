export function Header() {
  return (
    <a href="/">
      <div className="w-full sticky top-0 bg-zinc-800">
        <div className="flex gap-5 border border-zinc-800">
          <div className="w-full max-w-xl py-3 text-right bg-white cursor-pointer transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:text-white">
            <h1 className="mr-24 font-semibold text-4xl">Blog</h1>
          </div>
          <div className="w-full bg-zinc-800 box-border">
          </div>
        </div>
      </div>
    </a>
  )
} 