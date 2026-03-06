export type ServiceFeature = {
    title: string;
    description: string;
};

export type ServiceDetailType = {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    iconName: string; // Used to match lucide icons if needed in UI
    introduction: string;
    valueProposition: string;
    challengesSolved: string[];
    features: ServiceFeature[];
};

export const servicesData: ServiceDetailType[] = [
    {
        id: "pf-esi-compliance",
        slug: "pf-esi-compliance",
        title: "Complete PF & ESI Administration",
        shortDescription: "End-to-end management of Employee Provident Fund and State Insurance obligations.",
        iconName: "ShieldCheck",
        introduction: "The Employees' Provident Fund (EPF) and Employee State Insurance (ESI) are critical social security schemes providing employees with financial stability and health benefits. For employers, maintaining error-free monthly contributions, meticulous filings, and prompt claim settlements is a massive administrative undertaking.",
        valueProposition: "Shine And Rise delivers an end-to-end PF & ESI management solution. We completely absorb the administrative burden, ensuring timely calculations, flawless ECR filings, and robust handling of employee claims. This guarantees your business remains 100% compliant while your workforce enjoys seamless benefit access without portal hassles.",
        challengesSolved: [
            "Complex government portal management and regular errors during ECR filings.",
            "Costly penalties, damages under Section 14B, and potential prosecution for delayed remittances.",
            "High administrative burden in processing employee claims, KYC updates, and transfer requests."
        ],
        features: [
            {
                title: "Registration & Configuration",
                description: "Seamless assistance in securing your PF/ESI codes and registering your establishment with respective authorities."
            },
            {
                title: "Employee Claim Support",
                description: "Managing the entire lifecycle for employee withdrawals, transfers, and healthcare benefit advances."
            },
            {
                title: "Monthly Remittances & Filing",
                description: "Executing complex monthly contribution calculations to guarantee on-time Challan generation and accurate return filings."
            },
            {
                title: "Liaison & Notice Management",
                description: "Dedicated representation before EPFO & ESIC departments, responding efficiently to show-cause notices or inspections."
            }
        ]
    },
    {
        id: "hr-policies-governance",
        slug: "hr-policies-governance",
        title: "HR Policies & Governance Architecture",
        shortDescription: "Drafting compliant employment manuals, standardized contracts, and disciplinary frameworks.",
        iconName: "FileText",
        introduction: "Corporate governance and HR policy frameworks form the backbone of a legally robust organization. Without clearly defined employment rules, companies expose themselves to labor disputes, arbitrary decision-making, and regulatory violations.",
        valueProposition: "We architect customized, legally vetted HR manuals and corporate governance frameworks. Our process ensures that your internal policies—ranging from attendance and leave rules to termination procedures—perfectly align with the latest state-specific labor codes, protecting you from litigation and building an equitable workplace.",
        challengesSolved: [
            "Inconsistent employee disciplinary procedures leading to easily lost labor court cases.",
            "Outdated HR manuals that do not comply with the new Code on Wages and local State regulations.",
            "Ambiguous onboarding and termination protocols creating legal liabilities."
        ],
        features: [
            {
                title: "Custom HR Manual Creation",
                description: "Drafting comprehensive employee handbooks detailing company rules, leave policies, and code of conduct."
            },
            {
                title: "Employment Contract Structuring",
                description: "Designing legally sound appointment letters, NDAs, and full-and-final settlement frameworks."
            },
            {
                title: "Policy Audits & Revamps",
                description: "Reviewing existing internal policies to identify gaps against the latest labor legislations across operating states."
            },
            {
                title: "Disciplinary Grid Formulation",
                description: "Establishing clear, lawful protocols for handling workplace misconduct, domestic inquiries, and terminations."
            }
        ]
    },
    {
        id: "labour-law-advisory",
        slug: "labour-law-advisory",
        title: "Expert Labour Law Consulting",
        shortDescription: "Strategic counsel navigating India's complex framework of employment and factory legislations.",
        iconName: "BookOpen",
        introduction: "India’s labor laws are vast, complex, and continuously evolving. Navigating the multiplicity of central and state laws requires deep, specialized legal expertise to safeguard business continuity and employer reputation.",
        valueProposition: "Shine And Rise serves as your strategic legal partner, providing lucid, actionable advisory on all aspects of employment law. From applicability assessments of specific acts to navigating industrial disputes and the transition to the new Labour Codes, we provide the proactive counsel necessary to operate risk-free.",
        challengesSolved: [
            "Confusion regarding the applicability of specific laws (like Minimum Wages, Bonus Act) based on headcount and state.",
            "Risks of criminal liability falling upon directors and principal employers due to non-compliances by contractors.",
            "Lack of strategic guidance during strikes, lockouts, or complex union negotiations."
        ],
        features: [
            {
                title: "Applicability Assessment",
                description: "Detailed legal audits to determine exactly which federal and state labour laws apply to your specific industry and location."
            },
            {
                title: "Contract Labour Advisory",
                description: "Robust strategies to ensure compliance under the Contract Labour (Regulation and Abolition) Act, protecting the principal employer."
            },
            {
                title: "Legal Directives & Updates",
                description: "Real-time alerts and strategic action plans regarding Supreme Court rulings, Gazette notifications, and the 4 New Labour Codes."
            },
            {
                title: "Dispute Resolution Management",
                description: "Expert guidance in handling conciliation proceedings, labour court matters, and union negotiations."
            }
        ]
    },
    {
        id: "payroll-operations",
        slug: "payroll-operations",
        title: "Full-Cycle Payroll Operations",
        shortDescription: "SLA-driven, strictly compliant payroll processing addressing taxation and statutory deductions.",
        iconName: "Calculator",
        introduction: "Processing payroll correctly is about much more than transferring salaries. It requires the precise amalgamation of attendance data, statutory deductions (PF, ESI, PT, LWF), tax withholdings (TDS), and dynamic compliance with the latest regulations.",
        valueProposition: "We provide an airtight, SLA-driven payroll processing service. By merging expert payroll administration with our deep statutory compliance knowledge, Shine And Rise ensures 100% accurate, on-time salary disbursements. We eliminate the risk of miscalculations and subsequent government penalties, letting you focus entirely on your core business.",
        challengesSolved: [
            "Frequent calculation errors leading to employee dissatisfaction and statutory underpayments.",
            "Difficulty keeping up with changing income tax slabs and complex state-specific Professional Tax rates.",
            "Time-consuming reconciliation between HR, Finance, and external compliance vendors."
        ],
        features: [
            {
                title: "Automated Salary Processing",
                description: "End-to-end calculation of gross pay, statutory deductions, tax withholdings, and net pay."
            },
            {
                title: "Statutory Registry Maintenance",
                description: "Automatic background generation of necessary statutory registers (Wage Register, Muster Roll) as required by various Acts."
            },
            {
                title: "Employee Tax Management",
                description: "Handling investment declarations, accurate TDS deductions, and issuance of definitive Form 16s."
            },
            {
                title: "Full and Final (FnF) Settlements",
                description: "Expedited processing of employee exits, calculating gratuity, leave encashment, and recovery of dues."
            }
        ]
    },
    {
        id: "posh-readiness",
        slug: "posh-readiness",
        title: "Anti-Sexual Harassment (POSH) Readiness",
        shortDescription: "Certified committee training, policy drafting, and annual reporting for secure workspaces.",
        iconName: "Users",
        introduction: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 necessitates strict compliance from every organization with 10 or more employees. Non-compliance results in heavy fines and the potential cancellation of business licenses.",
        valueProposition: "Shine And Rise ensures absolute compliance with the POSH Act through a holistic approach. We go beyond mere paperwork; we help cultivate a safe, inclusive workplace culture. From drafting zero-tolerance policies to training your Internal Committee (IC) and filing annual returns, we shield your organization comprehensively.",
        challengesSolved: [
            "Failure to properly constitute an Internal Committee (IC) with an eligible external member.",
            "Lack of employee awareness regarding POSH procedures leading to unreported or improperly handled escalations.",
            "Missing mandatory annual return filings to the District Officer, resulting in severe legal consequences."
        ],
        features: [
            {
                title: "Policy Formulation",
                description: "Drafting and implementing a customized, legally robust Anti-Sexual Harassment policy for your organization."
            },
            {
                title: "IC Constitution & External Member",
                description: "Guidance on forming the Internal Committee and providing a qualified external member from our legal panel."
            },
            {
                title: "Sensitization Workshops",
                description: "Conducting engaging, legally mandated training programs for both employees and IC members."
            },
            {
                title: "Investigation Support & Compliance",
                description: "Guiding the IC through lawful inquiry procedures and ensuring the timely submission of Annual POSH Reports."
            }
        ]
    },
    {
        id: "audit-inspection-defence",
        slug: "audit-inspection-defence",
        title: "Comprehensive Audit & Inspection Shield",
        shortDescription: "Mock audits, gap analysis, and front-line representation during government physical inspections.",
        iconName: "ClipboardCheck",
        introduction: "Random physical inspections and notices by Labour Departments, EPFO, and ESIC authorities are a constant threat to businesses. A single missing register or delayed challan discovered during an audit can trigger severe financial and reputational damage.",
        valueProposition: "Our 'Inspection Shield' service transforms your organization from being reactive to audit-ready. We conduct rigorous mock compliance audits to identify and rectify gaps before authorities do. When official inspections or summons occur, our seasoned experts represent your company on the front line, aggressively defending your interests and mitigating penalty exposures.",
        challengesSolved: [
            "Panic and operational disruption when unexpected Labour Inspectors visit the premises.",
            "Historical compliance gaps accumulating into massive retrospective financial liabilities.",
            "Inability to professionally respond to complex Show Cause Notices from government bodies."
        ],
        features: [
            {
                title: "Mock Compliance Audits",
                description: "Extensive internal reviews mirroring government inspections to uncover vulnerabilities in registers, displays, and records."
            },
            {
                title: "Digital Verification & Structuring",
                description: "Organizing and digitizing historical compliance records to ensure instant retrievability during snap inspections."
            },
            {
                title: "Frontline Representation",
                description: "Expert liaison and physical representation before Labour Commissioners, PF/ESI Authorities, and judicial tribunals."
            },
            {
                title: "Corrective Action Execution",
                description: "Developing and implementing rapid remediation plans to close identified gaps and regularize historical defaults."
            }
        ]
    }
];
