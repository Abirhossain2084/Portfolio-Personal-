import AboutMeSection from "./AboutMeSection ";
import ContactMe from "./ContactMe";

import HeroSlider from "./HeroSlider";
import ProjectPage from "./ProjectPage";



import Skills from "./Skills";
import Timeline from "./Timeline";
import TopService from "./TopService";


const Home = () => {

   
    return (
        <div>
            <HeroSlider></HeroSlider>
            
            <AboutMeSection></AboutMeSection>
            <Skills></Skills>
            <TopService></TopService>
            <Timeline></Timeline>
            <ProjectPage></ProjectPage>
            <ContactMe></ContactMe>
           
         
        </div>
    );
};

export default Home;