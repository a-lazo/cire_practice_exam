/*
 * CIRE Mock Exam — Question Bank
 * ------------------------------------------------------------------
 * These are ORIGINAL practice questions written to cover the competency
 * areas of the Canadian Investment Regulatory Exam (CIRE). They are NOT
 * real exam questions and are for study/self-assessment only.
 *
 * HOW TO ADD YOUR OWN QUESTIONS
 * Copy one of the blocks below and edit the fields:
 *   category    : one of the CATEGORIES strings (see app.js) — keep spelling identical
 *   difficulty  : "Core" | "Hard" | "Expert"
 *   question    : the question text
 *   options     : an array of possible answers (usually 4)
 *   answer      : the INDEX (0-based) of the correct option in the array above
 *   explanation : why the correct answer is right (shown during review)
 *
 * Keep the commas and quotes exactly as shown. Save the file and reload
 * the exam in your browser — no other steps required.
 */

const QUESTION_BANK = [
  /* =========================================================
     1. REGULATORY ENVIRONMENT & CIRO
     ========================================================= */
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Core",
    question: "The Canadian Investment Regulatory Organization (CIRO) was formed in 2023 through the amalgamation of which two predecessor self-regulatory organizations?",
    options: [
      "The OSC and the AMF",
      "IIROC and the MFDA",
      "The TSX and the CSE",
      "CIPF and the CDIC"
    ],
    answer: 1,
    explanation: "CIRO was created on January 1, 2023 by consolidating the Investment Industry Regulatory Organization of Canada (IIROC) and the Mutual Fund Dealers Association of Canada (MFDA)."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Core",
    question: "In Canada, primary responsibility for the regulation of securities rests with:",
    options: [
      "The federal government through a single national regulator",
      "Each province and territory through its own securities commission",
      "The Bank of Canada",
      "CIRO alone, which has full statutory authority"
    ],
    answer: 1,
    explanation: "Securities regulation in Canada is a provincial/territorial matter. Each jurisdiction has its own securities act and regulator; there is no single national securities regulator."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Hard",
    question: "The Canadian Securities Administrators (CSA) is best described as:",
    options: [
      "A federal Crown corporation that licenses dealers",
      "An umbrella body of provincial and territorial regulators that harmonizes rules through National Instruments",
      "The investor protection fund for CIRO member insolvencies",
      "A stock exchange operator"
    ],
    answer: 1,
    explanation: "The CSA is an umbrella organization of the provincial and territorial securities regulators. It coordinates and harmonizes regulation, notably through National Instruments, but is not itself a statutory regulator."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Hard",
    question: "The Canadian Investor Protection Fund (CIPF) provides protection to eligible clients when:",
    options: [
      "An investment they purchased declines in value",
      "A CIRO member firm becomes insolvent and client assets are missing",
      "A client makes an unsuitable investment decision",
      "The market experiences a systemic crash"
    ],
    answer: 1,
    explanation: "CIPF protects client property held by an insolvent CIRO member firm within defined limits. It does NOT protect against market losses or poor investment performance."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Expert",
    question: "Under the 'passport system' used by Canadian securities regulators, a market participant that clears requirements in its principal jurisdiction:",
    options: [
      "Must separately re-file identical materials in every other province",
      "Obtains automatic access to the markets of other participating jurisdictions without duplicate review",
      "Is exempt from all continuous disclosure obligations",
      "Becomes federally regulated"
    ],
    answer: 1,
    explanation: "The passport system lets a filer deal with its principal regulator and automatically obtain access in other participating jurisdictions, reducing duplication. (Ontario participates through an interface rather than fully.)"
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Hard",
    question: "A 'statutory right of rescission' most commonly allows a purchaser to:",
    options: [
      "Cancel any trade within 90 days for any reason",
      "Recover damages or cancel a purchase where a prospectus contained a misrepresentation",
      "Force a dealer to buy back a declining security at cost",
      "Avoid paying commissions on mutual funds"
    ],
    answer: 1,
    explanation: "Securities legislation grants purchasers statutory rights (rescission or damages) where a prospectus or offering document contains a misrepresentation, subject to time limits."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Core",
    question: "The 'gatekeeper' role of a registrant primarily requires them to:",
    options: [
      "Guarantee the client will not lose money",
      "Prevent the securities markets from being used for improper or illegal purposes",
      "Approve all new share issues",
      "Set interest rates for margin accounts"
    ],
    answer: 1,
    explanation: "Registrants act as gatekeepers, meaning they must be alert to and help prevent the use of the markets for fraud, money laundering, market manipulation, and other improper conduct."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Expert",
    question: "A company wishing to distribute securities to the public generally must file a prospectus. The core purpose of the prospectus requirement is to ensure:",
    options: [
      "The regulator guarantees the merit of the investment",
      "Full, true and plain disclosure of all material facts relating to the securities being distributed",
      "The price of the security will rise after issue",
      "Only accredited investors can buy the security"
    ],
    answer: 1,
    explanation: "Canadian securities law is disclosure-based. The prospectus must provide full, true and plain disclosure of all material facts. Regulators review disclosure but do not judge the investment's merit or guarantee returns."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Hard",
    question: "Which of the following is an example of a distribution that may be made under a prospectus EXEMPTION rather than a full prospectus?",
    options: [
      "An initial public offering marketed to retail investors",
      "A private placement sold to accredited investors",
      "A secondary trade on the TSX",
      "A mutual fund sold with a simplified prospectus"
    ],
    answer: 1,
    explanation: "Private placements to accredited investors rely on a prospectus exemption. IPOs and mutual funds require prospectus-type disclosure; ordinary secondary trades are not distributions."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Core",
    question: "The principal function of a self-regulatory organization (SRO) such as CIRO is to:",
    options: [
      "Replace the provincial securities commissions entirely",
      "Set and enforce rules of conduct and proficiency for its member firms and their registrants",
      "Insure clients against investment losses",
      "Operate the national payment system"
    ],
    answer: 1,
    explanation: "An SRO regulates its members under authority delegated by the securities commissions, setting rules on proficiency, conduct, capital, and enforcement — but it does not replace the commissions."
  },

  /* =========================================================
     2. ETHICS & STANDARDS OF CONDUCT
     ========================================================= */
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Core",
    question: "A registered representative learns of a large impending institutional buy order and purchases the same security for their own account first. This is an example of:",
    options: [
      "Prudent portfolio management",
      "Front running, a prohibited practice",
      "A legitimate personal trade",
      "Tax-loss harvesting"
    ],
    answer: 1,
    explanation: "Trading ahead of a known client order to profit from the expected price move is front running — a serious breach of the priority-of-client-orders and integrity standards."
  },
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Hard",
    question: "Under the standards of conduct, a client asks their advisor for a personal loan to cover a short-term shortfall. The advisor should:",
    options: [
      "Lend the money to build the relationship",
      "Decline, because personal financial dealings such as lending to or borrowing from clients are prohibited",
      "Lend the money only if documented in writing",
      "Charge the client interest to make it fair"
    ],
    answer: 1,
    explanation: "Personal financial dealings with clients — including borrowing from or lending to clients — create conflicts of interest and are prohibited (outside narrow permitted exceptions such as regulated financial institutions)."
  },
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Hard",
    question: "The standard of conduct requiring a registrant to place the client's interests first when a conflict cannot otherwise be avoided is best described as:",
    options: [
      "Caveat emptor",
      "Addressing material conflicts of interest in the best interest of the client",
      "Priority of firm capital",
      "The suitability safe harbour"
    ],
    answer: 1,
    explanation: "Under the Client Focused Reforms, material conflicts of interest must be addressed in the best interest of the client, and disclosed. Conflicts that cannot be so addressed must be avoided."
  },
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Expert",
    question: "An advisor is faced with an ethical dilemma. Applying a structured ethical decision-making framework, the FIRST step is typically to:",
    options: [
      "Execute the most profitable option",
      "Identify and clearly define the ethical problem and the parties affected",
      "Ask the client what they would prefer",
      "Consult the marketing department"
    ],
    answer: 1,
    explanation: "Ethical decision-making frameworks begin by identifying/defining the problem and the stakeholders, then considering duties, alternatives, and consequences before acting and reflecting."
  },
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Core",
    question: "'Fair dealing' with clients requires that a registrant:",
    options: [
      "Give every client the same investment regardless of circumstances",
      "Deal fairly, honestly and in good faith, without favouring the firm's interests over the client's",
      "Guarantee equal returns for all clients",
      "Only accept high-net-worth clients"
    ],
    answer: 1,
    explanation: "Fair dealing means acting honestly, fairly and in good faith with clients — including fair allocation of investment opportunities and not preferring the firm's interests improperly."
  },
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Hard",
    question: "Confidential client information may generally be disclosed WITHOUT the client's consent when:",
    options: [
      "A prospective client requests it for comparison",
      "It is required by law, regulation, or a court order",
      "A colleague at another firm asks about the client",
      "The advisor wishes to solicit a referral"
    ],
    answer: 1,
    explanation: "Client confidentiality is a core duty. Disclosure without consent is permitted where required by law or regulation (e.g., FINTRAC reporting, court orders), not for marketing or convenience."
  },
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Expert",
    question: "An advisor discovers they made an error that benefited them and disadvantaged a client, but no one has noticed. The ethical AND regulatory obligation is to:",
    options: [
      "Say nothing, since no one noticed",
      "Promptly disclose and correct the error, making the client whole",
      "Wait to see if the client complains",
      "Offset it with a future favourable trade"
    ],
    answer: 1,
    explanation: "Integrity and the duty to clients require prompt disclosure and correction of errors, restoring the client to the position they should have been in — regardless of whether the error was detected."
  },
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Core",
    question: "Which of the following best reflects the ethic of 'professionalism' expected of a registrant?",
    options: [
      "Maintaining competence and acting with diligence, courtesy and respect",
      "Maximizing personal commissions",
      "Avoiding all continuing education after licensing",
      "Delegating all client contact to unlicensed staff"
    ],
    answer: 0,
    explanation: "Professionalism includes maintaining and improving competence (continuing education), acting diligently, and treating clients and colleagues with courtesy and respect."
  },

  /* =========================================================
     3. EQUITY SECURITIES
     ========================================================= */
  {
    category: "Equity Securities",
    difficulty: "Core",
    question: "A key difference between common shares and straight preferred shares is that common shareholders typically:",
    options: [
      "Rank ahead of preferred shareholders in liquidation",
      "Have voting rights and variable dividends, while preferreds have a fixed dividend and priority for it",
      "Receive a guaranteed dividend",
      "Cannot participate in capital appreciation"
    ],
    answer: 1,
    explanation: "Common shares carry voting rights and residual (variable) dividends and capital growth potential. Straight preferreds receive a fixed dividend paid before common dividends and rank ahead of common in liquidation but are usually non-voting."
  },
  {
    category: "Equity Securities",
    difficulty: "Hard",
    question: "A cumulative preferred share differs from a non-cumulative preferred in that:",
    options: [
      "It converts automatically into common shares",
      "Any dividends omitted in prior periods accumulate and must be paid before common dividends",
      "It never pays a dividend",
      "It has a floating rate reset every day"
    ],
    answer: 1,
    explanation: "With cumulative preferreds, unpaid (arrears) dividends accumulate and must be paid in full before any common dividend can be paid. Non-cumulative preferreds do not accumulate missed dividends."
  },
  {
    category: "Equity Securities",
    difficulty: "Expert",
    question: "A stock trades cum-dividend. This means a buyer who purchases the share before the ex-dividend date:",
    options: [
      "Is not entitled to the declared dividend",
      "Is entitled to receive the upcoming declared dividend",
      "Must pay the dividend to the seller",
      "Receives double the dividend"
    ],
    answer: 1,
    explanation: "Buying cum-dividend (before the ex-dividend date) entitles the buyer to the declared dividend. On and after the ex-dividend date the security trades without the right to that dividend."
  },
  {
    category: "Equity Securities",
    difficulty: "Hard",
    question: "A company declares a 3-for-1 stock split. An investor holding 300 shares worth $90 each will, immediately after the split, hold:",
    options: [
      "100 shares worth $270 each",
      "900 shares worth $30 each",
      "300 shares worth $30 each",
      "900 shares worth $90 each"
    ],
    answer: 1,
    explanation: "A 3-for-1 split triples the share count (300 × 3 = 900) and divides the price by three ($90 ÷ 3 = $30). Total value is unchanged at $27,000."
  },
  {
    category: "Equity Securities",
    difficulty: "Expert",
    question: "A rights offering typically differs from a warrant in that a right:",
    options: [
      "Has a longer life, often several years",
      "Is a short-term privilege issued to existing shareholders to buy new shares, usually below market price",
      "Is always detached and traded separately for years",
      "Can only be exercised by institutions"
    ],
    answer: 1,
    explanation: "Rights are short-lived (often weeks) privileges granted to existing shareholders to subscribe to new shares at a subscription price below market. Warrants are longer-term instruments, often attached to new issues as a 'sweetener.'"
  },
  {
    category: "Equity Securities",
    difficulty: "Hard",
    question: "An investor sells a stock short. Their maximum potential loss is:",
    options: [
      "Limited to the initial sale proceeds",
      "Theoretically unlimited, because the price can rise without bound",
      "Zero, because short selling is risk-free",
      "Limited to the margin deposited"
    ],
    answer: 1,
    explanation: "A short seller profits if the price falls but must eventually buy back the shares. Since a stock's price can rise indefinitely, the potential loss on a short sale is theoretically unlimited."
  },
  {
    category: "Equity Securities",
    difficulty: "Core",
    question: "A 'limit order' to buy instructs the dealer to:",
    options: [
      "Buy immediately at any available price",
      "Buy only at the specified price or lower",
      "Buy only at the specified price or higher",
      "Sell when the price falls to a trigger"
    ],
    answer: 1,
    explanation: "A buy limit order sets the maximum price the buyer will pay; it executes only at that price or lower. A market order, by contrast, executes immediately at the best available price."
  },
  {
    category: "Equity Securities",
    difficulty: "Expert",
    question: "An investor buys 1,000 shares at $40 in a margin account with a 50% margin requirement. If the shares fall to $28, and the maintenance requirement leads to a margin call, this is because:",
    options: [
      "The account equity has fallen below the required maintenance level",
      "The shares paid too large a dividend",
      "The broker earned too little commission",
      "Margin accounts never receive calls"
    ],
    answer: 0,
    explanation: "As the price falls, the client's equity in the position shrinks. When equity falls below the maintenance margin requirement, the firm issues a margin call requiring additional funds or securities."
  },
  {
    category: "Equity Securities",
    difficulty: "Hard",
    question: "A preferred share is described as 'retractable.' This feature gives:",
    options: [
      "The issuer the right to buy the shares back",
      "The holder the right to sell the shares back to the issuer at a set price on a set date",
      "The holder the right to convert to bonds",
      "The issuer the right to skip dividends"
    ],
    answer: 1,
    explanation: "A retraction privilege lets the HOLDER force the issuer to redeem the shares at a predetermined price/date. A CALL feature, by contrast, is the issuer's right to redeem."
  },

  /* =========================================================
     4. FIXED INCOME
     ========================================================= */
  {
    category: "Fixed Income",
    difficulty: "Core",
    question: "The relationship between a bond's price and prevailing market interest rates is:",
    options: [
      "Direct — prices rise when rates rise",
      "Inverse — prices fall when rates rise",
      "No relationship",
      "Only relevant for floating-rate notes"
    ],
    answer: 1,
    explanation: "Bond prices move inversely to interest rates. When market rates rise, existing bonds with lower coupons become less attractive, so their prices fall (and vice versa)."
  },
  {
    category: "Fixed Income",
    difficulty: "Hard",
    question: "All else equal, which bond will exhibit the GREATEST price sensitivity (duration) to a change in interest rates?",
    options: [
      "A 2-year bond with a high coupon",
      "A 20-year zero-coupon (strip) bond",
      "A 1-year Treasury bill",
      "A 3-year floating-rate note"
    ],
    answer: 1,
    explanation: "Longer maturity and lower coupons increase duration. A 20-year strip bond has both the longest term and no coupon cash flows, giving it the highest interest-rate sensitivity."
  },
  {
    category: "Fixed Income",
    difficulty: "Expert",
    question: "A bond is trading at a premium (above par). This tells you that its coupon rate is:",
    options: [
      "Below current market yields for comparable bonds",
      "Above current market yields for comparable bonds",
      "Exactly equal to current market yields",
      "Irrelevant to price"
    ],
    answer: 1,
    explanation: "A bond trades at a premium when its coupon exceeds current market yields, making it more attractive; investors bid the price above par. A discount bond has a coupon below market yields."
  },
  {
    category: "Fixed Income",
    difficulty: "Hard",
    question: "Yield to maturity (YTM) on a bond assumes that:",
    options: [
      "The bond is sold immediately",
      "The bond is held to maturity and all coupons are reinvested at the YTM",
      "Interest rates fall to zero",
      "The issuer defaults"
    ],
    answer: 1,
    explanation: "YTM is the total return anticipated if the bond is held to maturity, assuming all coupon payments are reinvested at the same YTM rate — a key simplifying assumption."
  },
  {
    category: "Fixed Income",
    difficulty: "Expert",
    question: "For tax purposes in a non-registered account, the annual accrued (imputed) interest on a strip bond is:",
    options: [
      "Not taxable until the bond matures",
      "Taxable each year as interest income even though no cash is received",
      "Taxed as a capital gain",
      "Taxed as an eligible dividend"
    ],
    answer: 1,
    explanation: "Even though strip bonds pay no cash coupons, CRA requires the holder to include the annually accrued (imputed) interest as income each year in a taxable account."
  },
  {
    category: "Fixed Income",
    difficulty: "Core",
    question: "A callable bond is generally LESS attractive to an investor than an otherwise identical non-callable bond because:",
    options: [
      "It pays no interest",
      "The issuer can redeem it early (typically when rates fall), capping the investor's upside and creating reinvestment risk",
      "It has no maturity date",
      "It cannot be sold before maturity"
    ],
    answer: 1,
    explanation: "A call feature benefits the issuer, who will call the bond when rates fall to refinance cheaply. This exposes the investor to reinvestment risk and caps price appreciation, so callable bonds offer higher yields to compensate."
  },
  {
    category: "Fixed Income",
    difficulty: "Hard",
    question: "A normal (upward-sloping) yield curve indicates that:",
    options: [
      "Short-term yields exceed long-term yields",
      "Long-term yields exceed short-term yields",
      "All yields are identical across maturities",
      "The market expects deflation"
    ],
    answer: 1,
    explanation: "A normal yield curve slopes upward, with longer maturities offering higher yields to compensate for greater term and inflation risk. An inverted curve (short > long) often precedes economic slowdowns."
  },
  {
    category: "Fixed Income",
    difficulty: "Hard",
    question: "A debenture differs from a mortgage bond in that a debenture is:",
    options: [
      "Secured by specific physical property",
      "Backed only by the general credit of the issuer, not specific pledged assets",
      "Always issued by the federal government",
      "A type of equity security"
    ],
    answer: 1,
    explanation: "A debenture is an unsecured debt obligation backed by the issuer's general creditworthiness. A mortgage bond is secured by a pledge of specific real property."
  },
  {
    category: "Fixed Income",
    difficulty: "Expert",
    question: "An investor buys a bond between coupon dates. At settlement they must pay the seller:",
    options: [
      "Only the quoted (clean) price",
      "The quoted price plus accrued interest earned by the seller since the last coupon",
      "The quoted price minus a discount",
      "Nothing until the next coupon"
    ],
    answer: 1,
    explanation: "The buyer compensates the seller for interest accrued from the last coupon date to the settlement date. The total (dirty) price equals the clean price plus accrued interest."
  },
  {
    category: "Fixed Income",
    difficulty: "Core",
    question: "Real Return Bonds (RRBs) issued by the Government of Canada protect investors against:",
    options: [
      "Currency risk",
      "Inflation risk, by adjusting principal and interest to the CPI",
      "Default risk only",
      "Liquidity risk"
    ],
    answer: 1,
    explanation: "Real Return Bonds adjust their principal (and therefore coupon payments) in line with the Consumer Price Index, protecting the investor's purchasing power against inflation."
  },

  /* =========================================================
     5. MANAGED & STRUCTURED PRODUCTS
     ========================================================= */
  {
    category: "Managed & Structured Products",
    difficulty: "Core",
    question: "The net asset value per unit (NAVPU) of a conventional open-end mutual fund is calculated as:",
    options: [
      "Total assets ÷ number of employees",
      "(Total assets − total liabilities) ÷ number of units outstanding",
      "The current stock exchange trading price",
      "The management fee ÷ units"
    ],
    answer: 1,
    explanation: "NAVPU = (fund assets − liabilities) ÷ units outstanding, calculated typically once per day. Open-end funds transact at NAVPU, not at an exchange-driven market price."
  },
  {
    category: "Managed & Structured Products",
    difficulty: "Hard",
    question: "A key structural difference between an ETF and a conventional open-end mutual fund is that an ETF:",
    options: [
      "Cannot hold equities",
      "Trades on an exchange throughout the day at market-determined prices",
      "Is always actively managed",
      "Has no management fee"
    ],
    answer: 1,
    explanation: "ETFs trade intraday on an exchange at prices set by supply and demand (kept near NAV by the creation/redemption process). Conventional mutual funds transact only at end-of-day NAVPU."
  },
  {
    category: "Managed & Structured Products",
    difficulty: "Expert",
    question: "The Management Expense Ratio (MER) of a mutual fund represents:",
    options: [
      "Only the trailing commission paid to advisors",
      "Total annual management fees and operating expenses (plus taxes) as a percentage of average net assets",
      "The front-end sales charge",
      "The fund's annual return"
    ],
    answer: 1,
    explanation: "The MER expresses the fund's total ongoing costs — management fee, operating expenses, and applicable taxes — as a percentage of average net assets. It reduces the investor's return and excludes trading commissions (captured in the TER)."
  },
  {
    category: "Managed & Structured Products",
    difficulty: "Hard",
    question: "A closed-end fund differs from an open-end mutual fund in that a closed-end fund:",
    options: [
      "Continuously issues and redeems units at NAV",
      "Has a fixed number of shares that trade on an exchange, often at a premium or discount to NAV",
      "Cannot be listed on an exchange",
      "Has no net asset value"
    ],
    answer: 1,
    explanation: "Closed-end funds issue a fixed number of shares that then trade on an exchange. Their market price can diverge from NAV, trading at a premium or (more often) a discount."
  },
  {
    category: "Managed & Structured Products",
    difficulty: "Expert",
    question: "Segregated funds, offered by insurance companies, differ from mutual funds primarily because they:",
    options: [
      "Have no management fees",
      "Offer maturity/death benefit guarantees and potential creditor protection, and bypass probate via a named beneficiary",
      "Are guaranteed by CIPF",
      "Cannot lose value"
    ],
    answer: 1,
    explanation: "Segregated funds are insurance contracts offering maturity and death benefit guarantees (typically 75–100% of deposits), potential creditor protection, and probate bypass through beneficiary designation — features mutual funds lack. They still carry investment risk and higher fees."
  },
  {
    category: "Managed & Structured Products",
    difficulty: "Hard",
    question: "A Principal Protected Note (PPN) typically:",
    options: [
      "Guarantees a high fixed return",
      "Returns at least the original principal at maturity, with upside linked to an underlying asset, subject to issuer credit risk",
      "Is insured by CDIC for any amount",
      "Has no maturity date"
    ],
    answer: 1,
    explanation: "A PPN promises return of principal at maturity plus a variable return tied to an underlying index or basket. The 'protection' depends on the issuer's creditworthiness, and early sale may result in loss."
  },
  {
    category: "Managed & Structured Products",
    difficulty: "Core",
    question: "Under a Deferred Sales Charge (DSC) purchase option (where still permitted historically), the redemption fee an investor pays:",
    options: [
      "Increases the longer the fund is held",
      "Declines over a set schedule and eventually reaches zero",
      "Is charged at the time of purchase",
      "Never applies"
    ],
    answer: 1,
    explanation: "Under a DSC schedule, the redemption charge is highest if redeemed early and declines each year until it reaches zero. (Note: new DSC sales to retail clients have been banned in Canada.)"
  },
  {
    category: "Managed & Structured Products",
    difficulty: "Expert",
    question: "Compared with mutual funds available to the retail public, hedge funds are generally:",
    options: [
      "More heavily regulated with lower minimum investments",
      "Sold under prospectus exemptions to accredited/eligible investors and may use leverage and short selling",
      "Guaranteed against loss",
      "Required to offer daily liquidity"
    ],
    answer: 1,
    explanation: "Hedge funds are typically distributed under prospectus exemptions to accredited investors, can employ leverage, derivatives and short selling, and often have limited liquidity (lock-ups, redemption gates)."
  },

  /* =========================================================
     6. DERIVATIVES
     ========================================================= */
  {
    category: "Derivatives",
    difficulty: "Core",
    question: "The buyer of a call option has:",
    options: [
      "The obligation to sell the underlying at the strike price",
      "The right, but not the obligation, to buy the underlying at the strike price",
      "The obligation to buy the underlying at any price",
      "No exposure to the underlying"
    ],
    answer: 1,
    explanation: "A call buyer pays a premium for the RIGHT (not obligation) to buy the underlying at the strike price before/at expiry. The call writer has the obligation to sell if assigned."
  },
  {
    category: "Derivatives",
    difficulty: "Hard",
    question: "A put option with a strike price of $50 on a stock currently trading at $44 has an intrinsic value of:",
    options: [
      "$0",
      "$6",
      "$44",
      "$50"
    ],
    answer: 1,
    explanation: "A put's intrinsic value is max(strike − underlying, 0) = max(50 − 44, 0) = $6. It is in-the-money because the holder could sell at $50 something worth $44."
  },
  {
    category: "Derivatives",
    difficulty: "Expert",
    question: "An investor owns 100 shares of a stock and writes one covered call against them. The primary trade-off is that the investor:",
    options: [
      "Eliminates all downside risk on the shares",
      "Earns premium income but caps the upside gain above the strike price",
      "Doubles their exposure to the stock",
      "Is obligated to buy more shares"
    ],
    answer: 1,
    explanation: "Writing a covered call generates premium income and provides limited downside cushion, but if the stock rises above the strike, the shares are likely called away — capping the upside at the strike plus premium."
  },
  {
    category: "Derivatives",
    difficulty: "Hard",
    question: "A key difference between a futures contract and a forward contract is that a futures contract is:",
    options: [
      "A private, customized agreement with no clearinghouse",
      "Standardized, exchange-traded, and marked to market daily through a clearinghouse",
      "Only available on currencies",
      "Never settled in cash"
    ],
    answer: 1,
    explanation: "Futures are standardized and traded on organized exchanges with a central clearinghouse that marks positions to market daily. Forwards are customized, private OTC contracts with counterparty credit risk."
  },
  {
    category: "Derivatives",
    difficulty: "Expert",
    question: "A Canadian exporter expecting to receive USD in three months is worried the USD will weaken. An appropriate hedge would be to:",
    options: [
      "Buy USD forward",
      "Sell USD forward (lock in a rate to convert future USD receipts to CAD)",
      "Buy USD call options only",
      "Do nothing, as currency risk cannot be hedged"
    ],
    answer: 1,
    explanation: "The exporter will receive USD and convert to CAD. To hedge against a falling USD, they sell USD forward, locking in today's exchange rate for the future conversion."
  },
  {
    category: "Derivatives",
    difficulty: "Core",
    question: "The maximum loss for the BUYER of an option (call or put) is:",
    options: [
      "Unlimited",
      "Limited to the premium paid",
      "The strike price",
      "The value of the underlying"
    ],
    answer: 1,
    explanation: "An option buyer can lose at most the premium paid, because they can simply let a worthless option expire. Option WRITERS, however, can face large or unlimited losses."
  },

  /* =========================================================
     7. KYC, SUITABILITY & ACCOUNT OPENING
     ========================================================= */
  {
    category: "KYC, Suitability & Account Opening",
    difficulty: "Core",
    question: "Which of the following is NOT a core element of the 'Know Your Client' (KYC) obligation?",
    options: [
      "The client's investment objectives and time horizon",
      "The client's risk profile and financial circumstances",
      "The advisor's personal sales targets",
      "The client's investment knowledge and personal circumstances"
    ],
    answer: 2,
    explanation: "KYC captures the client's identity, financial situation, investment needs and objectives, risk profile, investment knowledge and time horizon. The advisor's sales targets are irrelevant to KYC and must never drive recommendations."
  },
  {
    category: "KYC, Suitability & Account Opening",
    difficulty: "Hard",
    question: "Under the Client Focused Reforms, a suitability determination must be made and the client's interest put first. Which additional step did the reforms emphasize BEFORE recommending a product?",
    options: [
      "Know Your Product (KYP) — understanding the product's structure, risks and costs",
      "Guaranteeing a minimum return",
      "Obtaining the client's social media passwords",
      "Selling only proprietary funds"
    ],
    answer: 0,
    explanation: "The Client Focused Reforms formalized Know Your Product: firms and registrants must understand and assess the securities they recommend (features, risks, costs, and reasonable alternatives) as part of suitability."
  },
  {
    category: "KYC, Suitability & Account Opening",
    difficulty: "Expert",
    question: "The distinction between a client's 'risk tolerance' and 'risk capacity' is that risk capacity refers to:",
    options: [
      "The client's emotional willingness to accept volatility",
      "The client's financial ability to absorb losses without jeopardizing their goals",
      "The advisor's comfort with the portfolio",
      "The historical volatility of the market"
    ],
    answer: 1,
    explanation: "Risk tolerance is the client's psychological willingness to accept risk; risk capacity is their objective financial ability to withstand losses. A suitable risk profile must reconcile both."
  },
  {
    category: "KYC, Suitability & Account Opening",
    difficulty: "Hard",
    question: "Relationship Disclosure Information (RDI) provided to a client at account opening must include all of the following EXCEPT:",
    options: [
      "The nature of the products and services offered",
      "The charges the client will pay and how the advisor is compensated conceptually",
      "A guarantee of investment returns",
      "How the advisor will assess suitability and address conflicts of interest"
    ],
    answer: 2,
    explanation: "RDI describes the relationship: products/services, costs and compensation, the suitability process, conflicts, and how performance will be reported. It cannot include a guarantee of returns, which is prohibited."
  },
  {
    category: "KYC, Suitability & Account Opening",
    difficulty: "Hard",
    question: "A 'Trusted Contact Person' (TCP) collected at account opening is intended to:",
    options: [
      "Have trading authority over the account",
      "Be someone the firm may contact if it suspects financial exploitation or diminished mental capacity of the client",
      "Guarantee the client's debts",
      "Receive all account statements automatically"
    ],
    answer: 1,
    explanation: "A TCP is a resource the firm can reach out to in limited circumstances — suspected exploitation, diminished capacity, or to confirm contact details — and has NO trading authority or account access."
  },
  {
    category: "KYC, Suitability & Account Opening",
    difficulty: "Expert",
    question: "A client's KYC information should be updated:",
    options: [
      "Only when the account is closed",
      "At least periodically and whenever there is a significant change in the client's circumstances",
      "Never, once collected at opening",
      "Only if the client complains"
    ],
    answer: 1,
    explanation: "KYC must be kept current — reviewed at least on a defined periodic basis and updated promptly when the registrant becomes aware of a material change in the client's circumstances."
  },
  {
    category: "KYC, Suitability & Account Opening",
    difficulty: "Hard",
    question: "A suitability determination must generally be performed when:",
    options: [
      "Only at the very first trade",
      "A trade or recommendation is made, an account is opened/transferred-in, or the advisor becomes aware of a material change",
      "Only once every ten years",
      "Only for registered accounts"
    ],
    answer: 1,
    explanation: "Suitability must be assessed at key trigger events: opening/receiving an account, making a recommendation or accepting an order, a change of representative, and upon a material change in KYC or the securities held."
  },

  /* =========================================================
     8. ACCOUNTS, REGISTRATION & LEGAL
     ========================================================= */
  {
    category: "Accounts, Registration & Legal",
    difficulty: "Core",
    question: "In a Joint Tenancy With Right of Survivorship (JTWROS) account, when one holder dies:",
    options: [
      "That holder's share passes through their estate/will",
      "The deceased's interest automatically passes to the surviving joint holder(s)",
      "The account is frozen permanently",
      "The assets escheat to the government"
    ],
    answer: 1,
    explanation: "In JTWROS, the survivorship feature means the deceased's interest passes directly to the surviving joint owner(s), bypassing the estate and probate. (Note: JTWROS is generally not used in Quebec.)"
  },
  {
    category: "Accounts, Registration & Legal",
    difficulty: "Hard",
    question: "A 'discretionary' (or managed) account is one in which:",
    options: [
      "The client must approve every trade in advance",
      "The advisor (appropriately licensed) may make investment decisions without prior client approval for each trade",
      "No trading is permitted",
      "Only mutual funds may be held"
    ],
    answer: 1,
    explanation: "In a managed/discretionary account, the client grants written authority for the registrant to make investment decisions without seeking approval for each transaction. This requires appropriate proficiency and supervision."
  },
  {
    category: "Accounts, Registration & Legal",
    difficulty: "Expert",
    question: "The difference between 'Joint Tenants' and 'Tenants in Common' ownership is that Tenants in Common:",
    options: [
      "Always have a right of survivorship",
      "Each own a distinct, divisible share that passes through their estate on death, with no automatic survivorship",
      "Cannot own securities",
      "Must own equal shares only"
    ],
    answer: 1,
    explanation: "Tenants in Common hold separate, transferable interests (which may be unequal). On death, a tenant's share passes to their estate per their will — there is no automatic survivorship as in JTWROS."
  },
  {
    category: "Accounts, Registration & Legal",
    difficulty: "Hard",
    question: "A cash account differs from a margin account in that in a cash account the client:",
    options: [
      "Borrows from the dealer to buy securities",
      "Must pay in full for securities purchased by the settlement date",
      "Can short sell freely",
      "Never has to settle trades"
    ],
    answer: 1,
    explanation: "In a cash account the client must fully pay for purchases by settlement. A margin account allows the client to borrow a portion of the purchase price from the dealer, using the securities as collateral."
  },
  {
    category: "Accounts, Registration & Legal",
    difficulty: "Expert",
    question: "A Power of Attorney (POA) granted over an investment account:",
    options: [
      "Transfers legal ownership of the assets to the attorney",
      "Authorizes the named attorney to act on the account on the client's behalf within the scope granted",
      "Is the same as a discretionary trading authorization to the advisor",
      "Automatically survives the client's death indefinitely"
    ],
    answer: 1,
    explanation: "A POA authorizes another person (the 'attorney') to act for the client within the granted scope; it does not transfer ownership. It is distinct from granting the advisor discretionary authority, and a general POA typically ends at death (an enduring/continuing POA survives incapacity)."
  },

  /* =========================================================
     9. TAXATION
     ========================================================= */
  {
    category: "Taxation",
    difficulty: "Core",
    question: "In a non-registered account, interest income from a bond is taxed:",
    options: [
      "At a 50% inclusion rate like capital gains",
      "As fully taxable ordinary income at the investor's marginal rate",
      "With a dividend tax credit",
      "Only when the bond matures"
    ],
    answer: 1,
    explanation: "Interest income is fully included in taxable income and taxed at the investor's marginal rate — the least tax-efficient form of investment income, unlike capital gains and Canadian dividends."
  },
  {
    category: "Taxation",
    difficulty: "Hard",
    question: "Assuming a 50% capital gains inclusion rate, an investor with a $10,000 capital gain and a 40% marginal tax rate would owe tax of:",
    options: [
      "$4,000",
      "$2,000",
      "$5,000",
      "$1,000"
    ],
    answer: 1,
    explanation: "Taxable capital gain = $10,000 × 50% = $5,000. Tax = $5,000 × 40% = $2,000. Only half the gain is included in income at the 50% inclusion rate."
  },
  {
    category: "Taxation",
    difficulty: "Expert",
    question: "The 'superficial loss' rule denies a capital loss when the investor (or affiliated person) buys back the identical security:",
    options: [
      "Within 30 calendar days before or after the sale and still holds it at the end of that period",
      "At any time in the same calendar year",
      "Only in a registered account",
      "More than one year later"
    ],
    answer: 0,
    explanation: "A loss is 'superficial' (and disallowed) if identical property is acquired by the taxpayer or an affiliated person within 30 days before or after the disposition and is still held at the end of that window. The denied loss is added to the ACB of the repurchased security."
  },
  {
    category: "Taxation",
    difficulty: "Hard",
    question: "Eligible Canadian dividends receive preferential tax treatment through:",
    options: [
      "A 50% inclusion rate",
      "A gross-up and dividend tax credit mechanism",
      "Complete exemption from tax",
      "Deferral until the shares are sold"
    ],
    answer: 1,
    explanation: "Eligible Canadian dividends are 'grossed up' and then reduced by the dividend tax credit, reflecting corporate tax already paid. This generally results in a lower effective tax rate than interest income."
  },
  {
    category: "Taxation",
    difficulty: "Expert",
    question: "Attribution rules would MOST likely apply when:",
    options: [
      "An individual invests their own money in a TFSA",
      "A high-income spouse gifts funds to a lower-income spouse who invests them, generating income",
      "A person contributes to their own RRSP",
      "An arm's-length business partner invests"
    ],
    answer: 1,
    explanation: "Income attribution rules prevent income splitting: investment income (interest/dividends) earned on funds gifted or loaned at non-arm's-length to a spouse (or minor) is generally attributed back to the transferor and taxed in their hands."
  },
  {
    category: "Taxation",
    difficulty: "Hard",
    question: "Investment income earned inside a Tax-Free Savings Account (TFSA) is:",
    options: [
      "Taxed annually as earned",
      "Tax-free, and qualified withdrawals are not taxable",
      "Tax-deferred until withdrawal, then taxed as income",
      "Subject to a 50% inclusion rate"
    ],
    answer: 1,
    explanation: "TFSA contributions are made with after-tax dollars; investment income and growth accumulate tax-free, and withdrawals are not taxed. (Contributions are not deductible, unlike an RRSP.)"
  },
  {
    category: "Taxation",
    difficulty: "Expert",
    question: "An investor buys 100 shares at $20, later buys another 100 at $30, then sells 100 shares. For tax purposes in a non-registered account, the adjusted cost base (ACB) per share used to compute the gain/loss is:",
    options: [
      "$20 (first in, first out)",
      "$25 (the weighted average cost of all identical shares)",
      "$30 (last in, first out)",
      "The current market price"
    ],
    answer: 1,
    explanation: "For identical properties, CRA requires the average cost method. ACB per share = (100×$20 + 100×$30) ÷ 200 = $5,000 ÷ 200 = $25."
  },
  {
    category: "Taxation",
    difficulty: "Hard",
    question: "A key tax advantage of an RRSP is that:",
    options: [
      "Withdrawals are always tax-free",
      "Contributions (within limits) are tax-deductible and growth is tax-deferred until withdrawal",
      "It has no contribution limit",
      "Dividends inside it get the dividend tax credit"
    ],
    answer: 1,
    explanation: "RRSP contributions are deductible against income (up to the annual limit) and investments grow tax-deferred. Withdrawals are fully taxable as income. There is no benefit to the dividend tax credit inside registered plans."
  },

  /* =========================================================
     10. ECONOMICS
     ========================================================= */
  {
    category: "Economics",
    difficulty: "Core",
    question: "The primary tool the Bank of Canada uses to influence short-term interest rates and implement monetary policy is:",
    options: [
      "Setting income tax rates",
      "Adjusting its policy (overnight target) interest rate",
      "Issuing new equity",
      "Regulating stock exchanges"
    ],
    answer: 1,
    explanation: "The Bank of Canada conducts monetary policy chiefly by setting the target for the overnight rate, which influences other short-term rates. Taxation and spending are FISCAL policy tools of the government."
  },
  {
    category: "Economics",
    difficulty: "Hard",
    question: "Fiscal policy is distinguished from monetary policy in that fiscal policy involves:",
    options: [
      "Central bank control of the money supply",
      "Government decisions on taxation and spending",
      "Commercial bank lending standards",
      "Stock exchange listing rules"
    ],
    answer: 1,
    explanation: "Fiscal policy refers to the government's use of taxation and spending to influence the economy. Monetary policy is the central bank's management of interest rates and the money supply."
  },
  {
    category: "Economics",
    difficulty: "Expert",
    question: "All else equal, if the Bank of Canada RAISES its policy rate to combat inflation, the likely effect on the Canadian dollar and bond prices is:",
    options: [
      "CAD tends to weaken; bond prices rise",
      "CAD tends to strengthen; existing bond prices fall",
      "Both CAD and bond prices rise",
      "No effect on either"
    ],
    answer: 1,
    explanation: "Higher domestic rates tend to attract capital inflows, supporting (strengthening) the currency. Rising rates also push existing bond prices DOWN due to the inverse price-yield relationship."
  },
  {
    category: "Economics",
    difficulty: "Hard",
    question: "The phase of the business cycle characterized by rising unemployment, falling output, and declining consumer spending is the:",
    options: [
      "Expansion",
      "Contraction (recession)",
      "Peak",
      "Trough"
    ],
    answer: 1,
    explanation: "During a contraction/recession, economic output (GDP) falls, unemployment rises, and spending declines. The cycle runs trough → expansion → peak → contraction → trough."
  },
  {
    category: "Economics",
    difficulty: "Expert",
    question: "A 'leading' economic indicator is one that:",
    options: [
      "Confirms trends after they have occurred",
      "Tends to change direction BEFORE the overall economy, helping to anticipate turning points",
      "Moves at exactly the same time as GDP",
      "Has no predictive value"
    ],
    answer: 1,
    explanation: "Leading indicators (e.g., new housing starts, stock prices, manufacturing new orders) tend to change ahead of the broader economy. Coincident indicators move with it; lagging indicators (e.g., unemployment) confirm trends afterward."
  },
  {
    category: "Economics",
    difficulty: "Core",
    question: "Gross Domestic Product (GDP) measures:",
    options: [
      "The total value of all final goods and services produced within a country in a period",
      "The national unemployment rate",
      "The federal government's total debt",
      "The value of the stock market"
    ],
    answer: 0,
    explanation: "GDP is the total market value of all final goods and services produced within a country's borders over a given period, and is the broadest gauge of economic activity."
  },
  {
    category: "Economics",
    difficulty: "Hard",
    question: "The Consumer Price Index (CPI) is primarily used to measure:",
    options: [
      "Corporate profitability",
      "Changes in the general price level (inflation) faced by consumers",
      "The unemployment rate",
      "Stock market volatility"
    ],
    answer: 1,
    explanation: "The CPI tracks the average change over time in the prices paid by consumers for a representative basket of goods and services, and is the standard measure of consumer price inflation."
  },

  /* =========================================================
     11. PORTFOLIO MANAGEMENT & ANALYSIS
     ========================================================= */
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Core",
    question: "The main benefit of diversification within a portfolio is to:",
    options: [
      "Guarantee a positive return every year",
      "Reduce unsystematic (security-specific) risk without necessarily sacrificing expected return",
      "Eliminate all market (systematic) risk",
      "Increase management fees"
    ],
    answer: 1,
    explanation: "Diversification reduces unsystematic (diversifiable) risk by combining assets that do not move perfectly together. It cannot eliminate systematic (market) risk, which affects all assets."
  },
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Hard",
    question: "A portfolio's 'beta' of 1.3 indicates that the portfolio is expected to:",
    options: [
      "Move 30% less than the market",
      "Be 30% more volatile than the market — rising/falling more than the market on average",
      "Have no relationship to the market",
      "Deliver a guaranteed 30% return"
    ],
    answer: 1,
    explanation: "Beta measures sensitivity to market movements. A beta of 1.3 means the portfolio tends to move 1.3 times the market's move, indicating higher systematic risk than the market (beta of 1.0)."
  },
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Expert",
    question: "'Alpha' in performance measurement represents:",
    options: [
      "The portfolio's total return",
      "The return above (or below) what would be expected given the portfolio's risk (beta) — a measure of value added",
      "The portfolio's standard deviation",
      "The risk-free rate"
    ],
    answer: 1,
    explanation: "Alpha is the risk-adjusted excess return relative to a benchmark expectation (e.g., from CAPM). Positive alpha suggests the manager added value beyond what the assumed risk would predict."
  },
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Hard",
    question: "The Sharpe ratio measures:",
    options: [
      "Return per unit of total risk (excess return over the risk-free rate divided by standard deviation)",
      "The portfolio's beta",
      "The dividend yield",
      "The number of holdings"
    ],
    answer: 0,
    explanation: "The Sharpe ratio = (portfolio return − risk-free rate) ÷ standard deviation. It expresses risk-adjusted return per unit of total risk; a higher ratio indicates better risk-adjusted performance."
  },
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Expert",
    question: "Two assets with a correlation coefficient of −1.0 are:",
    options: [
      "Perfectly positively correlated, offering no diversification",
      "Perfectly negatively correlated, offering the greatest diversification benefit",
      "Completely unrelated",
      "Identical securities"
    ],
    answer: 1,
    explanation: "A correlation of −1.0 means the assets move in exactly opposite directions, which theoretically offers the maximum diversification benefit and the greatest potential risk reduction when combined."
  },
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Hard",
    question: "The single most important determinant of a diversified portfolio's long-run return variability, according to widely cited studies, is generally:",
    options: [
      "Individual security selection",
      "The strategic asset allocation among asset classes",
      "The timing of daily trades",
      "The choice of custodian"
    ],
    answer: 1,
    explanation: "Research (e.g., Brinson et al.) attributes the large majority of a diversified portfolio's return variability to its strategic asset-allocation policy, more than security selection or market timing."
  },
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Expert",
    question: "An investor's portfolio target is 60% equity / 40% fixed income. After a strong equity rally it drifts to 70/30. 'Rebalancing' to the target would involve:",
    options: [
      "Buying more equity to chase performance",
      "Selling some equity and buying fixed income to restore the 60/40 mix",
      "Liquidating the entire portfolio",
      "Doing nothing, since drift is always beneficial"
    ],
    answer: 1,
    explanation: "Rebalancing restores the strategic weights by trimming the overweight asset (equity) and adding to the underweight one (fixed income), enforcing a disciplined 'sell high, buy low' and controlling risk."
  },
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Core",
    question: "The difference between strategic and tactical asset allocation is that tactical allocation:",
    options: [
      "Never changes the asset mix",
      "Makes short-term deviations from the strategic weights to exploit perceived market opportunities",
      "Ignores the client's objectives",
      "Uses only cash"
    ],
    answer: 1,
    explanation: "Strategic allocation sets the long-term target mix based on the client's objectives; tactical allocation makes deliberate, usually short-term shifts around those targets to add value from market views."
  },

  /* =========================================================
     12. AML, COMPLAINTS & CLIENT COMMUNICATION
     ========================================================= */
  {
    category: "AML, Complaints & Communication",
    difficulty: "Core",
    question: "The Canadian federal agency that receives reports on suspicious and large cash transactions to combat money laundering and terrorist financing is:",
    options: [
      "The CSA",
      "FINTRAC",
      "CIPF",
      "The Bank of Canada"
    ],
    answer: 1,
    explanation: "FINTRAC (the Financial Transactions and Reports Analysis Centre of Canada) is the federal financial intelligence unit that collects and analyzes reports required under the PCMLTFA."
  },
  {
    category: "AML, Complaints & Communication",
    difficulty: "Hard",
    question: "Under Canada's anti-money-laundering regime, a Large Cash Transaction Report must generally be filed when a client conducts a cash transaction of:",
    options: [
      "$1,000 or more",
      "$10,000 or more (in a single transaction or aggregated within 24 hours)",
      "$100,000 or more only",
      "Any amount, always"
    ],
    answer: 1,
    explanation: "A Large Cash Transaction Report is required for receipt of $10,000 or more in cash in a single transaction (or multiple transactions totalling $10,000+ within 24 hours from the same client)."
  },
  {
    category: "AML, Complaints & Communication",
    difficulty: "Expert",
    question: "A Suspicious Transaction Report (STR) must be filed when there are reasonable grounds to suspect a transaction is related to money laundering or terrorist financing. A key feature of an STR is that:",
    options: [
      "It only applies to transactions over $1 million",
      "It can apply regardless of the dollar amount, including attempted transactions",
      "The client must be notified that an STR was filed",
      "It replaces the need for KYC"
    ],
    answer: 1,
    explanation: "STRs are triggered by suspicion, not a dollar threshold, and include attempted transactions. 'Tipping off' — informing the client that a report was or will be made — is prohibited."
  },
  {
    category: "AML, Complaints & Communication",
    difficulty: "Hard",
    question: "The 'three stages' of money laundering are traditionally described as:",
    options: [
      "Deposit, transfer, withdrawal",
      "Placement, layering, and integration",
      "Buy, hold, sell",
      "Report, investigate, prosecute"
    ],
    answer: 1,
    explanation: "Placement introduces illicit funds into the financial system; layering uses complex transactions to obscure the origin; integration returns the 'cleaned' funds to the criminal in an apparently legitimate form."
  },
  {
    category: "AML, Complaints & Communication",
    difficulty: "Expert",
    question: "When a client makes a written complaint alleging misconduct, the registrant/firm is generally required to:",
    options: [
      "Ignore it unless the client sues",
      "Acknowledge and handle it fairly and promptly under the firm's complaint-handling procedures, providing required disclosures",
      "Immediately close the client's account",
      "Offer the client a personal payment to stay silent"
    ],
    answer: 1,
    explanation: "Firms must have complaint-handling procedures: acknowledge the complaint promptly, investigate fairly, provide a substantive response within required timeframes, and disclose the client's recourse options (e.g., OBSI)."
  },
  {
    category: "AML, Complaints & Communication",
    difficulty: "Hard",
    question: "The Ombudsman for Banking Services and Investments (OBSI) provides:",
    options: [
      "Binding court judgments against firms",
      "An independent, free dispute-resolution service for eligible client complaints, with non-binding recommendations (up to a monetary limit)",
      "Guaranteed compensation for market losses",
      "Legal representation for firms"
    ],
    answer: 1,
    explanation: "OBSI offers an independent, free avenue for resolving eligible complaints when a firm and client cannot agree. Its compensation recommendations (subject to a cap) are not legally binding on the parties."
  },
  {
    category: "AML, Complaints & Communication",
    difficulty: "Core",
    question: "All client communications and marketing materials used by a registrant must be:",
    options: [
      "Exaggerated to attract clients",
      "Fair, balanced, not misleading, and (where required) approved and supervised by the firm",
      "Kept secret from compliance",
      "Free of any risk disclosure"
    ],
    answer: 1,
    explanation: "Sales and marketing communications must be fair, balanced and not misleading, must not omit material risks, and are subject to firm review, approval and record-keeping requirements."
  },

  /* =========================================================
     ADDITIONAL CROSS-TOPIC / SCENARIO QUESTIONS
     ========================================================= */
  {
    category: "KYC, Suitability & Account Opening",
    difficulty: "Expert",
    question: "An 80-year-old client with modest income, no other savings, and a stated goal of capital preservation asks to put 90% of their assets into a speculative junior mining stock. The advisor should:",
    options: [
      "Execute the order because the client requested it",
      "Decline to recommend it and explain it is unsuitable, documenting the discussion; only proceed on an unsolicited basis with appropriate cautions and supervision if firm policy allows",
      "Recommend an even riskier product for higher commission",
      "Open a discretionary account and buy it anyway"
    ],
    answer: 1,
    explanation: "The concentration and risk conflict sharply with the client's circumstances and objectives, making it unsuitable. The advisor must not recommend it, should warn the client, and document everything; any unsolicited trade must follow firm policy with heightened scrutiny."
  },
  {
    category: "Ethics & Standards of Conduct",
    difficulty: "Expert",
    question: "A registrant is offered a large, non-cash gift by a grateful client. The appropriate response under conflict-of-interest standards is to:",
    options: [
      "Accept it privately without telling anyone",
      "Consider firm policy and materiality; disclose to the firm and decline gifts that could compromise, or appear to compromise, objectivity",
      "Demand cash instead",
      "Accept it and reciprocate with a loan"
    ],
    answer: 1,
    explanation: "Gifts can create conflicts of interest or the appearance of one. Registrants must follow firm gift-and-entertainment policies, disclose material gifts, and avoid anything that could impair — or appear to impair — objectivity."
  },
  {
    category: "Fixed Income",
    difficulty: "Expert",
    question: "An investor concerned about reinvestment risk on coupon income who wants a known lump sum at a future date for a specific goal would find the MOST suitable instrument to be a:",
    options: [
      "Floating-rate note",
      "Strip (zero-coupon) bond maturing near the goal date",
      "Perpetual preferred share",
      "Money market fund"
    ],
    answer: 1,
    explanation: "A strip bond pays no coupons (so there is no reinvestment risk) and delivers a known face value at a set maturity, making it well suited to funding a specific future liability."
  },
  {
    category: "Managed & Structured Products",
    difficulty: "Expert",
    question: "An index ETF trading materially ABOVE its net asset value creates an arbitrage opportunity that authorized participants exploit by:",
    options: [
      "Doing nothing, as prices cannot be arbitraged",
      "Creating new ETF units (delivering the underlying basket) and selling them, pushing the price back toward NAV",
      "Shutting down the fund",
      "Raising the MER"
    ],
    answer: 1,
    explanation: "The creation/redemption mechanism keeps ETF prices near NAV. When the ETF trades at a premium, authorized participants create units by delivering the underlying securities and sell the units, arbitraging the gap away."
  },
  {
    category: "Regulatory Environment & CIRO",
    difficulty: "Expert",
    question: "A registrant becomes aware that a client's account is being used in a pattern of trades with no apparent economic purpose that appears designed to create artificial price movement. The registrant's obligation includes:",
    options: [
      "Facilitating the trades to keep the client happy",
      "Recognizing possible market manipulation, escalating internally, and fulfilling gatekeeper/reporting duties",
      "Copying the trades for personal profit",
      "Ignoring it unless a regulator asks"
    ],
    answer: 1,
    explanation: "Patterns suggesting manipulation (e.g., wash trading, spoofing) trigger the gatekeeper obligation: the registrant must be alert, decline to facilitate improper activity, escalate to compliance, and support required reporting."
  },
  {
    category: "Taxation",
    difficulty: "Expert",
    question: "An investor realizes a $6,000 capital loss this year but has no capital gains this year. Under Canadian tax rules, the net capital loss can generally be:",
    options: [
      "Deducted against ordinary employment income this year",
      "Carried back up to three years or forward indefinitely to offset taxable capital gains",
      "Never used",
      "Only used in a registered account"
    ],
    answer: 1,
    explanation: "Allowable capital losses first offset taxable capital gains. Net capital losses can be carried back up to three years and carried forward indefinitely to offset capital gains in those years — but generally not other income."
  },
  {
    category: "Derivatives",
    difficulty: "Expert",
    question: "An investor writes (sells) a NAKED call option. Their risk profile is best described as:",
    options: [
      "Limited risk, limited reward",
      "Limited reward (the premium) but theoretically unlimited risk as the underlying rises",
      "Unlimited reward, no risk",
      "Risk limited to the strike price"
    ],
    answer: 1,
    explanation: "A naked call writer keeps the premium if the option expires worthless, but if the stock rises they must deliver shares they do not own — creating theoretically unlimited loss potential as the price climbs."
  },
  {
    category: "Economics",
    difficulty: "Expert",
    question: "'Stagflation' is an unusual economic condition characterized by the simultaneous occurrence of:",
    options: [
      "Falling prices and rising employment",
      "High inflation together with stagnant growth and high unemployment",
      "Rapid growth and low inflation",
      "Deflation and full employment"
    ],
    answer: 1,
    explanation: "Stagflation combines stagnant economic growth and high unemployment with persistent inflation — a difficult scenario because policies to fight inflation can worsen unemployment and vice versa."
  },
  {
    category: "Portfolio Management & Analysis",
    difficulty: "Expert",
    question: "A client invests $10,000 and after one year the portfolio is worth $10,800 after a $200 dividend was paid out during the year. The approximate total (holding period) return is:",
    options: [
      "8%",
      "10%",
      "6%",
      "2%"
    ],
    answer: 1,
    explanation: "Total return = (ending value − beginning value + income) ÷ beginning value = ($10,800 − $10,000 + $200) ÷ $10,000 = $1,000 ÷ $10,000 = 10%."
  },
  {
    category: "Accounts, Registration & Legal",
    difficulty: "Expert",
    question: "A registrant wishes to open an account for a corporation. In addition to standard KYC, the firm must typically obtain:",
    options: [
      "Nothing beyond an individual's ID",
      "Corporate documentation (e.g., articles/certificate of incorporation, authorizing resolution) and identification of beneficial owners/authorized signatories",
      "Only the company's website address",
      "A guarantee from the advisor"
    ],
    answer: 1,
    explanation: "For a corporate account, the firm must verify the entity's existence and authority (incorporation documents, trading resolution) and identify the beneficial owners and authorized individuals, consistent with AML/KYC requirements."
  },
  {
    category: "AML, Complaints & Communication",
    difficulty: "Expert",
    question: "A client insists on making a series of cash deposits each just under $10,000 to avoid triggering a report. This behaviour is known as 'structuring' and the registrant should:",
    options: [
      "Assist the client to keep deposits below the threshold",
      "Recognize it as a red flag for money laundering and escalate for possible suspicious-transaction reporting",
      "Ignore it because each deposit is under $10,000",
      "Advise the client on how to avoid detection"
    ],
    answer: 1,
    explanation: "Deliberately breaking up transactions to evade reporting thresholds ('structuring' or 'smurfing') is itself a red flag. The registrant must not facilitate it and should escalate for potential STR filing — without tipping off the client."
  },
  {
    category: "Equity Securities",
    difficulty: "Expert",
    question: "A company with 10 million shares outstanding trading at $25 has a market capitalization of:",
    options: [
      "$2.5 million",
      "$250 million",
      "$25 million",
      "$2.5 billion"
    ],
    answer: 1,
    explanation: "Market capitalization = shares outstanding × market price = 10,000,000 × $25 = $250,000,000 ($250 million)."
  }
];

// Expose the bank to the app (works whether loaded as a module or a plain script).
if (typeof window !== "undefined") {
  window.QUESTION_BANK = QUESTION_BANK;
}
