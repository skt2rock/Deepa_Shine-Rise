import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Calculators from '../components/Calculators';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <SocialProof />
            <About />
            <Expertise />
            <Calculators />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
        </Layout>
    );
};

export default Home;
