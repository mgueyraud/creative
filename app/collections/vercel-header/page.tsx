"use client";
import { UserIcon } from "@heroicons/react/24/outline";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Page() {
  const { scrollY } = useScroll();
  const translateX = useTransform(scrollY, [0, 50], [0, 42]);
  const scale = useTransform(scrollY, [0, 50], [1, 0.8]);

  return (
    <main className="text-white">
      <div className="font-sans">
        <header className="flex gap-4 bg-black px-6 py-4 pl-16 text-sm">
          <motion.svg
            style={{
              scale,
            }}
            className="fixed left-6 top-4 z-10"
            aria-label="Vercel Logo"
            fill="white"
            viewBox="0 0 75 65"
            height="22"
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
          </motion.svg>
          <ol className="flex gap-4">
            <li aria-hidden className="text-zinc-700">
              /
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-black p-1">
                <UserIcon />
              </span>
              mariogyd
            </li>
            <li aria-hidden className="text-zinc-700">
              /
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-black p-1">
                <UserIcon />
              </span>
              projects
            </li>
          </ol>
        </header>
        <nav className="sticky top-0 flex border-b border-zinc-700 bg-zinc-900 text-sm">
          <motion.ol
            style={{
              translateX,
            }}
            className="relative flex gap-4 px-6 py-4 text-zinc-400"
          >
            <li>Project</li>
            <li className="text-zinc-200">Deployments</li>
            <li>Analytics</li>
            <li>Speed Insights</li>
            <li>Logs</li>
            <li>Storage</li>
            <li>Settings</li>
          </motion.ol>
        </nav>
        <main className="mx-auto my-12 max-w-5xl rounded-md border border-zinc-800">
          <table className="w-full">
            <tbody>
              {[...Array(100)].map((_, i) => (
                <tr
                  key={i}
                  className="h-12 border-b border-zinc-800 bg-zinc-950"
                >
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </main>
  );
}
