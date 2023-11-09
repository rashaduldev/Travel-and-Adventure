import Banner from "../Component/Banner";
import Destination from "../Component/Destination";
import Featured from "./Home/Featured";
import Tourtype from "./Home/Tourtype";
import Whychosse from "./Home/Whychosse";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourtype></Tourtype>
            <Whychosse></Whychosse>
            <Destination></Destination>
            <Featured></Featured>
        </div>
    );
};

export default Home;