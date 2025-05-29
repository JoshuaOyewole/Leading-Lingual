import { Button } from "@/components/ui/button";
import bg from "./../../public/asset/herro.jpg";
const Hero = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] mx-3 sm:mx-4 md:mx-6 lg:mx-8 mt-4 sm:mt-4 rounded-xl sm:rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] bg-opacity-60 sm:bg-opacity-70" />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            Leading Lingual
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed opacity-90">
            A premier training and mentoring institute committed to professional
            excellence in education, technology, language acquisition, and
            career advancement.
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
