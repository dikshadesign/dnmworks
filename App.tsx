import { useState, useEffect, Fragment } from 'react'

const U = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=85`

// ── Shared primitives ──────────────────────────────────────────────────────────

function Label({ n, title, light = false }: { n: string; title: string; light?: boolean }) {
  const c = light ? 'text-black/35' : 'text-white/35'
  return (
    <div className={`flex items-center gap-3 ${c} mb-10 md:mb-14`}>
      <span className="text-[10px] font-semibold tracking-[0.5em] uppercase">{n}</span>
      <span className="w-6 h-px bg-current" />
      <span className="text-[10px] font-semibold tracking-[0.35em] uppercase">{title}</span>
    </div>
  )
}

function Wm({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <div
      aria-hidden
      className="absolute pointer-events-none select-none font-black leading-none"
      style={{
        fontSize: 'clamp(10rem, 28vw, 22rem)',
        color: light ? 'rgba(0,0,0,0.035)' : 'rgba(255,255,255,0.035)',
        right: '-0.04em',
        top: '-0.08em',
        letterSpacing: '-0.05em',
      }}
    >
      {n}
    </div>
  )
}

// ── Nav ────────────────────────────────────────────────────────────────────────

function Nav() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-14 py-5 transition-all duration-500"
      style={{
        background: solid ? 'rgba(0,0,0,0.93)' : 'transparent',
        backdropFilter: solid ? 'blur(16px)' : 'none',
      }}
    >
      <span className="text-white text-[11px] font-black tracking-[0.45em] uppercase">DNM works</span>
      <div className="hidden md:flex items-center gap-8">
        {['Services', 'Metal', 'Wood', 'Projects', 'Contact'].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors duration-200"
          >
            {s}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="text-[10px] font-semibold tracking-[0.35em] uppercase text-white/60 hover:text-white transition-colors border border-white/20 hover:border-white/50 px-5 py-2"
      >
        Get in Touch
      </a>
    </nav>
  )
}

// ── 01 Cover ───────────────────────────────────────────────────────────────────

function Cover() {
  return (
    <section className="relative h-screen overflow-hidden bg-black flex flex-col justify-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${U('photo-1735494033576-9c882e80504c', 1920, 1080)})`,
          filter: 'grayscale(100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.97) 25%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.2) 100%)' }}
      />
      <div className="relative z-10 px-6 md:px-14 pb-14 md:pb-24">
        <p className="text-white/35 text-[10px] font-semibold tracking-[0.55em] uppercase mb-5">
          {/* */}
        </p>
        <h1
          className="text-white font-black uppercase leading-[0.87] mb-10"
          style={{ fontSize: 'clamp(3.2rem, 9.5vw, 9rem)', letterSpacing: '-0.03em' }}
        >
          The Practice of MakinG
        </h1>
        <div className="flex items-end justify-between gap-8">
          <p className="text-white/45 text-sm font-light leading-relaxed max-w-xs">
            DNM&nbsp;&nbsp;operates between concept and production, exploring the relationship between material, process, and form.
          </p>
          <div className="hidden md:flex flex-col items-center gap-3 shrink-0">
            <span className="text-white/25 text-[9px] tracking-[0.45em] uppercase">Scroll</span>
            <span className="w-px h-14 bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 02 Philosophy ──────────────────────────────────────────────────────────────

function Philosophy() {
  return (
    <section className="bg-white grid grid-cols-1 md:grid-cols-[55fr_45fr]" style={{ minHeight: '85vh' }}>
      <div className="relative overflow-hidden bg-zinc-800" style={{ minHeight: '55vh' }}>
        <img
          src={U('photo-1641893823219-38b433f736c0', 900, 1200)}
          alt="Welder working in manufacturing studio"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)', opacity: 0.85 }}
        />
      </div>
      <div className="relative p-10 md:p-16 flex flex-col justify-center overflow-hidden">
        <Wm n="01" light />
        <Label n="01" title="Opening Philosophy" light />
        <h2
          className="text-black font-black uppercase leading-[0.9] mb-8"
          style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3.6rem)', letterSpacing: '-0.03em' }}
        >
          Materializing Ideas
        </h2>
        <p className="text-black/55 text-[15px] font-light leading-relaxed mb-6 max-w-[22rem]">
          We bridge design thinking with manufacturing excellence—transforming concepts into products through engineering, craftsmanship, and production expertise.
        </p>
        <p className="text-black/35 text-sm font-light leading-relaxed max-w-[22rem]">
          From the first sketch to the final finish, we operate at the intersection of studio craft and industrial precision.
        </p>
        <div className="mt-14 pt-8 border-t border-black/10">
          <p className="text-black/25 text-[10px] font-semibold tracking-[0.45em] uppercase">
            Established 2015 · Mumbai, India
          </p>
        </div>
      </div>
    </section>
  )
}

