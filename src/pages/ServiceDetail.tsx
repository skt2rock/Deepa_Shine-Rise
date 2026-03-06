import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';
import Layout from '../components/Layout';

const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();

    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return <Navigate to="/" replace />;
    }

    return (
        <Layout>
            {/* Dynamic Hero Section */}
            <section className="pt-32 pb-20 bg-brand-navy relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 background-pattern"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 transition-all duration-700 ease-out opacity-100 translate-y-0">
                    <Link to="/#expertise" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-wider text-xs font-bold mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">
                            {service.title}
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed font-medium">
                            {service.shortDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left Column: Detail text */}
                        <div className="lg:w-2/3 space-y-12">

                            <div>
                                <h2 className="text-xs uppercase tracking-widest text-brand-navy font-bold flex items-center gap-2 mb-4">
                                    <span className="w-8 h-0.5 bg-brand-gold block"></span> Overview
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    {service.introduction}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-brand-navy mb-6">The Shine And Rise Advantage</h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    {service.valueProposition}
                                </p>
                                <div className="bg-brand-navy p-8 rounded-2xl text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 blur-2xl rounded-full"></div>
                                    <h3 className="font-bold text-brand-gold mb-4 uppercase tracking-wider text-sm">Key Challenges We Solve:</h3>
                                    <ul className="space-y-4">
                                        {service.challengesSolved.map((challenge, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                                                <span className="text-slate-300 leading-relaxed">{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Features Grid and CTA */}
                        <div className="lg:w-1/3 space-y-8">

                            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
                                <h3 className="font-display font-bold text-xl text-brand-navy mb-6">Service Capabilities</h3>
                                <div className="space-y-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="group border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                                            <h4 className="font-bold text-slate-800 mb-2 group-hover:text-brand-red transition-colors">{feature.title}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-2xl p-8 text-center border-t-4 border-brand-gold shadow-lg transform hover:-translate-y-1 transition-transform">
                                <h3 className="text-white font-display font-bold text-xl mb-3">Require Expertise?</h3>
                                <p className="text-sm text-slate-400 mb-6">Let's discuss how we can streamline this specific compliance area for your organization.</p>
                                <Link to="/#contact" className="inline-block w-full py-4 px-6 bg-brand-red hover:bg-rose-600 text-white font-bold rounded shadow-lg transition-colors">
                                    Consult Our Experts
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
