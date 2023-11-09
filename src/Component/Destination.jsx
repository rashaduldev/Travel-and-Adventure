import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div className="mx-10 my-5 lg:my-28">
       <div className="flex flex-row justify-between items-center">
        <div>
        <h3 className="text-3xl italic">Destinaion</h3>
        <h2 className="text-5xl font-bold my-5">Top Destrinations</h2>
        </div>
        <div>
            <Link to={'destrination'}><a className="underline">see all</a></Link>
        </div>
       </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div>
          <a
            className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="https://i.ibb.co/gMJGXKc/des1.jpg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                United Kingdom
              </h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
              456776 Travelers
              </p>
            </div>
          </a>
        </div>
        <div>
          <a
            className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="https://i.ibb.co/8s0hp7m/des2.jpg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Turkey
              </h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
              876534 Travelers
              </p>
            </div>
          </a>
        </div>
        <div>
          <a
            className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="https://i.ibb.co/SVVB8X7/des3.jpg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Thiland
              </h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
               356776 Travelers
              </p>
            </div>
          </a>
        </div>
        <div>
          <a
            className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="https://i.ibb.co/sRmRwm6/des4.jpg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                France
              </h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
               135678 Travellers
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Destination;
