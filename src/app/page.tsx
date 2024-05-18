import HeroSection from "@/app/_sections/HeroSection";
import IntroSection from "@/app/_sections/IntroSection";
import ServiceSection from "@/app/_sections/ServiceSection";
import PricingSection from "@/app/_sections/PricingSection";
import CompanySection from "@/app/_sections/CompanySection";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#F3F6F6]">
			<HeroSection />
			<IntroSection />
			<ServiceSection />
			<PricingSection />
			<CompanySection />
		</main>
	);
}
