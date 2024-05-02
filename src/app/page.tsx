import Image from "next/image";

export default function Home() {
  const shadow =
    "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]";
  return (
    <section
      className={`bgup border p-3 ${shadow} w-full h-[534px] mr-3 mb-6 mt-6 bg-primary-foreground`}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        molestias, consequatur id ipsum adipisci necessitatibus illum
        repellendus quae pariatur rerum perferendis sint! Consectetur dicta nemo
        saepe facilis quo cupiditate itaque.
      </p>
    </section>
  );
}
