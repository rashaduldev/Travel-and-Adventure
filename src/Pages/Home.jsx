import Banner from "../Component/Banner";
import Destination from "../Component/Destination";
import FAQsection from "./Home/FAQsection";
import Featured from "./Home/Featured";
import Leatestguide from "./Home/Leatestguide";
import Testmonial from "./Home/Testmonial";
import Tourtype from "./Home/Tourtype";
import Whychosse from "./Home/Whychosse";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourtype></Tourtype>
            <Whychosse></Whychosse>
            <Destination></Destination>
            <FAQsection></FAQsection>
            <Featured></Featured>
            <Testmonial></Testmonial>
            <Leatestguide></Leatestguide>
        </div>
    );
};

export default Home;