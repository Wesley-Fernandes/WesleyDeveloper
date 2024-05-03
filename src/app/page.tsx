import Project from "@/components/Project";


export default function Home() {
  return (
    <ul className="animate__animated md:animate__fadeInRight bgup border p-3 w-full h-[534px] overflow-y-auto mr-3 mb-6 mt-6 bg-primary-foreground shadowblocks grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 rounded-md overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <Project key={String(i)} />
      ))}
    </ul>
  );
}
