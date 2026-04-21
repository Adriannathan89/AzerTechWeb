import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

type ThemeMode = 'light' | 'dark'

const COMPANY = {
  name: 'Azer Technologies Inc.',
  tagline: 'Empowering Modern Life Through Technology',
  linkedin: 'https://www.linkedin.com/company/azer-technologies-inc/?viewAsMember=true',
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [showLogo, setShowLogo] = useState(true)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('azer-theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('azer-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <main className="profile-page">
      <header className="topbar">
        <div className="brand-inline">
          {showLogo ? (
            <img
              src="/AzerLogo.jpeg"
              alt="Azer Technologies logo"
              className="brand-logo"
              onError={() => setShowLogo(false)}
            />
          ) : (
            <div className="logo-fallback">A</div>
          )}
          <div>
            <p className="eyebrow">Company Profile</p>
            <h1>{COMPANY.name}</h1>
          </div>
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
        >
          <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          <strong>{theme === 'dark' ? 'Sun' : 'Moon'}</strong>
        </button>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <p className="pill">Future-ready solutions</p>
          <h2>{COMPANY.tagline}</h2>
          <p className="lead">
            Azer Technologies builds practical digital products and scalable technology services that help
            organizations work smarter, move faster, and deliver better everyday experiences.
          </p>
          <div className="hero-actions">
            <a href={COMPANY.linkedin} target="_blank" rel="noreferrer">
              Visit LinkedIn
            </a>
            <a href="#capabilities" className="ghost">
              Explore Capabilities
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img src={heroImg} alt="" className="layered-card" />
        </div>
      </section>

      <section className="banner-strip" aria-label="Company banner">
        {showBanner ? (
          <img
            src="/AzerBanner.jpeg"
            alt="Azer Technologies banner"
            onError={() => setShowBanner(false)}
          />
        ) : (
          <div className="banner-fallback">
            <p>Brand banner ready</p>
            <span>Add your file as public/azer-banner.jpg to display your uploaded banner.</span>
          </div>
        )}
      </section>

      <section className="stats-grid" aria-label="Company highlights">
        <article>
          <h3>Mission Driven</h3>
          <p>Technology with measurable impact for people and businesses.</p>
        </article>
        <article>
          <h3>Delivery Focus</h3>
          <p>From strategy to launch with quality, speed, and sustainability.</p>
        </article>
        <article>
          <h3>Innovation Mindset</h3>
          <p>Practical adoption of modern tools, automation, and AI-ready systems.</p>
        </article>
      </section>

      <section className="section" id="about">
        <p className="eyebrow">About</p>
        <h2>Who We Are</h2>
        <p>
          Azer Technologies is a technology-driven company focused on turning ideas into dependable digital
          experiences. We partner with organizations that want to modernize operations, improve customer
          engagement, and build resilient platforms that can scale with confidence.
        </p>
      </section>

      <section className="section" id="capabilities">
        <p className="eyebrow">Capabilities</p>
        <h2>What We Build</h2>
        <div className="capability-grid">
          <article>
            <h3>Software Development</h3>
            <p>Web, mobile, and platform engineering built for reliability and growth.</p>
          </article>
          <article>
            <h3>Cloud & Infrastructure</h3>
            <p>Secure cloud architecture, deployment workflows, and performance optimization.</p>
          </article>
          <article>
            <h3>Digital Transformation</h3>
            <p>Process modernization and integrated systems that remove business friction.</p>
          </article>
          <article>
            <h3>Product Strategy</h3>
            <p>Clear roadmap planning that aligns technology investment with business outcomes.</p>
          </article>
        </div>
      </section>

      <section className="section value-track" id="values">
        <p className="eyebrow">Core Values</p>
        <h2>How We Work</h2>
        <ol>
          <li>
            <strong>Clarity:</strong> We communicate with transparency from discovery to delivery.
          </li>
          <li>
            <strong>Craft:</strong> We build robust systems with clean architecture and maintainable code.
          </li>
          <li>
            <strong>Commitment:</strong> We stay outcome-focused and accountable to long-term results.
          </li>
        </ol>
      </section>

      <section className="contact-panel">
        <h2>Let&apos;s Build What&apos;s Next</h2>
        <p>
          Discover updates, collaborations, and company news on our LinkedIn page.
        </p>
        <a href={COMPANY.linkedin} target="_blank" rel="noreferrer">
          Connect with Azer Technologies
        </a>
      </section>
    </main>
  )
}

export default App
