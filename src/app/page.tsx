import Image from "next/image";
import MevlavaLogo from "@/components/MevlavaLogo";
export default function Home() {
  return (
    <main className="min-h-screen text-[#ebf1d4] flex flex-col justify-center items-center text-center">
        <Heading />
        <StyledLogo />
    </main>
  );
}

const headingContent = [
    "A world of data is just noise without the wisdom to hear its story",
    "A beautiful interface is silent without a powerful backend",
    "A brilliant algorithm is useless without security"
];

function Heading() {
    return (
        <div className={"pb-5"}>
            {headingContent.map((content, index) => (
                <h1 key={index} className="font-lato font-bold text-h3 mt-4">
                    {content}
                </h1>
            ))}
        </div>
    )
}
function StyledLogo() {
    return (
        <div className="mt-12 text-[#ebf1d4]">
            <MevlavaLogo
                stroke={"#FFFFFF"}
                strokeWidth={2}
                className="w-48 h-auto"
            />
        </div>
    );
}