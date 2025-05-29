import { TestimonialCard } from "./Reusable/TestimonialCard";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp",
      rating: 5,
      testimonial:
        "The web development course transformed my career. The instructors were incredibly knowledgeable and the hands-on projects gave me real-world experience.",
    },
    {
      name: "Michael Chen",
      role: "Data Analyst",
      company: "DataFlow Inc",
      rating: 5,
      testimonial:
        "Outstanding data analysis program! I went from complete beginner to landing my dream job in just 4 months. Highly recommend!",
    },
    {
      name: "Emily Rodriguez",
      role: "Cybersecurity Specialist",
      company: "SecureNet",
      rating: 5,
      testimonial:
        "The cybersecurity course was comprehensive and practical. The certification helped me advance my career significantly.",
    },
    {
      name: "David Thompson",
      role: "Project Manager",
      company: "BuildRight",
      rating: 5,
      testimonial:
        "Excellent project management training. The Agile methodologies I learned here are now essential to my daily work.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 shadow bg-amber-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our Impact
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto">
            Since our inception, we’ve trained hundreds of teachers, mentored
            thousands of job seekers into international roles, and equipped
            beginners with practical tech and language skills to launch new
            careers. Our learners are placed in educational institutions, tech
            startups, language schools, and global companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
