// export default function About() {
//   return (
//     <main className="container mx-auto px-4 py-12 max-w-3xl">
//       <h1 className="text-4xl font-bold mb-8 text-yellow-700 text-center">
//         About Us
//       </h1>

//       {/* Our Story */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Our Story</h2>
//         <div className="w-14 h-1 bg-yellow-400 rounded mb-5"></div>
//         <p className="text-gray-700 text-lg leading-relaxed">
//           Founded by a collective of passionate Vastu practitioners, Vastu Harmony began with a vision to bring balance, prosperity, and positivity to every space. Over the past decade, our team has guided hundreds of families and businesses towards harmonious living and working environments, blending ancient wisdom with modern lifestyles.
//         </p>
//       </section>

//       {/* Mission & Vision */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Mission & Vision</h2>
//         <div className="w-14 h-1 bg-yellow-400 rounded mb-5"></div>
//         <p className="text-gray-700 text-lg leading-relaxed">
//           Our mission is to make authentic Vastu accessible and practical for everyone—regardless of background or location. We envision a world where every home and workplace radiates positive energy, supporting health, happiness, and abundance for all.
//         </p>
//       </section>

//       {/* Expertise & Approach */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Expertise & Approach</h2>
//         <div className="w-14 h-1 bg-yellow-400 rounded mb-5"></div>
//         <ul className="list-disc ml-6 text-gray-700 text-lg space-y-2">
//           <li>
//             <span className="font-semibold text-yellow-700">Certified Vastu Consultants:</span> Our experts are formally trained and certified, ensuring you receive the most accurate guidance.
//           </li>
//           <li>
//             <span className="font-semibold text-yellow-700">Blending Tradition & Innovation:</span> We combine time-tested Vastu Shastra principles with modern design and technology for practical solutions.
//           </li>
//           <li>
//             <span className="font-semibold text-yellow-700">Personalized Consultations:</span> Every client receives a tailored approach based on their unique needs, space, and aspirations.
//           </li>
//           <li>
//             <span className="font-semibold text-yellow-700">Confidential & Respectful:</span> Your privacy and beliefs are always honored.
//           </li>
//         </ul>
//       </section>

//       {/* Meet Our Team */}
//       <section className="mb-10 text-center">
//         <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Meet Our Team</h2>
//         <div className="w-14 h-1 bg-yellow-400 rounded mx-auto mb-6"></div>
//         <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-10">
//           <div className="flex flex-col items-center">
//             <img
//               src="/images/team.jpg"  
//               alt="Our Team"
//               className="w-32 h-32 object-cover rounded-full shadow-md border-4 border-yellow-100 mb-2"
//             />
//             <p className="font-bold text-yellow-700">[Your Name]</p>
//             <p className="text-gray-600 text-sm">Chief Vastu Consultant</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="/images/team2.jpg"
//               alt="Astrology Expert"
//               className="w-32 h-32 object-cover rounded-full shadow-md border-4 border-yellow-100 mb-2"
//             />
//             <p className="font-bold text-yellow-700">[Astrology Expert]</p>
//             <p className="text-gray-600 text-sm">Astrology & Remedies Specialist</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="/images/team3.jpg"
//               alt="Support Specialist"
//               className="w-32 h-32 object-cover rounded-full shadow-md border-4 border-yellow-100 mb-2"
//             />
//             <p className="font-bold text-yellow-700">[Support Specialist]</p>
//             <p className="text-gray-600 text-sm">Client Support & Research</p>
//           </div>
//         </div>
//         <p className="text-gray-700 mt-6">
//           Our team is united by a shared passion for helping you create a space that supports your dreams and well-being.
//         </p>
//       </section>

//       {/* Call to Action */}
//       <section className="text-center mt-12">
//         <a
//           href="/contact"
//           className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
//         >
//           Connect With Us
//         </a>
//       </section>
//     </main>
//   );
// }

import React from 'react'

import Image from 'next/image'

export default function About(): React.JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-yellow-700 text-center">
        About Us
      </h1>

      {/* Our Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Our Story</h2>
        <div className="w-14 h-1 bg-yellow-400 rounded mb-5" />
        <p className="text-gray-700 text-lg leading-relaxed">
          Founded by a collective of passionate Vastu practitioners, Vastu Harmony began with a vision to bring balance, prosperity, and positivity to every space. Over the past decade, our team has guided hundreds of families and businesses towards harmonious living and working environments, blending ancient wisdom with modern lifestyles.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Mission &amp; Vision</h2>
        <div className="w-14 h-1 bg-yellow-400 rounded mb-5" />
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to make authentic Vastu accessible and practical for everyone&mdash;regardless of background or location. We envision a world where every home and workplace radiates positive energy, supporting health, happiness, and abundance for all.
        </p>
      </section>

      {/* Expertise & Approach */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Expertise &amp; Approach</h2>
        <div className="w-14 h-1 bg-yellow-400 rounded mb-5" />
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-2">
          <li>
            <span className="font-semibold text-yellow-700">Certified Vastu Consultants:</span> Our experts are formally trained and certified, ensuring you receive the most accurate guidance.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Blending Tradition &amp; Innovation:</span> We combine time-tested Vastu Shastra principles with modern design and technology for practical solutions.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Personalized Consultations:</span> Every client receives a tailored approach based on their unique needs, space, and aspirations.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Confidential &amp; Respectful:</span> Your privacy and beliefs are always honored.
          </li>
        </ul>
      </section>

      {/* Meet Our Team */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Meet Our Team</h2>
        <div className="w-14 h-1 bg-yellow-400 rounded mx-auto mb-6" />
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-10">
          <div className="flex flex-col items-center">
            <Image
              src="/images/team.jpg"
              alt="Our Team"
              width={128}
              height={128}
              className="object-cover rounded-full shadow-md border-4 border-yellow-100 mb-2"
              priority
            />
            <p className="font-bold text-yellow-700">[Your Name]</p>
            <p className="text-gray-600 text-sm">Chief Vastu Consultant</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/team2.jpg"
              alt="Astrology Expert"
              width={128}
              height={128}
              className="object-cover rounded-full shadow-md border-4 border-yellow-100 mb-2"
              priority
            />
            <p className="font-bold text-yellow-700">[Astrology Expert]</p>
            <p className="text-gray-600 text-sm">Astrology &amp; Remedies Specialist</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/team3.jpg"
              alt="Support Specialist"
              width={128}
              height={128}
              className="object-cover rounded-full shadow-md border-4 border-yellow-100 mb-2"
              priority
            />
            <p className="font-bold text-yellow-700">[Support Specialist]</p>
            <p className="text-gray-600 text-sm">Client Support &amp; Research</p>
          </div>
        </div>
        <p className="text-gray-700 mt-6">
          Our team is united by a shared passion for helping you create a space that supports your dreams and well-being.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          Connect With Us
        </a>
      </section>
    </main>
  )
}
