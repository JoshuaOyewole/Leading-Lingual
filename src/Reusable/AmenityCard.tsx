import { Card, CardContent } from "@/components/ui/card";
import type { FC } from "react";

type AmenityCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export const AmenityCard: FC<AmenityCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 overflow-hidden">
      <CardContent className="p-6 sm:p-8 h-full flex flex-col relative">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center flex-grow">
          {/* Enhanced icon container */}
          <div className="mb-6 relative">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-500 shadow-lg group-hover:shadow-xl">
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
          </div>
          
          {/* Enhanced title */}
          <h5 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {title}
          </h5>
          
          {/* Enhanced description */}
          <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">
            {description}
          </p>
          
          {/* Decorative line */}
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AmenityCard;
