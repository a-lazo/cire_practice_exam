/*
 * CIRE Mock Exam — EXPERIMENTAL Question Bank (New Syllabus edition)
 * ------------------------------------------------------------------
 * These ORIGINAL practice questions are mapped to the CIRO "Canadian
 * Investment Regulatory Exam (CIRE) Syllabus" (January 2025). They are
 * written to reflect the CURRENT/NEW syllabus and deliberately use the
 * new terminology and framework (CIRO IDPC Rules, UMIR, Investment
 * Representative vs Registered Representative, account appropriateness
 * vs suitability determination, CTPs/FORM, T+1 settlement, position of
 * influence, crypto/ESG products, etc.) rather than legacy exam framing.
 *
 * They are NOT real exam questions and are for study only. Always verify
 * current rules and thresholds against official CIRO / CSA sources.
 *
 * The exam blueprint (from the syllabus) is:
 *   Element 1  Overview of regulatory framework .............. 11 Qs
 *   Element 2  Prospective client relationships .............. 11 Qs
 *   Element 3  Scope of client relationships ................. 17 Qs
 *   Element 4  Client complaint handling ......................6 Qs
 *   Element 5  Market and company analysis ....................9 Qs
 *   Element 6  Market integrity, trade execution & settlement 13 Qs
 *   Element 7  Securities, managed products & mutual funds ... 21 Qs
 *   Element 8  Derivatives ....................................6 Qs
 *   Element 9  Conflicts of interest and ethics .............. 16 Qs
 *   Total = 110 questions, 2 hours, multiple choice.
 *
 * Each question carries an optional "syllabus" reference (e.g., "3.10")
 * pointing to the learning outcome it tests.
 *
 * To add your own: copy a block, keep the field names, and set
 * "answer" to the 0-based index of the correct option.
 */

