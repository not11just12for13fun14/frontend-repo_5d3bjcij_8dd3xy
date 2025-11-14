import React from 'react'
import Spline from '@splinetool/react-spline'
import { Scale, Gavel, Shield, Briefcase, Phone, Mail, MapPin, ChevronRight, NotebookPen, Landmark, Building2, ArrowRight } from 'lucide-react'

const gold = 'text-[#D4AF37]'
const goldBg = 'bg-[#D4AF37]'
const goldBorder = 'border-[#D4AF37]/30'

function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
            <Gavel className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <p className={`text-lg font-semibold tracking-wide ${gold}`}>Lex & Partners</p>
            <p className="text-[11px] -mt-1 text-white/60">Attorneys at Law</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-white/80 hover:text-white transition">Tentang</a>
          <a href="#practice" className="text-white/80 hover:text-white transition">Layanan</a>
          <a href="#other" className="text-white/80 hover:text-white transition">Layanan Lain</a>
          <a href="#team" className="text-white/80 hover:text-white transition">Tim</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Kontak</a>
        </nav>
        <a href="#contact" className={`hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full ${goldBg} text-black hover:opacity-90 transition`}>
          Konsultasi Gratis <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-16 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/95 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white/80 mb-6">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span>Firma Hukum Korporasi & Litigasi</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Perlindungan Hukum Kelas Dunia untuk Bisnis Anda
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl">
            Kami membantu perusahaan dan individu menavigasi kompleksitas hukum dengan strategi yang tajam, etika tinggi, dan hasil yang dapat diukur.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className={`inline-flex items-center justify-center px-6 py-3 rounded-full ${goldBg} text-black font-semibold hover:opacity-90 transition shadow-[0_0_0_9999px_rgba(0,0,0,0.0)]`}>
              Hubungi Kami <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#practice" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition">
              Lihat Layanan
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Tahun Pengalaman', value: '15+' },
              { label: 'Klien Korporasi', value: '120+' },
              { label: 'Perkara Dimenangkan', value: '900+' },
              { label: 'Pengacara Senior', value: '10' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-4">
                <p className={`text-2xl font-bold ${gold}`}>{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className={`text-xs tracking-widest uppercase ${gold} mb-2`}>{eyebrow}</p>
      <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-white/60">{subtitle}</p>}
    </div>
  )
}

