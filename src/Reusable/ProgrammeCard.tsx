import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

type ProgrammeCardProps = {
  title: string;
  duration?: string;
  level: string;
  description: string;
  price?: string | number;
  features: string[];
  handleClick?: () => void;
};

export const ProgrammeCard = ({
  title,
  level,
  description,
  price,
  features,
  handleClick = () => {},
}: ProgrammeCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden relative">
      <CardContent className="p-6 sm:p-8 h-full flex flex-col relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/10 to-orange-500/10 rounded-tr-full"></div>
        
        <div className="relative z-10 flex-grow">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                {title}
              </h3>
              {price && (
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2 block">
                  {price}
                </span>
              )}
            </div>
            <Star className="w-6 h-6 text-yellow-400 group-hover:fill-yellow-400 transition-all duration-300" />
          </div>

          {/* Level badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
              📚 {level}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 mb-6 leading-relaxed transition-colors duration-300">
            {description}
          </p>

          {/* Features list */}
          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">What You'll Learn:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm sm:text-base text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          className="group/btn h-12 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          onClick={handleClick}
        >
          <span className="flex items-center justify-center gap-2">
            Enroll Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30 transition-all duration-500 rounded-lg pointer-events-none"></div>
      </CardContent>
    </Card>
  );
};
