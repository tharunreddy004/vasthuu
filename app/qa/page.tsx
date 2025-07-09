// import QAAccordion from '../../components/QAAccordion'

// const qaItems = [
//   {
//     question: "What is Vastu Shastra?",
//     answer: "Vastu Shastra is an ancient Indian science of architecture that promotes harmony and prosperity through spatial arrangement."
//   },
//   {
//     question: "How do I book a consultation?",
//     answer: "You can book a consultation by filling out our contact form or messaging us on WhatsApp."
//   },
//   {
//     question: "Do you offer online consultations?",
//     answer: "Yes, we offer remote consultations via video call and digital floor plans."
//   },
//   {
//     question: "How much does a consultation cost?",
//     answer: "Please contact us for personalized pricing based on your property and requirements."
//   }
// ];

// export default function QA() {
//   return (
//     <main className="container mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-6 text-green-700">Questions & Answers</h1>
//       <section className="mb-8">
//         <QAAccordion items={qaItems} />
//       </section>
//       <section className="text-center">
//         <p className="font-semibold text-gray-700">
//           Didn’t find your answer? <a href="/contact" className="text-green-700 underline">Contact Us!</a>
//         </p>
//       </section>
//     </main>
//   )
// }



import QAAccordion from '../../components/QAAccordion'

const qaItems = [
  {
    question: "What is Vastu Shastra?",
    answer: "Vastu Shastra is an ancient Indian science of architecture that promotes harmony and prosperity through spatial arrangement."
  },
  {
    question: "How do I book a consultation?",
    answer: "You can book a consultation by filling out our contact form or messaging us on WhatsApp."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer remote consultations via video call and digital floor plans."
  },
  {
    question: "How much does a consultation cost?",
    answer: "Please contact us for personalized pricing based on your property and requirements."
  },
  {
    question: "Is Vastu only for new constructions?",
    answer: "No, Vastu can be applied to existing spaces as well. Our experts suggest practical remedies for both new and established properties."
  },
  {
    question: "Will Vastu changes require major renovations?",
    answer: "Not always. Many Vastu remedies are simple, non-intrusive, and can be implemented without major structural changes."
  },
  {
    question: "Are your consultants certified?",
    answer: "Yes, all our consultants are certified and have years of experience in Vastu and related sciences."
  }
];

export default function QA() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Hero/Intro */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-700">Questions & Answers</h1>
        <div className="w-16 h-1 bg-yellow-400 rounded mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Curious about Vastu or our services? Explore our frequently asked questions below. If you need more information, we’re always here to help!
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="mb-12">
        <QAAccordion items={qaItems} />
      </section>

      {/* More Help / Contact */}
      <section className="text-center mb-12">
        <div className="inline-block bg-yellow-50 px-6 py-4 rounded-xl shadow">
          <p className="font-semibold text-gray-700 mb-2">
            Didn’t find your answer?
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-700 transition"
          >
            Contact Us!
          </a>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Want to Learn More?</h2>
        <p className="text-gray-700 mb-4 max-w-xl mx-auto">
          Visit our <a href="/about" className="text-yellow-700 underline font-semibold">About Us</a> page to discover our story, expertise, and how Vastu Harmony can help you create balanced, prosperous spaces.
        </p>
        <a
          href="/services"
          className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          Explore Our Services
        </a>
      </section>
    </main>
  )
}
