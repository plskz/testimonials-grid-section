import Card from "@/components/card";
import { testimonials } from "@/constants";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 gap-6 px-8 py-16 md:grid-cols-2 lg:mx-auto lg:grid-cols-4 lg:grid-rows-2 lg:gap-11 lg:px-32 lg:py-40">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          name={testimonial.name}
          title={testimonial.title}
          callout={testimonial.callout}
          quote={testimonial.quote}
          image={testimonial.image}
          backgroundColor={testimonial.backgroundColor}
        />
      ))}
    </main>
  );
}
