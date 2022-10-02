import React from 'react'
import { TestimonialCard } from '../../Components'

const userData = [
    {
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Edward Cisneros",
        content: "Not able to tell you how happy I am with healthcare. Keep up the excellent work. Absolutely wonderful!"
    },
    {
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        name: "Hildagard K.",
        content: "I'm good to go. You've saved our business! I STRONGLY recommend healthcare to EVERYONE interested in running a successful online business!"
    },
    {
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
        name: "Clarette L.",
        content: "I would gladly pay over 600 dollars for healthcare. Since I invested in healthcare I made over 100,000 dollars profits."
    }
]

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="testimonials__head">
            <h1 className='testimonials__title'>What They Say About Us</h1>
            <h4>Here About Us From Our Customers</h4>
            <div className="testimonials__container">
                {userData.map(item => (
                    <TestimonialCard data = {item}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials