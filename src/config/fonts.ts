import { Noto_Sans_KR, Rock_Salt } from "next/font/google";

export const NotoSans = Noto_Sans_KR({ subsets: ["latin"] });
const RockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });
export const FontRock = RockSalt.className;
