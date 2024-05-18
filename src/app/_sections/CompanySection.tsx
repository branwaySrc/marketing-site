import { QuickLink } from "@/components/QuickLink";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const CompanySection = () => {
	return (
		<section className="bg-[#1D1D1F] px-10 py-12">
			<Paragraph className="mb-[80px] leading-relaxed" color="light">
				요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
				다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.
			</Paragraph>
			<Heading large color="light" className="leading-tight">
				<span className="block">안녕하세요, 우리는</span>
				<span>브랜웨이 입니다.</span>
			</Heading>
			<figure className="flex py-10">
				<Profile />
				<Profile />
				<Profile />
			</figure>
			<Paragraph className="mb-[100px] leading-relaxed" color="light">
				요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
				다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.
			</Paragraph>
			<Heading large color="light" className="leading-tight mb-10">
				<span className="block">마이크.</span>
				<span className="block">카메라.</span>
				<span className="block">촬영 준비 완료</span>
			</Heading>

			<Paragraph className="mb-[100px] leading-relaxed" color="light">
				요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
				다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.
			</Paragraph>
			<Heading large color="light" className="leading-tight mb-10">
				<span className="block">디자이너 출신의</span>
				<span className="block">메인 디렉터의</span>
				<span className="block">상상 이상의 디테일</span>
			</Heading>
			<Paragraph className="mb-[100px] leading-relaxed" color="light">
				요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
				다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.
			</Paragraph>
			<Heading large color="light" className="leading-tight">
				<span className="block">브랜웨이.</span>
				<span className="block">브랜딩을 듬뿍.</span>
				<span className="block">콘텐츠를 뚝딱.</span>
				<span className="block">타케팅을 착착.</span>
			</Heading>
			<div className="flex my-8">
				<QuickLink href={"/"} label="지금 바로 문의하기" type={"button"} />
			</div>
			<Paragraph className="mb-[100px] leading-relaxed" color="light">
				요긴한 각종 알림과 덕분에 다른 일을 하는 중에도 놓치지 않고 한눈에 쉽게 확인할 수 있죠. 호출한 택시의 픽업 안내, 전화 발신자, 항공편 정보 등
				다양한 정보를 꼭 필요한 순간에 바로 확인할 수 있답니다.
			</Paragraph>
		</section>
	);
};

const Profile = () => {
	return <div className="h-[100px] w-[100px] bg-gray-400 rounded-full"></div>;
};

export default CompanySection;
