import React from 'react'

const Contact = () => {
  return (
    <section className="px-6 md:px-20 py-16 text-white bg-gradient-to-b from-slate-900 to-black min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-6">Contact Us</h2>

      <p className="text-lg text-gray-300 mb-8">
        We'd love to hear from you! Whether you have questions about our services, need a custom quote, or just want to say hello — feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-black/40 p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block mb-1 text-orange-300">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-orange-300">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-orange-300">Message</label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              className="w-full px-4 py-2 rounded bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded font-semibold text-white"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-orange-300 mb-1">Email</h3>
            <p>support@prarozmarketing.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-orange-300 mb-1">Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-orange-300 mb-1">Address</h3>
            <p>123 Digital Street, Hyderabad, India</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-orange-300 mb-1">Business Hours</h3>
            <p>Monday - Saturday: 9 AM to 6 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
