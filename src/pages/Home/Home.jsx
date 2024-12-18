import FeaturedMovies from "./FeaturedMovies";
import Feedback from "./Feedback";
import Hero from "./Hero";


const Home = () => {
    return (
        <div className="space-y-10 my-10">
            <Hero></Hero>
            <FeaturedMovies></FeaturedMovies>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;