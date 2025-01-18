import Hero from "@/app/(home)/components/hero";
import NavBar from "@/app/(home)/components/navbar";
import Brands from "@/app/(home)/components/brands";
import Services from "@/app/(home)/components/services";
import RequestProposalCard from "@/app/(home)/components/requestProposalCard";
import CaseStudies from "@/app/(home)/components/caseStudies";
import OurWork from "@/app/(home)/components/ourWork";
import Team from "@/app/(home)/components/team";
import Testimonials from "@/app/(home)/components/testimonials";
import { teamMembers, testimonials, accordionItems } from "@/app/(home)/data/models";
import ContactUs from "@/app/(home)/components/contactUs";
import Footer from "@/app/(home)/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white px-6 md:px-12 xl:px-24 overflow-x-hidden">
      <NavBar />
      <Hero />
      <Brands />
      <Services />
      <RequestProposalCard />
      <CaseStudies />
      <OurWork accordionItems={accordionItems} />
      <Team teamMembers={teamMembers} />
      <Testimonials testimonials={testimonials} />
      <ContactUs />
      <Footer />
    </div>
  );
}