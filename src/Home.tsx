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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <header
        id="home"
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Navigation />
        <div className="pt-24 sm:pt-28 md:pt-32">
          <Hero />
        </div>
      </header>

      <main className="relative">
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
