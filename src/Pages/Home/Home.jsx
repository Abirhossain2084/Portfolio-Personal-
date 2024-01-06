import AboutMeSection from "./AboutMeSection ";
import ContactMe from "./ContactMe";
import ExperienceSection from "./ExperienceSection ";


import HeroSlider from "./HeroSlider";
import ProjectPage from "./ProjectPage";
import Services from "./Services";



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
            <Services></Services>
            <Timeline></Timeline>

            <ProjectPage></ProjectPage>
            <ExperienceSection></ExperienceSection>
            <ContactMe></ContactMe>
           
         
        </div>
    );
};

export default Home;