import Image from "next/image";

type sectionProps = {
    img: string;
    alt: string;
}
export default function Section(sectionProps: sectionProps) {
    return(
        <div className="relative w-full h-screen overflow-hidden group">
            {/*Image container with transition on hover*/}
            <div className={"relative w-full h-full transition-transform duration-600 ease-in-out group-hover:-translate-y-10 "}>
                <Image
                    src={sectionProps.img}
                    alt={sectionProps.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-600 ease-in-out"
                    quality={100}
                    priority
                />
            </div>
            {/* Hover text overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-in-out">
                <span className="text-6xl font-bold">{sectionProps.alt}</span>
            </div>
        </div>
        )
}