import { Amenities } from "./Amenities";
// import { EquippedSection } from "./Equipped";
import { Programmes } from "./Programmes";
import { Partnership } from "./Partnership";
import Hero from "./Reusable/Hero";

import { Navigation } from "./navbar";
import { Testimonials } from "./Testimonials";
import background from "./../public/asset/background.jpg";
import { Footer } from "./footer";
import { EquippedSection } from "./Equipped";
const LearningInstitute = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header
        id="home"
        className="relative bg-cover bg-center pb-8"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Navigation />
        <Hero />
      </header>

      <main>
        <Amenities />
        <EquippedSection />
        <Programmes />
        <Testimonials />
        <Partnership />
      </main>
      <Footer />
    </div>
  );
};

export default LearningInstitute;
