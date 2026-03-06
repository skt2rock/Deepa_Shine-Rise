import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-32 bg-brand-cream relative">
            <div className="container mx-auto px-8 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-20">

                    {/* Left Typography Block */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="mb-8 w-12 h-px bg-brand-terracotta"></div>

                        <h2 className="text-4xl lg:text-5xl font-display font-medium text-brand-navy leading-tight mb-12">
                            Empowering Enterprise <br /> Through Absolute <span className="italic font-light text-brand-gold">Compliance.</span>
                        </h2>

                        <div className="text-brand-ink/70 leading-relaxed font-light space-y-8">
                            <p className="indent-10">
                                Shine And Rise Facilities is a premier Statutory Compliance, Payroll, and Labour Law Advisory firm. We deliver tailored, end-to-end outsourcing solutions for corporates, SMEs, and multi-state organizations across India.
                            </p>
                            <p>
                                Our philosophy is distinctly simple: Compliance is not just a regulatory hurdle; it is the foundation of organizational trust. Using a deeply detailed, law-backed methodology, we ensure that every critical obligation is met flawlessly.
                            </p>
                        </div>
                    </div>

                    {/* Right Abstract Imagery Concept */}
                    <div className="lg:col-span-6 lg:col-start-7 relative">
                        <div className="aspect-[4/5] bg-brand-ink w-full relative sm:p-12 p-8 shadow-editorial overflow-hidden">

                            <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>

                            <div className="relative z-10 h-full flex flex-col justify-between border border-brand-cream/10 p-8 sm:p-12">
                                <span className="font-display italic text-6xl text-brand-gold/70 select-none">"</span>

                                <blockquote className="font-display font-medium text-2xl sm:text-3xl lg:text-[2rem] text-brand-cream leading-[1.3] my-8 tracking-wide">
                                    We protect your organizational structure from risks and arbitrary penalties with ironclad processes.
                                </blockquote>

                                <div className="mt-8 flex items-center justify-between border-t border-brand-cream/10 pt-8">
                                    <div className="flex flex-col gap-1 text-xs">
                                        <span className="uppercase tracking-[0.2em] font-medium text-brand-gold">500+</span>
                                        <span className="text-brand-cream/50 tracking-widest uppercase">Active Clients</span>
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs text-right">
                                        <span className="uppercase tracking-[0.2em] font-medium text-brand-gold">1M+</span>
                                        <span className="text-brand-cream/50 tracking-widest uppercase">Payslips Processed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative offset line */}
                        <div className="absolute -left-4 -bottom-4 w-full h-[1px] bg-brand-ink/20"></div>
                        <div className="absolute -left-4 -bottom-4 w-[1px] h-32 bg-brand-ink/20"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
