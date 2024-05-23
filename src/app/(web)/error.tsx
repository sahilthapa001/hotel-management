"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto">
      <h2 className="font-heading tex-red-800 mb-10">Something went wrong!</h2>
      <button className="btn-primary" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
