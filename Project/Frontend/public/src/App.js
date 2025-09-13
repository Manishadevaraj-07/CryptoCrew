import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
import Portals from './components/Portals';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { fetchStatistics } from './api/api';

function App() {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetchStatistics()
            .then(response => setStats(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Header />
            <HeroSection />
            <Statistics stats={stats} />
            <Portals />
            <Features />
            <HowItWorks />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default App;
