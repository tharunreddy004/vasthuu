import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { FaHome, FaBuilding, FaChartBar, FaPhone } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero */}
      <section className="bg-yellow-50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
            Harmonize Your Space with Vastu
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-700">
            Transform your home, office, and life with authentic Vastu consultations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-700 transition"
          >
            Book Consultation
          </a>
        </div>
      </section>

      {/* Vastu Intro */}
      <section className="mb-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 text-yellow-800">What is Vastu?</h2>
            <div className="w-16 h-1 bg-yellow-400 rounded mb-6 md:mx-0 mx-auto"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-yellow-700">Vastu Shastra</span> is an ancient Indian system of architecture and design that guides how to build spaces—like homes, offices, and temples—in harmony with natural energies. It’s often referred to as the <span className="italic">“science of architecture”</span> and aims to bring health, prosperity, peace, and spiritual growth by aligning structures with the elements and directions of nature.
              <br className="hidden md:block" />
              <br />
              We blend traditional principles with modern needs to create balanced and prosperous spaces.
            </p>
          </div>
          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/images/vastu-intro.webp" // <-- Replace with your image path /images/vastu-intro.jpg
              alt="Vastu Illustration"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-xl shadow-lg border-4 border-yellow-100"
            />
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-yellow-800 text-center">
          Our Top Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Home Vastu"
            icon={<FaHome size={48} />}
            description="Personalized Vastu for homes and apartments. Vastu for Home is the art and science of designing your living space in alignment with natural energies. By following Vastu Shastra principles, you invite peace, prosperity, good health, and positive vibrations into your home."
            link="/services"
            linkLabel="Learn More"
          />
          <ServiceCard
            title="Office Vastu"
            icon={<FaBuilding size={48} />}
            description="Optimize your workplace for success. A Vastu-compliant office creates a balanced environment where ideas flow freely, decisions are strong, and business growth becomes natural. Whether it’s a startup, corporate office, or home workspace, Vastu Shastra helps align your workplace with cosmic energy to attract success, stability, and productivity."
            link="/services"
            linkLabel="Learn More"
          />
          <ServiceCard
            title="Plot Analysis"
            icon={<FaChartBar size={48} />}
            description="Select the best plot for your needs. A good building starts with the right land. In Vastu Shastra, plot selection and analysis are considered the most crucial step before construction. The shape, slope, soil, direction, and energy of the land directly influence your health, success, relationships, and financial growth."
            link="/services"
            linkLabel="Learn More"
          />
          <ServiceCard
            title="Online Consultation"
            icon={<FaPhone size={48} />}
            description="Remote Vastu guidance via video call. Don’t let distance or a busy schedule stop you from living in harmony with universal energies. With our Online Consultations, you can now receive expert advice from anywhere in the world — from the comfort of your home. Whether you're buying a plot, building, renovating, or resolving issues in health, wealth, or relationships — our online consultations are tailored and effective."
            link="/services"
            linkLabel="Learn More"
          />
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-800">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">Authentic Vastu & Astrology Expertise</h3>
            <p className="text-gray-700">
              Our application is built in collaboration with certified Vastu consultants and experienced astrologers who follow time-tested principles. We deliver accurate insights tailored to your birth details and property layout, ensuring personalized and meaningful recommendations.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">Secure & Confidential</h3>
            <p className="text-gray-700">
              Your spiritual journey is personal, and we treat it that way. All data you share with us—birth details, home plans, or preferences—is fully encrypted and never shared.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">Tradition Meets Innovation</h3>
            <p className="text-gray-700">
              We combine ancient Indian wisdom with modern design to bring you a trusted, easy-to-use app that honors tradition while embracing the future.
            </p>
          </div>
        </div>
      </section>



      {/* Plans */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-800">Vastu Plans for Every Space</h2>
        <p className="text-gray-700 mb-8">
          We offer tailored Vastu plans for homes, offices, shops, and all types of building layouts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Home Plan */}
          <div className="flex flex-col items-center p-6 bg-yellow-50 hover:bg-yellow-100 transition rounded-lg">
            <span className="mb-4 text-yellow-500 text-5xl">
              {/* Home icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 001 1h3m-10 0h4" />
              </svg>
            </span>
            <span className="text-lg font-semibold text-yellow-800 mb-1">Home Vastu Plans</span>
            <span className="text-gray-700 text-center text-base">
              Personalized layouts and remedies for apartments, villas, and independent houses.
            </span>
          </div>
          {/* Office Plan */}
          <div className="flex flex-col items-center p-6 bg-yellow-50 hover:bg-yellow-100 transition rounded-lg">
            <span className="mb-4 text-yellow-500 text-5xl">
              {/* Office icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 21h16M4 17h16M4 13h16M4 9h16M4 5h16" />
              </svg>
            </span>
            <span className="text-lg font-semibold text-yellow-800 mb-1">Office Vastu Plans</span>
            <span className="text-gray-700 text-center text-base">
              Optimize your workspace for productivity, harmony, and business growth.
            </span>
          </div>
          {/* Plot Plan */}
          <div className="flex flex-col items-center p-6 bg-yellow-50 hover:bg-yellow-100 transition rounded-lg">
            <span className="mb-4 text-yellow-500 text-5xl">
              {/* Plot icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                <rect width="20" height="12" x="2" y="6" rx="2" stroke="currentColor" strokeWidth={2} />
              </svg>
            </span>
            <span className="text-lg font-semibold text-yellow-800 mb-1">Plot Vastu Plans</span>
            <span className="text-gray-700 text-center text-base">
              Expert guidance for selecting and designing auspicious plots for construction.
            </span>
          </div>
        </div>
      </section>



      {/* Testimonial */}
      <section className="mb-12">
        <TestimonialCard name="Amit Sharma" quote="Our home feels more peaceful and vibrant after the Vastu consultation. Highly recommended!" />
      </section>


      {/* Mini Contact Info */}
      <section className="text-center py-8">
        <h3 className="text-xl font-bold text-yellow-800 mb-4">Get in Touch</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          {/* Phone */}
          <a href="tel:+911234567890" className="flex items-center gap-2 text-gray-700 hover:text-yellow-700 transition">
            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
            <span className="font-medium">+91 12345 67890</span>
          </a>
          {/* Email */}
          <a href="mailto:info@vastuapp.com" className="flex items-center gap-2 text-gray-700 hover:text-yellow-700 transition">
            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-8-8m8 8l-8 8"/>
            </svg>
            <span className="font-medium">info@vastuapp.com</span>
          </a>
          {/* Website */}
          <a href="https://www.vastuapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-yellow-700 transition">
            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2}/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            </svg>
            <span className="font-medium">vastuapp.com</span>
          </a>
          {/* Social Media (example: Instagram) */}
          <a href="https://instagram.com/vastuapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-yellow-700 transition">
            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" />
              <circle cx="12" cy="12" r="5" fill="white" />
              <circle cx="17" cy="7" r="1.5" />
            </svg>
            <span className="font-medium">Instagram</span>
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          Questions? <a href="/contact" className="text-yellow-700 underline font-medium">Contact us!</a>
        </p>
      </section>

    </div>
  );
}







