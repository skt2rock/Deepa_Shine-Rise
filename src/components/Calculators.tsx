
const tools = [
    {
        title: "CTC Configurator",
        desc: "Analyze structures under the New Code of Wages 2019 seamlessly.",
        idx: "01"
    },
    {
        title: "ESIC Wage Harmonizer",
        desc: "Calculate precise statutory wages under the Code on Social Security 2020.",
        idx: "02"
    },
    {
        title: "Bonus Analyzer",
        desc: "Compare the Payment of Bonus Act vs the latest regulatory Codes.",
        idx: "03"
    },
    {
        title: "Gratuity Engine",
        desc: "Determine definitive exit benefits under the Gratuity Act 1972.",
        idx: "04"
    },
    {
        title: "Professional Tax Map",
        desc: "Automatically determine PT applicability across all major Indian states.",
        idx: "05"
    }
];

const Calculators = () => {
    return (
        <section id="calculators" className="py-32 bg-[#F1EFEA] border-y border-brand-ink/5 relative">
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-24 items-start">

                    {/* Header Side */}
                    <div className="w-full lg:w-[40%] sticky top-32">
                        <div className="mb-6 flex gap-4 items-center">
                            <span className="w-2 h-2 rounded-full border border-brand-terracotta bg-transparent flex-shrink-0"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink/40">Open Source</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-display font-medium text-brand-navy leading-tight mb-8">
                            Smart Compliance <br /><span className="italic font-light text-brand-terracotta">Calculators.</span>
                        </h2>

                        <p className="text-brand-ink/60 leading-relaxed font-light mb-12 max-w-sm">
                            Instant, precise, and fully updated with the latest Indian Labour Codes. Accelerate your decision-making with these free configurations.
                        </p>

                        <a href="#contact" className="inline-block border-b border-brand-ink hover:text-brand-terracotta hover:border-brand-terracotta transition-colors duration-500 pb-1 text-sm uppercase tracking-widest font-medium text-brand-ink">
                            Request Custom Audit
                        </a>
                    </div>

                    {/* Tools Vertical List */}
                    <div className="w-full lg:w-[60%] border-t border-brand-ink/10">
                        {tools.map((tool, idx) => (
                            <div key={idx} className="group py-10 border-b border-brand-ink/10 flex flex-col sm:flex-row sm:items-baseline gap-6 sm:gap-12 hover:bg-white/40 transition-colors duration-700 cursor-pointer px-4 -mx-4">
                                <span className="font-display italic text-2xl text-brand-gold/60 shrink-0 w-12">
                                    {tool.idx}
                                </span>
                                <div>
                                    <h4 className="text-xl font-display font-medium text-brand-ink mb-3 group-hover:text-brand-terracotta transition-colors duration-500">{tool.title}</h4>
                                    <p className="text-sm font-light text-brand-ink/60 leading-relaxed max-w-md">{tool.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Calculators;
