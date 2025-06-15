import React from 'react'

const Services = () => {
  return (
    <section className="px-6 md:px-20 py-16 text-white bg-gradient-to-b from-black to-slate-900 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8">Our Services</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/40 p-6 rounded-xl shadow-md hover:shadow-orange-500 transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-300">SEO Optimization</h3>
          <p className="text-gray-300 leading-relaxed">
            Improve your search engine rankings and drive organic traffic to your website. We use proven strategies like keyword targeting, on-page SEO, technical audits, and content optimization to make your brand more visible online.
          </p>
        </div>

        <div className="bg-black/40 p-6 rounded-xl shadow-md hover:shadow-orange-500 transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-300">Social Media Marketing</h3>
          <p className="text-gray-300 leading-relaxed">
            Boost engagement and grow your audience on platforms like Facebook, Instagram, LinkedIn, and Twitter. Our team creates visually compelling and strategy-driven social content tailored to your target market.
          </p>
        </div>

        <div className="bg-black/40 p-6 rounded-xl shadow-md hover:shadow-orange-500 transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-300">Google Ads (PPC)</h3>
          <p className="text-gray-300 leading-relaxed">
            Get instant visibility with paid ad campaigns that convert. From keyword research to ad copy and budget management, we handle your entire Google Ads strategy to ensure maximum ROI.
          </p>
        </div>

        <div className="bg-black/40 p-6 rounded-xl shadow-md hover:shadow-orange-500 transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-300">Email Marketing</h3>
          <p className="text-gray-300 leading-relaxed">
            Keep your customers informed and engaged with personalized, automated email campaigns. From newsletters to promotional offers, we help you nurture leads and boost customer retention.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
