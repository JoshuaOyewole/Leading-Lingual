import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
  avatar?: string;
};

export const TestimonialCard = ({
  name,
  role,
  company,
  rating,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
      <CardContent className="p-4 sm:p-6 h-full flex flex-col">
        <div className="flex items-center mb-3 sm:mb-4">
          <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mr-2 sm:mr-3" />
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic flex-grow">
          "{testimonial}"
        </p>

        <div className="flex items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3 sm:mr-4">
            <span className="text-sm sm:text-base font-semibold text-gray-600">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-gray-800">
              {name}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              {role} at {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
