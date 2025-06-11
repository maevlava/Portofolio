import Section from "@/components/Section";

const sectionsData = [
  {
    img: "/images/sections/Odin.jpg",
    alt: "DATA SCIENCE",
  },
  {
    img: "/images/sections/Heimdall.jpg",
    alt: "CYBERSECURITY",
  },
  {
    img: "/images/sections/Eitri_Brokkr.png",
    alt: "FULLSTACK",
  },
  {
    img: "/images/sections/Freyr.jpg",
    alt: "MOBILE",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black">
      {sectionsData.map((section, index) => (
          <div key={index} className="flex-1 p-1.5 bg-black">
            <Section key={index} img={section.img} alt={section.alt} />
          </div>
      ))}
    </main>
  );
}
