import React from 'react'
import TestimonialsData from "./TestimonialsData";
import TestimonialsList from './TestimonialsList';
import "../scss/_testimonials.scss";

function TestimonialsItem(TestimonialsData) {
    return (
      <TestimonialsList
        key={TestimonialsData.id}
        image={TestimonialsData.image}
        name={TestimonialsData.name}
        description={TestimonialsData.description}
        role={TestimonialsData.role}
      />
    );
  }

function Testimonials() {
    return (
        <section className="testimonials">
            {TestimonialsData.map(TestimonialsItem)}
        </section>
    )
}

export default Testimonials
