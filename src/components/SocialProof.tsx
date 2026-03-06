import { Building2, Briefcase, Factory, GraduationCap, Plane, Stethoscope } from 'lucide-react';

const industries = [
    { name: "Manufacturing & Power", icon: <Factory className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-brand-ocean transition-colors duration-300" /> },
    { name: "IT & Telecommunication", icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-brand-ocean transition-colors duration-300" /> },
    { name: "Banking & Financial Series", icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-brand-ocean transition-colors duration-300" /> },
    { name: "Logistics & Travels", icon: <Plane className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-brand-ocean transition-colors duration-300" /> },
    { name: "Hospitality & Healthcare", icon: <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-brand-ocean transition-colors duration-300" /> },
    { name: "Education & Institution", icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-brand-ocean transition-colors duration-300" /> }
];

const SocialProof = () => {
    return (
        <section className="py-20 border-b border-slate-100 bg-[#FAFCFF] overflow-hidden flex flex-col items-center">
            <h4 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
                Securing Statutory Capabilities For
            </h4>

            {/* Simulated Marquee */}
            <div className="w-full relative flex overflow-x-hidden">
                <div className="py-6 animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-20 justify-around w-full max-w-7xl px-6 mx-auto">
                    {industries.map((ind, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-glow group-hover:-translate-y-1 transition-all duration-300 ease-out flex items-center justify-center">
                                {ind.icon}
                            </div>
                            <span className="text-slate-500 font-display font-semibold text-sm group-hover:text-brand-ocean transition-colors tracking-wide">
                                {ind.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
