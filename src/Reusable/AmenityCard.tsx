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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      <CardContent className="p-4 sm:p-6 h-full flex flex-col">
        <div className="flex flex-col items-center text-center flex-grow">
          <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
          </div>
          <h5 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">
            {title}
          </h5>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AmenityCard;
