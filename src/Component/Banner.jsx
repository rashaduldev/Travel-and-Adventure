import BannerSearch from "./BannerSearch";


const Banner = () => {
    return (
       <div className="relative">
         <div className="h-screen bg-blue-500 mx-10 my-10  rounded-lg">
            <div className="flex flex-col md:flex-row justify-around items-center h-full  rounded-lg">
                <div className="flex-1 text-left pl-10 space-y-7">
                    <h2 className="text-5xl text-amber-300 italic">Explorer The</h2>
                    <h2 className="text-7xl text-white font-bold">Travel & <br /> Adventure</h2>
                    <p className="text-2xl text-white">Find awesome hotel,tour,car and activities in london</p>
                </div>
                <div className=" flex-1 text-center justify-center mx-auto">
                    <img className=" w-4/5 mx-auto rounded-lg" src="https://i.ibb.co/mFq2p1N/bannimg.jpg" alt="" />
                </div>
            </div>
            
        </div>
        <div className="absolute bottom-6 left-[164px]">
            <BannerSearch></BannerSearch>
        </div>
       </div>
    );
};

export default Banner;