import { motion } from 'framer-motion'
import { hero, stats, about, expertise, experience, research, patents, awards, contact, links } from './content.js'

const NAV = [
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['Experience', 'experience'],
  ['Research', 'research'],
  ['Innovation', 'patents'],
  ['Recognition', 'awards'],
  ['Connect', 'contact'],
]

export default function App() {
  return (
    <main style={G.page}>
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .float { animation: float 5s ease-in-out infinite; }
        .hover-card { transition: all .35s ease; }
        .hover-card:hover { transform: translateY(-8px); border-color: rgba(34,211,238,.42) !important; }
        html { scroll-behavior: smooth; }
        a:focus-visible { outline: 2px solid #67e8f9; outline-offset: 3px; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .big-card { grid-template-columns: 1fr !important; padding: 24px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .float { animation: none; }
          .hover-card:hover { transform: none; }
          html { scroll-behavior: auto; }
        }
      `}</style>

      <nav style={G.nav}>
        <div style={G.logo} className="float">VV</div>
        <div style={G.links} className="nav-links">
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} style={G.link}>{label}</a>
          ))}
        </div>
      </nav>

      <motion.section style={G.hero} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <div style={G.badge}>{hero.badge}</div>
        <div style={G.heroGrid} className="hero-grid">
          <div>
            <h1 style={G.h1}>{hero.firstName} <br />{hero.lastName}</h1>
            <p style={G.role}>{hero.role}</p>
            <p style={G.subtitle}>{hero.subtitle}</p>
            <div style={G.actions}>
              <a href="#research" style={G.primaryBtn}>Explore Research &amp; IP →</a>
              <a href="#expertise" style={G.secondaryBtn}>Explore Expertise →</a>
              <a href="#contact" style={G.ghostBtn}>Connect →</a>
            </div>
          </div>
          <div style={G.profileWrapper}>
            <div style={G.profileGlow} />
            <img src="/profile.jpg" alt="Venkatraman Viswanathan" style={G.profileImage} />
          </div>
        </div>

        <div style={G.stats}>
          {stats.map(([icon, num, label]) => (
            <div key={label} style={G.statCard} className="hover-card">
              <div style={G.statIcon}>{icon}</div>
              <div>
                <h3 style={G.statNum}>{num}</h3>
                <p style={G.statLabel}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <section id="about" style={G.section}>
        <p style={G.kicker}>Executive Profile</p>
        <h2 style={G.h2}>{about.heading}</h2>
        <p style={G.text}>{about.text}</p>
      </section>

      <section id="expertise" style={G.section}>
        <p style={G.kicker}>Core Expertise</p>
        <h2 style={G.h2}>Building Intelligent Enterprise Systems</h2>
        <div style={G.grid}>
          {expertise.map((e) => (
            <div key={e.title} style={G.card} className="hover-card">
              <div style={G.iconWrap}>{e.icon}</div>
              <h3 style={G.cardTitle}>{e.title}</h3>
              <p style={G.cardText}>{e.desc}</p>
              <div style={G.tagWrap}>
                {e.tags.map((t) => <span key={t} style={G.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" style={G.section}>
        <p style={G.kicker}>Professional Experience</p>
        <h2 style={G.h2}>Leadership Across Enterprise Programs and AI Innovation</h2>
        <div style={G.gridTwo}>
          {experience.map(([icon, org, title, dates, desc]) => (
            <div key={org} style={G.bigCard} className="hover-card big-card">
              <div style={G.expIcon}>{icon}</div>
              <div>
                <h3 style={G.cardTitle}>{org}</h3>
                <p style={G.meta}>{title}</p>
                <p style={G.dateText}>{dates}</p>
                <p style={G.cardText}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="research" style={G.section}>
        <p style={G.kicker}>Research &amp; Publications</p>
        <h2 style={G.h2}>Research Driving Real-World Impact</h2>
        <div style={G.list}>
          {research.map((r) => <div key={r} style={G.listItem} className="hover-card">{r}</div>)}
        </div>
      </section>

      <section id="patents" style={G.section}>
        <p style={G.kicker}>Patents &amp; Intellectual Property</p>
        <h2 style={G.h2}>Innovation Backed by Intellectual Property</h2>
        <div style={G.grid}>
          {patents.map(([name, kind, desc]) => (
            <div key={name} style={{ ...G.card, minHeight: 220 }} className="hover-card">
              <h3 style={G.cardTitle}>{name}</h3>
              <p style={G.meta}>{kind}</p>
              <p style={G.cardText}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" style={G.section}>
        <p style={G.kicker}>Awards &amp; Recognition</p>
        <h2 style={G.h2}>International Recognition for Innovation &amp; Research</h2>
        <div style={G.grid}>
          {awards.map((a) => (
            <div key={a} style={{ ...G.card, minHeight: 140, justifyContent: 'center' }} className="hover-card">
              <h3 style={{ ...G.cardTitle, marginBottom: 0 }}>{a}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={G.contact}>
        <p style={G.kicker}>Connect</p>
        <h2 style={G.h2}>{contact.heading}</h2>
        <p style={G.text}>{contact.text}</p>
        <div style={{ ...G.actions, marginTop: 28 }}>
          <a href={links[0][1]} target="_blank" rel="noreferrer" style={G.primaryBtn}>Connect on LinkedIn →</a>
          <a href={links[2][1]} target="_blank" rel="noreferrer" style={G.secondaryBtn}>View ORCID →</a>
        </div>
      </section>

      <footer style={G.footer}>
        <div style={G.footerContent}>
          <h3 style={G.footerTitle}>Research • Innovation • Enterprise AI</h3>
          <p style={G.footerText}>Advancing enterprise AI through research, innovation, and intelligent digital transformation.</p>
          <div style={G.socials}>
            {links.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={G.socialBtn}>{label}</a>
            ))}
          </div>
          <div style={G.footerBottom}>© 2026 Venkatraman Viswanathan • All Rights Reserved</div>
        </div>
      </footer>
    </main>
  )
}

const grad = 'linear-gradient(135deg,#22d3ee,#a855f7)'
const cardBg = 'linear-gradient(180deg,rgba(15,23,42,.96),rgba(15,23,42,.72))'

const G = {
  page: { background: 'radial-gradient(circle at top left,#164e63 0%,transparent 30%), radial-gradient(circle at top right,#4c1d95 0%,transparent 28%), #020617', minHeight: '100vh', color: 'white', fontFamily: 'Inter, Arial, sans-serif', overflowX: 'hidden' },
  nav: { position: 'sticky', top: 0, zIndex: 50, width: '100%', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2,6,23,.76)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,.08)', boxSizing: 'border-box' },
  logo: { width: 62, height: 62, borderRadius: 18, background: grad, color: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 24 },
  links: { display: 'flex', gap: 30, alignItems: 'center' },
  link: { color: '#e2e8f0', textDecoration: 'none', fontWeight: 800, fontSize: 17 },
  hero: { width: '100%', maxWidth: 1280, margin: '0 auto', padding: '76px 20px 72px', boxSizing: 'border-box' },
  badge: { display: 'inline-block', padding: '12px 22px', borderRadius: 999, border: '1px solid rgba(34,211,238,.45)', color: '#67e8f9', background: 'rgba(8,47,73,.44)', fontSize: 14, letterSpacing: 3, fontWeight: 900 },
  heroGrid: { display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(280px, .9fr)', gap: 36, alignItems: 'center', marginTop: 30 },
  h1: { fontSize: 'clamp(44px,6vw,86px)', lineHeight: 0.95, margin: '10px 0 22px', letterSpacing: '-3px' },
  role: { color: '#67e8f9', fontSize: 'clamp(19px,2.2vw,26px)', fontWeight: 900, lineHeight: 1.4 },
  subtitle: { maxWidth: 760, color: '#cbd5e1', fontSize: 'clamp(17px,1.8vw,22px)', lineHeight: 1.7 },
  actions: { display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 36 },
  primaryBtn: { display: 'inline-block', padding: '18px 28px', borderRadius: 16, background: grad, color: '#020617', textDecoration: 'none', fontWeight: 900, border: 'none', cursor: 'pointer', fontSize: 17 },
  secondaryBtn: { display: 'inline-block', padding: '18px 28px', borderRadius: 16, border: '1px solid rgba(255,255,255,.22)', background: 'rgba(255,255,255,.06)', color: 'white', textDecoration: 'none', fontWeight: 900, fontSize: 17 },
  ghostBtn: { display: 'inline-block', padding: '18px 28px', borderRadius: 16, color: '#67e8f9', textDecoration: 'none', fontWeight: 900, fontSize: 17 },
  profileWrapper: { position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  profileGlow: { position: 'absolute', width: 'min(430px, 100%)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,211,238,.25),rgba(168,85,247,.13),transparent 70%)', filter: 'blur(18px)' },
  profileImage: { position: 'relative', width: '100%', maxWidth: 360, height: 'auto', aspectRatio: '4 / 5', objectFit: 'cover', objectPosition: 'center top', borderRadius: 34, border: '2px solid rgba(255,255,255,.14)', boxShadow: '0 30px 90px rgba(0,0,0,.5)' },
  stats: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(210px,100%),1fr))', gap: 22, marginTop: 58 },
  statCard: { display: 'flex', alignItems: 'center', gap: 18, padding: 24, borderRadius: 22, background: 'rgba(15,23,42,.8)', border: '1px solid rgba(255,255,255,.1)' },
  statIcon: { fontSize: 32 },
  statNum: { fontSize: 'clamp(22px,2vw,28px)', lineHeight: 1.2, color: 'white', margin: 0 },
  statLabel: { color: '#cbd5e1', marginTop: 6, marginBottom: 0 },
  section: { width: '100%', maxWidth: 1200, margin: '0 auto', padding: '70px 20px', boxSizing: 'border-box' },
  kicker: { color: '#67e8f9', textTransform: 'uppercase', letterSpacing: 2.4, fontSize: 13, fontWeight: 900 },
  h2: { fontSize: 'clamp(32px,5vw,58px)', lineHeight: 1.08, margin: '16px 0 26px', letterSpacing: '-2px' },
  text: { maxWidth: 860, color: '#cbd5e1', fontSize: 'clamp(17px,1.6vw,20px)', lineHeight: 1.75 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: 22, marginTop: 32 },
  gridTwo: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(460px,100%),1fr))', gap: 28, marginTop: 36 },
  card: { padding: 26, borderRadius: 24, background: cardBg, border: '1px solid rgba(255,255,255,.08)', minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' },
  bigCard: { display: 'grid', gridTemplateColumns: '90px 1fr', gap: 24, padding: 34, borderRadius: 28, background: cardBg, border: '1px solid rgba(34,211,238,.18)', boxSizing: 'border-box' },
  expIcon: { width: 74, height: 74, borderRadius: '50%', background: 'rgba(34,211,238,.10)', border: '1px solid rgba(34,211,238,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34 },
  iconWrap: { width: 64, height: 64, borderRadius: 18, background: 'linear-gradient(135deg,#22d3ee,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 18 },
  cardTitle: { fontSize: 20, lineHeight: 1.35, marginTop: 0, marginBottom: 12, fontWeight: 700 },
  meta: { color: '#67e8f9', fontWeight: 900, lineHeight: 1.5 },
  dateText: { color: '#cbd5e1', fontSize: 14, fontWeight: 700, marginBottom: 18 },
  cardText: { color: '#94a3b8', lineHeight: 1.65, fontSize: 15, marginBottom: 18 },
  tagWrap: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' },
  tag: { padding: '6px 12px', borderRadius: 999, background: 'rgba(34,211,238,.10)', border: '1px solid rgba(34,211,238,.16)', color: '#67e8f9', fontSize: 12, fontWeight: 700 },
  list: { display: 'grid', gap: 16, marginTop: 34 },
  listItem: { padding: 22, borderRadius: 18, background: 'rgba(15,23,42,.82)', border: '1px solid rgba(255,255,255,.08)', color: '#cbd5e1', fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.7 },
  contact: { maxWidth: 1180, margin: '70px auto', padding: '64px 28px', borderRadius: 34, background: 'linear-gradient(135deg,rgba(34,211,238,.14),rgba(168,85,247,.14))', border: '1px solid rgba(255,255,255,.12)', boxSizing: 'border-box', width: 'calc(100% - 32px)' },
  footer: { marginTop: 100, borderTop: '1px solid rgba(255,255,255,.08)', background: 'rgba(2,6,23,.95)' },
  footerContent: { maxWidth: 1200, margin: '0 auto', padding: '70px 20px', textAlign: 'center' },
  footerTitle: { fontSize: 'clamp(28px,4vw,42px)', marginBottom: 18, background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  footerText: { color: '#94a3b8', fontSize: 'clamp(17px,1.6vw,20px)', lineHeight: 1.8, maxWidth: 760, margin: '0 auto' },
  socials: { display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap', marginTop: 36 },
  socialBtn: { padding: '14px 24px', borderRadius: 16, background: 'rgba(15,23,42,.85)', border: '1px solid rgba(255,255,255,.10)', color: '#e2e8f0', textDecoration: 'none', fontWeight: 700, fontSize: 15 },
  footerBottom: { marginTop: 40, color: '#64748b', fontSize: 15 },
}
