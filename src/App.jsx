import GithubApiComp from "./components/githubApi/GithubApiComp";

export default function App() {
  return (
    <>
      <header className="bg-blue-600 text-light py-3 text-center">
        <h1 className="text-5xl italic ">Github Api With Redux Toolkit</h1>
      </header>
      <main className="max-w-[1000px] min-h-[500px] mx-auto">
        <GithubApiComp />
      </main>
      <footer className="bg-red-700 text-center py-5">
        <h1 className="text-2xl italic">Copy Rights 2024 </h1>
      </footer>
    </>
  );
}
