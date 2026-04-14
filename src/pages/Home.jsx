import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import OurAchievements from '../components/home/OurAchievements';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import ClientsFeedback from '../components/home/ClientsFeedback';
import ProcessFlow from '../components/home/ProcessFlow';
import Spacer from '../components/home/Spacer';
import FadeInUp from '../components/FadeInUp';

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <FadeInUp><Services /></FadeInUp>
      <FadeInUp><About /></FadeInUp>
      <FadeInUp><Projects /></FadeInUp>
      <FadeInUp><WhyChooseUs /></FadeInUp>
      <FadeInUp><ProcessFlow /></FadeInUp>
      <FadeInUp><ClientsFeedback /></FadeInUp>
      <Spacer />
      <FadeInUp><OurAchievements /></FadeInUp>
    </div>
  );
};

export default Home;
