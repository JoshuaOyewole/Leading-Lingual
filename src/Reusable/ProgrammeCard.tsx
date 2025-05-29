import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProgrammeCardProps = {
  title: string;
  duration?: string;
  level: string;
  description: string;
  price?: string | number;
  features: string[];
};

export const ProgrammeCard = ({
  title,
  //   duration,
  level,
  description,
  price,
  features,
}: ProgrammeCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
      <CardContent className="p-4 sm:p-6 h-full flex flex-col">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <h3 className="text-base sm:text-xl font-bold text-gray-800">
              {title}
            </h3>
            <span className="text-xl sm:text-2xl font-bold text-red-500">
              {price}
            </span>
          </div>

          <div className="sm:gap-4 mb-3 sm:mb-4">
            {/* <span className="px-2 sm:px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
              {duration}
            </span> */}
            <span className=" py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">
              {level}
            </span>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>

          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm sm:text-base text-gray-700"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mr-2 sm:mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 sm:py-3 text-sm sm:text-base">
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};
