import Banner from "../Component/Banner";
import Destination from "../Component/Destination";
import Tourtype from "./Home/Tourtype";
import Whychosse from "./Home/Whychosse";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourtype></Tourtype>
            <Whychosse></Whychosse>
            <Destination></Destination>
        </div>
    );
};

export default Home;