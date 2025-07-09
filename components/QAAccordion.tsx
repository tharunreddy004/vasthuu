"use client";
import { useState } from 'react';

interface QA {
  question: string;
  answer: string;
}

interface QAAccordionProps {
  items: QA[];
}

export default function QAAccordion({ items }: QAAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border rounded">
          <button
            className="w-full text-left px-4 py-3 font-semibold focus:outline-none"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            {item.question}
          </button>
          {open === idx && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
