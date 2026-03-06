import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Expertise = () => {
    return (
        <section id="expertise" className="py-32 bg-white relative">
            <div className="container mx-auto px-8 max-w-7xl relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                    <div className="max-w-xl">
                        <div className="mb-6 w-12 h-px bg-brand-terracotta opacity-50"></div>
                        <h3 className="text-5xl lg:text-6xl font-display font-medium text-brand-ink leading-tight">
                            Our Core <br /><span className="italic font-light text-brand-sage">Competencies.</span>
                        </h3>
                    </div>
                    <p className="text-brand-ink/60 font-light leading-relaxed max-w-md pb-2">
                        Eliminate the stress of legal requirements. We handle administrative and statutory complexities so your team can focus entirely on scaling.
                    </p>
                </div>

                {/* Editorial Grid List */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-brand-ink/10">
                    {servicesData.map((service, idx) => (
                        <Link
                            to={`/expertise/${service.slug}`}
                            key={idx}
                            className="group relative block p-12 border-b border-r border-brand-ink/10 bg-white hover:bg-brand-cream/30 transition-colors duration-700"
                        >
                            <div className="absolute top-8 right-8 text-[11px] font-bold text-brand-ink/20 group-hover:text-brand-terracotta transition-colors duration-500">
                                0{idx + 1}
                            </div>

                            <h4 className="text-2xl font-display font-medium text-brand-navy mb-6 pr-8 group-hover:text-brand-terracotta transition-colors duration-500">
                                {service.title}
                            </h4>

                            <p className="text-brand-ink/60 font-light leading-relaxed text-sm mb-12">
                                {service.shortDescription}
                            </p>

                            <div className="mt-auto inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-medium text-brand-ink/40 group-hover:text-brand-ink transition-colors duration-500">
                                View Capabilities
                                <span className="inline-block ml-3 w-4 h-px bg-brand-ink/40 group-hover:w-8 group-hover:bg-brand-terracotta transition-all duration-500"></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
