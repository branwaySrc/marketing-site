import { QuickLink } from "@/components/QuickLink";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const companyProfileScript = {
	prologue: `요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 
	호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등 다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.`,
	heading: ["안녕하세요, 우리는", "브랜웨이 입니다."],
	profileSrc: ["", "", ""],
	paragraph: `요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
	다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.`,
};

const preparedScript = {
	heading: ["마이크.", "카메라.", "촬영 준비 완료."],
	paragraph: `요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
	다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.`,
};

const ceoScript = {
	heading: ["디자이너 출신의", "메인 디렉터의", "상상 이상의 디테일"],
	paragraph: `요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
	다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.`,
};

const brandingScript = {
	heading: ["브랜웨이.", "브랜딩을 듬뿍.", "콘텐츠를 뚝딱.", "타게팅을 착착."],
	paragraph: `요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
	다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.`,
};

const CompanySection = () => {
	return (
		<section className="bg-[#1D1D1F] px-10 py-12">
			<CompanyProfile
				prologue={companyProfileScript.prologue}
				heading={companyProfileScript.heading}
				profile={companyProfileScript.profileSrc}
				paragraph={companyProfileScript.paragraph}
			/>
			<ScriptTemplate heading={preparedScript.heading} paragraph={preparedScript.paragraph} />
			<ScriptTemplate heading={ceoScript.heading} paragraph={ceoScript.paragraph} />
			<ScriptTemplate heading={brandingScript.heading} paragraph={brandingScript.paragraph}>
				<div className="flex mb-10">
					<QuickLink href={"/"} label="지금 바로 문의하기" type={"button"} />
				</div>
			</ScriptTemplate>
		</section>
	);
};

const CompanyProfile = (props: { prologue: string; heading: string[]; profile: string[]; paragraph: string }) => {
	return (
		<div className="container mx-auto">
			<Paragraph className="mb-[80px] leading-relaxed" color="light">
				{props.prologue}
			</Paragraph>
			<Heading large color="light" className="leading-tight">
				{props.heading.map((word, index) => {
					return (
						<span key={index} className="block">
							{word}
						</span>
					);
				})}
			</Heading>
			<figure className="flex py-10">
				{props.profile.map((profile, index) => {
					return <div key={index} className="h-[100px] w-[100px] bg-gray-400 rounded-full"></div>;
				})}
			</figure>
			<Paragraph className="mb-[100px] leading-relaxed" color="light">
				{props.paragraph}
			</Paragraph>
		</div>
	);
};

const ScriptTemplate = (props: { heading: string[]; paragraph: string; children?: React.ReactNode }) => {
	return (
		<div className="container mx-auto">
			<Heading large color="light" className="leading-tight mb-10">
				{props.heading.map((word, index) => (
					<span key={index} className="block">
						{word}
					</span>
				))}
			</Heading>
			{props.children}
			<Paragraph className="mb-[100px] leading-relaxed" color="light">
				{props.paragraph}
			</Paragraph>
		</div>
	);
};

export default CompanySection;
