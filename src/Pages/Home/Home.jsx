import AboutMeSection from "./AboutMeSection ";
import HeroSlider from "./HeroSlider";
import RecentProjectsShow from "./RecentProjectsShow";
import Skills from "./Skills";
import TopService from "./TopService";


const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <TopService></TopService>
            <AboutMeSection></AboutMeSection>
            <Skills></Skills>
            <RecentProjectsShow></RecentProjectsShow>
            
        </div>
    );
};

export default Home;