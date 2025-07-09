import { FaHome, FaBuilding, FaChartBar, FaPhone } from 'react-icons/fa';

const services = [
  {
    title: "Residential Vastu",
    icon: <FaHome size={36} />,
    desc: "Vastu for homes, apartments, and villas. Includes floor plan analysis, remedies, and a personalized report to harmonize your living space."
  },
  {
    title: "Commercial Vastu",
    icon: <FaBuilding size={36} />,
    desc: "Vastu for offices, shops, and businesses. Improve productivity, prosperity, and workplace harmony with expert guidance."
  },
  {
    title: "Plot Selection",
    icon: <FaChartBar size={36} />,
    desc: "Guidance for selecting auspicious plots for construction. Ensure the foundation of your project is aligned with positive energies."
  },
  {
    title: "Online Consultation",
    icon: <FaPhone size={36} />,
    desc: "Remote Vastu guidance via video call and digital plans. Accessible support for clients anywhere in the world."
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-700">Our Vastu Consultations</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Unlock the power of Vastu Shastra for your home, business, or new project. Our certified consultants blend ancient wisdom with modern needs to deliver practical, effective, and personalized solutions for every space.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          Book Your Consultation
        </a>
      </section>

      {/* Our Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Our Process</h2>
        <div className="w-14 h-1 bg-yellow-400 rounded mb-6"></div>
        <ol className="list-decimal ml-8 text-gray-700 text-lg space-y-2">
          <li>
            <span className="font-semibold text-yellow-700">Initial Assessment:</span> We listen to your needs and review your property details or plans.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Site Visit or Online Review:</span> Our experts analyze your space in person or virtually, using advanced tools and Vastu principles.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Personalized Report & Remedies:</span> Receive a detailed, easy-to-follow report with tailored recommendations and practical remedies.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Ongoing Support:</span> We’re here to answer your questions and guide you through implementation.
          </li>
        </ol>
      </section>

      {/* Services Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-yellow-800 text-center">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(s => (
            <div
              key={s.title}
              className="bg-white border border-yellow-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition hover:shadow-lg"
            >
              <div className="mb-4 text-yellow-500">{s.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-yellow-800">{s.title}</h3>
              <p className="text-gray-700 mb-4">{s.desc}</p>
              <a
                href="/contact"
                className="mt-auto inline-block bg-yellow-400 text-white px-5 py-2 rounded-full font-semibold hover:bg-yellow-700 transition"
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-yellow-800">Why Choose Vastu Harmony?</h2>
        <div className="w-14 h-1 bg-yellow-400 rounded mb-6"></div>
        <ul className="list-disc ml-8 text-gray-700 text-lg space-y-2">
          <li>
            <span className="font-semibold text-yellow-700">Certified, Experienced Consultants:</span> Our team brings years of hands-on expertise and formal training.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Comprehensive Analysis:</span> We consider every aspect—direction, layout, energy flow, and your unique needs.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Practical, Actionable Remedies:</span> Solutions that fit your lifestyle and budget.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Confidential & Supportive:</span> Your privacy is respected, and we’re always here to help.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          Start Your Vastu Journey
        </a>
      </section>
    </div>
  );
}

