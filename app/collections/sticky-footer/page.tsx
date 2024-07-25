"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const Content = () => {
  return (
    <div className="flex flex-col justify-between h-full bg-[#4E4E5A] p-8">
      <nav className="flex gap-16">
        <ul className="space-y-2">
          <li>Home</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        <ul className="space-y-2">
          <li>News</li>
          <li>Blog</li>
        </ul>
      </nav>
      <p className="text-[12rem] font-medium">Sticky footer</p>
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main>
        <div className="bg-zinc-950 h-screen grid place-items-center">
          <h1 className="text-4xl font-medium">Example of a sticky footer</h1>
        </div>
      </main>
      {/* Only downside is we need to have a specific height */}
      <footer
        className="relative h-[500px] w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
          <div className="sticky top-[calc(100vh-500px)] h-[500px]">
            <Content />
          </div>
        </div>
      </footer>
    </>
  );
}
