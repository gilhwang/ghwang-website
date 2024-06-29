import Content from "@/components/Content";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="fixed inset-0 z-30 transition duration-300 lg:absolute">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Intro/>
          <Content/>
        </div>
      </div>
    </div>
  );
}
