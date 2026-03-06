import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        window.scrollTo(0, 0);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-brand-cream texture-bg overflow-x-hidden text-brand-ink pt-28">
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled
                    ? 'py-4 bg-brand-cream/80 backdrop-blur-xl border-b border-brand-ink/5'
                    : 'py-8 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-8 max-w-7xl flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative h-20 w-20 overflow-hidden flex items-center justify-center transition-transform duration-700 group-hover:-rotate-3">
                            <img src="/Logo.PNG" alt="Shine And Rise" className="h-full w-full object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-display font-medium text-[2rem] leading-none tracking-wide bg-gradient-to-b from-[#FE7903] to-[#DF3301] text-transparent bg-clip-text pb-1">
                                Shine and Rise
                            </span>
                            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#0687DD] mt-1 uppercase">
                                Facilities
                            </span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-12">
                        {['About', 'Expertise', 'Resources', 'Calculators'].map((item) => (
                            <a
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                className="text-sm font-medium text-brand-ink/70 hover:text-brand-terracotta transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-terracotta transition-all duration-500 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="/#contact"
                            className="px-8 py-3 bg-brand-ink text-brand-cream font-medium text-sm transition-all duration-500 hover:bg-brand-navy border border-brand-ink relative overflow-hidden group"
                        >
                            <span className="relative z-10">Consult an Expert</span>
                            <div className="absolute inset-0 h-full w-0 bg-brand-gold transition-all duration-500 ease-out group-hover:w-full z-0"></div>
                        </a>
                    </div>

                    <button
                        className="lg:hidden w-12 h-12 flex items-center justify-center text-brand-ink z-50 relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div className={`fixed inset-0 bg-brand-cream/95 backdrop-blur-2xl z-40 transition-all duration-700 flex flex-col items-center justify-center gap-10 top-0 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} lg:hidden`}>
                    {['About', 'Expertise', 'Resources', 'Calculators'].map((item) => (
                        <a
                            key={item}
                            href={`/#${item.toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-4xl font-display font-medium text-brand-ink hover:text-brand-terracotta transition-colors italic"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="/#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-10 py-4 bg-brand-ink text-brand-cream font-medium mt-8 tracking-widest uppercase text-xs"
                    >
                        Consult an Expert
                    </a>
                </div>
            </nav>

            <main className="flex-1 flex flex-col relative z-10">
                {children}
            </main>

            <footer className="bg-brand-ink text-brand-cream py-24 relative z-10 border-t border-brand-ink">
                <div className="container mx-auto px-8 max-w-7xl grid md:grid-cols-12 gap-16 relative">

                    <div className="md:col-span-4 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-5 mb-8">
                                <span className="font-display font-medium text-3xl tracking-wide">Shine and Rise.</span>
                            </div>
                            <p className="text-sm leading-relaxed text-brand-cream/60 font-light max-w-xs">
                                Fostering organizational trust through impeccable statutory compliance, precise payroll operations, and rigorous HR advisory.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="font-display font-medium italic text-xl mb-8 text-brand-gold">Expertise</h4>
                        <ul className="space-y-4 text-sm font-light text-brand-cream/70">
                            <li><a href="/#expertise" className="hover:text-brand-terracotta transition-colors">Statutory Compliance</a></li>
                            <li><a href="/#expertise" className="hover:text-brand-terracotta transition-colors">Payroll Operations</a></li>
                            <li><a href="/#expertise" className="hover:text-brand-terracotta transition-colors">Labour Law</a></li>
                            <li><a href="/#expertise" className="hover:text-brand-terracotta transition-colors">POSH Frameworks</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-display font-medium italic text-xl mb-8 text-brand-gold">Company</h4>
                        <ul className="space-y-4 text-sm font-light text-brand-cream/70">
                            <li><a href="/#about" className="hover:text-brand-terracotta transition-colors">About Us</a></li>
                            <li><a href="/#testimonials" className="hover:text-brand-terracotta transition-colors">Client Voices</a></li>
                            <li><a href="/#calculators" className="hover:text-brand-terracotta transition-colors">Calculators</a></li>
                            <li><a href="/#contact" className="hover:text-brand-terracotta transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-display font-medium italic text-xl mb-8 text-brand-gold">Headquarters</h4>
                        <p className="text-sm font-light text-brand-cream/70 leading-relaxed mb-6">
                            Quest Co Works, Technopolis<br />
                            Knowledge Park, Andheri East<br />
                            Mumbai 400093
                        </p>
                        <p className="font-display text-2xl font-medium mb-3">
                            +91 8169 2921 79
                        </p>
                        <a href="mailto:deepa@shineandrisefacilities.in" className="text-sm text-brand-cream/70 hover:text-brand-terracotta transition-colors border-b border-brand-cream/20 pb-1 inline-block">
                            deepa@shineandrisefacilities.in
                        </a>
                    </div>
                </div>

                <div className="container mx-auto px-8 max-w-7xl mt-32 pt-8 border-t border-brand-cream/10 text-xs font-light text-brand-cream/40 flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest">
                    <span>&copy; {new Date().getFullYear()} Shine And Rise Facilities.</span>
                    <span className="flex gap-8">
                        <a href="#" className="hover:text-brand-cream transition-colors">Privacy</a>
                        <a href="#" className="hover:text-brand-cream transition-colors">Terms</a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
