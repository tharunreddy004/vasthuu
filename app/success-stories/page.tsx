import Gallery from '../../components/Gallery'
import TestimonialCard from '../../components/TestimonialCard'
import type { FC } from 'react'

const images = [
  { src: '/images/success1.webp', alt: 'Living Room After Vastu' },
  { src: '/images/success2.jpg', alt: 'Office After Vastu' },
  { src: '/images/success3.jpg', alt: 'Home Entrance' },
  { src: '/images/success4.avif', alt: 'Balanced Workspace' },
]

const SuccessStories: FC = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-8 text-yellow-700 text-center">Our Success Stories</h1>

      {/* Impact Section */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Vastu&apos;s Positive Impact</h2>
        <div className="w-16 h-1 bg-yellow-400 rounded mx-auto mb-5" />
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Our clients have experienced remarkable transformations in their homes and workplaces. Discover how Vastu Harmony has brought peace, prosperity, and growth to families and businesses across the country.
        </p>
      </section>

      {/* Case Studies */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-yellow-800 mb-8 text-center">Real Vastu Transformations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Case Study */}
          <article className="bg-yellow-100 rounded-2xl p-8 shadow-lg md:col-span-2 border-l-4 border-yellow-400 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl text-yellow-700 mb-2">Featured: Family Harmony Restored</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-yellow-800">Background:</span> The Sharma family faced frequent arguments, sleep issues, and declining health after moving into a new apartment.
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-yellow-800">Process:</span> Comprehensive energy mapping, bedroom reorientation, and simple Vastu remedies like shifting the pooja room and adding plants.
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-yellow-800">Outcome:</span> Noticeable improvement in family relationships, restful sleep, and a warm, peaceful home environment.
              </p>
            </div>
            <blockquote className="italic text-yellow-700 mt-4 border-l-4 border-yellow-400 pl-4">
              “We felt the difference within weeks. Our home is now truly a place of comfort and joy.”<br />
              <span className="font-semibold">– Mrs. Sharma</span>
            </blockquote>
          </article>

          {/* Other Case Studies */}
          {[
            {
              title: 'Office Prosperity',
              problem: 'Stagnant business growth and low morale.',
              solution: 'Vastu-compliant layout, energy balancing, and workspace decluttering.',
              outcome: 'Increased productivity, higher profits, and improved team spirit.',
              testimonial: '“Our office feels vibrant and focused!”',
            },
            {
              title: 'Shop Success',
              problem: 'Low customer footfall and poor sales.',
              solution: 'Entrance reorientation, cash counter placement, and color remedies.',
              outcome: 'Sales increased by 40% within two months, with many repeat customers.',
              testimonial: '“We’re busier than ever, thanks to Vastu Harmony!”',
            },
            {
              title: 'Plot Selection',
              problem: 'Anxiety over choosing the right land for a new home.',
              solution: 'Vastu analysis of several plots, guidance on direction and soil, and selection support.',
              outcome: 'Confident purchase and a smooth start to construction.',
              testimonial: '“We found the perfect plot—thank you for your expert advice!”',
            },
            {
              title: 'Apartment Wellbeing',
              problem: 'Persistent health issues and lack of motivation.',
              solution: 'Kitchen and bedroom adjustments, use of natural light, and minor decor changes.',
              outcome: 'Family health improved and a renewed sense of energy at home.',
              testimonial: '“Simple changes made a huge difference in our daily lives.”',
            },
          ].map(({ title, problem, solution, outcome, testimonial }) => (
            <article key={title} className="bg-yellow-50 rounded-xl p-6 shadow flex flex-col">
              <h3 className="font-bold text-yellow-700 mb-2">{title}</h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold text-yellow-800">Problem:</span> {problem}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold text-yellow-800">Solution:</span> {solution}
              </p>
              <p className="text-gray-700 flex-1">
                <span className="font-semibold text-yellow-800">Outcome:</span> {outcome}
              </p>
              <span className="italic text-yellow-700 mt-2">{testimonial}</span>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800 text-center">Gallery</h2>
        <div className="w-16 h-1 bg-yellow-400 rounded mx-auto mb-6" />
        <Gallery images={images} />
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800 text-center">What Our Clients Say</h2>
        <div className="w-16 h-1 bg-yellow-400 rounded mx-auto mb-6" />
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Priya S."
            quote="After the consultation, my family life improved dramatically!"
          />
          <TestimonialCard
            name="Rohit K."
            quote="Our business flourished after following their Vastu advice."
          />
          <TestimonialCard
            name="Meera J."
            quote="The team was professional, empathetic, and truly knowledgeable."
          />
          <TestimonialCard
            name="Sanjay D."
            quote="Their remedies were simple yet effective—highly recommended!"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          Share Your Success Story
        </a>
      </section>
    </main>
  )
}

export default SuccessStories


