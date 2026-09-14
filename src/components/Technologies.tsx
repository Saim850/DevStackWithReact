import { Suspense } from "react";
import type { TechnologyType } from "../type";
import { TechnologyList } from "./TechnologiesList";

const technologiesPromise: Promise<TechnologyType[]> = fetch("/data.json")
  .then(res => res.json());

export default function Technologies() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <TechnologyList technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

