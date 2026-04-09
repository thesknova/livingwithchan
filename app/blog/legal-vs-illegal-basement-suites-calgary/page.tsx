import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Legal vs. Illegal Basement Suites in Calgary | Chan Kawaguchi",
  description:
    "What separates a legal secondary suite from an illegal one in Calgary? Permits, egress windows, fire separation, smoke alarms, and the real risks to landlords and tenants.",
};

export default function BasementSuitesPost() {
  return (
    <div className="bg-neutral-light min-h-screen">

      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-white transition-colors mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Investor Tips
            </span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">11 min read</span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">April 1, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Legal vs. Illegal Basement Suites in Calgary: What Every Landlord and Tenant Needs to Know
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed">
            Calgary has over 20,000 registered secondary suites, but estimates suggest many more exist without permits. Here&apos;s exactly what makes a suite legal, what the risks of an illegal suite are, and how to bring one into compliance.
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-12 text-gray-700 leading-relaxed text-sm">

        {/* Intro */}
        <section className="space-y-4">
          <p>
            A basement suite is one of the most powerful tools for building wealth through Calgary real estate. It can offset thousands of dollars in monthly carrying costs or generate meaningful positive cash flow. But there&apos;s a stark difference between a suite that adds value and one that creates serious legal, financial, and safety exposure.
          </p>
          <p>
            An <strong>illegal suite</strong> is not just a paperwork problem. It&apos;s a building that has never been inspected against Alberta&apos;s life safety standards. The consequences of a fire, a carbon monoxide leak, or a tenant injury in an uninspected suite can be catastrophic, financially and personally, for a landlord. For tenants, an illegal suite may have no safe means of escape in an emergency.
          </p>
          <p>
            This article walks through what Calgary requires to make a secondary suite legal, the risks on both sides of the lease, the process to legalize an existing suite, and where to find official City of Calgary resources.
          </p>
        </section>

        {/* What makes a suite legal */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">What Makes a Basement Suite Legal in Calgary</h2>
          <p>
            The City of Calgary defines a <strong>secondary suite</strong> as a self-contained residence with at minimum two rooms (including kitchen, living, sleeping, and bathroom facilities) with an entrance accessible from outside without passing through the main dwelling. A shared stairwell with separate private doors to each unit meets this requirement.
          </p>
          <p>
            To be legal, a suite must have obtained permits and passed mandatory city inspections. No permit means the suite has never been verified as meeting the Alberta Building Code, regardless of how well it may appear to be built.
          </p>

          <h3 className="text-base font-bold text-primary">Permits Required</h3>
          <div className="bg-white rounded-xl border border-neutral-mid overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-primary text-white text-xs font-bold uppercase tracking-widest">
              <div className="p-3">Permit</div>
              <div className="p-3">Fee</div>
              <div className="p-3">Timeline</div>
            </div>
            {[
              ["Building Permit (existing suite)", "$205.92", "~7 business days"],
              ["Building Permit (new suite)", "$403.52", "~7 business days"],
              ["Development Permit", "$0 (currently waived)", "10–12 weeks if required"],
              ["Electrical Permit (homeowner)", "$116.50", "Issued with building permit"],
              ["Plumbing Permit (homeowner)", "$116.50", "Issued with building permit"],
            ].map(([permit, fee, timeline], i) => (
              <div key={permit} className={`grid grid-cols-3 text-xs ${i % 2 === 0 ? "bg-neutral-light" : "bg-white"}`}>
                <div className="p-3 text-gray-700 font-medium">{permit}</div>
                <div className="p-3 text-gray-600">{fee}</div>
                <div className="p-3 text-gray-600">{timeline}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            Source:{" "}
            <a href="https://www.calgary.ca/development/home-building/suites-permit-costs-timelines.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              City of Calgary: Suite Permit Costs and Timelines
            </a>
          </p>

          <h3 className="text-base font-bold text-primary mt-4">Mandatory Inspections</h3>
          <p>Two inspections are required before a suite can be legally occupied:</p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li><strong>Framing / Rough-In Inspection</strong>: walls, ceiling framing, windows, doors, HVAC, and plumbing/electrical rough-in must all be complete and exposed (before drywall is closed)</li>
            <li><strong>Final Inspection</strong>: construction fully complete, suite ready for occupancy</li>
          </ol>
          <p>
            After passing the final inspection, the City mails a <strong>registration sticker</strong> within 2–3 weeks. The suite then appears on the public{" "}
            <a href="https://secondarysuites.calgary.ca/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Secondary Suite Registry
            </a>.
          </p>

          <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
            <p className="text-sm font-semibold text-primary mb-1">Apply for permits online</p>
            <p className="text-sm text-gray-600">
              Submit through{" "}
              <a href="https://apply.calgary.ca" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">apply.calgary.ca</a>
              {" "}(free myID account required), or in person at the Planning Services Centre (800 Macleod Trail SE). Questions? Call <strong>403-268-5311</strong>, Monday–Friday 8 a.m.–4 p.m.
            </p>
          </div>
        </section>

        {/* Building code requirements */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">Alberta Building Code Requirements for Secondary Suites</h2>
          <p>
            Even a beautifully finished basement can be non-compliant if it misses specific code requirements. These are the standards a suite must meet, and the areas most commonly cited in enforcement actions.
          </p>

          {[
            {
              title: "Egress Windows (Emergency Escape)",
              color: "bg-red-50 border-red-200",
              titleColor: "text-red-700",
              items: [
                "Every bedroom must have at least one fully operable egress window",
                "Minimum unobstructed opening area: 0.35 m² (3.8 ft²)",
                "No single dimension smaller than 380 mm (15\")",
                "Must open without keys, tools, or special knowledge",
                "Casement windows must swing fully 90 degrees",
                "Window well clearance: 550 mm (21.5\") for existing windows; 760 mm (30\") for new installations",
              ],
              note: "Missing or undersized egress windows are the single most common violation found in illegal suites and the most dangerous in a fire.",
            },
            {
              title: "Ceiling Height",
              color: "bg-orange-50 border-orange-200",
              titleColor: "text-orange-700",
              items: [
                "Minimum ceiling height: 1.95 m (6'5\") throughout the suite",
                "Can be reduced to 1.85 m (6'1\") where mechanical ductwork or beams require drop ceilings",
                "Door minimum height: 1.89 m (6'2\"); minimum width: 810 mm (32\")",
                "Stairway minimum width: 860 mm (34\")",
              ],
              note: null,
            },
            {
              title: "Fire Separation Between Units",
              color: "bg-amber-50 border-amber-200",
              titleColor: "text-amber-700",
              items: [
                "Minimum 12.7 mm (½\") drywall on both the ceiling and both sides of wall studs separating the suite from the main residence",
                "All drywall joints must be taped and filled with compound to create a smoke-tight seal",
                "All doors in shared spaces and between units must be solid-core wood, minimum 45 mm thick, with a self-closing device",
                "The mechanical/furnace room must have its own solid, self-closing door",
              ],
              note: "Fire separation is what gives occupants time to escape. A missing ½\" of properly taped drywall can mean the difference between a survivable fire and a fatal one.",
            },
            {
              title: "Smoke & Carbon Monoxide Alarms",
              color: "bg-yellow-50 border-yellow-200",
              titleColor: "text-yellow-700",
              items: [
                "Smoke alarms required at every floor level, in all bedrooms, common spaces, and mechanical rooms",
                "Carbon monoxide alarms must be centrally located within 5 m of all bedrooms",
                "All alarms must be permanently hardwired to the electrical panel; battery-only alarms do not comply",
                "All alarms must be interconnected: when one activates, every alarm in both units sounds simultaneously",
              ],
              note: "Plug-in or battery-operated alarms, even if new, do not meet the legal standard. They must be hardwired and interconnected.",
            },
            {
              title: "Sound Separation",
              color: "bg-blue-50 border-blue-200",
              titleColor: "text-blue-700",
              items: [
                "Joist spaces between floors must be filled with sound-absorbing material at least 150 mm nominal thickness",
                "Resilient channel required on one side of stud walls",
                "Minimum Sound Transmission Class (STC) rating of 43, or ASTC rating of 40",
              ],
              note: null,
            },
            {
              title: "Electrical & Plumbing",
              color: "bg-purple-50 border-purple-200",
              titleColor: "text-purple-700",
              items: [
                "Separate electrical sub-panel or load calculation; no shared branch circuits between units",
                "All wiring supported and terminated properly into outlet boxes",
                "Suite must have hot water supply, kitchen sink, bathroom sink, toilet, and bathtub or shower",
                "A back-flow prevention device must be installed on the branch drains of the sanitary sewer line",
              ],
              note: null,
            },
          ].map((section) => (
            <div key={section.title} className={`rounded-xl border p-5 ${section.color}`}>
              <h3 className={`text-sm font-bold mb-3 ${section.titleColor}`}>{section.title}</h3>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {section.note && (
                <p className="mt-3 text-xs text-gray-600 italic border-t border-current/10 pt-3">{section.note}</p>
              )}
            </div>
          ))}

          <p className="text-xs text-gray-500">
            Full permit checklist:{" "}
            <a href="https://www.calgary.ca/content/dam/www/pda/pd/documents/permit-checklists/existing-secondary-suite-permit-checklist.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Existing Secondary Suite Permit Checklist (PDF), City of Calgary
            </a>
          </p>
        </section>

        {/* The registry */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">The City of Calgary Secondary Suite Registry</h2>
          <p>
            Calgary launched its public{" "}
            <a href="https://secondarysuites.calgary.ca/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
              Secondary Suite Registry
            </a>
            {" "}in 2015. It is a searchable online map where anyone can enter a Calgary address and immediately see whether a secondary suite at that property is legally registered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: "20,000+", label: "Suites registered as of mid-2025" },
              { value: "60%+", label: "Rise in registrations in a single year (2024–2025)" },
              { value: "3,000+", label: "Suites added via the Incentive Program" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-neutral-mid p-5 text-center shadow-sm">
                <p className="text-3xl font-black text-accent mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          <p>
            Registered suites receive a city-issued sticker displayed inside the unit. On RentFaster Calgary, registered listings carry a &quot;Legal Suite&quot; badge, a significant trust signal for prospective tenants.
          </p>
          <p className="text-xs text-gray-500">
            Source:{" "}
            <a href="https://newsroom.calgary.ca/calgarys-secondary-suite-registry-surpasses-20000-a-milestone-for-safer-housing/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Calgary Newsroom: Secondary Suite Registry Surpasses 20,000
            </a>
          </p>
        </section>

        {/* Risks to landlords */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">Risks to Landlords: Why an Illegal Suite Is a Serious Liability</h2>

          <div className="space-y-4">
            {[
              {
                icon: "💸",
                title: "Fines and Enforcement Orders",
                body: "Fire code violations can result in fines up to $40,000, plus surcharges. One documented Calgary case resulted in a $40,000 fine and a $6,000 surcharge for a single illegal suite. Ongoing violations can add penalties of up to $500 per day. Even minor issues, like a missing egress window or non-interconnected smoke alarms, can trigger substantial fines after a 311 complaint.",
              },
              {
                icon: "🔥",
                title: "Insurance Voids Your Policy",
                body: "Most homeowner's insurance policies contain clauses that void coverage for unpermitted rental use. If a fire, flood, or injury occurs in an illegal suite, the insurer may deny the entire claim, leaving you personally liable for structural damage and tenant injury lawsuits. This is not a theoretical risk: insurers do investigate claims and permit status is discoverable.",
              },
              {
                icon: "🏠",
                title: "Forced Suite Removal and Tenant Displacement",
                body: "A 311 complaint triggers a peace officer investigation. If violations are confirmed, you receive a Remedial Order with 21 days to correct the issue. Non-compliance allows the City to carry out the work and invoice you. In serious cases, you may be ordered to stop renting immediately and remove the suite entirely, leaving you without rental income and potentially having displaced a tenant.",
              },
              {
                icon: "📉",
                title: "Resale and Mortgage Complications",
                body: "An illegal suite cannot be counted as income for mortgage qualification, by you or by a future buyer. When selling, you typically must disclose permit status. Buyers will often demand a price concession or insist on legalization before closing. A legal suite adds real, bankable value; an illegal suite is a liability that skilled buyers will use against you.",
              },
              {
                icon: "⚖️",
                title: "Criminal Liability",
                body: "In cases of serious tenant injury or death caused by a non-compliant suite (a fire where a bedroom had no egress window, or carbon monoxide poisoning in a suite without a proper CO alarm), landlords have faced criminal negligence charges. The absence of a permit is direct evidence that no inspection ever verified life-safety compliance.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-neutral-mid p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
            <strong>How are illegal suites found?</strong> Most enforcement actions are triggered by tenant complaints to 311. Unhappy tenants, in disputes over maintenance, rent increases, or eviction, commonly report an illegal suite. Neighbour complaints are also common. The enforcement process begins the moment a complaint is filed.
          </div>
        </section>

        {/* Risks to tenants */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">Risks to Tenants: What to Check Before Signing</h2>
          <p>
            Tenants in illegal suites face their own serious risks, with limited protections.
          </p>

          <div className="space-y-3">
            {[
              {
                title: "No guaranteed means of escape in a fire",
                body: "An uninspected suite may have no operable egress windows in bedrooms. In a basement fire, the difference between life and death can be a properly sized, freely opening window.",
              },
              {
                title: "Smoke and CO alarms may not function properly",
                body: "Without an inspection, there is no verification that alarms are hardwired, interconnected, and correctly placed. A fire or CO event that triggers an alarm upstairs may give no warning in the suite.",
              },
              {
                title: "Risk of sudden displacement",
                body: "If the City receives a complaint and the landlord refuses to legalize, the suite may be ordered removed. Tenants in illegal suites can find themselves required to vacate on short notice with limited recourse compared to tenants in legal units.",
              },
              {
                title: "Renter's insurance may be voided",
                body: "Standard tenant insurance policies may exclude coverage in units that violate building codes. Your contents and personal liability coverage may not apply if a loss occurs in an unpermitted suite.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-neutral-mid p-4 flex gap-3">
                <span className="text-red-400 font-bold text-base flex-shrink-0 mt-0.5">✕</span>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-neutral-mid p-5">
            <p className="text-sm font-bold text-primary mb-2">How to verify a suite before signing a lease</p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Check the address at the{" "}
                <a href="https://secondarysuites.calgary.ca/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  City of Calgary Secondary Suite Registry
                </a>
              </li>
              <li>Look for the City-issued registration sticker inside the unit</li>
              <li>Look for RentFaster listings with the &quot;Legal Suite&quot; badge</li>
              <li>Ask the landlord directly for the building permit number. A legitimate landlord will have it readily available</li>
            </ol>
          </div>

          <p className="text-xs text-gray-500">
            Official tenant resource:{" "}
            <a href="https://www.calgary.ca/property-renters/secondary-suites.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Renting a Secondary Suite: City of Calgary
            </a>
          </p>
        </section>

        {/* How to legalize */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">How to Legalize an Existing Illegal Suite</h2>
          <p>
            The City of Calgary has deliberately made the legalization process as straightforward and affordable as possible. The development permit fee is currently <strong>waived ($0)</strong>, and the building permit for an existing suite is only <strong>$205.92</strong>. There is also an incentive program that can cover up to <strong>$10,000</strong> in legalization costs.
          </p>

          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Confirm Your Zoning Allows a Suite",
                body: "Verify your property's land use district permits secondary suites. Under the current R-CG citywide zoning, most established Calgary residential properties allow secondary suites. Check your address at the City of Calgary's property portal or call 403-268-5311.",
              },
              {
                step: "2",
                title: "Prepare Your Application",
                body: "You have two options: submit photographs of the existing suite construction (for suites that largely meet code), or prepare full site plans and floor plans with dimensions and construction details. The City's permit checklist details exactly what's required.",
              },
              {
                step: "3",
                title: "Apply for Permits",
                body: `Submit at apply.calgary.ca or in person at the Planning Services Centre (800 Macleod Trail SE). You'll need a building permit ($205.92), plus electrical and plumbing permits ($116.50 each, homeowner rate) for any required work.`,
              },
              {
                step: "4",
                title: "Complete Required Upgrades",
                body: "Bring the suite up to code. The most common work involves egress windows, hardwired/interconnected smoke and CO alarms, and drywall fire separation. The Secondary Suite Incentive Program offers up to $10,000 to offset these costs.",
              },
              {
                step: "5",
                title: "Pass Both Inspections",
                body: "Schedule and pass the framing/rough-in inspection (before drywall is closed) and the final inspection (suite fully complete). City inspectors will verify all code requirements are met.",
              },
              {
                step: "6",
                title: "Receive Your Registration Sticker",
                body: "Within 2–3 weeks of passing the final inspection, the City mails your registration sticker. Your suite appears on the public registry, and you can legally rent it.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl border border-neutral-mid p-5 flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-black flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 space-y-2">
            <p className="text-sm font-bold text-green-800">Secondary Suite Incentive Program: Up to $10,000</p>
            <p className="text-sm text-green-900 leading-relaxed">
              The City offers incentives for specific upgrades required during legalization:
            </p>
            <ul className="space-y-1 text-sm text-green-900">
              {[
                ["Egress windows", "$1,500"],
                ["Hardwired/interconnected alarms", "$1,000"],
                ["Smoke-tight drywall separation", "$4,000"],
                ["Protected exiting", "$1,000"],
                ["Split heat / separate HVAC", "$6,000"],
              ].map(([item, amount]) => (
                <li key={item} className="flex justify-between">
                  <span>{item}</span>
                  <span className="font-semibold">{amount}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-green-800 mt-2">
              Apply at:{" "}
              <a href="https://www.calgary.ca/development/home-building/secondary-suite-incentive-program.html" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                City of Calgary: Secondary Suite Incentive Program
              </a>
            </p>
          </div>
        </section>

        {/* The R-CG connection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">The 2024 Rezoning: What Changed for Secondary Suites</h2>
          <p>
            The August 2024 blanket rezoning (which changed most established Calgary residential lots to R-CG zoning) had a significant impact on secondary suite rules. Under R-CG, a property <em>without</em> a rowhouse or townhouse can now have both a <strong>secondary suite</strong> (basement) and a <strong>backyard suite</strong> (carriage suite above a detached garage, or a garden suite) at the same time.
          </p>
          <p>
            This means a single home could legally house three separate households: the main unit, a basement suite, and a carriage suite, each requiring their own set of permits and inspections, but potentially generating substantial rental income.
          </p>
          <p>
            However, as of April 2026, the City is considering repealing the blanket rezoning following a December 2025 council vote. The outcome of the March 2026 public hearing will determine whether these expanded permissions remain in place. Always verify current zoning for your specific property before making development decisions.
          </p>
          <p className="text-xs text-gray-500">
            Follow the latest:{" "}
            <a href="https://www.calgary.ca/planning/projects/rezoning-for-housing.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Rezoning for Housing: City of Calgary
            </a>
          </p>
        </section>

        {/* Quick reference links */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">City of Calgary Resources</h2>
          <div className="bg-white rounded-2xl border border-neutral-mid p-6 space-y-3">
            {[
              { label: "Secondary suites overview", url: "https://www.calgary.ca/development/home-building/secondary-suites.html" },
              { label: "Legalize an existing secondary suite", url: "https://www.calgary.ca/development/home-building/existing-secondary-suite.html" },
              { label: "Add a new secondary suite", url: "https://www.calgary.ca/development/home-building/new-secondary-suite.html" },
              { label: "Suite permit costs and timelines", url: "https://www.calgary.ca/development/home-building/suites-permit-costs-timelines.html" },
              { label: "Secondary Suite Incentive Program", url: "https://www.calgary.ca/development/home-building/secondary-suite-incentive-program.html" },
              { label: "Backyard suites (carriage / garden suites)", url: "https://www.calgary.ca/development/home-building/new-backyard-suite.html" },
              { label: "Secondary Suite Registry (verify any address)", url: "https://secondarysuites.calgary.ca/" },
              { label: "Renting a secondary suite: tenant info", url: "https://www.calgary.ca/property-renters/secondary-suites.html" },
              { label: "Report a bylaw violation (311)", url: "https://www.calgary.ca/bylaws/complaints.html" },
              { label: "Apply for permits online", url: "https://apply.calgary.ca" },
            ].map((link) => (
              <div key={link.label} className="flex items-start gap-3 text-sm">
                <span className="text-accent font-bold flex-shrink-0 mt-0.5">→</span>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Chan quote */}
        <blockquote className="border-l-4 border-accent pl-6 py-2">
          <p className="text-base italic text-gray-700 leading-relaxed mb-3">
            &quot;A legal suite is one of the best ways to add income and equity to a Calgary property — but the permit process exists for real reasons. I&apos;ve seen buyers walk away from otherwise great deals because of an illegal suite that couldn&apos;t be easily legalized. Do it right from the start and it pays for itself many times over.&quot;
          </p>
          <footer className="text-sm font-semibold text-primary">
            — Chan Kawaguchi, REMAX Complete Realty Agent, Calgary
          </footer>
        </blockquote>

        {/* Disclaimer */}
        <div className="bg-neutral-light rounded-xl border border-neutral-mid p-5 text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> This article is for general information only and does not constitute legal or professional advice. Permit fees, zoning rules, and incentive programs are subject to change. Always verify current requirements directly with the City of Calgary and consult a qualified professional before undertaking any development or rental activity.
        </div>

        {/* Back to blog */}
        <div className="pt-4">
          <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
            ← Back to all articles
          </Link>
        </div>

        {/* Contact */}
        <div className="border-t border-neutral-mid pt-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">Questions About a Suite?</h2>
              <p className="text-gray-500 text-sm">REMAX Complete Realty Agent · Calgary, AB</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Buying a property with a suite, or wondering if a suite can be legalized? Chan will walk you through what&apos;s involved before you commit.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:4036810107" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  403-681-0107
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:hello@livingwithchan.com" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  hello@livingwithchan.com
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-neutral-mid p-8">
            <h2 className="text-xl font-bold text-primary mb-1">Send a Message</h2>
            <p className="text-sm text-gray-500 mb-6">
              Tell Chan what you&apos;re working on. He&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
