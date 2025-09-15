import Link from 'next/link';
import { ChevronRight, Sparkles, Globe, BookOpen, Users } from "lucide-react";
import bg from "./../../public/asset/herro.jpg";

const Hero = () => {
  return (
    <div className="relative h-[80vh]  md:h-[85vh] lg:h-[700px] xl:h-[800px] mx-2 sm:mx-4 md:mx-6 lg:mx-8 mt-4 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />
      
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-10 right-10 animate-pulse">
        <Sparkles className="w-6 h-6 text-yellow-300" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce">
        <Globe className="w-8 h-8 text-blue-300" />
      </div>
      <div className="absolute top-1/4 right-1/4 animate-pulse">
        <BookOpen className="w-5 h-5 text-green-300" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted by 1000+ Students</span>
          </div>
          
          {/* Main heading with animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
             Thriving in Tech by <span className="md:block text-white">Leading Lingual</span>
            </span>
          </h1>
          
          {/* Subtitle with better typography */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed text-gray-100 max-w-3xl animate-slide-up animation-delay-200">
            A premier training and mentoring institute committed to professional
            excellence in education, technology, language acquisition, and
            career advancement.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
            <Link href="/#enrol" className="group block h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Get Started Today
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8 sm:mt-12 animate-slide-up animation-delay-600">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300">500+</div>
              <div className="text-sm text-gray-300">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-300">15+</div>
              <div className="text-sm text-gray-300">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-300">98%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
