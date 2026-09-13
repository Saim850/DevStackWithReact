import { Suspense } from "react";
import type { TechnologyType } from "../type";
import { TechnologyList } from "./TechnologiesList";

const technologiesPromise: Promise<TechnologyType[]> = fetch("/data.json")
  .then(res => res.json());

export default function Technologies() {
  return (
    <>
      <div className="ml-10 mt-10">
        <h1 className="text-4xl font-bold">Explore the <span className="bg-linear-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold">Technologies</span></h1>
        <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>    
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <TechnologyList technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

