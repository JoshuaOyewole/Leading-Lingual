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
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">About Thriving in Tech by Leading Lingual</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Empowering Excellence
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600 mb-8 animate-slide-up animation-delay-200">
             Thriving in Tech by Leading Lingual is a premier training and mentoring institute committed
              to professional excellence in education, technology, language
              acquisition, and career advancement.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-500 animate-slide-up animation-delay-400">
              Headquartered in Lagos, Nigeria and legally registered in Mauritius, Thriving in Tech by Leading Lingual serves as a dynamic
              platform for aspiring educators, tech newcomers, language learners, and
              job seekers seeking expert mentorship and practical coaching. Our
              mission is to bridge skill gaps, promote global competence, and prepare
              individuals for the demands of today's diverse professional environments
              through quality training, personalized mentorship, and career guidance.
            </p>
          </div>
        </div>

        {/* Enhanced cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2 + 0.6}s` }}
            >
              <AmenityCard
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
