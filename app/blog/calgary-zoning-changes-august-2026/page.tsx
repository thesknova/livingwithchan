import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogCTA from "@/components/BlogCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/calgary-zoning-changes-august-2026" },
  title: "Calgary Zoning Changes August 2026: Blanket Rezoning Repealed | Chan Kawaguchi",
  description:
    "On August 4, 2026 Calgary's blanket rezoning was repealed and about 99% of affected lots went back to R-C1 or R-C2. Here is what reverted, what kept R-CG, what changed for suites, and what it means for buyers, sellers, and investors.",
  openGraph: {
    // Next.js replaces the parent openGraph object rather than merging it, so
    // type, siteName and the image have to be restated here or this page ships
    // with no share image at all.
    type: "article",
    siteName: "Living With Chan",
    title: "Calgary Zoning Changes August 2026: The Blanket Rezoning Repeal Explained",
    description:
      "Calgary undid its citywide R-CG rezoning on August 4, 2026. Rowhouses and townhouses are now approved lot by lot, through Council. Chan Kawaguchi explains what actually changed.",
    url: "https://www.livingwithchan.com/blog/calgary-zoning-changes-august-2026",
    publishedTime: "2026-09-10T00:00:00.000Z",
    modifiedTime: "2026-09-10T00:00:00.000Z",
    authors: ["Chan Kawaguchi"],
    images: [
      {
        url: "/blog/calgary-zoning-august-2026-hero.png",
        width: 1600,
        height: 840,
        alt: "Calgary zoning after the August 2026 repeal: four rowhouses allowed by default under R-CG, versus a single detached home under R-C1 or R-C2",
      },
    ],
  },
  twitter: {
    // Same story: without this the card inherits the site-wide homepage title.
    card: "summary_large_image",
    title: "Calgary Zoning Changes August 2026: The Blanket Rezoning Repeal Explained",
    description:
      "The citywide R-CG rezoning was undone on August 4, 2026. Rowhouses are approved lot by lot again, through Council.",
    images: ["/blog/calgary-zoning-august-2026-hero.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Calgary's Blanket Rezoning Is Gone: What the August 2026 Repeal Actually Changed",
  description:
    "Calgary repealed its 2024 citywide R-CG rezoning effective August 4, 2026. About 99% of affected parcels reverted to their previous districts, and multi-unit infill now requires a land use redesignation approved by Council at a public hearing.",
  author: { "@type": "Person", name: "Chan Kawaguchi", url: "https://www.livingwithchan.com/about" },
  publisher: { "@type": "Organization", name: "Living With Chan", url: "https://www.livingwithchan.com" },
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  url: "https://www.livingwithchan.com/blog/calgary-zoning-changes-august-2026",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.livingwithchan.com/blog/calgary-zoning-changes-august-2026",
  },
  image: ["https://www.livingwithchan.com/blog/calgary-zoning-august-2026-hero.png"],
  articleSection: "Market Insights",
  inLanguage: "en-CA",
  isAccessibleForFree: true,
  keywords: [
    "Calgary blanket rezoning repeal",
    "R-CG",
    "R-C1",
    "R-C2",
    "land use redesignation",
    "Calgary infill",
    "secondary suite",
    "backyard suite",
    "Bylaw 26P2026",
  ],
  about: { "@type": "Place", name: "Calgary, Alberta" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.livingwithchan.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.livingwithchan.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Calgary Zoning Changes August 2026",
      item: "https://www.livingwithchan.com/blog/calgary-zoning-changes-august-2026",
    },
  ],
};

const inlineLink = "font-semibold text-accent hover:underline";

