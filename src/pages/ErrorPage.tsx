import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen text-lg text-zinc-700 flex flex-col gap-2 items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-zinc-800">404</h1>
      <h2>Oops! Page not found</h2>
      <p>Sorry, the page you are looking doesn't exist.</p>
      <button
        className="w-36 mt-4 py-2 rounded-lg text-white font-semibold bg-zinc-400 transition ease-in-out delay-150 duration-300 hover:bg-zinc-800 hover:scale-110"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}
