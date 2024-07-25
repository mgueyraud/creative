"use client";
import Image from "next/image";
import img1 from "../../../assets/zoom-parallax/picture-1.jpg";
import img2 from "../../../assets/zoom-parallax/picture-2.jpg";
import img3 from "../../../assets/zoom-parallax/picture-3.jpg";
import img4 from "../../../assets/zoom-parallax/picture-4.jpg";
import img5 from "../../../assets/zoom-parallax/picture-5.jpg";
import img6 from "../../../assets/zoom-parallax/picture-6.jpg";
import { useEffect } from "react";
import Lenis from "lenis";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="text-white">
      <div className="bg-zinc-950 h-screen grid place-items-center">
        <h1 className="text-4xl font-medium">Example of a zoom parallax</h1>
        <div className="flex items-center flex-col gap-10">
          <p className="text-lg">Scroll down</p>
          <ArrowDownIcon className="size-5 animate-bounce" />
        </div>
      </div>
      <div className="relative h-[300vh] bg-zinc-900 scrollable-container">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            style={
              {
                "--sn": 3,
              } as React.CSSProperties
            }
            className="w-full h-full absolute top-0 grid place-items-center image-container"
          >
            <div className="size-[25vw] relative">
              <Image
                src={img5}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
          <div
            style={
              {
                "--sn": 4,
              } as React.CSSProperties
            }
            className="w-full h-full absolute top-0 grid place-items-center image-container"
          >
            <div className="left-[-45vh] w-[30vh] bottom-[-20vh] h-[40vh] relative">
              <Image
                src={img1}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
          <div
            style={
              {
                "--sn": 5,
              } as React.CSSProperties
            }
            className="w-full h-full absolute top-0 grid place-items-center image-container"
          >
            <div className="right-[-45vh] w-[30vh] top-[-1vh] h-[30vh] relative">
              <Image
                src={img2}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
          <div
            style={
              {
                "--sn": 6,
              } as React.CSSProperties
            }
            className="w-full h-full absolute top-0 grid place-items-center image-container"
          >
            <div className="w-[50vh] h-[20vh] top-[-15vh] left-[-55vh] relative">
              <Image
                src={img3}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
          <div
            style={
              {
                "--sn": 7,
              } as React.CSSProperties
            }
            className="w-full h-full absolute top-0 grid place-items-center image-container"
          >
            <div className="w-[30vh] h-[20vh] top-[-35vh] right-[-45vh] relative">
              <Image
                src={img4}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
          <div
            style={
              {
                "--sn": 8,
              } as React.CSSProperties
            }
            className="w-full h-full absolute top-0 grid place-items-center image-container"
          >
            <div className="w-[50vh] h-[20vh] bottom-[-30vh] right-[-55vh] relative">
              <Image
                src={img6}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-950 h-screen grid place-items-center">
        <h1 className="text-4xl font-medium">@mariogyd</h1>
      </div>
    </main>
  );
}
