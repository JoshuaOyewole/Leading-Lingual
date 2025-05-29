import { Headphones, Phone, ArrowUp, Book } from "lucide-react";
import AmenityCard from "./Reusable/AmenityCard";

export const Amenities = () => {
  const amenities = [
    {
      icon: Headphones,
      title: "Audio Learning",
      description:
        "Immersive audio content and podcasts for learning on the go. Perfect for busy professionals.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance from our expert team. Get help whenever you need it.",
    },
    {
      icon: ArrowUp,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed analytics and progress reports.",
    },
    {
      icon: Book,
      title: "Rich Content",
      description:
        "Comprehensive learning materials including videos, texts, and interactive exercises.",
    },
  ];

  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <h1 className="text-center text-3xl my-3">About Us</h1>
      <p className="leading-10">
        Leading Lingual is a premier training and mentoring institute committed
        to professional excellence in education, technology, language
        acquisition, and career advancement. Headquartered in Lagos, Nigeria and
        legally registered in Mauritius, Leading Lingual serves as a dynamic
        platform for aspiring educators, tech newcomers, language learners, and
        job seekers seeking expert mentorship and practical coaching. Our
        mission is to bridge skill gaps, promote global competence, and prepare
        individuals for the demands of today's diverse professional environments
        through quality training, personalized mentorship, and career guidance.
      </p>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={index}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
