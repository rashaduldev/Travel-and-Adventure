

const Whychosse = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row text-center items-center justify-evenly mx-10">
                <div className="lg:w-1/2 my-5">
                    <img className="lg:w-4/5 mx-auto lg:h-[500px] rounded" src="https://i.ibb.co/X3VLhPM/tourguide.jpg" alt="" />
                </div>
                <div className="">
                    <div className="text-center lg:text-left space-y-9">
                    <h3 className="text-4xl italic">Why Choose Us</h3>
                    <h2 className="text-4xl lg:text-6xl font-bold">Plan Your Trip <br /> with Trisog</h2>
                    <p className="lg:text-lg">Holisticly optimize proactive strategic theme <br /> areas rather than effective manufactured <br />
                    products create.
                    </p>
                    <div className="grid grid-cols-2 lg:text-lg">
                    <li>Travel Plan</li>
                    <li> Cheap Rates</li>
                    <li>Hand-picked Tour</li>
                    <li>Private Guide</li>
                     </div>
                    </div>
                    <div className="text-center">
                    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 my-7">
                    Contact Us
                    </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Whychosse;