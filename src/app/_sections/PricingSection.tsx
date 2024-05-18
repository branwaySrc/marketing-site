import { QuickLink } from "@/components/QuickLink";
import { Heading } from "@/components/typography/Heading";

const PricingSection = () => {
	return (
		<section className="mt-10 bg-[#0071E3] flex flex-col gap-8 py-[120px]">
			<div>
				<Heading large color="light" className="text-center leading-tight">
					<span className="block">이 모든 패키지를</span>
					<span>월 단위로 제안합니다.</span>
				</Heading>
			</div>
			<div className="text-center text-white font-bold">
				<p className="mb-2">월 솔루션 비용</p>
				<p className="text-5xl">
					1,500,000 <span className="text-lg">원</span>
				</p>
			</div>
			<QuickLink label="지금 바로 문의하기" href={"/"} type={"button"} />
		</section>
	);
};

export default PricingSection;
