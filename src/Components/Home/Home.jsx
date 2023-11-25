import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Promotion from "../Promotion/Promotion";
import Recommendation from "../Recommendation/Recommendation";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Promotion></Promotion>
            <Recommendation></Recommendation>
        </div>
    );
};

export default Home;