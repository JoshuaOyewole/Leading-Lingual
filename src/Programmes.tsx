import { ProgrammeCard } from "./Reusable/ProgrammeCard";
import { ArrowRight } from "lucide-react";

export const Programmes = () => {
  const handleEnrolClick = () => {
    // closeMenu();
    window.history.pushState(null, "", "#enrol");
    // setActiveSection("enrol");

    const element = document.getElementById("enrol");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const programmes = [
    {
      title: "Teacher Training & Certification",
      level: "All Levels",

      description:
        "Hands-on teacher development courses focusing on pedagogy, digital literacy, and classroom management.",
      features: [
        "Pedagogy Training",
        "Digital Literacy",
        "Curriculum Development",
        "Classroom Management",
      ],
    },
    {
      title: "Tech Training",
      level: "Beginner to Expert",

      description:
        "Our beginner-friendly tech programs are designed to welcome absolute beginners into the world of technology. We provide step-by-step training in:",
      features: [
        " Networking and Cybersecurity",
        "Web Development",
        "Data Analysis ",
        "Basic Coding and Programming",
        "Video Editing and Content Creation",
        "Photography and Photo Editing",
        "Project Management",
        "Product Management",
        "Social media Management",
      ],
    },

    {
      title: "Language Training",
      level: "All Levels",

      description:
        "Personalized language classes in multiple languages, available in-person and online.",
      features: [
        "English (ESL)",
        "French & Spanish",
        "Arabic & Mandarin",
        "Nigerian Languages",
        "Professional Focus",
      ],
    },
    {
      title: "Mentorship & Career Coaching",
      level: "All Levels",

      description:
        "Expert mentorship and career coaching with structured support for achieving your professional goals.",
      features: [
        "Career Guidance",
        "CV Revamping",
        "Mock Interviews",
        "Job Search Strategy",
        "International Recruitment",
      ],
    },
  ];

  return (
    <section
      id="programmes"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Our Training Programs</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Our Programmes
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-up animation-delay-200">
            Choose from our comprehensive range of programs designed to equip
            you with in-demand skills across technology, education, languages,
            and career development
          </p>
        </div>

        {/* Enhanced cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {programmes.map((programme, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            >
              <ProgrammeCard
                {...programme}
                handleClick={handleEnrolClick}
              />
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-up animation-delay-600">
          <p className="text-gray-600 mb-6">
            Not sure which program is right for you?
          </p>
          <button
            onClick={handleEnrolClick}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