const QUESTION_BANK_EXPERIMENTAL = [

  /* =========================================================
     ELEMENT 1 — Overview of the Canadian securities regulatory framework
     ========================================================= */
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.2",
    difficulty: "Hard",
    question: "An Investment Dealer's trading supervisor needs to determine which CIRO rule set governs conduct ON a marketplace — matters such as best execution, front running and manipulative trading. Which rules apply?",
    options: [
      "The Investment Dealer and Partially Consolidated (IDPC) Rules",
      "The Universal Market Integrity Rules (UMIR)",
      "National Instrument 45-106",
      "The Proceeds of Crime (Money Laundering) and Terrorist Financing Act"
    ],
    answer: 1,
    explanation: "UMIR governs trading and market-integrity conduct on marketplaces (best execution, manipulative/deceptive activity, front running). The IDPC Rules govern dealer-member conduct, proficiency and capital more broadly."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.1",
    difficulty: "Hard",
    question: "Which statement best reflects the authority to review and issue a receipt for a prospectus in Canada?",
    options: [
      "CIRO reviews and receipts all prospectuses nationally",
      "The provincial/territorial securities regulators (CSA members) are responsible for reviewing and receipting prospectuses",
      "FINTRAC approves prospectuses before distribution",
      "The Bank of Canada must approve every prospectus"
    ],
    answer: 1,
    explanation: "Securities regulation is provincial/territorial. The CSA members (the provincial and territorial regulators) review disclosure and issue the receipt for a prospectus. The CSA harmonizes through National Instruments but is not itself a statutory regulator, and CIRO is an SRO, not the prospectus authority."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.6",
    difficulty: "Hard",
    question: "A CIRO-regulated Investment Dealer becomes insolvent and a portion of client securities cannot be accounted for. What is the role of the Canadian Investor Protection Fund (CIPF)?",
    options: [
      "It reimburses clients for investment losses caused by market declines",
      "It restores eligible client property that is missing due to the member's insolvency, within coverage limits, and pools customer assets in the bankruptcy",
      "It guarantees a minimum rate of return on client accounts",
      "It replaces the provincial regulator's enforcement role"
    ],
    answer: 1,
    explanation: "CIPF covers eligible client property (cash and securities) held by an insolvent CIRO member up to defined limits and plays a role in pooling customer assets in the insolvency. It does not cover market losses or guarantee returns."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.5",
    difficulty: "Expert",
    question: "Which entity acts as the central clearing counterparty for exchange-traded derivatives in Canada?",
    options: [
      "The Canadian Depository for Securities Limited (CDS)",
      "The Canadian Derivatives Clearing Corporation (CDCC)",
      "The Ombudsman for Banking Services and Investments (OBSI)",
      "The Office of the Superintendent of Financial Institutions (OSFI)"
    ],
    answer: 1,
    explanation: "The CDCC is the clearing agency/central counterparty for exchange-traded derivatives in Canada. CDS is the clearing and depository system for securities transactions."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.10",
    difficulty: "Core",
    question: "Under the PCMLTFA framework, the three recognized stages of money laundering are:",
    options: [
      "Deposit, hold and redeem",
      "Placement, layering and integration",
      "Origination, distribution and settlement",
      "Detection, reporting and prosecution"
    ],
    answer: 1,
    explanation: "Money laundering is described in three stages: placement (introducing illicit funds), layering (obscuring the origin through complex transactions), and integration (returning the funds in apparently legitimate form)."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.10",
    difficulty: "Hard",
    question: "A client deposits $10,000 in cash in a single transaction. Under the PCMLTF Regulations, the Investment Dealer must, as a reporting entity:",
    options: [
      "File nothing, because $10,000 is below the threshold",
      "File a Large Cash Transaction Report with FINTRAC (single transaction of $10,000 or more, or aggregated within 24 hours)",
      "Immediately freeze the account permanently",
      "Notify the client that a suspicious transaction report has been filed"
    ],
    answer: 1,
    explanation: "A cash receipt of $10,000 or more (or multiple cash amounts totalling $10,000+ within 24 hours from the same client) triggers a Large Cash Transaction Report to FINTRAC. Suspicious Transaction Reports, by contrast, have no dollar threshold and must never be disclosed to the client ('tipping off')."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.4",
    difficulty: "Expert",
    question: "A dealer provides clients access to a platform that facilitates the buying and selling of crypto assets and is subject to Canadian regulatory oversight. In the syllabus's marketplace terminology, this platform is a:",
    options: [
      "Foreign Organized Regulated Market (FORM)",
      "Crypto-Asset Trading Platform (CTP)",
      "Alternative Trading System for government bonds",
      "Central counterparty"
    ],
    answer: 1,
    explanation: "A Crypto-Asset Trading Platform (CTP) facilitates trading in crypto assets. A FORM is a foreign organized regulated market; an ATS is an alternative trading system (a marketplace) for securities."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.11",
    difficulty: "Hard",
    question: "Which legislation governs how an Investment Dealer collects, uses and discloses a client's personal information in the course of commercial activity?",
    options: [
      "The Personal Information Protection and Electronic Documents Act (PIPEDA)",
      "Canada's Anti-Spam Legislation (CASL)",
      "The Bank Act",
      "The Universal Market Integrity Rules"
    ],
    answer: 0,
    explanation: "PIPEDA is the federal privacy law governing the collection, use and disclosure of personal information in commercial activity (subject to substantially similar provincial laws). CASL governs commercial electronic messages, not general privacy."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.11",
    difficulty: "Core",
    question: "Before an Investment Dealer sends marketing emails (commercial electronic messages) to prospective clients, Canada's Anti-Spam Legislation (CASL) generally requires that the firm:",
    options: [
      "Obtain consent (express or implied) and include identification and an unsubscribe mechanism",
      "Send at least three emails before asking for consent",
      "Do nothing, as CASL does not apply to financial firms",
      "Only email clients who have complained"
    ],
    answer: 0,
    explanation: "CASL requires consent (express or implied) to send commercial electronic messages, along with sender identification and a functioning unsubscribe mechanism."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.7",
    difficulty: "Hard",
    question: "Which body is responsible for the PRUDENTIAL regulation (e.g., capital adequacy and solvency) of federally regulated banks and insurers, rather than securities market conduct?",
    options: [
      "The Office of the Superintendent of Financial Institutions (OSFI)",
      "CIRO",
      "The Ombudsman for Banking Services and Investments (OBSI)",
      "The RCMP Integrated Market Enforcement Teams (IMET)"
    ],
    answer: 0,
    explanation: "OSFI is the prudential regulator of federally regulated financial institutions, focusing on solvency and capital. CIRO regulates investment dealer conduct; IMET investigates serious capital-markets fraud; OBSI handles dispute resolution."
  },
  {
    category: "E1 · Regulatory Framework",
    syllabus: "1.3",
    difficulty: "Hard",
    question: "An individual wishes to be approved to advise retail clients at an Investment Dealer. Which statement about the registration/approval process is correct?",
    options: [
      "CIRO alone grants securities registration with no involvement of the securities regulators",
      "Registration is administered under securities law by the CSA members, while CIRO approves the individual in the appropriate category at the dealer",
      "No approval is needed if the individual only takes orders",
      "OSFI approves all individual registrations"
    ],
    answer: 1,
    explanation: "Individuals are registered under provincial securities law (CSA members) and approved by CIRO in the relevant category (e.g., Registered Representative). Both the regulator and the SRO have roles in the process."
  },

  /* =========================================================
     ELEMENT 2 — Prospective client relationships
     ========================================================= */
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.2",
    difficulty: "Hard",
    question: "A corporation with $14 million in securities under administration asks to open an account. Under CIRO rules, on what basis may it be treated as an institutional client?",
    options: [
      "Because it is a corporation, all corporations are institutional clients",
      "Because it is a non-individual with total securities and precious metals bullion under administration or management exceeding $10 million",
      "Because it consents in writing regardless of asset size",
      "Because it trades frequently"
    ],
    answer: 1,
    explanation: "A non-individual with total securities and precious metals bullion under administration or management exceeding $10 million qualifies as an institutional client. (An individual over $10 million may qualify only if they request and consent to the classification.)"
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.4",
    difficulty: "Expert",
    question: "Under National Instrument 45-106, which individual would qualify as an 'accredited investor' on a financial-assets basis?",
    options: [
      "An individual with an annual salary of $85,000",
      "An individual who alone, or with a spouse, owns net financial assets (cash and securities, net of liabilities) exceeding $1,000,000 before taxes",
      "Any individual who has taken an investing course",
      "Any individual who has held an account for more than five years"
    ],
    answer: 1,
    explanation: "One accredited-investor test is net financial assets (cash + securities, net of related liabilities) exceeding $1,000,000. Other tests include net income before taxes over $200,000 ($300,000 with a spouse) in each of the last two years, or net assets of at least $5,000,000."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.6",
    difficulty: "Core",
    question: "In the required retail client information, the term 'risk profile' is composed of which two elements?",
    options: [
      "Investment knowledge and time horizon",
      "Risk tolerance and risk capacity",
      "Net worth and annual income",
      "Investment objectives and needs"
    ],
    answer: 1,
    explanation: "The syllabus specifies that a client's risk profile comprises risk tolerance (willingness to accept risk) and risk capacity (financial ability to absorb loss). Both must be assessed and reconciled."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.7",
    difficulty: "Hard",
    question: "During onboarding, a client names a Trusted Contact Person (TCP). What is the TCP's role?",
    options: [
      "To authorize trades on the client's behalf",
      "To be a resource the Investment Dealer may contact regarding suspected financial exploitation, concerns about the client's mental capacity, or to confirm contact details — with no trading authority",
      "To guarantee the client's margin obligations",
      "To receive copies of every trade confirmation automatically"
    ],
    answer: 1,
    explanation: "A TCP is a contact the firm may reach out to in limited circumstances (suspected exploitation, diminished capacity, or verifying contact information). The TCP has no authority over the account. This differs from a power of attorney, who can act for the client."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.10",
    difficulty: "Hard",
    question: "Which of the following would be included in the account agreement / Firm Welcome package provided to a new retail client?",
    options: [
      "A guarantee of investment performance",
      "The CIRO account opening brochure, the fee schedule, the dealer's conflict-of-interest disclosures, and complaint-handling information",
      "The client's future tax return",
      "A list of the dealer's most profitable proprietary products only"
    ],
    answer: 1,
    explanation: "The Firm Welcome package/account agreement includes items such as the fee schedule, the CIRO account opening brochure, conflict-of-interest disclosures, and complaint-handling procedures/brochures. Performance guarantees are prohibited."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.9",
    difficulty: "Expert",
    question: "Two mutual funds have identical gross returns, but Fund X has a management expense ratio (MER) of 2.3% and higher portfolio turnover than Fund Y at 0.9%. Considering the syllabus outcome on fees, turnover and taxes, the MOST accurate conclusion is that:",
    options: [
      "Fund X will always outperform because higher fees signal better management",
      "Fund Y is likely to deliver a higher net return to the investor, and lower turnover may also reduce taxable distributions in a non-registered account",
      "MER and turnover have no effect on the investor's return",
      "Turnover only matters inside registered accounts"
    ],
    answer: 1,
    explanation: "Higher MERs directly reduce net returns, and higher turnover tends to generate more realized capital gains distributions (taxable in non-registered accounts). All else equal, the lower-cost, lower-turnover fund is likely to leave the investor with more after fees and taxes."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.1",
    difficulty: "Core",
    question: "The client relationship model, as described in the syllabus, includes all of the following components EXCEPT:",
    options: [
      "Relationship disclosure",
      "Conflicts-of-interest management and disclosure",
      "A guaranteed return commitment",
      "Suitability assessment and account performance reporting"
    ],
    answer: 2,
    explanation: "The client relationship model covers relationship disclosure, conflicts-of-interest management/disclosure, suitability assessment, and account performance reporting. A guaranteed return is never part of it and is prohibited."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.3",
    difficulty: "Hard",
    question: "Which statement best captures a key difference between a retail client and an institutional client for onboarding purposes?",
    options: [
      "Institutional clients require more extensive KYC and full suitability determination than retail clients",
      "Institutional clients may be subject to different KYC application and suitability treatment (including possible suitability exemptions) based on their sophistication, whereas retail clients receive full KYC and suitability determination",
      "Retail clients are exempt from KYC",
      "There is no practical difference in how they are onboarded"
    ],
    answer: 1,
    explanation: "Retail clients receive the full KYC and suitability-determination process. Institutional clients — given their sophistication and status — can be subject to different treatment and, in defined cases, suitability exemptions."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.5",
    difficulty: "Expert",
    question: "A large institutional counterparty asks the dealer to treat it as a 'permitted client' and waive certain KYC/suitability obligations. The dealer should:",
    options: [
      "Automatically waive all obligations for any client who asks",
      "Confirm the client meets the regulatory definition and obtain the required waiver/consent before relying on the permitted-client exemptions",
      "Refuse, because no client can ever waive suitability",
      "Waive the obligations verbally without documentation"
    ],
    answer: 1,
    explanation: "Reliance on permitted-client waivers/exemptions requires that the client actually meets the regulatory definition and that the appropriate waiver and consent are documented. Waivers are not available simply on request and must be evidenced."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.7",
    difficulty: "Hard",
    question: "An elderly client grants a continuing (enduring) power of attorney to their adult child. When documenting third parties in the client's life, the Investment Dealer should:",
    options: [
      "Ignore the POA because only the client matters",
      "Identify and document the POA and its scope, since the attorney may act on the account within the authority granted",
      "Treat the attorney as the beneficial owner of the assets",
      "Automatically classify the account as institutional"
    ],
    answer: 1,
    explanation: "The dealer must identify and document third parties such as powers of attorney, understanding the scope of the authority. The attorney can act within that authority but does not become the owner of the assets."
  },
  {
    category: "E2 · Prospective Client Relationships",
    syllabus: "2.8",
    difficulty: "Core",
    question: "The syllabus highlights 'the role of cost in product selection.' This means that when two products can meet the client's needs, the Approved Person should:",
    options: [
      "Always select the most expensive product to maximize service",
      "Give appropriate consideration to cost, as costs directly affect the client's net return",
      "Ignore cost entirely and focus only on brand",
      "Select whichever product pays the highest compensation"
    ],
    answer: 1,
    explanation: "Cost is an explicit factor in product selection: where reasonably comparable products meet the client's needs, the impact of costs on the client's net return must be considered. Choosing by compensation would be a conflict of interest."
  },

  /* =========================================================
     ELEMENT 3 — Scope of client relationships
     ========================================================= */
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.2",
    difficulty: "Hard",
    question: "A client phones an Investment Representative (IR) and asks, 'Which of these two stocks should I buy?' Consistent with the IR's role, the IR should:",
    options: [
      "Provide a personal recommendation on the better stock",
      "Decline to make a recommendation (the IR is prohibited from giving investment recommendations), but may provide a quote and take/enter the client's order",
      "Open a discretionary account and choose for the client",
      "Refuse to speak to the client at all"
    ],
    answer: 1,
    explanation: "An Investment Representative is prohibited from making investment recommendations. The IR can respond to enquiries, give quotes, take and enter orders, and report on trades. Recommendations are the role of a Registered Representative."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.1",
    difficulty: "Core",
    question: "Which activity is within the role of a Registered Representative (RR) but NOT an Investment Representative (IR)?",
    options: [
      "Giving a quote on a security",
      "Taking and entering a client order",
      "Providing suitability-based investment recommendations and managing a client's portfolio",
      "Reporting on a completed trade"
    ],
    answer: 2,
    explanation: "Both IRs and RRs can quote, take orders and report trades. Only the Registered Representative may provide recommendations and manage a client's portfolio, applying suitability."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.10",
    difficulty: "Expert",
    question: "A client opens an order execution only (OEO) account and receives no recommendations. Which obligation still applies to the dealer, even though a suitability determination does NOT?",
    options: [
      "The account appropriateness obligation",
      "A full portfolio-level suitability determination",
      "A fiduciary duty to select investments",
      "No obligations apply to OEO accounts"
    ],
    answer: 0,
    explanation: "For OEO accounts, the dealer does not make recommendations and so does not perform a suitability determination, but it must still meet the account appropriateness obligation (ensuring the OEO account type itself is appropriate and no advice is given)."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.5",
    difficulty: "Hard",
    question: "A client chooses an order execution only (OEO) account at an Investment Dealer instead of a full-service (advisory) account. The MOST accurate description of the impact is that the client:",
    options: [
      "Will receive tailored recommendations at a higher cost",
      "Makes their own investment decisions with no advice or recommendations, typically at lower cost",
      "Must use a managed account with discretionary trading",
      "Gains a suitability determination on every trade"
    ],
    answer: 1,
    explanation: "OEO ('self-directed') clients place their own orders without receiving recommendations or a suitability determination, generally in exchange for lower fees. Advisory and managed accounts include advice and correspondingly different obligations and costs."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.9",
    difficulty: "Hard",
    question: "The know-your-product (KYP) obligation requires that, before a security is purchased, sold or recommended for a client, its structure, features, risks and costs be understood. To whom does this obligation apply?",
    options: [
      "Only to the individual Approved Person",
      "Only to the Investment Dealer as a firm",
      "To both the Investment Dealer and the Approved Person",
      "Only to the product manufacturer"
    ],
    answer: 2,
    explanation: "KYP applies at two levels: the Investment Dealer must assess and approve products, and the Approved Person must understand the specific products they transact in or recommend, including the impact of costs."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.3",
    difficulty: "Expert",
    question: "In which type of account does an Approved Person most clearly assume a fiduciary-style duty to act in the client's best interest when making investment decisions?",
    options: [
      "An order execution only account",
      "A managed/discretionary account, where the Approved Person exercises investment discretion for the client",
      "A basic cash account with no trading authority",
      "An advisory account where the client approves each trade"
    ],
    answer: 1,
    explanation: "Exercising discretion in a managed/discretionary account places the Approved Person in a position of trust and heightened duty (fiduciary in nature) to act in the client's best interest. In an advisory account the client retains decision-making on each trade."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.11",
    difficulty: "Hard",
    question: "For retail clients, a suitability determination must generally be performed at which of the following points?",
    options: [
      "Only at the very first trade, never again",
      "When accepting an order or making a recommendation, on account opening/transfer-in, on a change of Approved Person, and when there is a material change in KYC information",
      "Only when the client complains",
      "Only for registered accounts"
    ],
    answer: 1,
    explanation: "Suitability must be reassessed at defined trigger events: recommendations/orders, opening or receiving an account, a change of the responsible Approved Person, and material changes in the client's circumstances or the securities held."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.14",
    difficulty: "Hard",
    question: "An Approved Person receives an order for a complex derivatives strategy that falls outside their usual expertise. Consistent with internal escalation requirements, they should:",
    options: [
      "Proceed anyway to avoid delaying the client",
      "Escalate to an internal subject-matter expert before proceeding, as certain products/situations require specialized review",
      "Tell the client the product does not exist",
      "Refer the client to a competitor"
    ],
    answer: 1,
    explanation: "The syllabus recognizes that specific products (e.g., derivatives) and situations may require escalation to internal subject-matter experts to ensure appropriate handling, review and supervision."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.16",
    difficulty: "Expert",
    question: "A client made a large deposit into their portfolio just before a sharp market decline. To evaluate the PORTFOLIO MANAGER'S skill independent of the timing and size of the client's cash flows, the most appropriate measure is:",
    options: [
      "The money-weighted rate of return",
      "The time-weighted rate of return",
      "The nominal coupon rate",
      "The management expense ratio"
    ],
    answer: 1,
    explanation: "The time-weighted rate of return removes the distorting effect of client cash-flow timing/size, making it appropriate for judging manager performance versus a benchmark. The money-weighted (dollar-weighted) return reflects the client's actual experience and is used in CRM2 client performance reporting."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.15",
    difficulty: "Hard",
    question: "A Registered Representative recommends a low-cost fund designed to replicate the return of a broad market index rather than to outperform it. This is an example of:",
    options: [
      "An active management style",
      "A passive management style",
      "A discretionary override",
      "A prohibited practice"
    ],
    answer: 1,
    explanation: "Seeking to replicate (track) an index rather than beat it is a passive investment style. Active management, by contrast, seeks to outperform a benchmark through selection and timing, usually at higher cost."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.4",
    difficulty: "Core",
    question: "The relationship disclosure provided to a client is required to describe all of the following EXCEPT:",
    options: [
      "The products, services and account types available at the Investment Dealer, and their limitations",
      "The charges, fees and compensation guidelines",
      "A projection of guaranteed future returns for each product",
      "How suitability will be assessed and how the account will operate"
    ],
    answer: 2,
    explanation: "Relationship disclosure covers the products/services/account types and their limitations, charges and compensation, how suitability is assessed, and how the account operates. It cannot promise or project guaranteed returns."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.7",
    difficulty: "Expert",
    question: "The 'account appropriateness' obligation differs from a 'suitability determination' primarily in that account appropriateness:",
    options: [
      "Requires a full analysis of each recommended security for the client",
      "Assesses whether the account type/relationship (e.g., OEO, margin, leverage) is appropriate, without assessing the suitability of specific investment decisions",
      "Only applies to institutional clients",
      "Is the same thing under a different name"
    ],
    answer: 1,
    explanation: "Account appropriateness looks at whether the account type and features (such as OEO, margin or leverage) are appropriate for the client. Suitability determination is the deeper, investment-decision-level assessment applied where advice/recommendations are provided."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.6",
    difficulty: "Core",
    question: "Which of the following is a service typically provided by an INSTITUTIONAL Investment Dealer rather than a purely retail one?",
    options: [
      "Order execution only self-directed accounts",
      "Prime brokerage, underwriting and securities lending",
      "Basic cash accounts for individual savers",
      "Simple mutual fund purchases for retail clients"
    ],
    answer: 1,
    explanation: "Institutional dealers typically provide services such as trading, research, underwriting, M&A advisory, prime brokerage and securities lending. OEO and basic retail accounts are characteristic of retail service."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.17",
    difficulty: "Hard",
    question: "A retail client informs their Registered Representative that they have permanently relocated to the United States. Before continuing to service the account, the dealer must:",
    options: [
      "Do nothing, since Canadian registration covers all countries",
      "Consider whether it and the Approved Person are permitted/registered to deal with a client resident in that U.S. jurisdiction, following applicable procedures",
      "Immediately liquidate all holdings without notice",
      "Convert the account to an institutional account automatically"
    ],
    answer: 1,
    explanation: "Servicing clients resident in the U.S. or other foreign jurisdictions engages foreign registration and regulatory requirements. The dealer must confirm it is permitted to deal with the client and follow the applicable procedures, or restrict activity accordingly."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.8",
    difficulty: "Hard",
    question: "A dealer's product due-diligence (KYP at the firm level) for a newly offered structured note should assess the product's:",
    options: [
      "Marketing appeal only",
      "Structure, features, risks, and initial and ongoing costs and their impact",
      "Popularity on social media",
      "Compensation to the sales team exclusively"
    ],
    answer: 1,
    explanation: "Firm-level product due diligence assesses the investment's structure, features, risks and both initial and ongoing costs (and the impact of those costs) before it can be made available, sold or recommended."
  },
  {
    category: "E3 · Scope of Client Relationships",
    syllabus: "3.5",
    difficulty: "Core",
    question: "Match the service to its description: an account in which the client authorizes the Approved Person to make investment decisions and place trades without contacting the client for each transaction is a:",
    options: [
      "Order execution only account",
      "Advisory account",
      "Managed / discretionary account",
      "Custodial-only account"
    ],
    answer: 2,
    explanation: "In a managed/discretionary account the appropriately qualified Approved Person makes decisions and trades without prior approval for each transaction. Advisory accounts require client approval per trade; OEO accounts involve no advice."
  },

  /* =========================================================
     ELEMENT 4 — Client complaint handling and reporting
     ========================================================= */
  {
    category: "E4 · Client Complaint Handling",
    syllabus: "4.2",
    difficulty: "Hard",
    question: "A retail client remains dissatisfied after the dealer's final response to a complaint. Which statement about the Ombudsman for Banking Services and Investments (OBSI) is correct?",
    options: [
      "OBSI issues legally binding judgments enforced by the courts",
      "OBSI is an independent, free dispute-resolution service that can recommend compensation up to a monetary limit, but its recommendations are not legally binding",
      "OBSI guarantees recovery of all market losses",
      "OBSI only assists institutional clients"
    ],
    answer: 1,
    explanation: "OBSI provides an independent, no-cost avenue for eligible complaints and can recommend compensation up to its cap (currently $350,000). Its recommendations are not legally binding on the parties."
  },
  {
    category: "E4 · Client Complaint Handling",
    syllabus: "4.7",
    difficulty: "Expert",
    question: "To keep a client from escalating a complaint, an Approved Person privately offers to reimburse the client's loss out of their own pocket without informing the Investment Dealer. This is:",
    options: [
      "Acceptable client service",
      "A prohibited practice — entering into a settlement with a client without the Investment Dealer's knowledge and approval",
      "Required by CIRO rules",
      "Permitted as long as the amount is small"
    ],
    answer: 1,
    explanation: "Settling with a client without the dealer's approval is a prohibited practice. Complaints and any settlements must go through the firm's compliance/complaint-handling processes."
  },
  {
    category: "E4 · Client Complaint Handling",
    syllabus: "4.4",
    difficulty: "Hard",
    question: "Regarding a dealer's obligation to report client complaints, which statement is correct?",
    options: [
      "Complaints never need to be reported to the regulator",
      "Investment Dealers have defined obligations to report certain complaints, and there are penalties for failing to report",
      "Only complaints over $1 million are reportable",
      "Reporting is optional if the client is satisfied"
    ],
    answer: 1,
    explanation: "Dealers must report qualifying complaints and related information (e.g., through CIRO's reporting system) and face penalties for failing to meet reporting obligations."
  },
  {
    category: "E4 · Client Complaint Handling",
    syllabus: "4.6",
    difficulty: "Core",
    question: "A dealer's policies and procedures for handling client complaints must provide for:",
    options: [
      "Discarding complaints once resolved",
      "Reporting, dealing with, and maintaining records of client complaints for both retail and institutional clients",
      "Handling only complaints submitted in person",
      "Recording complaints for retail clients only"
    ],
    answer: 1,
    explanation: "Firms must have policies and procedures to report, handle and retain records of client complaints for both retail and institutional clients, in line with regulatory requirements."
  },
  {
    category: "E4 · Client Complaint Handling",
    syllabus: "4.2",
    difficulty: "Hard",
    question: "In addition to OBSI and civil litigation, which additional recourse is available to a dissatisfied client under the CIRO framework?",
    options: [
      "CIRO's arbitration program",
      "A direct appeal to the Bank of Canada",
      "A FINTRAC compensation fund",
      "An automatic refund from CIPF"
    ],
    answer: 0,
    explanation: "CIRO offers an arbitration program as an additional avenue of recourse, alongside OBSI and litigation, for eligible client disputes."
  },
  {
    category: "E4 · Client Complaint Handling",
    syllabus: "4.1",
    difficulty: "Core",
    question: "Within the complaints-handling framework, the roles of CIRO and the provincial regulators are best described as:",
    options: [
      "Purely advertising the dealer's services",
      "Setting and overseeing the standards and requirements for how dealers must handle, report and record complaints",
      "Personally resolving each individual client complaint",
      "Guaranteeing compensation to every complainant"
    ],
    answer: 1,
    explanation: "CIRO and the provincial regulators set and oversee the requirements for complaint handling, reporting and recordkeeping. They do not adjudicate each complaint or guarantee compensation."
  },

  /* =========================================================
     ELEMENT 5 — Market and company analysis
     ========================================================= */
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.1",
    difficulty: "Hard",
    question: "Which economic school of thought emphasizes managing aggregate demand through active government fiscal policy (spending and taxation), especially during downturns?",
    options: [
      "Monetarist theory",
      "Keynesian theory",
      "Supply-side theory",
      "Efficient market theory"
    ],
    answer: 1,
    explanation: "Keynesian economics stresses managing aggregate demand via government spending and taxation. Monetarists emphasize control of the money supply; supply-side theory emphasizes tax cuts and incentives to boost production."
  },
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.2",
    difficulty: "Core",
    question: "Monetary policy in Canada is conducted primarily by:",
    options: [
      "The federal Department of Finance through the budget",
      "The Bank of Canada, chiefly by setting the target for the overnight rate",
      "CIRO through UMIR",
      "The provincial securities regulators"
    ],
    answer: 1,
    explanation: "The Bank of Canada conducts monetary policy, principally by setting the overnight rate target to influence borrowing costs and inflation. Taxation and government spending are fiscal policy, set by government."
  },
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.3",
    difficulty: "Hard",
    question: "An analyst wants an indicator that tends to change direction BEFORE the overall economy, to help anticipate turning points. Which is a leading indicator?",
    options: [
      "The unemployment rate",
      "New housing starts / new manufacturing orders",
      "Corporate profits reported for the prior quarter",
      "The average duration of unemployment"
    ],
    answer: 1,
    explanation: "Leading indicators (e.g., housing starts, new orders, equity prices) tend to move ahead of the economy. Unemployment measures are typically lagging indicators that confirm trends after the fact."
  },
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.6",
    difficulty: "Hard",
    question: "Which financial statement shows the cash a company generated and used across its operating, investing and financing activities during a period?",
    options: [
      "The statement of financial position (balance sheet)",
      "The statement of cash flows",
      "The statement of changes in equity",
      "The auditor's report"
    ],
    answer: 1,
    explanation: "The statement of cash flows reports cash from operating, investing and financing activities. The statement of financial position is a point-in-time snapshot; the comprehensive income statement reports profitability."
  },
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.7",
    difficulty: "Expert",
    question: "Under Canadian take-over bid rules, formal take-over bid requirements are generally triggered when an acquirer offers to acquire outstanding voting or equity securities that would result in holding:",
    options: [
      "5% or more",
      "10% or more",
      "20% or more",
      "50% or more"
    ],
    answer: 2,
    explanation: "Acquiring 20% or more of a target's outstanding voting or equity securities triggers formal take-over bid requirements (including disclosure and equal-treatment provisions), subject to available exemptions."
  },
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.8",
    difficulty: "Hard",
    question: "An analyst forecasts a security's value by examining the issuer's financial statements, earnings, industry position and economic conditions. This approach is best described as:",
    options: [
      "Technical analysis",
      "Fundamental analysis",
      "Random walk speculation",
      "Passive indexing"
    ],
    answer: 1,
    explanation: "Fundamental analysis estimates intrinsic value from financial statements, earnings and economic/industry factors. Technical analysis instead studies price and volume patterns to forecast future price movement."
  },
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.1",
    difficulty: "Expert",
    question: "A review of three funds shows: Fund A start $540M / end $590M; Fund B start $2,400M / end $2,250M; Fund C start $920M / end $935M. Using a simple average of each fund's return, the average return is approximately:",
    options: [
      "+4.64%",
      "+1.55%",
      "-0.28%",
      "+3.13%"
    ],
    answer: 1,
    explanation: "Returns: A = 50/540 = +9.26%; B = −150/2400 = −6.25%; C = 15/920 = +1.63%. Simple average = (9.26 − 6.25 + 1.63) / 3 ≈ +1.55%."
  },
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.1",
    difficulty: "Hard",
    question: "A country's current account records a large, persistent deficit. In the balance of payments, this is most directly associated with:",
    options: [
      "The country exporting far more goods and services than it imports",
      "The country importing more goods, services and income flows than it exports, financed by offsetting capital inflows",
      "A prohibition on foreign investment",
      "A fixed exchange rate that cannot change"
    ],
    answer: 1,
    explanation: "A current account deficit means the value of imports and income outflows exceeds exports and income inflows; it is typically financed by offsetting inflows in the capital/financial account and can affect the exchange rate."
  },
  {
    category: "E5 · Market & Company Analysis",
    syllabus: "5.5",
    difficulty: "Core",
    question: "During the early expansion (recovery) phase of the business cycle, which sector's performance would a market analyst typically expect to improve first?",
    options: [
      "Defensive/consumer-staples sectors, which lead in downturns",
      "Cyclical sectors sensitive to economic growth, which tend to strengthen as activity recovers",
      "No sector changes across the cycle",
      "Only government bonds"
    ],
    answer: 1,
    explanation: "Cyclical, growth-sensitive sectors tend to strengthen as the economy recovers and expands, while defensive sectors are relatively more resilient during contractions. Industry performance shifts across the stages of the cycle."
  },

  /* =========================================================
     ELEMENT 6 — Market integrity, trade execution and settlement
     ========================================================= */
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.5",
    difficulty: "Hard",
    question: "Following the move by Canadian markets in 2024, the standard settlement cycle for a trade in a Canadian equity is now:",
    options: [
      "T+3",
      "T+2",
      "T+1 (one business day after the trade date)",
      "Same day (T+0) in all cases"
    ],
    answer: 2,
    explanation: "Canada (with the U.S.) moved to a T+1 standard settlement cycle in 2024, meaning most equity trades settle one business day after the trade date."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.3",
    difficulty: "Expert",
    question: "A registrant notices a pattern of a client's trades that appear designed to create a misleading appearance of trading activity or price, with no genuine economic purpose. Applying UMIR gatekeeping obligations, the registrant should:",
    options: [
      "Facilitate the trades to retain the client",
      "Recognize possible manipulative/deceptive activity, decline to facilitate improper trading, and identify and escalate the suspicious transactions internally",
      "Copy the trades for a personal account",
      "Wait for the regulator to ask before acting"
    ],
    answer: 1,
    explanation: "UMIR gatekeeping requires registrants to be alert to manipulative and deceptive activity, refuse to facilitate it, and identify and escalate suspicious transactions. Facilitating or copying such activity would itself be a violation."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.3",
    difficulty: "Hard",
    question: "An Approved Person learns of a large pending client order and, before entering it, trades the same security in a personal account to benefit from the expected price move. Under UMIR this is:",
    options: [
      "Best execution",
      "Front running, a prohibited unacceptable activity",
      "Permitted principal trading",
      "An iceberg order"
    ],
    answer: 1,
    explanation: "Trading ahead of a known client order to profit from its anticipated market impact is front running — a prohibited unacceptable activity under UMIR."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.1",
    difficulty: "Hard",
    question: "The UMIR obligation of 'best execution' requires a dealer to:",
    options: [
      "Always execute at the single lowest commission regardless of price",
      "Use reasonable efforts to obtain the most advantageous execution terms reasonably available for the client under prevailing conditions (considering price, speed, certainty and total cost)",
      "Execute only on one specified exchange",
      "Guarantee the client a profit on every trade"
    ],
    answer: 1,
    explanation: "Best execution requires reasonable efforts to achieve the most advantageous execution terms reasonably available, weighing factors such as price, speed, certainty of execution and overall transaction cost."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.6",
    difficulty: "Expert",
    question: "A portfolio manager wants to buy a large block but reveal only a small portion of the total size to the market at any one time. Which order type accomplishes this?",
    options: [
      "A fill-or-kill order",
      "An iceberg order",
      "An immediate-or-cancel order",
      "An on-stop order"
    ],
    answer: 1,
    explanation: "An iceberg order displays only a small visible portion of the total order size, replenishing as it fills, to reduce market impact. The other order types govern timing/execution conditions, not disclosed size."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.6",
    difficulty: "Hard",
    question: "What distinguishes a 'fill-or-kill' order from an 'immediate-or-cancel' order?",
    options: [
      "Fill-or-kill must be executed in full immediately or it is cancelled entirely; immediate-or-cancel executes as much as possible immediately and cancels the unfilled remainder",
      "They are identical",
      "Fill-or-kill allows partial fills; immediate-or-cancel does not",
      "Immediate-or-cancel guarantees a full fill"
    ],
    answer: 0,
    explanation: "Fill-or-kill requires the entire order to be filled immediately or none of it (no partial fill). Immediate-or-cancel allows an immediate partial fill and cancels whatever cannot be filled at once."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.6",
    difficulty: "Hard",
    question: "A client holds a stock at $50 and enters an on-stop (stop-loss) sell order with a stop price of $45. What happens?",
    options: [
      "The order sells immediately at $50",
      "The order is triggered and becomes a market (or limit) sell order if the stock trades down to $45",
      "The order guarantees a sale at exactly $45",
      "The order buys more shares at $45"
    ],
    answer: 1,
    explanation: "An on-stop sell order is dormant until the stop price is reached; once the market trades at (or through) $45 it is triggered and becomes active. A plain stop order becomes a market order, so the actual fill price may differ from the stop."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.10",
    difficulty: "Expert",
    question: "Regarding margin requirements, how do long and short positions differ in their basic risk profile?",
    options: [
      "Both have losses capped at the invested amount",
      "A long position's loss is limited to the amount invested, while a short position carries theoretically unlimited loss as the price rises, affecting margin requirements",
      "Short positions can never lose money",
      "Margin applies only to long positions"
    ],
    answer: 1,
    explanation: "A long position can fall at most to zero (loss limited to the investment). A short position must be covered by repurchase, and since price can rise without limit, potential loss is theoretically unlimited — a key reason short positions carry stringent margin treatment."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.1",
    difficulty: "Hard",
    question: "Under UMIR, allowing a client to send orders directly to a marketplace through the dealer's systems, using the dealer's marketplace identifier, is known as:",
    options: [
      "Direct electronic access (DEA)",
      "An issuer bid",
      "A prospectus exemption",
      "Best execution"
    ],
    answer: 0,
    explanation: "Direct electronic access lets a client transmit orders electronically to a marketplace under the dealer's participation, subject to UMIR controls (risk limits, supervision) to manage algorithmic and rapid-order risks."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.3",
    difficulty: "Hard",
    question: "An employee becomes aware of possible insider trading by another person at the firm. Regarding whistleblower frameworks, the syllabus expects the candidate to know that:",
    options: [
      "Reporting suspected misconduct is discouraged",
      "Applicable regulatory whistleblower frameworks exist to support the reporting of suspected violations such as insider trading",
      "Only clients may report misconduct",
      "Insider trading is not a market-integrity concern"
    ],
    answer: 1,
    explanation: "Regulators maintain whistleblower frameworks encouraging and protecting the reporting of suspected violations, including insider trading, supporting the gatekeeper function."
  },
  {
    category: "E6 · Market Integrity & Settlement",
    syllabus: "6.11",
    difficulty: "Core",
    question: "Before a client can trade derivatives, the dealer must ensure that in place there is a:",
    options: [
      "Simple verbal agreement only",
      "Specialized derivatives (options/futures) trading agreement and the required risk disclosure documentation",
      "No documentation, since derivatives are like equities",
      "Guarantee against loss signed by the dealer"
    ],
    answer: 1,
    explanation: "Derivatives trading requires a specialized trading agreement and risk-disclosure documentation, reflecting the additional risk, leverage and margin considerations involved."
  },

  /* =========================================================
     ELEMENT 7 — Securities, managed products, mutual funds & other investments
     ========================================================= */
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.2",
    difficulty: "Core",
    question: "Compared with a common share, a straight (fixed-rate) preferred share generally:",
    options: [
      "Carries full voting rights and a variable dividend",
      "Pays a fixed dividend that ranks ahead of the common dividend and ranks ahead of common in liquidation, but is usually non-voting",
      "Always converts into a bond at maturity",
      "Has unlimited upside tied directly to earnings growth"
    ],
    answer: 1,
    explanation: "Straight preferreds pay a fixed dividend with priority over common dividends and rank ahead of common in liquidation, but typically carry no vote and limited capital-appreciation potential. Common shares carry votes and variable dividends with growth potential."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.5",
    difficulty: "Hard",
    question: "A bond has a 5% coupon but is currently quoted to yield 6% to maturity. What does this indicate about the relationship between coupon and yield?",
    options: [
      "The bond must be trading at a premium above par",
      "The bond is trading at a discount below par, because its fixed coupon is below the market yield",
      "Coupon and yield are always identical",
      "The bond has defaulted"
    ],
    answer: 1,
    explanation: "When the yield to maturity exceeds the coupon, the bond trades at a discount (below par). The coupon is the fixed contractual interest on face value; the yield reflects the return at the current market price."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.5",
    difficulty: "Hard",
    question: "The three components the syllabus identifies for assessing a bond's risk are:",
    options: [
      "Coupon frequency, issuer's logo and colour",
      "Term (time to maturity), credit rating, and duration",
      "Dividend yield, beta and P/E ratio",
      "Ticker symbol, exchange and lot size"
    ],
    answer: 1,
    explanation: "Bond risk is assessed through term (maturity), credit rating (default risk) and duration (interest-rate sensitivity). Longer term and longer duration increase price sensitivity; a lower rating increases credit risk."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.4",
    difficulty: "Expert",
    question: "An investor holds a Government of Canada STRIP bond in a NON-registered (taxable) account. How is the return taxed each year?",
    options: [
      "No tax is payable until the bond matures",
      "The annually accrued (imputed) interest must be included as income each year, even though no cash coupon is received",
      "It is taxed as an eligible Canadian dividend",
      "It is taxed as a capital gain each year"
    ],
    answer: 1,
    explanation: "Although a STRIP pays no cash coupons, CRA requires the holder in a taxable account to include the imputed (accrued) interest as income each year over the life of the bond."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.4",
    difficulty: "Core",
    question: "Treasury bills and most commercial paper are typically:",
    options: [
      "Long-term instruments paying semi-annual coupons",
      "Short-term instruments issued at a discount to face value, with the return being the difference between purchase price and maturity value",
      "Equity securities with voting rights",
      "Perpetual securities with no maturity"
    ],
    answer: 1,
    explanation: "T-bills and commercial paper are short-term money-market instruments sold at a discount and redeemed at face value; the investor's return is the difference (there is no periodic coupon)."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.6",
    difficulty: "Expert",
    question: "How does a market-value (capitalization) weighted index differ from a price-weighted index?",
    options: [
      "A market-value weighted index weights constituents by their total market capitalization, while a price-weighted index weights them by share price",
      "They are calculated identically",
      "A price-weighted index weights by market capitalization",
      "A market-value weighted index gives every stock an equal weight"
    ],
    answer: 0,
    explanation: "A market-value (cap) weighted index (e.g., S&P/TSX Composite) weights each constituent by market capitalization, so larger companies have more influence. A price-weighted index weights by share price, so a higher-priced stock has more influence regardless of company size."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.6",
    difficulty: "Hard",
    question: "The difference between a 'price return' index and a 'total return' index is that a total return index:",
    options: [
      "Ignores dividends entirely",
      "Assumes dividends/distributions are reinvested, so it captures both price change and income",
      "Only measures the highest-priced stock",
      "Is always lower than the price return index"
    ],
    answer: 1,
    explanation: "A total return index reflects price changes plus reinvested dividends/distributions, whereas a price return index measures only price movement. Over time, the total return version is typically higher because it includes income."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.11",
    difficulty: "Hard",
    question: "An ETF is quoted on an exchange at a market price. Which statement about ETF pricing is correct?",
    options: [
      "The market price is always exactly equal to net asset value (NAV)",
      "The market price can trade at a small premium or discount to NAV, but the creation/redemption process by designated brokers keeps it close to NAV",
      "ETFs have no NAV",
      "ETFs price only once per day like conventional mutual funds"
    ],
    answer: 1,
    explanation: "ETFs trade intraday and their market price can diverge modestly from NAV, but arbitrage via the creation/redemption mechanism keeps the price close to NAV. Key disclosure is the ETF Facts document."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.10",
    difficulty: "Core",
    question: "For a conventional open-end mutual fund, the point-of-sale disclosure document that summarizes the fund's key facts, risks and costs is the:",
    options: [
      "ETF Facts document",
      "Fund Facts document",
      "Universal Market Integrity Rules",
      "Relationship disclosure statement"
    ],
    answer: 1,
    explanation: "The Fund Facts document provides concise key information (objectives, risk rating, past performance, costs) for a mutual fund. ETFs use the analogous ETF Facts document."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.10",
    difficulty: "Hard",
    question: "Units of a conventional open-end mutual fund are purchased and redeemed at:",
    options: [
      "A price set continuously by exchange trading throughout the day",
      "The net asset value per unit (NAVPU), typically calculated once per day",
      "A fixed price of $10 regardless of performance",
      "The price of the largest holding in the fund"
    ],
    answer: 1,
    explanation: "Open-end mutual funds transact at NAVPU = (fund assets − liabilities) ÷ units outstanding, usually struck once daily. Only exchange-listed products (ETFs, closed-end funds) trade intraday at market prices."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.8",
    difficulty: "Expert",
    question: "A mutual fund structured as a mutual fund CORPORATION (rather than a trust) can offer investors which potential advantage?",
    options: [
      "It is exempt from all fees",
      "It may allow tax-efficient switching between share classes of the same corporation and can distribute Canadian dividends and capital gains (but not interest as such) to shareholders",
      "It guarantees principal",
      "It never makes taxable distributions"
    ],
    answer: 1,
    explanation: "A mutual fund corporation groups funds as share classes of one corporation, historically allowing certain tax-efficient features and distributing income as Canadian dividends or capital gains dividends. A mutual fund trust instead flows through its income to unitholders."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.7",
    difficulty: "Hard",
    question: "A Real Estate Investment Trust (REIT) primarily allows an investor to:",
    options: [
      "Guarantee a fixed return with no risk",
      "Gain exposure to a diversified pool of income-producing real estate, typically with distributions and exchange liquidity, without directly owning property",
      "Acquire legal title to specific buildings",
      "Avoid all market price fluctuation"
    ],
    answer: 1,
    explanation: "A REIT is a pooled product giving exposure to income-producing real estate, usually paying distributions and (if listed) trading with exchange liquidity. It still carries market and interest-rate risk and does not confer direct property ownership."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.12",
    difficulty: "Expert",
    question: "When considering crypto assets for a client, which statement reflects the syllabus's expectations regarding their features and disclosure?",
    options: [
      "Crypto assets are risk-free and guaranteed by CIPF",
      "Crypto assets carry elevated risks (high volatility, custody and platform risk, limited investor protection) and specific product-disclosure and suitability/appropriateness considerations apply",
      "Crypto assets require no disclosure because they are unregulated",
      "Crypto assets are identical to guaranteed investment certificates"
    ],
    answer: 1,
    explanation: "Crypto assets are high-risk (volatility, custody/platform risk, limited protection). Dealers must apply appropriate product due diligence, disclosure and KYP/suitability or appropriateness considerations; they are not covered like insured deposits or by CIPF as guarantees against loss."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.12",
    difficulty: "Hard",
    question: "A client requests an 'ESG' fund. Regarding environmental, social and governance-related products, an Approved Person should understand that:",
    options: [
      "All funds labelled 'ESG' use identical criteria and methodologies",
      "ESG approaches and terminology vary widely (e.g., exclusionary screening, integration, thematic), so KYP requires understanding the specific fund's methodology, and marketing must not be misleading ('greenwashing')",
      "ESG products are guaranteed to outperform",
      "ESG labelling removes the need for suitability"
    ],
    answer: 1,
    explanation: "ESG products differ substantially in approach and terminology. KYP requires understanding the specific product's methodology, and communications must be fair and not misleading (avoiding greenwashing). Suitability/appropriateness still applies."
  },
  {
    category: "E7 · Securities & Managed Products",
    syllabus: "7.12",
    difficulty: "Expert",
    question: "Which statement best describes an 'alternative investment fund' (sometimes called a liquid alternative) available to retail investors in Canada?",
    options: [
      "It is identical to a conventional mutual fund with no additional strategies",
      "It is a prospectus-qualified fund permitted to use strategies such as increased leverage, short selling and derivatives beyond conventional mutual fund limits, within a regulated framework",
      "It is only available to accredited investors under an exemption",
      "It cannot use derivatives at all"
    ],
    answer: 1,
    explanation: "Alternative investment funds ('liquid alts') are prospectus-offered funds allowed greater use of leverage, short selling and derivatives than conventional mutual funds, but within a regulated retail framework — unlike exempt hedge funds sold only to accredited investors."
  },

  /* =========================================================
     ELEMENT 8 — Derivatives
     ========================================================= */
  {
    category: "E8 · Derivatives",
    syllabus: "8.1",
    difficulty: "Core",
    question: "The holder (buyer) of a call option has:",
    options: [
      "The obligation to sell the underlying at the strike price",
      "The right, but not the obligation, to buy the underlying at the strike price",
      "The obligation to buy the underlying regardless of price",
      "No exposure to the underlying asset"
    ],
    answer: 1,
    explanation: "A call buyer pays a premium for the right (not obligation) to buy the underlying at the strike. The call writer has the obligation to deliver if assigned."
  },
  {
    category: "E8 · Derivatives",
    syllabus: "8.1",
    difficulty: "Hard",
    question: "What distinguishes an American-style option from a European-style option?",
    options: [
      "American-style options can only be traded in the U.S.",
      "American-style options can be exercised any time up to and including expiry, whereas European-style options can be exercised only at expiry",
      "European-style options have no premium",
      "American-style options cannot be sold before expiry"
    ],
    answer: 1,
    explanation: "The distinction is about exercise timing: American-style options can be exercised at any time before or at expiry; European-style options can be exercised only at expiry. It is unrelated to geography."
  },
  {
    category: "E8 · Derivatives",
    syllabus: "8.2",
    difficulty: "Hard",
    question: "A key difference between an exchange-traded futures contract and an over-the-counter forward contract is that a futures contract is:",
    options: [
      "A private, customized bilateral agreement with counterparty credit risk",
      "Standardized, exchange-traded and cleared through a central counterparty with daily mark-to-market",
      "Available only on currencies",
      "Never marked to market"
    ],
    answer: 1,
    explanation: "Futures are standardized, exchange-traded and centrally cleared with daily mark-to-market, reducing counterparty risk. Forwards are customized OTC contracts carrying bilateral counterparty credit risk."
  },
  {
    category: "E8 · Derivatives",
    syllabus: "8.4",
    difficulty: "Expert",
    question: "Which combination lists factors that directly affect an equity option's premium?",
    options: [
      "The issuer's dividend policy only",
      "Price of the underlying, strike price, time to expiry and volatility",
      "The client's tax bracket and account type",
      "The dealer's commission schedule"
    ],
    answer: 1,
    explanation: "An option's premium is driven by the underlying price relative to the strike, time to expiry, and volatility (along with interest rates and dividends). More time and higher volatility generally increase the premium."
  },
  {
    category: "E8 · Derivatives",
    syllabus: "8.6",
    difficulty: "Hard",
    question: "An investor who owns 100 shares writes one call option against them to generate premium. This income-producing strategy is a:",
    options: [
      "Naked call, exposing the investor to unlimited risk",
      "Covered call, which earns premium income but caps the upside above the strike price",
      "Protective put, which limits downside",
      "Long straddle"
    ],
    answer: 1,
    explanation: "Writing a call against owned shares is a covered call — an income strategy. It earns premium and offers slight downside cushion, but the shares can be called away if the price rises above the strike, capping the upside."
  },
  {
    category: "E8 · Derivatives",
    syllabus: "8.7",
    difficulty: "Core",
    question: "Before a client trades derivatives, which document must be provided/obtained to ensure the client understands the risks?",
    options: [
      "A guarantee-of-profit letter",
      "The Derivatives Risk Disclosure Statement (along with a Derivatives Trading Agreement and account application)",
      "A prospectus for each share owned",
      "Nothing, as derivatives are low risk"
    ],
    answer: 1,
    explanation: "Opening a derivatives account requires documents such as the Derivatives Account Application, Derivatives Trading Agreement and the Derivatives Risk Disclosure Statement, reflecting the leverage and risk involved."
  },

  /* =========================================================
     ELEMENT 9 — Conflicts of interest and ethics
     ========================================================= */
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.2",
    difficulty: "Hard",
    question: "Under CIRO's conflicts framework, when a material conflict of interest exists between the Approved Person and the client, the required approach is to:",
    options: [
      "Prioritize the firm's revenue",
      "Address the material conflict in the best interest of the client (and disclose it); where a conflict cannot be addressed in the client's best interest, it must be avoided",
      "Disclose it only if the client asks",
      "Ignore it if the amount is small"
    ],
    answer: 1,
    explanation: "Material conflicts must be addressed in the best interest of the client and disclosed. Conflicts that cannot be so addressed must be avoided. The firm's interests must not be placed ahead of the client's."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.2",
    difficulty: "Core",
    question: "The syllabus describes the responsibilities in conflicts-of-interest management as being to:",
    options: [
      "Identify, address (in the client's best interest), avoid where necessary, and disclose material conflicts",
      "Conceal, delay and deny",
      "Report conflicts only to the client's family",
      "Transfer all conflicts to the client"
    ],
    answer: 0,
    explanation: "The process is to identify potential and existing conflicts, address them in the client's best interest, avoid those that cannot be addressed, and disclose material conflicts to the client."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.4",
    difficulty: "Hard",
    question: "Which statement best captures the relationship between ethics and rules in the investment industry?",
    options: [
      "Following the minimum rules always guarantees fully ethical behaviour",
      "Ethics can require more than the minimum rules; acting ethically means exercising judgment and integrity even where a specific rule is silent",
      "Ethics and rules are unrelated",
      "Rules should be ignored in favour of personal ethics"
    ],
    answer: 1,
    explanation: "Rules set minimum standards; ethics can demand more. Professionals must apply integrity and judgment in situations that rules do not explicitly cover, rather than treating mere technical compliance as sufficient."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.7",
    difficulty: "Hard",
    question: "A client offers to lend money to their Approved Person to help them through a personal cash-flow problem. This is:",
    options: [
      "Acceptable if documented",
      "An inappropriate/prohibited personal financial dealing with a client and a conflict of interest",
      "Required to build rapport",
      "Fine as long as interest is charged"
    ],
    answer: 1,
    explanation: "Personal financial dealings with clients — including borrowing from or lending to them — create conflicts of interest and are inappropriate/prohibited (outside narrow permitted exceptions). The Approved Person should decline."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.8",
    difficulty: "Expert",
    question: "The 'position of influence' rule is concerned with situations where an Approved Person:",
    options: [
      "Holds a large personal portfolio",
      "Occupies a role (e.g., of trust, authority or dependence) that could give them influence over a client, creating restrictions and disclosure/reporting obligations when dealing for such clients",
      "Works at more than one branch",
      "Has passed the CIRE exam"
    ],
    answer: 1,
    explanation: "The position-of-influence rule restricts an individual whose position/relationship gives them influence over a person from dealing for that person as a client, absent applicable exceptions, with disclosure and reporting obligations designed to manage the conflict."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.9",
    difficulty: "Expert",
    question: "An Approved Person wants to take on a paid outside business activity in the community. Applying the requirements governing outside activities, the firm must:",
    options: [
      "Prohibit all outside activities without exception",
      "Assess the activity for potential client confusion and conflicts, apply appropriate due diligence, approval, controls, supervision and record-keeping, and require disclosure where applicable",
      "Ignore it because it is outside the firm",
      "Allow it only if it is more profitable than the dealer's business"
    ],
    answer: 1,
    explanation: "Outside activities must be assessed for client confusion and conflicts of interest, subject to due diligence, approval, effective controls, appropriate supervision, recordkeeping and disclosure where applicable — not automatically banned or ignored."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.11",
    difficulty: "Hard",
    question: "An 'information barrier' (firewall) within an Investment Dealer is used to:",
    options: [
      "Prevent clients from contacting the firm",
      "Restrict the flow of material non-public information between departments (e.g., between investment banking and trading/research) to prevent misuse",
      "Block all internal emails",
      "Guarantee investment returns"
    ],
    answer: 1,
    explanation: "Information barriers control the flow of material non-public information between areas such as corporate finance/investment banking and trading or research, helping prevent insider trading and manage conflicts."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.11",
    difficulty: "Expert",
    question: "What is the difference between a firm's 'grey (watch) list' and its 'restricted list'?",
    options: [
      "They are the same thing",
      "The grey/watch list is a confidential internal list used to monitor trading in securities where the firm may have sensitive information, while the restricted list actively prohibits the firm and employees from trading or recommending the named securities",
      "The restricted list is confidential and the grey list is public",
      "Both lists prohibit all client trading in every security"
    ],
    answer: 1,
    explanation: "A grey/watch list is confidential and used to surveil activity where the firm may hold sensitive (non-public) information. A restricted list imposes actual prohibitions — the firm and its employees may not trade or recommend those securities."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.10",
    difficulty: "Core",
    question: "A former colleague at another firm asks an Approved Person to share details about a specific client's holdings. The Approved Person should:",
    options: [
      "Share the information to be collegial",
      "Decline, because client confidentiality must be maintained and information disclosed only with consent or where required by law",
      "Share only the account balance",
      "Post the information internally"
    ],
    answer: 1,
    explanation: "Client confidentiality is a core obligation. Client information may be disclosed only with the client's consent or where required by law/regulation — not for the convenience of a third party."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.12",
    difficulty: "Hard",
    question: "In the context of protecting confidential information, cybersecurity is important because:",
    options: [
      "It guarantees the firm's investment performance",
      "It helps contain and protect confidential client and firm information against unauthorized access, breaches and misuse",
      "It replaces the need for compliance policies",
      "It only matters for the IT department, not Approved Persons"
    ],
    answer: 1,
    explanation: "Cybersecurity is a key control for containing confidential information and preventing unauthorized access or data breaches. It is a firm-wide responsibility relevant to all Approved Persons, not just IT."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.7",
    difficulty: "Hard",
    question: "A grateful client offers an Approved Person a valuable personal gift. The appropriate response under conflict-of-interest standards is to:",
    options: [
      "Accept it privately and tell no one",
      "Consider the firm's gifts-and-entertainment policy and materiality, disclose as required, and decline gifts that could compromise — or appear to compromise — objectivity",
      "Demand a larger gift",
      "Accept it and reciprocate with a personal loan"
    ],
    answer: 1,
    explanation: "Gifts can create conflicts or the appearance of one. Approved Persons must follow firm policy, disclose material gifts and decline anything that could impair, or appear to impair, their objectivity."
  },
  {
    category: "E9 · Conflicts of Interest & Ethics",
    syllabus: "9.5",
    difficulty: "Expert",
    question: "Faced with an ethical dilemma not squarely addressed by a specific rule, an Approved Person applying a sound ethical decision-making approach would FIRST:",
    options: [
      "Choose the most profitable option immediately",
      "Identify and clearly define the ethical issue and the stakeholders affected before weighing duties, alternatives and consequences",
      "Ask the client to decide for them",
      "Do whatever a colleague suggests"
    ],
    answer: 1,
    explanation: "Ethical decision-making begins by clearly identifying the issue and the affected stakeholders, then evaluating duties, options and consequences, acting with integrity, and reflecting on the outcome — rather than defaulting to the most profitable choice."
  }

];

// Expose the experimental bank to the app.
if (typeof window !== "undefined") {
  window.QUESTION_BANK_EXPERIMENTAL = QUESTION_BANK_EXPERIMENTAL;
}