export default function CalgaryZoningChangesPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-neutral-light min-h-screen">
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
                Market Insights
              </span>
              <span className="text-stone-500 text-xs">·</span>
              <span className="text-xs text-stone-400">9 min read</span>
              <span className="text-stone-500 text-xs">·</span>
              <span className="text-xs text-stone-400">September 10, 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Calgary&apos;s Blanket Rezoning Is Gone: What the August 2026 Repeal Actually Changed
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed">
              On August 4, 2026, the citywide rezoning that put R-CG on most of Calgary&apos;s low-density lots was
              undone. Roughly 99 per cent of those properties went back to the zoning they had before 2024, and
              rowhouses are once again approved one lot at a time.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 pt-10">
          <div className="overflow-hidden rounded-2xl border border-neutral-mid bg-white shadow-sm">
            <Image
              src="/blog/calgary-zoning-august-2026-hero.png"
              alt="Diagram of Calgary's August 2026 zoning repeal: on the left, four rowhouse units allowed by default under R-CG until August 4, 2026; on the right, a single detached home under R-C1 or R-C2, with the rowhouse shown as a dashed outline that now requires an application to Council"
              width={1600}
              height={840}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="bg-primary text-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
              The short version
            </h2>
            <ul className="space-y-4 text-stone-300 text-base leading-relaxed">
              <li>
                <span className="text-white font-semibold">April 8, 2026:</span> Council voted 12 to 3 to repeal
                blanket rezoning.
              </li>
              <li>
                <span className="text-white font-semibold">July 21, 2026:</span> Council passed Bylaw 26P2026, making
                secondary suites a permitted use in every low-density district. Backyard suites did not get the same
                treatment.
              </li>
              <li>
                <span className="text-white font-semibold">August 4, 2026:</span> The repeal took effect. About 99 per
                cent of the parcels rezoned in 2024 reverted, most of them to R-C1 or R-C2.
              </li>
              <li>
                <span className="text-white font-semibold">Today:</span> A rowhouse or townhouse on a reverted lot
                needs a land use redesignation, which means an application, a public hearing, and a Council vote.
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-14 space-y-12 text-gray-700 leading-relaxed text-sm">
          <section className="space-y-4">
            <p>
              If you have been following Calgary zoning news since 2024, you have watched the city swing from one
              extreme to the other. First came blanket rezoning, which changed the default rules on hundreds of
              thousands of lots overnight. Then came the repeal, which put most of those lots back where they started.
            </p>
            <p>
              The important thing to understand is that this second change was not simply a return to a more
              restrictive set of rules. It was a change in <em>how decisions get made</em>. Under blanket rezoning,
              permission came with the land. Now permission has to be asked for, lot by lot, in front of Council. That
              distinction drives almost everything else in this article.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">First, what blanket rezoning actually was</h2>
            <p>
              In 2024, Calgary approved what became known as blanket rezoning or citywide rezoning. Effective August 6,
              2024, it took most low-density residential parcels, the R-C1 and R-C2 lots that make up the bulk of the
              city&apos;s established neighbourhoods, and redesignated them to R-CG (Residential Grade-Oriented
              Infill).
            </p>
            <p>
              R-CG is the district that allows grade-oriented multi-unit housing: rowhouses and townhouses, typically
              three or four units on a standard lot, often with secondary suites on top of that. Before 2024, getting
              R-CG on a specific property meant applying for a redesignation and winning a Council vote. Blanket
              rezoning skipped that step for everyone at once.
            </p>
            <p>
              That was the entire point. The city was trying to remove the single biggest bottleneck in the infill
              pipeline, which was the time, cost, and political uncertainty of rezoning each lot individually. And it
              worked, in the sense that infill applications climbed sharply. It also generated years of public
              opposition over neighbourhood character, infrastructure capacity, parking, and the fact that the change
              was applied to everyone rather than chosen block by block.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">What Council actually decided</h2>
            <p>
              On April 8, 2026, Council voted 12 to 3 to repeal citywide rezoning. The vote came after another lengthy
              public hearing, and it followed a municipal election in which blanket rezoning had been one of the
              defining issues.
            </p>
            <p>
              The repeal did not take effect immediately. Council set the implementation date at August 4, 2026, which
              gave homeowners and builders roughly four months of warning and created a series of application deadlines
              in May, June, and July for anyone trying to get in under the old rules. Those deadlines are now closed.
            </p>
            <p>
              So when people talk about the August 2026 zoning change, they are talking about the date the repeal
              landed, not the date it was decided. Both dates matter, because the cutoff for protection was tied to
              when an application was submitted or approved.
            </p>
          </section>

          <figure className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-neutral-mid bg-white shadow-sm">
              <Image
                src="/blog/calgary-zoning-2026-timeline.png"
                alt="Timeline of Calgary zoning changes: August 6 2024 blanket rezoning takes effect, April 8 2026 Council votes 12 to 3 to repeal, July 21 2026 Bylaw 26P2026 makes secondary suites permitted citywide, August 4 2026 the repeal takes effect and about 99 per cent of lots revert"
                width={1500}
                height={350}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-xs text-gray-500 leading-relaxed">
              The 2024 rezoning stood for less than two years. Council voted in April but set the change for August, which is why the submission deadlines in between mattered so much.
            </figcaption>
          </figure>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">What your lot is zoned today</h2>
            <p>
              As of August 4, 2026, about 99 per cent of the properties caught by the 2024 rezoning went back to the
              district they held before. In practice that means most established Calgary homes are once again:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>R-C1</strong>, which is built around a single detached home on the parcel
              </li>
              <li>
                <strong>R-C2</strong>, which also accommodates a semi-detached or duplex form
              </li>
            </ul>
            <p>
              If you bought a house in 2025 partly because it was zoned R-CG, this is the part worth checking
              carefully. Unless your property fell into one of the exemptions below, that R-CG designation is gone. The
              only reliable way to know is to look up your specific parcel rather than assume, because the exemptions
              were applied property by property.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">The lots that kept R-CG</h2>
            <p>
              Not everything reverted. A property was exempt from the rollback if it fell into one of these groups:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                it had an approved development permit or subdivision under R-CG, R-G, or H-GO before August 4, 2026
              </li>
              <li>it had an application submitted before the repeal bylaw&apos;s first reading</li>
              <li>
                it was redesignated through an owner-initiated application after August 6, 2024, meaning the owner
                asked for the zoning rather than receiving it automatically
              </li>
            </ul>
            <p>
              This created something genuinely new in Calgary: a scattered set of individual lots that still carry R-CG
              while their neighbours do not. For a seller, that is now a real and specific selling feature. For a buyer
              or investor, it is a reason to verify the zoning on title rather than trusting a listing description or a
              memory of what the map looked like last year.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">R-CG itself also got stricter</h2>
            <p>
              Alongside the repeal, Council tightened the R-CG rules for the properties that still have the
              designation. The changes were:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>maximum building height reduced from 11 metres to 10 metres</li>
              <li>maximum lot coverage reduced from 60 per cent to 55 per cent</li>
              <li>zero lot line development eliminated</li>
              <li>rowhouses restored as a permitted use within R-CG</li>
            </ul>
            <p>
              That last point is easy to misread, so it is worth being precise. Within R-CG, a rowhouse is a permitted
              use, which is the faster and more certain approval path. The catch is that far fewer properties are R-CG
              now. The rules inside the box got slightly tighter, and the box got dramatically smaller.
            </p>
          </section>

          <figure className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-neutral-mid bg-white shadow-sm">
              <Image
                src="/blog/calgary-zoning-2026-rcg-rules.png"
                alt="What changed inside R-CG: maximum height reduced from 11 metres to 10 metres, lot coverage reduced from 60 per cent to 55 per cent, and zero lot line development removed. Rowhouses remain a permitted use in R-CG"
                width={1500}
                height={355}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-xs text-gray-500 leading-relaxed">
              The R-CG rules that survived are slightly tighter than they were. The bigger change is how few lots the district still covers.
            </figcaption>
          </figure>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">The new path: case by case, through Council</h2>
            <p>
              This is the heart of the change. If you own a lot that reverted to R-C1 or R-C2 and you want to build a
              rowhouse, a townhouse, or another multi-unit form, you now need an approved land use redesignation. That
              process looks roughly like this:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Check the policy first.</strong> The proposal has to line up with the Local Area Plan or Area
                Redevelopment Plan covering that community. Where it does not, a policy amendment has to run alongside
                the rezoning application.
              </li>
              <li>
                <strong>Apply to the City</strong> for a land use amendment on that specific parcel.
              </li>
              <li>
                <strong>Go to a public hearing.</strong> Every land use amendment gets a formal public hearing at
                Council, where neighbours and community associations can register and speak for or against.
              </li>
              <li>
                <strong>Council votes.</strong> The decision is political as well as technical, and it is final for
                that application.
              </li>
            </ul>
            <p>
              Add up the policy review, the application, the circulation, the hearing, and the vote, and you are
              looking at months rather than weeks, real professional fees before you know the answer, and a genuine
              possibility of a no. That is the cost the 2024 rezoning was designed to remove, and it is back.
            </p>
            <p>
              None of that makes infill impossible. Rezonings were approved routinely before 2024 and they still are.
              What changed is that the outcome is no longer certain at the moment you buy, which is exactly the kind of
              risk that has to be priced into what a development lot is worth.
            </p>
          </section>

          <figure className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-neutral-mid bg-white shadow-sm">
              <Image
                src="/blog/calgary-zoning-2026-approval-paths.png"
                alt="Two approval paths for a rowhouse in Calgary. A lot that kept R-CG needs only a development permit, then a building permit, then construction. A lot that reverted to R-C1 or R-C2 needs a Local Area Plan check, a rezoning application, a public hearing at Council and a Council vote before reaching the same development and building permits"
                width={1500}
                height={530}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-xs text-gray-500 leading-relaxed">
              Same house, two very different processes. Everything in bronze is a step the repeal put back in front of you, and each one costs time and money before you know the answer.
            </figcaption>
          </figure>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">The exception that moved the other way: suites</h2>
            <p>
              Here is the part that gets lost in the headlines. While Council was rolling back multi-unit zoning, it
              moved in the opposite direction on secondary suites.
            </p>
            <p>
              On July 21, 2026, Council passed Bylaw 26P2026, which made secondary suites a permitted use in every
              low-density residential district. A qualifying basement suite no longer needs a development permit at
              all. It goes straight to building permit review, provided it meets the requirements in the Land Use
              Bylaw. For a homeowner who wants a mortgage helper or a legal rental, that is a genuine improvement over
              the old process, and it survived the repeal untouched. Zoning is only half the job, though. A suite
              still has to meet the building and safety requirements that separate{" "}
              <Link href="/blog/legal-vs-illegal-basement-suites-calgary" className={inlineLink}>
                a legal suite from an illegal one
              </Link>
              , and none of that changed with the repeal.
            </p>
            <p>
              Backyard suites, sometimes called garden or laneway suites, did not get the same treatment. Council
              declined to extend permitted status to them. They remain permitted in R-G and discretionary everywhere
              else, which means a development permit, a City review, and a 21 day window in which neighbours can
              appeal. Several other backyard suite rules also tightened:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>a parking stall requirement is back</li>
              <li>
                most districts no longer allow both a secondary suite and a backyard suite on the same parcel, so it is
                one or the other
              </li>
              <li>backyard suites are not allowed on semi-detached homes</li>
            </ul>
            <p>
              If your plan was a basement suite, the path today is easier than it has been in years. If your plan was a
              backyard suite, or both suites on one lot, the math has changed and it is worth redoing before you
              commit.
            </p>
          </section>

          <figure className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-neutral-mid bg-white shadow-sm">
              <Image
                src="/blog/calgary-zoning-2026-suites.png"
                alt="Comparison of Calgary suite rules after the repeal. Secondary basement suites are a permitted use in every low-density district with no development permit required. Backyard suites are permitted only in R-G and discretionary elsewhere, need a development permit, carry a 21 day neighbour appeal window, require a parking stall, and are not allowed on semi-detached homes"
                width={1500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-xs text-gray-500 leading-relaxed">
              Secondary suites were the one part of this file that got easier. Backyard suites did not follow, and in most districts you now choose one or the other.
            </figcaption>
          </figure>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">What buyers should take from this</h2>
            <p>
              For most buyers purchasing a home to live in, the practical effect is reassurance about the street. The
              possibility that any given neighbouring lot could be redeveloped into a rowhouse without a hearing is
              gone. Redevelopment still happens, but it happens visibly, with notice and a chance to participate.
            </p>
            <p>
              For buyers who were counting on future flexibility, the calculation is different. Do not pay a premium
              for development potential that now depends on a Council vote that has not happened yet. If the upside
              matters to your offer, the zoning needs to be confirmed on that parcel, and the price should reflect the
              approval risk rather than the best case.
            </p>
            <p>
              One more thing worth watching: if the supply of new infill units slows down, that pressure does not
              disappear. It moves. Established neighbourhoods with the character buyers want may see more competition
              for the existing housing stock, not less. The monthly{" "}
              <Link href="/market-reports" className={inlineLink}>
                Calgary market reports
              </Link>{" "}
              are the place to watch whether that shows up in prices.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">What sellers should take from this</h2>
            <p>
              If your property is one of the exempt lots that kept R-CG, R-G, or H-GO, you are holding something that
              is now comparatively scarce, and it should be documented and marketed properly. That is a materially
              different listing from the one next door.
            </p>
            <p>
              If your property reverted, the honest approach is to stop marketing development potential that no longer
              exists on paper. Buyers and their agents can look this up, and a listing that oversells zoning tends to
              fall apart at exactly the wrong moment. The stronger story is usually the house itself: the location, the
              lot, the condition, and what a family can do with it now.
            </p>
            <p>
              Sellers who were relying on builder interest should also expect a thinner buyer pool for that segment
              than they would have seen in 2025, and should price against current comparable sales rather than what a
              neighbour achieved before the repeal.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">What investors and builders should take from this</h2>
            <p>
              This is where the repeal bites hardest. The infill model that worked from 2024 to 2026 relied on being
              able to buy a standard lot at close to owner-occupier pricing, knowing the zoning was already in place.
              That certainty is what made the numbers work, and it is gone on most lots.
            </p>
            <p>
              The market responded quickly. R-CG development permit applications peaked in February and March of 2026,
              as builders raced the deadlines, then fell to a small handful per month once the repeal was locked in.
              That is not a subtle shift in sentiment. It is a repricing of the whole strategy.
            </p>
            <p>
              What still works is more selective: buying lots that kept their designation, pursuing redesignations
              where the Local Area Plan genuinely supports added density, focusing on areas near transit and main
              streets where policy is on your side, and treating secondary suites as the low-friction way to add a unit
              without touching zoning at all. Deals now need a conditional period long enough to do real due diligence,
              and a plan for what happens if Council says no.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold text-primary">What to do before you act</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Confirm the current land use district on your specific parcel rather than relying on a 2025 listing.
              </li>
              <li>
                If you think you are exempt, find the document that proves it: the approved permit, the subdivision, or
                the owner-initiated redesignation.
              </li>
              <li>
                Check the Local Area Plan for your community before assuming a redesignation is realistic, because
                policy alignment is where most applications are won or lost.
              </li>
              <li>
                If a suite is the goal, work out whether a secondary suite gets you there before taking on a
                discretionary backyard suite.
              </li>
              <li>Read any purchase contract that was written around development potential with fresh eyes.</li>
            </ul>
            <p>
              The City maintains a plain-language summary of the rollback on its{" "}
              <a
                href="https://www.calgary.ca/planning/projects/rezoning.html"
                className={inlineLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repeal of Citywide Rezoning
              </a>{" "}
              page, and a separate guide to{" "}
              <a
                href="https://www.calgary.ca/development/home-building/new-secondary-suite.html"
                className={inlineLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                adding a secondary suite
              </a>
              . Rules in this area have changed more than once in three years, so confirm current requirements with the
              City before spending money on a design.
            </p>
          </section>

          <BlogCTA
            id="zoning-cta"
            eyebrow="Know where your property stands"
            heading="Not sure whether your lot reverted or kept its zoning?"
            body="Chan can help you confirm what your property is actually designated today, what that means for its value, and whether a redesignation is realistic before you spend anything on it."
            href="/contact"
            action="Ask Chan about your property"
          />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Bottom line</h2>
            <p>
              Calgary spent two years running an experiment in zoning by default, and then ended it. As of August 4,
              2026, permission is something you apply for again on most lots, in public, in front of Council.
            </p>
            <p>
              The practical consequence is that zoning has gone back to being property-specific. Two houses on the same
              block can now sit in genuinely different positions depending on what was applied for and when. That makes
              the old question, what is my home worth today, insufficient on its own. The better question is what this
              particular lot is actually allowed to become, and what it would take to change that.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
