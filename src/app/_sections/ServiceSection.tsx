import { QuickLink } from "@/components/QuickLink";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const ServiceSection = () => {
	return (
		<section className="mb-[100px]">
			<Heading className="px-4" label="마케팅 범위 탐구하기" />
			<DetailTemplate heading={["사로잡는 Hook", "콘텐츠 기획부터."]} paragraph={["유튜브 키워드 분석 노하우로 만든", "알찬 콘텐츠 기획"]} />
			<DetailTemplate
				heading={["영상촬영과", "편집은 당연히."]}
				paragraph={["깔끔한 영상촬영과 편집 그리고", "단일 촬영본을 통한 다양한 콘텐츠화"]}
			/>
			<DetailTemplate heading={["국민 대표", "SNS 채널을 동시에."]} paragraph={["간첩도 알고 온 국민이 보는", "온라인 채널에 빠짐없이 전부"]} />
			<OverviewSection heading={["이 모든 것을", "대행하는 마케팅", "파트너 솔루션"]}>
				<OverviewCarousel cardItems={["", "", "", ""]} />
			</OverviewSection>
			<AdditionalServices heading={["그리고", "파격적인 무료 서비스"]}>
				<AdditionalServiceItem
					header={["기깔난 홈페이지 제작", "무료 지원"]}
					paragraph={"아임웹으로 기깔난 SEO 최적화 사이트를 제작하는 파트너들만의 추가 서비스"}
					link={{ href: "/", label: "아임웹에 대해 자세히 알아보기" }}
				/>
				<AdditionalServiceItem
					header={["기깔난 리플렛, 소개서", "디자인 무료 지원"]}
					paragraph={"상업적으로 사용하실 오프라인 리플렛, 소개서를 기깔나게 지원하는 추가 서비스"}
				/>
			</AdditionalServices>
		</section>
	);
};

interface DetailTemplateProps {
	heading: string[];
	paragraph: string[];
}
const DetailTemplate = (props: DetailTemplateProps) => {
	return (
		<article className="px-10">
			<div className="mt-[64px]">
				<Heading large className="leading-snug">
					{props.heading.map((text, index) => {
						return (
							<span key={index} className="block">
								{text}
							</span>
						);
					})}
				</Heading>
			</div>
			<div className="mt-4">
				<Paragraph large>
					{props.paragraph.map((text, index) => {
						return (
							<span key={index} className="block">
								{text}
							</span>
						);
					})}
				</Paragraph>
			</div>
			<aside className="flex gap-2 border-t w-full h-10 pt-5 mt-5"></aside>
		</article>
	);
};

const OverviewSection = (props: { heading: string[]; children: React.ReactNode }) => {
	return (
		<section className="my-[64px] bg-[#1D1D1F] py-[100px]">
			<article className="px-10">
				<Heading large color="light" className="leading-snug">
					{props.heading.map((word, index) => {
						return (
							<span key={index} className="block">
								{word}
							</span>
						);
					})}
				</Heading>
			</article>
			<div className="overflow-y-hidden mt-10">{props.children}</div>
			<aside className="px-10 flex mt-10">
				<QuickLink href={"/"} label="요약한 패키지 비교 정보 보기" type="button" />
			</aside>
		</section>
	);
};

const OverviewCarousel = (props: { cardItems: string[] }) => {
	return (
		<div className="flex gap-3 flex-nowrap mx-10">
			{props.cardItems.map((item, index) => {
				return (
					<div key={index} className="h-[220px] w-[160px] bg-gray-200 flex-none rounded-xl">
						{item}
					</div>
				);
			})}
			<span className="w-[10px] flex-none" />
		</div>
	);
};

const AdditionalServices = (props: { heading: string[]; children: React.ReactNode }) => {
	return (
		<div className="px-4">
			<Heading>
				{props.heading.map((word, index) => {
					return (
						<span key={index} className="block">
							{word}
						</span>
					);
				})}
			</Heading>
			<article className="flex flex-col gap-4 mt-10">{props.children}</article>
		</div>
	);
};

interface ItemProps {
	header: string[];
	paragraph: string;
	link?: {
		label: string;
		href: string;
	};
}
const AdditionalServiceItem = (props: ItemProps) => {
	return (
		<div className="h-[480px] w-full p-6 bg-gray-300 rounded-xl flex flex-col justify-between items-start">
			<div className="mt-2">
				<Heading className="mb-4">
					{props.header.map((word, index) => {
						return (
							<span key={index} className="block">
								{word}
							</span>
						);
					})}
				</Heading>
				<Paragraph large label={props.paragraph} />
			</div>
			<aside className="mb-1">{props.link && <QuickLink href={props.link?.href} label={props.link?.label} />}</aside>
		</div>
	);
};

export default ServiceSection;
