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
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Success Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-gray-800 via-amber-800 to-orange-800 bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto animate-slide-up animation-delay-200">
            Since our inception, we've trained hundreds of teachers, mentored
            thousands of job seekers into international roles, and equipped
            beginners with practical tech and language skills to launch new
            careers. Our learners are placed in educational institutions, tech
            startups, language schools, and global companies.
          </p>
        </div>

        {/* Enhanced testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
