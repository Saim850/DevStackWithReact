import { X } from "lucide-react";
import type { TechnologyType } from "../type";
import { use, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

interface TechnologyProps {
  technologiesPromise: Promise<TechnologyType[]>;
}

interface stackType{
  id:string
  name:string;
  icon:string;
  category:string;
}

export function TechnologyList({technologiesPromise}: TechnologyProps) {
  const[stack, setStack] = useState<stackType[]>([]);
  const[technologies, setTechnologies] = useState<TechnologyType[]>([])

  const res = use(technologiesPromise);

  useEffect(() => {
    setTechnologies(res);
  }, [res]);

  const reactTost = (message:string, type:'success' | 'error'):void => {
    const tostType = type === 'success' ? toast.success : toast.error

    tostType(`${message}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  const handleAddToStack = (id:string, name:string, icon:string, category:string):void => {
    const technology = technologies.find((item) => item.id === id);
    
    if(!technology?.addedOrNot){
      setStack(prev => [...prev, {id, name, icon, category}]);  
      setTechnologies(prev => 
        prev.map((item) =>
          item.id === id
            ? { ...item, addedOrNot: true }
            : item
        )
      );
      reactTost(`${name} added successfully`, "success")
    }
  }

  const handleDelete = (id:string, name:string):void => {
    const deletedStack = stack.filter((val) => val.id != id);
    setStack(deletedStack);
    setTechnologies(
      technologies.map((item) =>
        item.id === id
          ? { ...item, addedOrNot: false }
          : item
      )
      );
    reactTost(`${name} removed successfully.`, 'error');
  }

  const handleRemoveAll = ():void => {
    setStack([]);
    setTechnologies(
      technologies.map((item) => ({
        ...item,
        addedOrNot: false
      }))
    );
    reactTost('All items have been removed from your stack.', "error");
  }

  return (
    <div className="w-ful flex flex-col items-center gap-10 text-start justify-center p-5 lg:p-10">

      <div className="ml-10 mt-10">
        <h1 className="text-4xl font-bold">Explore the <span className="bg-linear-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold">Technologies</span></h1>
        <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>    
      </div>

      <div className="max-w-[1980px] grid grid-cols-1 gap-8 xl:grid-cols-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:col-span-4">
          {technologies.map((technology) => (
            <div key={technology.id} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex items-start justify-between">
                <img
                  className="h-10 w-10 object-contain"
                  src={technology.icon}
                  alt={technology.name}
                />

                <p
                  style={{
                    color: technology.badgeColor,
                    borderColor: technology.badgeColor,
                    backgroundColor: `${technology.badgeColor}5`
                  }}
                  className={`rounded-full border px-3 py-1 text-sm font-mediums`}>
                  {technology.badge}
                </p>
              </div>

              <h2 className="mb-3 text-2xl font-bold">
                {technology.name}
              </h2>

              <p className="mb-6 min-h-20 text-gray-500">
                {technology.description}
              </p>

              <div className="mb-5 flex items-center justify-between gap-2">
                <p className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-600">
                  {technology.category}
                </p>

                <p className="text-sm text-gray-500">
                  {technology.difficulty}
                </p>

                <p className="text-sm font-medium">
                  ⭐ {technology.rating}
                </p>
              </div>

              {!technology.addedOrNot ? 
                <button onClick={() => handleAddToStack(technology.id, technology.name, technology.icon, technology.category,)} className="w-full rounded-xl bg-black py-3 text-base font-medium text-white transition hover:bg-gray-800">
                  Add to Stack
                </button>
              :
                <button className="w-full rounded-xl border-2 border-black py-3 text-base font-medium text-black">
                  ✓ Added to Stack
                </button>
            }

            </div>
          ))}
        </div>

        <div className="h-fit w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm xl:col-span-1 xl:sticky xl:top-20">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">
              Your Stack
            </h2>

            {stack.length === 0 ?
              <p className="mt-1 text-sm text-gray-400">No technologies selected yet.</p>
              :
              <p className="mt-1 text-sm text-gray-400">
                {stack.length} Technologies Selected
              </p>
            }
          </div>

          {stack.length === 0 ?
            <div className="border border-dashed p-5 rounded-xl border-gray-300">
              <p className="text-center">Your stack is empty.</p>
            </div>
          :
            <div className="space-y-3">

              {stack.map((val, indx) => (
                <div key={indx} className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 shadow-sm">
                  <img
                    src={val.icon}
                    alt="Tailwind CSS"
                    className="h-10 w-10"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">
                      {val.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {val.category}
                    </p>
                  </div>

                  <button onClick={() => handleDelete(val.id, val.name)} className="text-gray-400 transition hover:text-red-500">
                    <X />
                  </button>
                </div>
              ))}

              <button onClick={handleRemoveAll} className="btn bg-white border-2 border-red-500 w-full mt-3 text-red-500 rounded-xl">Remove All</button>

            </div>
          }

        </div>

      </div>
    </div>
  );
}