import { ProgrammeCard } from "./Reusable/ProgrammeCard";

export const Programmes = () => {
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
      className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our Programmes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of programs designed to equip
            you with in-demand skills across technology, education, languages,
            and career development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {programmes.map((programme, index) => (
            <ProgrammeCard key={index} {...programme} />
          ))}
        </div>
      </div>
    </section>
  );
};
