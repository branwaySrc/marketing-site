import View from "@/components/layouts";
import { QuickLink } from "@/components/QuickLink";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { FontRock } from "@/config/fonts";
import TemporarySection from "@/components/TemporarySection";

const introScript = {
	heading: "우선 핵심부터.",
	brandWord: "MARKETING",
	brandPhrase: "우리는 브랜딩 채널을 만듭니다.",
	youtube: {
		header: ["온 국민이보는", "모바일 SNS 속", "마케팅 채널", "운영하기"],
		paragraph: "Youtube에서",
	},
};

const buttonLabel = {
	showSample: {
		title: ["샘플 작업물 보기", "샘플 영상 예시 보기"],
		link: "/",
	},
	showOffer: {
		title: "파격적인 제안 보기",
		link: "/",
	},
};

const IntroSection = () => {
	return (
		<>
			<QuickLinkList />
			<MarketingIntro />
			<TemporarySection />
			<YoutubeIntro />
		</>
	);
};

const QuickLinkList = () => {
	return (
		<section className="px-4">
			<Heading label={introScript.heading} className="mb-7" />
			<div className="flex flex-col items-start">
				<QuickLink href={buttonLabel.showSample.link} label={buttonLabel.showSample.title[0]} />
				<QuickLink href={buttonLabel.showOffer.link} label={buttonLabel.showOffer.title} />
			</div>
		</section>
	);
};

const MarketingIntro = () => {
	return (
		<section className="px-4 my-[64px]">
			<h1 className={`${FontRock} text-4xl mt-[100px]`}>{introScript.brandWord}</h1>
			<p className="font-bold mt-8">{introScript.brandPhrase}</p>
		</section>
	);
};

const YoutubeIntro = () => {
	return (
		<section className="my-[64px]">
			<Heading large className="leading-tight px-10 mb-10">
				{introScript.youtube.header.map((header, index) => {
					return (
						<span key={index} className="block">
							{header}
						</span>
					);
				})}
			</Heading>
			<TemporarySection />
			<aside className="flex flex-col items-center mt-8">
				<Paragraph large label={introScript.youtube.paragraph} />
				<QuickLink href={buttonLabel.showSample.link} label={buttonLabel.showSample.title[1]} />
			</aside>
		</section>
	);
};

export default IntroSection;
