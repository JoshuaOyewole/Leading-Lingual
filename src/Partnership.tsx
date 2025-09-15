import { PartnershipSlider } from "./Reusable/PartnershipSlider";
import { Mail, Users, Globe } from "lucide-react";

export const Partnership = () => {
  return (
    <section
      id="partnership"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Global Network</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Our Partners
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up animation-delay-200">
              Thriving in Tech by Leading Lingual collaborates with schools, corporate training
              organizations, recruitment firms, and tech hubs to expand
              opportunities for learners and professionals.
            </p>
            
            {/* Partner types grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-slide-up animation-delay-400">
              {[
                "International Schools",
                "Tech Training Firms", 
                "Recruitment Platforms",
                "Certification Bodies",
                "Tech Start-ups",
                "Professional Networks",
                "NGOs",
                "Community Partners"
              ].map((type, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-200/50">
                  <span className="text-sm font-medium text-gray-700">{type}</span>
                </div>
              ))}
            </div>
            
            {/* CTA section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-200/50 animate-slide-up animation-delay-600">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Interested in Partnering?</h3>
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Join our network of innovative partners and expand opportunities together
              </p>
              <a
                href="mailto:leadinglingual@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl mx-auto"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Partner slider */}
        <div className="animate-slide-up animation-delay-800">
          <PartnershipSlider />
        </div>
      </div>
    </section>
  );
};
