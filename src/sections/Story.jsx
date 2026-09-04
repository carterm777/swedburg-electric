import { Reveal, useScrub } from '../lib/motion.js'
import './story.css'

function ScrubP({ children }) {
  const ref = useScrub({ disableBelow: 900 })
  return <p className="story-p" data-scrub ref={ref}>{children}</p>
}

export default function Story() {
  return (
    <section className="section section--leaf section--airy story" id="story" aria-labelledby="story-title">
      <div className="shell story-shell">
        <div className="story-head">
          <Reveal as="p" technique="rise" className="caps caps--brass story-eyebrow">
            Our Story
          </Reveal>
          <Reveal as="h2" technique="clip" delay={110} className="story-title" id="story-title">
            Planned Before The Wall Opens
          </Reveal>
        </div>

        <div className="story-body">
          <Reveal technique="settle" className="story-figure" as="figure">
            <img
              src="/images/basement-quote.webp"
              alt="An electrician kneeling in an empty basement writing on a clipboard beside an open laptop."
              width="2000"
              height="1125"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="story-cap">
              Measuring what is already there, before anything gets opened up.
            </figcaption>
          </Reveal>

          <p className="story-p story-p--lead">
            Renovation electrical work is a different discipline
            than wiring a new build. There&rsquo;s an existing structure to work around, other
            trades to coordinate with, and often a family or a business still operating in the
            space while the work happens. Since 2017, that&rsquo;s been a real part of what we do
            out of our Cochrane shop, alongside standard residential and commercial electrical.
          </p>

          <Reveal technique="rise" as="blockquote" className="story-quote">
            <p>Before opening a wall, we map out what&rsquo;s already there instead of guessing.</p>
          </Reveal>

          <ScrubP>
            It changes how a job gets planned. Before opening a wall, we map out what&rsquo;s
            already there instead of guessing. On a commercial tenant space, that means working
            the schedule around a business that can&rsquo;t afford to close for a week. On a home
            renovation, it means leaving a work site clean enough that a family can still live
            around it.
          </ScrubP>

          <ScrubP>
            That approach carries across every job now, whether it started as a renovation or
            not — plan carefully, coordinate with everyone else on-site, and finish work that
            looks intentional, not patched.
          </ScrubP>
        </div>
      </div>
    </section>
  )
}
