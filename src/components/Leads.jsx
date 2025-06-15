import React, { useState } from 'react'

const Leads = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Lead Submitted: ${JSON.stringify(formData)}`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-6">Send Us Your Query</h2>
      <form onSubmit={handleSubmit} className="bg-black/70 p-6 rounded space-y-4 max-w-md">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 text-white" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 text-white" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 rounded bg-gray-800 text-white" rows="4" required></textarea>
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  )
}

export default Leads
