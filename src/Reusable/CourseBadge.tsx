import { User } from "lucide-react";

interface CourseBadgeProps {
  course: string;
}

export const CourseBadge = ({ course }: CourseBadgeProps) => {
  return (
    <div className="flex items-center bg-white bg-opacity-10 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-black text-sm sm:text-base">
      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
        <User className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
      </div>
      <span>{course}</span>
    </div>
  );
};
