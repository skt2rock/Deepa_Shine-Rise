import React from 'react';

const quotes = [
    {
        text: "Shine and Rise eliminated our ongoing ESIC disputes entirely within 60 days. An astoundingly diligent partner.",
        author: "Regional Operations Head",
        company: "Manufacturing Conglomerate"
    },
    {
        text: "Since pivoting our 800+ payroll stack to them, miscalculations and state-level PT delays have vanished.",
        author: "VP of People",
        company: "Series C Logistics Firm"
    },
    {
        text: "Their audit-readiness and meticulous LWF maintenance ensure we never worry about surprise inspections.",
        author: "Chief Financial Officer",
        company: "National Retail Chain"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 bg-[#F1EFEA] border-y border-brand-ink/5 relative overflow-hidden">
            <div className="container mx-auto px-8 max-w-7xl relative z-10">

                <div className="flex justify-between items-end border-b border-brand-ink/10 pb-8 mb-20">
                    <h3 className="text-3xl lg:text-4xl font-display font-medium text-brand-navy">
                        Client <span className="italic font-light text-brand-sage">Voices.</span>
                    </h3>
                    <div className="hidden sm:block text-[10px] uppercase tracking-widest text-brand-ink/40">
                        Select Endorsements
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-16 lg:gap-24 relative">

                    {/* Decorative Background Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border border-brand-ink/5 rounded-[100%] pointer-events-none rotate-12"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] border border-brand-ink/5 rounded-[100%] pointer-events-none -rotate-12"></div>

                    {quotes.map((quote, idx) => (
                        <div key={idx} className="flex flex-col relative bg-transparent group z-10">
                            <span className="font-display italic text-6xl text-brand-gold/40 mb-2 leading-none absolute -top-10 -left-6 z-0 group-hover:-translate-y-2 group-hover:text-brand-terracotta/40 transition-all duration-700">"</span>
                            <blockquote className="text-brand-ink/70 font-display text-2xl lg:text-3xl italic leading-relaxed mb-10 z-10 group-hover:text-brand-ink transition-colors duration-500">
                                {quote.text}
                            </blockquote>

                            <div className="mt-auto pl-4 border-l border-brand-terracotta/30 flex flex-col pt-1">
                                <span className="font-medium text-sm text-brand-ink mb-1">{quote.author}</span>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40">{quote.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
