import Link from "next/link";
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import routes from "@/routes";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl py-3 px-4">
      <h1 className="font-medium text-2xl mt-16">Creative Studio</h1>
      <p className="mt-2">A collection of the most representative art of the web, examples of the famous animations/UI we have nowadays</p>
      <ul className="mt-10 [&>li:last-child]:border-b-[0.5px]">
        {routes.map(route => (
          <li className="w-full border-t-[0.5px] border-gray-500" key={route.slug}>
            <Link href={`collections/${route.slug}`} className="w-full text-left py-4 flex justify-between items-center group overflow-hidden">
              <p className="font-medium text-lg">{route.name}</p>
              <div className="rounded-full border-[0.5px] border-gray-500 grid place-items-center p-2 translate-x-full group-hover:translate-x-0 transition-all ease-out duration-500">
                <ArrowUpRightIcon className="size-4"/>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