// ── 03 What We Do ──────────────────────────────────────────────────────────────

function WhatWeDo() {
  const steps = ['Consult', 'Design', 'Prototype', 'Manufacture', 'Finish', 'Deliver']
  return (
    <section className="bg-black py-24 md:py-40 px-6 md:px-14 relative overflow-hidden">
      <Wm n="02" />
      <div className="max-w-5xl mx-auto">
        <Label n="02" title="What We Do" />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          <div>
            <h2
              className="text-white font-black uppercase leading-[0.9]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', letterSpacing: '-0.03em' }}
            >
              End-to-End<br />Studio.
            </h2>
          </div>
          <div>
            {steps.map((step, i) => (
              <div key={step} className="group">
                <div className="flex items-center gap-5 py-5 border-b border-white/10">
                  <span className="text-white/20 text-[10px] font-semibold tracking-[0.35em] w-5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-white font-semibold tracking-tight transition-colors group-hover:text-white/60"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                  >
                    {step}
                  </span>
                  {i < steps.length - 1 && (
                    <svg className="ml-auto opacity-25" width="14" height="20" viewBox="0 0 14 20" fill="none">
                      <line x1="7" y1="0" x2="7" y2="15" stroke="white" strokeWidth="1" />
                      <polyline points="3,11 7,17 11,11" stroke="white" strokeWidth="1" fill="none" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 04 Capabilities ────────────────────────────────────────────────────────────

function Capabilities() {
  const caps = [
    { n: '01', name: 'Design Strategy', desc: 'Research, benchmarking & production planning' },
    { n: '02', name: 'Industrial Design', desc: 'Sketching, CAD modelling & CMF development' },
    { n: '03', name: 'Engineering', desc: 'DFM, technical drawings & tolerance analysis' },
    { n: '04', name: 'Rapid Prototyping', desc: 'FDM, SLA resin & functional assemblies' },
    { n: '05', name: 'Metal Fabrication', desc: 'Casting, CNC, laser & sheet metal work' },
    { n: '06', name: 'Woodcraft', desc: 'CNC routing, turning & hand carving' },
    { n: '07', name: 'Leather Goods', desc: 'Pattern making, stitching & hardware fitting' },
    { n: '08', name: 'Surface Finishing', desc: 'PVD, powder coat, patina & plating' },
    { n: '09', name: 'Production Support', desc: 'Vendor management, QC & batch production' },
  ]
  return (
    <section id="services" className="bg-white py-24 md:py-40 px-6 md:px-14 relative overflow-hidden">
      <Wm n="03" light />
      <div className="max-w-6xl mx-auto">
        <Label n="03" title="Our Capabilities" light />
        <h2
          className="text-black font-black uppercase mb-14 md:mb-20"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.6rem)', letterSpacing: '-0.03em' }}
        >
          Nine Disciplines.<br />One Studio.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {caps.map(({ n, name, desc }) => (
            <div key={n} className="bg-white p-8 md:p-10 hover:bg-zinc-50 transition-colors duration-200">
              <span className="text-black/08 font-black text-6xl leading-none block mb-5">{n}</span>
              <h3 className="text-black font-bold text-base mb-2 tracking-tight">{name}</h3>
              <p className="text-black/45 text-sm font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 05 Design Consultation ─────────────────────────────────────────────────────

function DesignConsultation() {
  const bullets = [
    'Research & Discovery',
    'Benchmarking',
    'Material Consultation',
    'Manufacturing Planning',
    'Vendor Development',
    'Production Strategy',
  ]
  return (
    <section className="bg-black grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '80vh' }}>
      <div className="relative overflow-hidden bg-zinc-900 order-2 md:order-1" style={{ minHeight: '50vh' }}>
        <img
          src={U('photo-1581092160562-40aa08e78837', 900, 1200)}
          alt="Design consultation and engineering planning"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)', opacity: 0.7 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.7))' }}
        />
      </div>
      <div className="relative p-10 md:p-16 flex flex-col justify-center overflow-hidden order-1 md:order-2">
        <Wm n="04" />
        <Label n="04" title="Design Consultation" />
        <h2
          className="text-white font-black uppercase leading-[0.9] mb-12"
          style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.2rem)', letterSpacing: '-0.03em' }}
        >
          Strategy Before<br />The First Line.
        </h2>
        <div>
          {bullets.map((b, i) => (
            <div key={b} className="flex items-center gap-4 py-4 border-b border-white/10">
              <span className="text-white/20 text-[10px] font-semibold tracking-[0.35em] w-5 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-white/75 font-medium text-sm tracking-wide">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 06 Concept Development ─────────────────────────────────────────────────────

function ConceptDevelopment() {
  const tags = ['Ideation', 'Sketching', 'CAD', 'CMF', 'Technical Drawings', 'Engineering']
  return (
    <section className="bg-white py-24 md:py-40 px-6 md:px-14 relative overflow-hidden">
      <Wm n="05" light />
      <div className="max-w-6xl mx-auto">
        <Label n="05" title="Concept Development" light />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="overflow-hidden bg-zinc-100" style={{ aspectRatio: '4/3' }}>
            <img
              src={U('photo-1600869009498-8d429f88d4f5', 900, 675)}
              alt="CAD modelling workstation"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden bg-zinc-100 flex-1" style={{ minHeight: '180px' }}>
              <img
                src={U('photo-1600697395543-ef3ee6e9af7b', 900, 500)}
                alt="Engineering sketching and design process"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)' }}
              />
            </div>
            <div className="bg-black p-8 flex flex-col justify-between" style={{ minHeight: '150px' }}>
              <h3
                className="text-white font-black uppercase leading-tight"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em' }}
              >
                From Sketch<br />to Reality.
              </h3>
              <p className="text-white/35 text-xs font-light leading-relaxed mt-4">
                Every product begins with a question. We work through it systematically.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="border border-black/20 text-black/55 text-[10px] font-semibold tracking-[0.3em] uppercase px-4 py-2"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 07 Rapid Prototyping ───────────────────────────────────────────────────────

function Prototyping() {
  const specs = [
    { label: 'FDM Printing', desc: 'PLA, ABS, PETG — structural prototypes at speed' },
    { label: 'Resin / SLA', desc: 'High-detail visual and presentation models' },
    { label: 'Functional', desc: 'Assembly-ready components for validation' },
    { label: 'Exploded Views', desc: 'Component documentation photography' },
  ]
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="relative" style={{ height: '65vh', minHeight: '420px' }}>
        <img
          src={U('photo-1532186773960-85649e5cb70b', 1920, 900)}
          alt="Industrial manufacturing machinery and 3D printing"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)', opacity: 0.6 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.97))' }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10 relative overflow-hidden">
          <Wm n="06" />
          <Label n="06" title="Rapid Prototyping" />
          <h2
            className="text-white font-black uppercase"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Physical Ideas.<br />Fast.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
        {specs.map(({ label, desc }) => (
          <div key={label} className="bg-black p-8 md:p-10 hover:bg-zinc-900 transition-colors duration-200">
            <h3 className="text-white font-bold text-sm mb-3 tracking-tight">{label}</h3>
            <p className="text-white/35 text-xs font-light leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── 08 Metal Workshop ──────────────────────────────────────────────────────────

function MetalWorkshop() {
  const materials = [
    { name: 'Brass', tone: 'radial-gradient(circle at 35% 30%, #d4d4d4, #bbb, #888, #555)' },
    { name: 'Bronze', tone: 'radial-gradient(circle at 35% 30%, #999, #777, #555, #333)' },
    { name: 'Copper', tone: 'radial-gradient(circle at 35% 30%, #ccc, #aaa, #888, #666)' },
    { name: 'SS', tone: 'radial-gradient(circle at 35% 30%, #eee, #ccc, #aaa, #888)' },
    { name: 'MS', tone: 'radial-gradient(circle at 35% 30%, #bbb, #999, #777, #555)' },
    { name: 'Aluminium', tone: 'radial-gradient(circle at 35% 30%, #f5f5f5, #ddd, #bbb, #999)' },
  ]
  const processes = ['Casting', 'Fabrication', 'Sheet Work', 'Laser Cut', 'CNC', 'Engraving', 'Assembly']
  return (
    <section id="metal" className="bg-black py-24 md:py-36 relative overflow-hidden">
      <Wm n="07" />
      <div className="relative mb-14 mx-6 md:mx-14 overflow-hidden" style={{ height: '55vh', minHeight: '380px' }}>
        <img
          src={U('photo-1547555706-54bcf05bbad1', 1920, 900)}
          alt="Metal foundry and precision fabrication"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)', opacity: 0.75 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.15))' }}
        />
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-white/35 text-[10px] font-semibold tracking-[0.5em] uppercase mb-3">
            07 — Metal Workshop
          </p>
          <h2
            className="text-white font-black uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
          >
            Precision Metal<br />Fabrication.
          </h2>
        </div>
      </div>

      <div className="px-6 md:px-14 max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-white/30 text-[10px] font-semibold tracking-[0.45em] uppercase mb-8">Materials</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {materials.map(({ name, tone }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full" style={{ background: tone }} />
                <span className="text-white/55 text-[10px] font-semibold tracking-[0.25em] uppercase">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <p className="text-white/30 text-[10px] font-semibold tracking-[0.45em] uppercase mb-8">Processes</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-px bg-white/8">
            {processes.map((p) => (
              <div
                key={p}
                className="bg-black px-5 py-7 text-center hover:bg-zinc-900 transition-colors duration-200"
              >
                <span className="text-white/75 text-sm font-semibold tracking-wide">{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden" style={{ height: '38vh', minHeight: '250px' }}>
          <img
            src={U('photo-1697281679213-fcab27e10ad4', 1920, 700)}
            alt="Metal surface detailing and texture"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)', opacity: 0.8 }}
          />
          <div
            className="absolute inset-0 flex items-center justify-end pr-10 md:pr-16"
            style={{ background: 'rgba(0,0,0,0.45)' }}
          >
            <div className="text-right">
              <p className="text-white/35 text-[10px] tracking-[0.45em] uppercase mb-2">Surface Detailing</p>
              <p className="text-white/65 text-sm font-light">
                Chemical etching · Relief · Hand engraving · Textures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 09 Surface Finishes ────────────────────────────────────────────────────────

function SurfaceFinishes() {
  const finishes = [
    { name: 'Mirror', bg: 'radial-gradient(circle at 30% 28%, #fff 0%, #e8e8e8 25%, #b0b0b0 55%, #707070 100%)' },
    { name: 'Matte', bg: '#888' },
    {
      name: 'Brushed',
      bg: 'repeating-linear-gradient(0deg, #959595 0px, #b5b5b5 1px, #959595 2px, #a8a8a8 3px, #b8b8b8 4px)',
    },
    { name: 'Nickel', bg: 'linear-gradient(135deg, #e0e0e0 0%, #b0b0b0 40%, #c8c8c8 60%, #d8d8d8 100%)' },
    { name: 'Gold', bg: 'linear-gradient(135deg, #d2cfc0 0%, #a09888 40%, #c0baa8 100%)' },
    {
      name: 'Chrome',
      bg: 'linear-gradient(180deg, #fff 0%, #e0e0e0 18%, #909090 38%, #585858 55%, #aaa 75%, #fff 100%)',
    },
    { name: 'Antique', bg: 'radial-gradient(ellipse at 42% 38%, #7a7a7a, #555, #444)' },
    { name: 'PVD Black', bg: 'linear-gradient(135deg, #222 0%, #383838 45%, #1a1a1a 100%)' },
    { name: 'Powder Coat', bg: '#b8b8b8' },
    { name: 'Patina', bg: 'radial-gradient(ellipse at 32% 68%, #585858, #3c3c3c, #484848, #404040)' },
  ]
  return (
    <section className="py-24 md:py-40 px-6 md:px-14 relative overflow-hidden" style={{ background: '#111' }}>
      <Wm n="08" />
      <div className="max-w-6xl mx-auto">
        <Label n="08" title="Surface Finishes" />
        <h2
          className="text-white font-black uppercase mb-16 md:mb-24"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.6rem)', letterSpacing: '-0.03em' }}
        >
          Ten Finishes.<br />Infinite Character.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-14">
          {finishes.map(({ name, bg }) => (
            <div key={name} className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full" style={{ background: bg }} />
              <span className="text-white/55 text-[10px] font-semibold tracking-[0.3em] uppercase text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 10 Wood Workshop ───────────────────────────────────────────────────────────

function WoodWorkshop() {
  const processes = ['CNC Routing', 'Turning', 'Hand Carving', 'Assembly', 'Finishing']
  return (
    <section id="wood" className="bg-white relative overflow-hidden">
      <div className="relative overflow-hidden" style={{ height: '65vh', minHeight: '420px' }}>
        <img
          src={U('photo-1547609434-b732edfee020', 1920, 900)}
          alt="Woodworking craftsmanship in studio workshop"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 25%, rgba(255,255,255,0) 60%)',
          }}
        />
      </div>
      <div className="px-6 md:px-14 pt-0 pb-20 md:pb-32 max-w-6xl mx-auto relative overflow-hidden">
        <Wm n="09" light />
        <Label n="09" title="Wood Workshop" light />
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-20 items-end">
          <h2
            className="text-black font-black uppercase leading-[0.9]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', letterSpacing: '-0.03em' }}
          >
            Timber,<br />TransFormed.
          </h2>
          <div>
            <p className="text-black/45 text-sm font-light leading-relaxed mb-8">
              From raw timber to refined piece&nbsp;&nbsp;our wood workshop handles CNC precision alongside traditional hand
              techniques, covering custom species, joinery, and surface treatments.
            </p>
            <div className="flex flex-wrap gap-2">
              {processes.map((p) => (
                <span
                  key={p}
                  className="border border-black/20 text-black/55 text-[10px] font-semibold tracking-[0.3em] uppercase px-4 py-2"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 11 Leather & Soft Goods ────────────────────────────────────────────────────

function Leather() {
  const items = [
    'Pattern Making',
    'Cutting & Skiving',
    'Hand Stitching',
    'Hardware Fitting',
    'Edge Finishing',
    'Quality Control',
  ]
  return (
    <section className="bg-black grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '75vh' }}>
      <div className="relative p-10 md:p-16 flex flex-col justify-center overflow-hidden">
        <Wm n="10" />
        <Label n="10" title="Leather & Soft Goods" />
        <h2
          className="text-white font-black uppercase leading-[0.9] mb-8"
          style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.2rem)', letterSpacing: '-0.03em' }}
        >
          Pattern.<br />Precision.<br />Hardware.
        </h2>
        <p className="text-white/45 text-sm font-light leading-relaxed mb-10 max-w-[22rem]">
          From luxury accessories to functional soft goods&nbsp;&nbsp;developed with meticulous pattern making, hand stitching,
          and premium hardware integration.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-white/35 rounded-full shrink-0" />
              <span className="text-white/55 text-xs font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden bg-zinc-900" style={{ minHeight: '50vh' }}>
        <img
          src={U('photo-1599694522028-65abc96dfd2f', 900, 1200)}
          alt="Leather goods craftsmanship"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)', opacity: 0.8 }}
        />
      </div>
    </section>
  )
}

// ── 12 Artisan Craft ───────────────────────────────────────────────────────────

function ArtisanCraft() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]" style={{ minHeight: '60vh' }}>
        <div className="relative overflow-hidden bg-zinc-100" style={{ minHeight: '50vh' }}>
          <img
            src={U('photo-1631396326646-c06a935ff3a6', 1200, 900)}
            alt="Artisan craft and handwork in workshop"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>
        <div className="p-10 md:p-16 flex flex-col justify-center bg-zinc-950 relative overflow-hidden">
          <Wm n="11" />
          <Label n="11" title="Artisan Craft" />
          <h2
            className="text-white font-black uppercase leading-[0.9] mb-8"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
          >
            Hands That<br />Remember.
          </h2>
          <p className="text-white/45 text-sm font-light leading-relaxed mb-8 max-w-xs">
            Relief work, decorative panels, custom hardware, and traditional craftsmanship techniques practised by
            artisans who have mastered their forms over decades.
          </p>
          <div className="flex flex-col gap-3">
            {['Relief Work', 'Decorative Panels', 'Custom Hardware', 'Hand Finishing'].map((item) => (
              <div key={item} className="flex items-center gap-3 py-3 border-b border-white/10">
                <span className="w-1 h-1 bg-white/35 rounded-full shrink-0" />
                <span className="text-white/65 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 13 Production Support ──────────────────────────────────────────────────────

function Production() {
  const steps = ['Vendor Selection', 'Sampling', 'Production', 'QC', 'Packaging']
  return (
    <section className="bg-white py-24 md:py-40 px-6 md:px-14 relative overflow-hidden">
      <Wm n="12" light />
      <div className="max-w-5xl mx-auto">
        <Label n="12" title="Production Support" light />
        <h2
          className="text-black font-black uppercase mb-20"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.6rem)', letterSpacing: '-0.03em' }}
        >
          From Sample<br />to Shelf.
        </h2>
        <div className="flex flex-col md:flex-row items-stretch">
          {steps.map((step, i) => (
            <Fragment key={step}>
              <div className="flex flex-row md:flex-col items-center gap-4 md:gap-5 flex-1 py-4 md:py-0">
                <div className="w-11 h-11 rounded-full border-2 border-black/20 flex items-center justify-center shrink-0">
                  <span className="text-black/50 text-[10px] font-black tracking-tight">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-black font-semibold text-sm tracking-wide">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px md:w-auto md:h-px h-8 bg-black/15 self-center mx-0 md:mx-2 my-2 md:my-0 md:flex-none md:w-10 shrink-0" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 14 Workflow ────────────────────────────────────────────────────────────────

function Workflow() {
  const steps = ['Discovery', 'Research', 'Design', 'Prototype', 'Manufacturing', 'Finishing', 'Delivery']
  return (
    <section className="bg-black py-24 md:py-40 px-6 md:px-14 relative overflow-hidden">
      <Wm n="13" />
      <div className="max-w-6xl mx-auto">
        <Label n="13" title="Our Workflow" />
        <h2
          className="text-white font-black uppercase mb-20"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.6rem)', letterSpacing: '-0.03em' }}
        >
          Seven Steps.<br />One Vision.
        </h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/8 md:hidden" />
          <div className="absolute top-[1.2rem] left-0 right-0 h-px bg-white/8 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-4 relative">
            {steps.map((step, i) => (
              <div key={step} className="flex flex-row md:flex-col items-center md:items-center gap-5 md:gap-4 pl-12 md:pl-0">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-black flex items-center justify-center relative z-10 shrink-0 md:mx-auto">
                  <span className="text-white/45 text-[10px] font-black">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <span className="text-white/60 text-xs font-semibold tracking-wide md:text-center">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 15 Featured Projects ───────────────────────────────────────────────────────

function Projects() {
  const projects = [
    {
      title: 'Modular Display System',
      industry: 'Retail',
      material: 'Brass + Powder-coated Steel',
      process: 'Fabrication, CNC, Assembly',
      finish: 'PVD Black + Brushed Brass',
      img: U('photo-1776602191233-154cbc983f0c', 600, 800),
    },
    {
      title: 'Precision Instrument Housing',
      industry: 'Consumer Products',
      material: 'Aluminium + ABS',
      process: 'CNC Milling + SLA Prototype',
      finish: 'Anodised + Matte Powder',
      img: U('photo-1611505908502-5b67e53e3a76', 600, 800),
    },
    {
      title: 'Bespoke Furniture Fittings',
      industry: 'Furniture',
      material: 'Solid Brass',
      process: 'Lost-wax Casting, Hand Finishing',
      finish: 'Antique Brass + Lacquer',
      img: U('photo-1631396326838-de37e5f8bcbc', 600, 800),
    },
  ]
  return (
    <section id="projects" className="bg-white py-24 md:py-40 px-6 md:px-14 relative overflow-hidden">
      <Wm n="14" light />
      <div className="max-w-6xl mx-auto">
        <Label n="14" title="Featured Projects" light />
        <h2
          className="text-black font-black uppercase mb-16 md:mb-20"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.6rem)', letterSpacing: '-0.03em' }}
        >
          Made Here.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {projects.map(({ title, industry, material, process, finish, img }) => (
            <div key={title} className="group">
              <div
                className="relative overflow-hidden bg-zinc-200 mb-6"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
              <h3 className="text-black font-bold text-base mb-5 tracking-tight">{title}</h3>
              <div className="flex flex-col gap-2">
                {(
                  [
                    ['Industry', industry],
                    ['Material', material],
                    ['Process', process],
                    ['Finish', finish],
                  ] as [string, string][]
                ).map(([k, v]) => (
                  <div key={k} className="flex gap-3 text-sm border-b border-black/8 pb-2">
                    <span className="text-black/30 font-semibold text-[11px] tracking-wide w-20 shrink-0 uppercase">
                      {k}
                    </span>
                    <span className="text-black/65 text-xs font-light">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 16 Industries ──────────────────────────────────────────────────────────────

function Industries() {
  const items = [
    'Furniture',
    'Architecture',
    'Interiors',
    'Jewellery',
    'Fashion',
    'Consumer',
    'Startups',
    'Education',
    'Artists',
  ]
  return (
    <section className="bg-black py-24 md:py-40 px-6 md:px-14 relative overflow-hidden">
      <Wm n="15" />
      <div className="max-w-5xl mx-auto">
        <Label n="15" title="Industries We Serve" />
        <h2
          className="text-white font-black uppercase mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.6rem)', letterSpacing: '-0.03em' }}
        >
          Across Sectors.
        </h2>
        <div className="grid grid-cols-3 gap-px bg-white/8">
          {items.map((item, i) => (
            <div
              key={item}
              className="bg-black px-6 md:px-10 py-8 md:py-10 flex flex-col gap-3 hover:bg-zinc-900 transition-colors duration-200"
            >
              <span
                className="font-black leading-none text-white/8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-white/75 font-semibold text-sm md:text-base tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── 17 Stats ───────────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
    { n: '50+', label: 'Vendor Network' },
    { n: '8', label: 'Core Disciplines' },
    { n: '32+', label: 'Projects Delivered' },
    { n: '1', label: 'Roof, End-to-End' },
  ]
  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-14 border-t border-black/8 relative overflow-hidden">
      <Wm n="16" light />
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-black/10">
        {stats.map(({ n, label }) => (
          <div key={label} className="md:px-12 first:pl-0 last:pr-0 flex flex-col gap-2">
            <span
              className="text-black font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)', letterSpacing: '-0.04em' }}
            >
              {n}
            </span>
            <span className="text-black/30 text-[10px] font-semibold tracking-[0.35em] uppercase">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── 18 Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="relative bg-black overflow-hidden" style={{ minHeight: '85vh' }}>
      <div className="absolute inset-0">
        <img
          src={U('photo-1564182842834-681b7be6de4b', 1920, 1080)}
          alt="Manufacturing studio workshop atmosphere"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)', opacity: 0.25 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))' }}
        />
      </div>
      <div
        className="relative z-10 flex flex-col justify-between px-6 md:px-14 py-24 md:py-32"
        style={{ minHeight: '85vh' }}
      >
        <div>
          <p className="text-white/30 text-[10px] font-semibold tracking-[0.5em] uppercase mb-5">Contact</p>
          <h2
            className="text-white font-black uppercase leading-[0.87]"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', letterSpacing: '-0.04em' }}
          >
            Let's Build<br />Something.
          </h2>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 mb-16">
            {[
              { label: 'Email', value: 'studio@dnmworks.in' },
              { label: 'Phone', value: '+917898402879' },
              { label: 'Instagram', value: '@dnmworks.in' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-white/30 text-[10px] font-semibold tracking-[0.45em] uppercase mb-3">{label}</p>
                <p className="text-white font-medium text-sm">{value}</p>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-white/20 text-[10px] tracking-[0.35em] uppercase">© 2025 DNMWORKS</span>
            <span className="text-white/20 text-[10px] tracking-[0.35em] uppercase">
              FORM. MATERIAL. FABRICATION
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── App ────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />
      <Cover />
      <Philosophy />
      <WhatWeDo />
      <Capabilities />
      <DesignConsultation />
      <ConceptDevelopment />
      <Prototyping />
      <MetalWorkshop />
      <SurfaceFinishes />
      <WoodWorkshop />
      <Leather />
      <ArtisanCraft />
      <Production />
      <Workflow />
      <Projects />
      <Industries />
      <Stats />
      <Contact />
    </div>
  )
}
