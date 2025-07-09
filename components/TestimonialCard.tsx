interface TestimonialCardProps {
  name: string;
  quote: string;
}

export default function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <div className="relative bg-white border-l-4 border-yellow-400 p-6 rounded-xl shadow-md max-w-lg mx-auto">
      {/* Quotation mark icon */}
      <svg
        className="absolute -top-4 left-4 w-8 h-8 text-yellow-300 opacity-70"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7.17 9A4.17 4.17 0 003 13.17V17a2 2 0 002 2h2a2 2 0 002-2v-4A4 4 0 007.17 9zm9 0A4.17 4.17 0 0012 13.17V17a2 2 0 002 2h2a2 2 0 002-2v-4A4 4 0 0016.17 9z" />
      </svg>
      <p className="italic text-gray-800 mb-4 mt-2">&ldquo;{quote}&rdquo;</p>
      <div className="font-semibold text-yellow-700">{name}</div>
    </div>
  );
}
