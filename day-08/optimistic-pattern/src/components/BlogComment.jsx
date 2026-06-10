import { useEffect, useMemo, useState, useOptimistic } from "react";

const POST_ID = 123;

const seedComments = [
  {
    id: 1,
    author: "Ava",
    text: "This is such a helpful post about optimistic UI.",
    createdAt: "2026-06-09T09:30:00.000Z",
  },
  {
    id: 2,
    author: "Leo",
    text: "I love how the comment list feels instant.",
    createdAt: "2026-06-09T10:10:00.000Z",
  },
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fakeFetchComments(postId) {
  return delay(300).then(() => ({ postId, comments: [...seedComments] }));
}

function fakePostComment(postId, text) {
  return delay(700).then(() => {
    if (text.toLowerCase().includes("fail")) {
      throw new Error("The server was unable to save this comment right now.");
    }

    const savedComment = {
      id: Date.now(),
      author: "You",
      text,
      createdAt: new Date().toISOString(),
    };

    seedComments.unshift(savedComment);

    return { postId, comment: savedComment };
  });
}

export default function BlogComment({ postId = POST_ID }) {
  const [comments, setComments] = useState([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, action) => {
      switch (action.type) {
        case "add":
          return [...currentComments, action.comment];
        case "replace":
          return currentComments.map((comment) =>
            comment.id === action.tempId ? action.comment : comment,
          );
        case "remove":
          return currentComments.filter(
            (comment) => comment.id !== action.tempId,
          );
        default:
          return currentComments;
      }
    },
  );

  useEffect(() => {
    let isMounted = true;

    async function loadComments() {
      setLoading(true);
      setErrorMessage("");

      try {
        const response = await fakeFetchComments(postId);
        if (isMounted) {
          setComments(response.comments);
        }
      } catch (error) {
        if (isMounted) {
          setErrorMessage("Unable to load comments right now.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadComments();

    return () => {
      isMounted = false;
    };
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const text = draft.trim();
    if (!text) return;

    const tempId = Date.now();
    const pendingComment = {
      id: tempId,
      author: "You",
      text,
      createdAt: new Date().toISOString(),
      pending: true,
    };

    setDraft("");
    setErrorMessage("");
    setComments((current) => [...current, pendingComment]);
    addOptimisticComment({ type: "add", comment: pendingComment });

    try {
      const response = await fakePostComment(postId, text);

      setComments((current) =>
        current.map((comment) =>
          comment.id === tempId ? response.comment : comment,
        ),
      );

      addOptimisticComment({
        type: "replace",
        tempId,
        comment: response.comment,
      });
    } catch (error) {
      setComments((current) =>
        current.filter((comment) => comment.id !== tempId),
      );
      addOptimisticComment({ type: "remove", tempId });
      setErrorMessage(error.message || "Your comment could not be sent.");
    }
  };

  const commentCountLabel = useMemo(() => {
    return `${optimisticComments.length} comment${optimisticComments.length === 1 ? "" : "s"}`;
  }, [optimisticComments.length]);

  return (
    <section className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
            Mini blog
          </p>
          <h2 className="text-2xl font-semibold text-white">Post comments</h2>
          <p className="text-sm text-slate-300">{commentCountLabel}</p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
          Optimistic UI
        </span>
      </div>

      {errorMessage ? (
        <div className="mb-4 rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-100">
          {errorMessage}
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 md:flex-row"
      >
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Write a comment…"
          className="flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-slate-400 focus:border-cyan-400"
        />
        <button
          type="submit"
          className="rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Add comment
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-slate-300">Loading comments…</p>
      ) : (
        <ul className="space-y-3">
          {optimisticComments.map((comment) => (
            <li
              key={comment.id}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-inner shadow-black/20"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <strong className="text-white">{comment.author}</strong>
                {comment.pending ? (
                  <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-xs text-amber-100">
                    Sending…
                  </span>
                ) : null}
              </div>
              <p className="text-slate-200">{comment.text}</p>
              <p className="mt-2 text-xs text-slate-400">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
