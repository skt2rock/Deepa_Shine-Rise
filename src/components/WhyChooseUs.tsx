import { useState } from 'react';

const steps = [
    {
        q: "Do you specialize uniquely in the new Labour Codes?",
        a: "Yes. In fact, our core methodology involves preparing mid-and-large size firms for the transition into the 4 New Labour Codes while defending them dynamically from legacy audits."
    },
    {
        q: "How does Shine And Rise differ from software alternatives?",
        a: "Software doesn't talk to Labour Inspectors. While we utilize state-of-the-art tech, our differentiator is human-led legal intervention. If an inspection happens, we physically represent and defend you."
    },
    {
        q: "Can you manage inter-state branch payroll requirements?",
        a: "Absolutely. We unify multi-location payroll processing and guarantee adherence to unique local Professional Tax, LWF, and minimum wage rules irrespective of the state."
    },
    {
        q: "What is your onboarding timeline?",
        a: "A standard takeover from your previous vendor or internal team takes 14 days, involving a complete historic gap analysis before we assume compliance liability."
    }
];

const WhyChooseUs = () => {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section className="py-32 bg-white relative">
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    {/* Left: Accordion Title */}
                    <div className="w-full lg:w-[35%] sticky top-32">
                        <div className="mb-6 w-12 h-px bg-brand-gold"></div>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-navy leading-tight mb-8">
                            Partnering for <span className="italic font-light">Scale,</span> <br />
                            Acting with <span className="italic font-light text-brand-sage">Precision.</span>
                        </h2>
                        <p className="text-brand-ink/60 font-light leading-relaxed max-w-sm">
                            We bridge the critical gap between software platforms and actual legal defense. Here's how we compare.
                        </p>
                    </div>

                    {/* Right: Fine line Accordions */}
                    <div className="w-full lg:w-[65%] border-t border-brand-ink/10">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="border-b border-brand-ink/10 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                                    className="w-full py-8 text-left flex justify-between items-center group"
                                >
                                    <h4 className={`font-display text-xl transition-colors duration-500 pr-8 ${openIdx === idx ? 'text-brand-terracotta italic font-light' : 'text-brand-ink font-medium group-hover:text-brand-gold'}`}>
                                        {step.q}
                                    </h4>
                                    <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
                                        <div className="absolute w-full h-[1px] bg-brand-ink/40"></div>
                                        <div className={`absolute w-[1px] h-full bg-brand-ink/40 transition-transform duration-500 ease-out ${openIdx === idx ? 'rotate-90' : ''}`}></div>
                                    </div>
                                </button>
                                <div className={`transition-all duration-700 ease-in-out ${openIdx === idx ? 'max-h-64 opacity-100 pb-10' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    <p className="text-brand-ink/60 font-light leading-relaxed max-w-2xl pl-4 border-l border-brand-terracotta/30">
                                        {step.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
