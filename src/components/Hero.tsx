import BannerPng from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <div className="mx-10">
      <div className="mx-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl ml-auto mr-auto text-center lg:text-start mt-10 lg:mt-0">
        <div>
          <h1 className="text-[35px] sm:text-4xl xl:text-[50px] font-bold">Build Your Ideal</h1>
          <h1 className="text-[40px] sm:text-5xl xl:text-[55px] font-bold bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">Development Stack</h1>
          <p className="py-6 max-w-125 text-gray-700 text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <button className="btn mb-2 mr-2 bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-md">Explore Technologies</button>
          <button className="btn mb-2 text-gray-700 rounded-md font-medium">Learn More</button>
        </div>

        <div className="">
          <img
          alt="Tailwind CSS hero component"
          src={BannerPng}
          />
        </div>

      </div>
    </div>
  )
}
