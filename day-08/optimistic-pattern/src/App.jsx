import BlogComment from "./components/BlogComment";

function App() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#020617_0%,#111827_45%,#172554_100%)] px-4 py-10 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
            Day 08
          </p>
          <h1 className="text-4xl font-semibold">Optimistic comments</h1>
          <p className="mt-2 text-slate-300">
            Submit a comment and see the optimistic update in action.
          </p>
        </header>

        <BlogComment postId={123} />
      </div>
    </main>
  );
}

export default App;
