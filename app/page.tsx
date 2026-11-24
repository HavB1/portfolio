import Image from "next/image";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/react/progress";
import { CommandPalette } from "@/components/site/command-palette";
import { ContactDialog } from "@/components/site/contact-dialog";
import { email, links, nowBuilding, projects } from "@/components/site/content";
import { GitHubStat } from "@/components/site/github-stat";
import { MontrealClock } from "@/components/site/montreal-clock";
import "@/components/site/site.css";

export default function Home() {
  return (
    <div className="dl">
      <div className="dl-wrap">
        <header className="dl-nav">
          <a href="/" className="dl-logo">
            <span className="dl-mark" aria-hidden="true">[d]</span>ditolab
          </a>
          <div className="dl-nav-right">
            <CommandPalette />
            <ContactDialog
              trigger="Book a call"
              triggerClassName="dl-btn dl-btn-primary"
              title="Book a call"
              description="Share a line about the project and I'll send times that work."
            />
          </div>
        </header>

        <main>
          <section className="dl-bento" aria-label="Overview">
            <div className="dl-tile dl-intro">
              <p className="dl-label">Dito · fullstack engineer</p>
              <div>
                <h1>Web apps, SaaS and AI tools. Shipped fast, built to last.</h1>
                <p className="dl-lede">I take products from idea to production.</p>
                <div className="dl-actions">
                  <a href="#work" className="dl-btn dl-btn-primary">See the work</a>
                  <a href={`mailto:${email}`} className="dl-btn">{email}</a>
                </div>
              </div>
            </div>

            <div className="dl-tile dl-stat">
              <GitHubStat />
            </div>

            <div className="dl-tile dl-clock">
              <p className="dl-label">Montréal</p>
              <div>
                <MontrealClock />
                <p className="dl-live">Open to work</p>
              </div>
            </div>

            <div className="dl-tile dl-now">
              <p className="dl-label">Now building</p>
              <p className="dl-what">{nowBuilding.title}</p>
              <Progress value={nowBuilding.progress} className="dl-progress">
                <div className="dl-progress-meta">
                  <ProgressLabel>{nowBuilding.label}</ProgressLabel>
                  <ProgressValue />
                </div>
                <ProgressTrack>
                  <ProgressIndicator />
                </ProgressTrack>
              </Progress>
            </div>
          </section>

          <section id="work" aria-labelledby="work-h">
            <h2 id="work-h" className="dl-h2">Selected work</h2>
            <ul className="dl-grid">
              {projects.map((p) => {
                const body = (
                  <>
                    <div className="dl-shot">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="(max-width: 860px) 100vw, 50vw"
                      />
                    </div>
                    <div className="dl-card-body">
                      <p className="dl-card-meta">
                        {p.client ? `Client · ${p.client}` : "Product"}
                        {!p.url && " · Private"}
                      </p>
                      <h3>{p.title}</h3>
                      <p>{p.blurb}</p>
                    </div>
                  </>
                );
                return (
                  <li key={p.id}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noreferrer" className="dl-card">
                        {body}
                      </a>
                    ) : (
                      <div className="dl-card">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          <section id="contact" className="dl-contact" aria-labelledby="contact-h">
            <div className="dl-tile dl-contact-main">
              <p className="dl-label">Contact</p>
              <h2 id="contact-h">Got something to build? Let&apos;s scope it this week.</h2>
              <div className="dl-actions">
                <ContactDialog
                  trigger="Send a message"
                  triggerClassName="dl-btn dl-btn-primary"
                  title="Send a message"
                  description="I reply within one working day."
                />
              </div>
            </div>
            <ul className="dl-tile dl-links">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>
                    <span>{l.label}</span>
                    <span>{l.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="dl-foot">
          <span>© {new Date().getFullYear()} ditolab</span>
        </footer>
      </div>
    </div>
  );
}
