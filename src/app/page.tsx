"use client"
import MevlavaLogo from "@/components/MevlavaLogo";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
export default function Home() {
    const [isIntroDone, setIntroDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroDone(true);
        }, 2500)
        return () => clearTimeout(timer);
    }, [])

    return (
        <AnimatePresence>
            {isIntroDone ? (
                <motion.div
                    key={"main-layout"}
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {delay: 0.5, duration: 2.5}}}
                >
                    {/* Header*/}
                    <header className={"fixed top-0 left-0 w-full p-4 sm:p-6"}>
                        <div className="w-6 sm:w-8">
                            <AnimatedLogo/>
                        </div>
                    </header>
                    {/* Main Content*/}
                    <main className="min-h-screen text-[#ebf1d4] flex flex-col justify-center items-center text-center">
                        <Heading />
                        <SectionOne />
                    </main>
                </motion.div>
            ) : (
                <motion.div
                    key="intro-splash"
                    className="min-h-screen flex justify-center items-center"
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <div className="w-48 sm:w-64">
                        <AnimatedLogo />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

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
function AnimatedLogo() {
    return(
        <motion.div layoutId={"mevlava-logo"}>
            <MevlavaLogo
                stroke={"#EBF1D4"}
                strokeWidth={4}
                className={"w-full h-auto"}/>
        </motion.div>
    )
}
function SectionOne() {
    return (
        <>

        </>
    )
}