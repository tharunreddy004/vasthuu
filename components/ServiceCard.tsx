import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  link?: string;
  linkLabel?: string;
}

export default function ServiceCard({
  title,
  icon,
  description,
  link = '#',
  linkLabel = 'Learn More',
}: ServiceCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-md border border-yellow-100 transition hover:shadow-lg">
      {/* Icon area */}
      <div className="flex justify-center items-center h-32 bg-yellow-50">
        <span className="text-yellow-500 text-5xl">{icon}</span>
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-yellow-800">{title}</h5>
        <p className="mb-6 text-gray-700 text-base flex-1">{description}</p>
        <a
          href={link}
          className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
        >
          {linkLabel}
          <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
