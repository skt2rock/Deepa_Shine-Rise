import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Statutory Compliance', message: '' });

    return (
        <section id="contact" className="py-32 bg-brand-cream relative">
            <div className="container mx-auto px-8 max-w-7xl">

                <div className="grid lg:grid-cols-12 gap-20">

                    {/* Left Form Block (Refined, no box) */}
                    <div className="lg:col-span-7 pr-0 lg:pr-12">
                        <div className="mb-6 w-12 h-px bg-brand-gold"></div>
                        <h2 className="text-4xl lg:text-5xl font-display font-medium text-brand-navy leading-tight mb-4">
                            Establish Absolute <br /><span className="italic font-light text-brand-terracotta">Integrity.</span>
                        </h2>
                        <p className="text-brand-ink/60 font-light leading-relaxed mb-16 max-w-md">
                            Schedule a rigorous evaluation of your current compliance structure. Complete confidentiality assured.
                        </p>

                        <form className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-b border-brand-ink/20 py-3 text-brand-ink focus:outline-none focus:border-brand-terracotta transition-colors peer placeholder-transparent"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <label className="absolute left-0 top-3 text-brand-ink/40 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-terracotta peer-valid:-top-4 peer-valid:text-xs">
                                        Full Name
                                    </label>
                                </div>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-transparent border-b border-brand-ink/20 py-3 text-brand-ink focus:outline-none focus:border-brand-terracotta transition-colors peer placeholder-transparent"
                                        placeholder="Business Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <label className="absolute left-0 top-3 text-brand-ink/40 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-terracotta peer-valid:-top-4 peer-valid:text-xs">
                                        Corporate Email Address
                                    </label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        className="w-full bg-transparent border-b border-brand-ink/20 py-3 text-brand-ink focus:outline-none focus:border-brand-terracotta transition-colors peer placeholder-transparent"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    <label className="absolute left-0 top-3 text-brand-ink/40 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-terracotta peer-valid:-top-4 peer-valid:text-xs">
                                        Direct Contact Number
                                    </label>
                                </div>
                                <div className="relative group">
                                    <label className="absolute left-0 -top-4 text-xs text-brand-ink/40">Area of Legal Concern</label>
                                    <select
                                        className="w-full bg-transparent border-b border-brand-ink/20 py-3 text-brand-ink focus:outline-none focus:border-brand-terracotta transition-colors appearance-none cursor-pointer"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="Statutory Compliance">Statutory Audit vs Current Vendor</option>
                                        <option value="Payroll Outsourcing">Multi-State Payroll Outsourcing</option>
                                        <option value="Labour Law Advisory">Labour Law Notice Representation</option>
                                        <option value="Other">Custom Legal Consultation</option>
                                    </select>
                                    <div className="absolute right-0 top-4 pointer-events-none text-brand-ink/40 text-xs">▼</div>
                                </div>
                            </div>

                            <div className="relative group">
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-brand-ink/20 py-3 text-brand-ink focus:outline-none focus:border-brand-terracotta transition-colors peer placeholder-transparent resize-none"
                                    placeholder="Brief details"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                                <label className="absolute left-0 top-3 text-brand-ink/40 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-terracotta peer-valid:-top-4 peer-valid:text-xs">
                                    Confidential Brief of Requirement
                                </label>
                            </div>

                            <button type="submit" className="px-10 py-5 bg-brand-ink text-brand-cream text-xs uppercase tracking-widest font-medium hover:bg-brand-navy hover:text-brand-gold transition-colors duration-500 w-full sm:w-auto relative group overflow-hidden border border-brand-ink">
                                <span className="relative z-10 transition-transform duration-500 inline-block group-hover:translate-x-2">Secure Consultation Request</span>
                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-brand-navy translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></div>
                            </button>
                        </form>
                    </div>

                    {/* Right Info Box */}
                    <div className="lg:col-span-5 relative mt-16 md:mt-0">
                        <div className="h-full w-full bg-[#161D24] p-12 text-brand-cream shadow-editorial relative overflow-hidden flex flex-col justify-between">

                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-[60px]"></div>

                            <div className="relative z-10 mb-16">
                                <h3 className="font-display font-medium italic text-3xl mb-8 border-b border-brand-cream/10 pb-8 text-brand-gold">Executive Connect</h3>

                                <div className="space-y-8">
                                    <div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cream/40 block mb-2">Direct Line</span>
                                        <p className="font-display text-2xl tracking-wide hover:text-brand-terracotta transition-colors cursor-pointer">+91 8169 2921 79</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cream/40 block mb-2">Private Secure Mail</span>
                                        <p className="text-sm font-light hover:text-brand-terracotta transition-colors cursor-pointer border-b border-transparent hover:border-brand-terracotta inline-block leading-relaxed">deepa@shineandrisefacilities.in</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cream/40 block mb-2">HQ Operations</span>
                                        <p className="text-sm font-light text-brand-cream/70 leading-relaxed max-w-[200px]">
                                            Quest Co Works, Technopolis<br />
                                            Knowledge Park, Andheri East<br />
                                            Mumbai 400093
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-brand-cream/10 flex justify-between items-center relative z-10">
                                <span className="text-[10px] tracking-[0.2em] font-medium text-brand-cream/40 uppercase">Encrypted Intake</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
