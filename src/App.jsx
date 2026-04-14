import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurHistory from './pages/OurHistory';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Careers from './pages/Careers';
import Feedbacks from './pages/Feedbacks';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Industries from './pages/Industries';
import IndustryDetails from './pages/IndustryDetails';
import TermConditions from './pages/TermConditions';
import ServiceDetailCustomSoftware from './pages/ServiceDetailCustomSoftware';
import ServiceDetailWebMobile from './pages/ServiceDetailWebMobile';
import ServiceDetailCloudDevOps from './pages/ServiceDetailCloudDevOps';
import ServiceDetailWebsiteCreation from './pages/ServiceDetailWebsiteCreation';
import TechStackModels from './pages/TechStackModels';
import MaintenancePolicy from './pages/MaintenancePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-history" element={<OurHistory />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/service-details/custom-software" element={<ServiceDetailCustomSoftware />} />
          <Route path="/service-details/web-mobile-app" element={<ServiceDetailWebMobile />} />
          <Route path="/service-details/cloud-devops" element={<ServiceDetailCloudDevOps />} />
          <Route path="/service-details/website-creation" element={<ServiceDetailWebsiteCreation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries-details" element={<IndustryDetails />} />
          <Route path="/term-conditions" element={<TermConditions />} />
          <Route path="/tech-stack" element={<TechStackModels />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/maintenance-policy" element={<MaintenancePolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
