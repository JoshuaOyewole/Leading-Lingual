export const PartnershipSlider = () => {
  const partners = [
    {
      name: "NIME",
      logo: "/asset/Nime.png",
    },
    {
      name: "Nigeria",
      logo: "/asset/Nigeria.jpg",
    },
    {
      name: "Thriving",
      logo: "/asset/thriving.png",
    },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden bg-gray-50 py-8">
      <div className="flex animate-scroll">
        {duplicatedPartners.map((partner, index) => (
          <div key={index} className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 md:p-8 flex items-center justify-center  sm:h-24 md:h-28 w-24 sm:w-32 md:w-36">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full object-contain filter  transition-all duration-300"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  if (
                    img.nextSibling &&
                    img.nextSibling instanceof HTMLElement
                  ) {
                    img.nextSibling.style.display = "flex";
                  }
                }}
              />
              <div className="hidden w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-full items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">
                  {partner.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};
