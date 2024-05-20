import { QuickLink } from "@/components/QuickLink";
import { Heading } from "@/components/typography/Heading";

const pricingScript = {
	heading: ["이 모든 패키지를", "월 단위로 제안합니다."],
	pricing: {
		title: "월 솔루션 비용",
		price: "1,500,000",
		currency: "원",
	},
	link: {
		href: "/",
		label: "지금 바로 문의하기",
	},
};

const PricingSection = () => {
	return (
		<section className="mt-10 bg-[#0071E3] flex flex-col gap-8 py-[120px]">
			<div>
				<PricingHeader />
			</div>
			<PricingArticle />
			<QuickLink label={pricingScript.link.label} href={pricingScript.link.href} type={"button"} />
		</section>
	);
};

const PricingHeader = () => {
	return (
		<Heading large color="light" className="text-center leading-tight">
			{pricingScript.heading.map((word, index) => {
				return (
					<span key={index} className="block">
						{word}
					</span>
				);
			})}
		</Heading>
	);
};

const PricingArticle = () => {
	return (
		<article className="text-center text-white font-bold">
			<p className="mb-2">{pricingScript.pricing.title}</p>
			<p className="text-5xl">
				{pricingScript.pricing.price}
				<span className="text-lg">{pricingScript.pricing.currency}</span>
			</p>
		</article>
	);
};

export default PricingSection;
