import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full pt-12 pb-32 lg:pt-20 lg:pb-40 overflow-hidden">
            <div className="container mx-auto px-8 max-w-7xl relative z-10">

                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left Typography Focus */}
                    <div className="w-full lg:w-[55%] flex flex-col lg:text-left opacity-0 animate-fade-up">
                        <div className="mb-10 w-12 h-px bg-brand-terracotta"></div>

                        <h1 className="font-display text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-brand-ink leading-[0.95] mb-10 tracking-tight">
                            Navigate <br /> Compliance. <br />
                            <span className="italic font-light text-brand-terracotta">With Certainty.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-brand-ink/70 mb-14 leading-relaxed font-light max-w-lg">
                            We curate absolute statutory peace of mind. Empowering Indian businesses with flawless PF, ESI, Payroll, and Labour Law advisory.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                            <a href="#contact" className="px-10 py-4 bg-brand-ink text-brand-cream text-sm uppercase tracking-widest font-medium hover:bg-brand-navy transition-colors duration-500 w-full sm:w-auto text-center border border-brand-ink">
                                Request Consultation
                            </a>
                            <a href="#expertise" className="px-10 py-4 bg-transparent text-brand-ink text-sm uppercase tracking-widest font-medium hover:text-brand-terracotta transition-colors duration-500 w-full sm:w-auto text-center border-b border-brand-ink/20 hover:border-brand-terracotta">
                                Explore Expertise
                            </a>
                        </div>

                        <div className="mt-20 pt-10 border-t border-brand-ink/10 flex gap-16">
                            <div>
                                <p className="font-display text-4xl lg:text-5xl text-brand-navy">100<span className="italic font-light text-brand-gold">%</span></p>
                                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-ink/50 mt-3">Audit Success</p>
                            </div>
                            <div>
                                <p className="font-display text-4xl lg:text-5xl text-brand-navy">35<span className="italic font-light text-brand-terracotta">+</span></p>
                                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-ink/50 mt-3">Years Practice</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Abstract/Editorial Imagery Composition */}
                    <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <div className="relative w-full max-w-[480px] h-[600px] bg-brand-cream border border-brand-ink/5 p-6 shadow-editorial">
                            {/* Inner framing */}
                            <div className="w-full h-full border border-brand-ink/10 relative p-8 flex flex-col justify-between overflow-hidden bg-white">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/5 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="flex justify-between items-start z-10">
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40">F. 1989</div>
                                    <div className="w-8 h-px bg-brand-ink/20 mt-1.5"></div>
                                </div>

                                <div className="z-10 mt-auto">
                                    <h3 className="font-display text-4xl leading-none text-brand-navy mb-4">
                                        Precision <br /> & <span className="italic font-light text-brand-gold">Integrity</span>
                                    </h3>
                                    <div className="h-px w-full bg-brand-ink/10 my-6"></div>
                                    <p className="text-sm font-light leading-relaxed text-brand-ink/60">
                                        End-to-end management of complex labour regulations protecting your enterprise scale.
                                    </p>
                                </div>

                                {/* Geometric editorial detail */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 border-[1px] border-brand-gold/30 rounded-full"></div>
                                <div className="absolute -right-4 -bottom-4 w-40 h-40 border-[1px] border-brand-terracotta/20 rounded-full"></div>
                            </div>

                            {/* Staggered overlapping element */}
                            <div className="absolute -bottom-8 -left-8 w-48 bg-brand-ink p-6 text-brand-cream shadow-editorial z-20">
                                <span className="font-display text-5xl italic font-light text-brand-gold">0</span>
                                <p className="text-[10px] uppercase tracking-widest font-medium mt-2 leading-loose opacity-80">
                                    Escalated<br />Legal Disputes
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
