import { PartnershipSlider } from "./Reusable/PartnershipSlider";

export const Partnership = () => {
  return (
    <section
      id="partnership"
      className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50"
    >
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
        Our Partners
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className=" mb-8 sm:mb-12 md:mb-16">
          <p className="text-sm sm:text-base md:text-lg text-gray-600  mx-auto">
            Leading Lingual collaborates with schools, corporate training
            organizations, recruitment firms, and tech hubs to expand
            opportunities for learners and professionals. Our partners include:
            - Leading international schools - African tech training firms -
            Diaspora recruitment platforms - Language certification bodies -
            Tech Start-ups - Thriving in Tech Network - NGOS - NIME COMMUNITY
            Interested in partnering with us? Reach out via{" "}
            <a
              href="mailto:leadinglingual@gmail.com"
              className="text-blue-400 cursor-pointer"
            >
              leadinglingual@gmail.com
            </a>{" "}
          </p>
        </div>
        <PartnershipSlider />
      </div>
    </section>
  );
};