function PracticeAreas() {
  const items = [
    { icon: <Scale className="w-6 h-6 text-[#D4AF37]" />, title: 'Hukum Korporasi', desc: 'Pendirian, merger & akuisisi, perjanjian, dan kepatuhan.' },
    { icon: <Shield className="w-6 h-6 text-[#D4AF37]" />, title: 'Litigasi & Sengketa', desc: 'Strategi litigasi efektif dengan pendekatan berbasis bukti.' },
    { icon: <Briefcase className="w-6 h-6 text-[#D4AF37]" />, title: 'Ketenagakerjaan', desc: 'Kebijakan perusahaan, PKB, perselisihan hubungan industrial.' },
    { icon: <Landmark className="w-6 h-6 text-[#D4AF37]" />, title: 'Kepatuhan & Regulasi', desc: 'Audit hukum, perizinan, dan manajemen risiko kepatuhan.' },
    { icon: <Building2 className="w-6 h-6 text-[#D4AF37]" />, title: 'Properti & Konstruksi', desc: 'Perjanjian, pengadaan, dan penyelesaian sengketa proyek.' },
    { icon: <NotebookPen className="w-6 h-6 text-[#D4AF37]" />, title: 'HKI & Teknologi', desc: 'Perlindungan merek dagang, lisensi, dan kontrak teknologi.' },
  ]
  return (
    <section id="practice" className="relative bg-gradient-to-b from-black to-[#0b0b0e] py-20">
      <div className="absolute -top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Layanan Utama" title="Bidang Praktik" subtitle="Solusi komprehensif untuk kebutuhan bisnis dan personal Anda" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className={`group rounded-2xl border ${goldBorder} bg-white/5 hover:bg-white/10 transition p-6 backdrop-blur-lg`}> 
              <div className="w-11 h-11 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center mb-4">
                {it.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-white/60 text-sm mt-2">{it.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm text-white/80 group-hover:text-white">
                Pelajari lebih lanjut <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OtherServices() {
  const items = [
    {
      title: 'Aplikasi Akuntansi Bisnis',
      desc: 'Paket aplikasi akuntansi modern untuk UMKM hingga enterprise: pembukuan, invoicing, inventory, dan laporan keuangan real-time.',
      tags: ['SaaS', 'Integrasi POS', 'Multi-cabang']
    },
    {
      title: 'Konsultasi Pajak',
      desc: 'Perencanaan pajak, kepatuhan SPT, restitusi, serta pendampingan pemeriksaan pajak dengan pendekatan berbasis risiko.',
      tags: ['Tax Compliance', 'Advisory', 'Audit Support']
    },
    {
      title: 'Konsultasi Tata Kelola & GRC',
      desc: 'Penerapan tata kelola, manajemen risiko, dan kepatuhan (GRC) yang terukur untuk perusahaan Anda.',
      tags: ['Governance', 'Risk', 'Compliance']
    },
  ]
  return (
    <section id="other" className="relative bg-[#0b0b0e] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Our Other Services" title="Layanan & Produk Lain" subtitle="Nilai tambah di luar jasa hukum untuk mendukung pertumbuhan bisnis Anda" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className={`rounded-2xl border ${goldBorder} bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl relative overflow-hidden`}>
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[#D4AF37]/10 blur-2xl pointer-events-none" />
              <h3 className="text-white text-xl font-semibold">{card.title}</h3>
              <p className="text-white/70 text-sm mt-3">{card.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs border border-white/10 bg-black/40 text-white/70">{t}</span>
                ))}
              </div>
              <button className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full ${goldBg} text-black text-sm font-semibold hover:opacity-90 transition`}>
                Minta Demo <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0e] py-20">
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className={`rounded-2xl border ${goldBorder} bg-white/5 backdrop-blur-xl p-6`}> 
          <h3 className="text-white text-2xl font-semibold">Siapa Kami</h3>
          <p className="text-white/70 mt-3">
            Kami adalah firma hukum butik dengan fokus pada korporasi, litigasi, dan kepatuhan. Tim kami menggabungkan pengalaman praktis, penelitian mendalam, dan teknologi untuk menghadirkan layanan yang presisi dan cepat.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <p className={`text-2xl font-bold ${gold}`}>98%</p>
              <p className="text-white/60 text-sm">Kepuasan Klien</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <p className={`text-2xl font-bold ${gold}`}>24 Jam</p>
              <p className="text-white/60 text-sm">Respon Cepat</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {[
            'Pendekatan strategis berbasis data dan praktik terbaik industri.',
            'Komunikasi transparan, biaya jelas, dan orientasi pada hasil.',
            'Jaringan kolaborator profesional: konsultan pajak, akuntan, dan penilai.']
            .map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`mt-1 w-6 h-6 rounded-md ${goldBg} flex items-center justify-center text-black font-bold text-xs`}>✓</div>
                <p className="text-white/80">{t}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  const people = [
    { name: 'A. Pratama, S.H., M.H.', role: 'Managing Partner', focus: 'Korporasi & M&A' },
    { name: 'D. Wibowo, S.H.', role: 'Partner', focus: 'Litigasi & Arbitrase' },
    { name: 'N. Kirana, S.H., M.Kn.', role: 'Senior Associate', focus: 'Kepatuhan & Perizinan' },
  ]
  return (
    <section id="team" className="bg-[#0b0b0e] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Our Team" title="Pengacara Kami" subtitle="Tim berpengalaman yang berdedikasi pada kepentingan Anda" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${goldBorder} bg-white/5 backdrop-blur-xl p-6`}>
              <div className="w-16 h-16 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-4">
                <Gavel className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h4 className="text-white font-semibold">{p.name}</h4>
              <p className={`${gold} text-sm`}>{p.role}</p>
              <p className="text-white/60 text-sm mt-2">Fokus: {p.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    { q: 'Tim yang sangat responsif dan solutif. Sangat membantu saat merger perusahaan kami.', a: 'CEO, Tech Startup' },
    { q: 'Pendampingan litigasi yang strategis, hasilnya melebihi ekspektasi.', a: 'Direktur, Manufaktur' },
    { q: 'Kepatuhan dan tata kelola menjadi jauh lebih rapi dan terukur.', a: 'CFO, Retail Nasional' },
  ]
  return (
    <section className="bg-[#0b0b0e] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimoni" title="Apa Kata Klien" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <p className="text-white/80">“{it.q}”</p>
              <p className={`mt-4 text-sm ${gold}`}>— {it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#0b0b0e] to-black py-20">
      <div className="absolute right-10 top-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div className={`rounded-2xl border ${goldBorder} bg-white/5 backdrop-blur-xl p-6`}>
          <h3 className="text-white text-2xl font-semibold">Mulai Konsultasi</h3>
          <p className="text-white/70 mt-2">Sampaikan kebutuhan Anda, tim kami akan menghubungi dalam 24 jam.</p>
          <form className="mt-6 grid grid-cols-1 gap-4">
            <input className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60" placeholder="Nama" />
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60" placeholder="Email" />
            <input className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60" placeholder="Perusahaan (opsional)" />
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]/60" placeholder="Ceritakan kebutuhan Anda" />
            <button type="button" className={`mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl ${goldBg} text-black font-semibold hover:opacity-90`}>
              Kirim <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-white/80">
              <p className="flex items-center gap-3"><Phone className={`w-4 h-4 ${gold}`} /><span>+62 21 555 1234</span></p>
              <p className="flex items-center gap-3"><Mail className={`w-4 h-4 ${gold}`} /><span>contact@lexpartners.co</span></p>
              <p className="flex items-center gap-3"><MapPin className={`w-4 h-4 ${gold}`} /><span>SCBD, Jakarta</span></p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl p-6">
            <h4 className="text-white font-semibold">Butuh Solusi Hukum Terpadu?</h4>
            <p className="text-white/70 mt-2">Kami siap menjadi mitra strategis Anda dari hulu ke hilir.</p>
            <a href="#practice" className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${goldBg} text-black text-sm font-semibold hover:opacity-90`}>
              Jelajahi Layanan <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
            <Gavel className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <p className="text-white font-semibold">Lex & Partners</p>
            <p className="text-white/40 text-xs">© {new Date().getFullYear()} Semua hak dilindungi.</p>
          </div>
        </div>
        <div className="text-white/60 text-sm">Privasi • Syarat • Karier</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <PracticeAreas />
      <OtherServices />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
