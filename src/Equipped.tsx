import { Button } from "./components/ui/button";
import { CourseBadge } from "./Reusable/CourseBadge";
import tech from "./../public/asset/group.jpg";
import { useState } from "react";
import CourseEnrollmentFlow from "./Payment";
export const EquippedSection = () => {
  const courses = [
    "Data Analysis",
    "Photography and Graphic Design",
    "Web Development",
    "Project Management",
    "Cyber Security",
  ];

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <section className="bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          <div className="w-full lg:w-1/2 text-white order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Get Equipped in Several Tech Skills For{" "}
              <span className="text-red-500">Free!</span>
              <p className="text-base text-red-500">
                Tuition is free but certificate and registration fee is required
                which is 10,000 naira{" "}
              </p>
            </h1>

            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
              Leading Lingual is a dynamic platform for aspiring and tech
              newcomers committed to professional excellence in technology, and
              career advancement. We bridge skill gaps, promote competence, and
              prepare individuals through quality training, personalized
              mentorship, and career guidance
            </p>

            <Button
              className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg rounded-lg"
              onClick={() => setShowModal(true)}
            >
              Enrol
            </Button>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {courses.map((course, index) => (
                <CourseBadge key={index} course={course} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div
              className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[400px] rounded-xl sm:rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${tech})`,
              }}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <CourseEnrollmentFlow isOpen={showModal} onClose={handleClose} />
      )}
    </section>
  );
};
