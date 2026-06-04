import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft, Mail, Phone, MapPin, Clock, Award,
  ArrowUpRight, GraduationCap, Stethoscope, Eye,
  Users, Building2, Zap,
} from 'lucide-react';
import { doctors } from '../data/doctors';

/* ─────────────────────────────────────────────────────
   Inline styles — high specificity, no Tailwind clashes
   ───────────────────────────────────────────────────── */
const S = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f3f6ff',
    color: '#1A1A1A',
    fontFamily: "'Inter', sans-serif",
    paddingTop: '100px',
    overflowX: 'hidden',
  },
  wrap: { maxWidth: '1400px', margin: '0 auto', padding: '0 48px' },
  backLink: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    color: '#6b7280', textDecoration: 'none', fontWeight: 600,
    fontSize: '14px', padding: '10px 20px', borderRadius: '999px',
    border: '1px solid #e5e7eb', backgroundColor: '#fff',
    transition: 'all 0.2s ease', marginBottom: '40px',
  },

  /* ── Hero ── */
  heroGrid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '48px', alignItems: 'center', minHeight: '560px',
  },
  heroLeft: {
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', gap: '32px',
  },
  heroTitle: {
    fontFamily: "'Philosopher', sans-serif",
    fontSize: 'clamp(48px, 6vw, 96px)', fontWeight: 900,
    lineHeight: 0.95, letterSpacing: '-3px', color: '#1A1A1A', margin: 0,
  },
  heroDesc: {
    fontSize: '18px', lineHeight: 1.7, color: '#6b7280',
    maxWidth: '520px', fontWeight: 500,
  },

  /* ── Stats ── */
  statsRow: { display: 'flex', gap: '24px', marginTop: '8px' },
  statCard: {
    display: 'flex', alignItems: 'center', gap: '16px',
    backgroundColor: '#fff', borderRadius: '20px',
    padding: '20px 28px', flex: 1,
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    border: '1px solid #f0f0f0',
  },
  statIconBox: {
    width: '56px', height: '56px', borderRadius: '16px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  statNum: {
    fontFamily: "'Philosopher', sans-serif", fontSize: '36px',
    fontWeight: 900, lineHeight: 1, color: '#1A1A1A', margin: 0,
  },
  statLabel: {
    fontSize: '12px', color: '#9ca3af', fontWeight: 600,
    textTransform: 'uppercase', letterSpacing: '0.5px',
    marginTop: '2px', lineHeight: 1.3,
  },

  /* ── Hero Image ── */
  imgWrap: {
    display: 'flex', justifyContent: 'flex-end',
    alignItems: 'center', position: 'relative',
  },
  imgContainer: {
    width: '100%', maxWidth: '480px', aspectRatio: '3/4',
    borderRadius: '32px', overflow: 'hidden',
    backgroundColor: '#3770bf', position: 'relative',
    boxShadow: '0 40px 80px rgba(55,112,191,0.25)',
  },
  img: {
    width: '100%', height: '100%',
    objectFit: 'cover', objectPosition: 'top',
  },
  imgBadge: {
    position: 'absolute', bottom: '24px', left: '24px', right: '24px',
    backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
    borderRadius: '20px', padding: '20px 24px',
    display: 'flex', alignItems: 'center', gap: '16px',
  },

  /* ── Bento Grid ── */
  bento: {
    display: 'grid', gap: '20px',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridAutoRows: 'minmax(80px, auto)',
  },
  bentoCard: {
    backgroundColor: '#fff', borderRadius: '24px',
    padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    border: '1px solid #f0f0f0', overflow: 'hidden', position: 'relative',
  },
  bentoHeader: {
    display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px',
  },
  bentoIcon: {
    width: '44px', height: '44px', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  bentoTitle: {
    fontFamily: "'Philosopher', sans-serif", fontSize: '20px',
    fontWeight: 700, color: '#1A1A1A', margin: 0,
  },
  itemRow: {
    marginBottom: '16px', paddingBottom: '16px',
    borderBottom: '1px solid #f5f5f5',
  },
  itemRowLast: { marginBottom: 0, paddingBottom: 0, borderBottom: 'none' },
  itemTitle: {
    fontWeight: 700, fontSize: '15px', color: '#1A1A1A',
    margin: '0 0 4px', lineHeight: 1.4,
  },
  itemSub: {
    fontSize: '13px', color: '#9ca3af',
    fontWeight: 500, margin: 0, lineHeight: 1.5,
  },
  contactLine: {
    display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px',
  },
  contactDot: {
    width: '36px', height: '36px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  contactTxt: {
    fontSize: '14px', fontWeight: 600, color: '#1A1A1A',
    margin: 0, lineHeight: 1.5,
  },

  /* ── Conditions ── */
  condWrap: {
    maxWidth: '1400px', margin: '80px auto 0', padding: '0 48px 100px',
  },
  condHeader: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-end', marginBottom: '40px',
  },
  condTitle: {
    fontFamily: "'Philosopher', sans-serif",
    fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700,
    lineHeight: 1.1, color: '#1A1A1A', margin: 0, letterSpacing: '-1px',
  },
  condSub: {
    fontSize: '16px', color: '#9ca3af', maxWidth: '280px',
    textAlign: 'right', lineHeight: 1.5, fontWeight: 500,
  },
  condGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' },
};

const bannerColors = [
  { bg: '#3770bf', dark: true },
  { bg: '#8dc2ff', dark: false },
  { bg: '#cef26d', dark: false },
  { bg: '#1A1A1A', dark: true },
  { bg: '#84a98c', dark: true },
];



/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!doctor) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f6ff' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Doctor not found</h2>
          <Link to="/" style={{ color: '#3770bf', fontWeight: 600 }}>Return to Home</Link>
        </div>
      </div>
    );
  }

  const yearsSince = new Date().getFullYear() - (doctor.practisingSince || 2001);

  return (
    <div style={S.page}>

      {/* ══════════ HERO ══════════ */}
      <div style={S.wrap}>
        <Link to="/" style={S.backLink}>
          <ChevronLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <div style={S.heroGrid}>
          {/* Left */}
          <motion.div style={S.heroLeft}
            initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 style={S.heroTitle}>
              <span style={{ color: '#3770bf' }}>{doctor.specialisation?.split(' ')[0]}</span>
              <br />
              {doctor.specialisation?.split(' ').slice(1).join(' ') || 'Expert'}
            </h1>

            <p style={S.heroDesc}>{doctor.about}</p>

            {/* Stats with icons */}
            <div style={S.statsRow}>
              <div style={S.statCard}>
                <div style={{ ...S.statIconBox, backgroundColor: '#eef4ff', color: '#3770bf' }}>
                  <Stethoscope size={24} />
                </div>
                <div>
                  <p style={S.statNum}>+{yearsSince}</p>
                  <span style={S.statLabel}>Years Experience</span>
                </div>
              </div>
              <div style={S.statCard}>
                <div style={{ ...S.statIconBox, backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                  <Eye size={24} />
                </div>
                <div>
                  <p style={S.statNum}>{doctor.ailments?.length || 0}+</p>
                  <span style={S.statLabel}>Conditions Treated</span>
                </div>
              </div>
              <div style={S.statCard}>
                <div style={{ ...S.statIconBox, backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                  <Users size={24} />
                </div>
                <div>
                  <p style={S.statNum}>{doctor.hospital?.facilities?.length || 0}</p>
                  <span style={S.statLabel}>Facilities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Doctor image */}
          <motion.div style={S.imgWrap}
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div style={S.imgContainer}>
              <img src={doctor.image} alt={doctor.name} style={S.img} />
              <div style={S.imgBadge}>
                <img src={doctor.image} alt="" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '3px solid #3770bf' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 800, fontSize: 15, color: '#1A1A1A', margin: 0 }}>{doctor.name}</p>
                  <p style={{ fontSize: 12, color: '#3770bf', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, margin: '2px 0 0' }}>{doctor.qualifications}</p>
                </div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#1A1A1A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════ BENTO DETAILS GRID ══════════ */}
      <div style={{ ...S.wrap, marginTop: '80px' }}>
        <div style={S.bento}>

          {/* ── Card 1: Experience (spans 5 cols, 3 rows) ── */}
          <motion.div
            style={{ ...S.bentoCard, gridColumn: 'span 5', gridRow: 'span 3' }}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div style={S.bentoHeader}>
              <div style={{ ...S.bentoIcon, backgroundColor: '#eef4ff', color: '#3770bf' }}>
                <Award size={20} />
              </div>
              <h3 style={S.bentoTitle}>Experience</h3>
            </div>
            {doctor.fellowships?.map((f, i) => (
              <div key={i} style={i === doctor.fellowships.length - 1 ? S.itemRowLast : S.itemRow}>
                <p style={S.itemTitle}>{f.split('.')[0]}</p>
                <p style={S.itemSub}>{f.split('.').slice(1).join('.').trim()}</p>
              </div>
            ))}
            {doctor.accreditations?.map((a, i) => (
              <div key={`a${i}`} style={{ ...S.itemRow, ...(i === doctor.accreditations.length - 1 ? S.itemRowLast : {}) }}>
                <p style={{ ...S.itemTitle, fontSize: '14px' }}>{a}</p>
              </div>
            ))}
          </motion.div>

          {/* ── Card 2: Education (spans 4 cols, 3 rows) ── */}
          <motion.div
            style={{ ...S.bentoCard, gridColumn: 'span 4', gridRow: 'span 3' }}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div style={S.bentoHeader}>
              <div style={{ ...S.bentoIcon, backgroundColor: '#f0fdf4', color: '#22c55e' }}>
                <GraduationCap size={20} />
              </div>
              <h3 style={S.bentoTitle}>Education</h3>
            </div>
            {doctor.training?.map((t, i) => (
              <div key={i} style={i === doctor.training.length - 1 ? S.itemRowLast : S.itemRow}>
                <p style={S.itemTitle}>{t.split(':')[0]}</p>
                <p style={S.itemSub}>{t.split(':')[1]?.trim()}</p>
              </div>
            ))}
          </motion.div>

          {/* ── Card 3: Quick fact — accent card (spans 3 cols, 2 rows) ── */}
          <motion.div
            style={{
              gridColumn: 'span 3', gridRow: 'span 3',
              borderRadius: '24px', padding: '32px',
              background: 'linear-gradient(135deg, #3770bf 0%, #2c5999 100%)',
              color: '#fff', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', position: 'relative', overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}
          >
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

            <div>
              <Stethoscope size={32} style={{ marginBottom: '16px', opacity: 0.7 }} />
              <h3 style={{ fontFamily: "'Philosopher', sans-serif", fontSize: '28px', fontWeight: 700, margin: '0 0 8px', lineHeight: 1.2 }}>
                Practising Since
              </h3>
              <p style={{ fontSize: '56px', fontWeight: 900, fontFamily: "'Philosopher', sans-serif", margin: '8px 0 0', lineHeight: 1 }}>
                {doctor.practisingSince || 2001}
              </p>
            </div>
            <p style={{ fontSize: '14px', opacity: 0.7, fontWeight: 500, margin: '16px 0 0', lineHeight: 1.5 }}>
              Based at {doctor.hospital.name}
            </p>
          </motion.div>

          {/* ── Card 4: Contact (spans 5 cols, 3 rows) ── */}
          <motion.div
            style={{ ...S.bentoCard, gridColumn: 'span 5', gridRow: 'span 3' }}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={S.bentoHeader}>
              <div style={{ ...S.bentoIcon, backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                <Phone size={20} />
              </div>
              <h3 style={S.bentoTitle}>Contact & Location</h3>
            </div>

            <div style={S.contactLine}>
              <div style={{ ...S.contactDot, backgroundColor: '#f3f4f6' }}><Phone size={15} color="#374151" /></div>
              <p style={S.contactTxt}>{doctor.phone}</p>
            </div>
            <div style={S.contactLine}>
              <div style={{ ...S.contactDot, backgroundColor: '#3770bf' }}><Mail size={15} color="#fff" /></div>
              <p style={S.contactTxt}>contact@shaureen.com</p>
            </div>
            <div style={{ ...S.contactLine, alignItems: 'flex-start' }}>
              <div style={{ ...S.contactDot, backgroundColor: '#cef26d', marginTop: 2 }}><MapPin size={15} color="#1A1A1A" /></div>
              <p style={{ ...S.contactTxt, fontWeight: 500, color: '#6b7280' }}>{doctor.hospital.name}<br />{doctor.hospital.address}</p>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
              <div style={S.contactLine}>
                <div style={{ ...S.contactDot, backgroundColor: '#1A1A1A' }}><Clock size={15} color="#fff" /></div>
                <p style={S.contactTxt}>{doctor.hospital.timings}</p>
              </div>
            </div>
          </motion.div>



          {/* ── Card 5: Facilities (spans 12 cols, 2 rows) ── */}
          <motion.div
            style={{ ...S.bentoCard, gridColumn: 'span 12', gridRow: 'span 2' }}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={S.bentoHeader}>
              <div style={{ ...S.bentoIcon, backgroundColor: '#fce7f3', color: '#ec4899' }}>
                <Building2 size={20} />
              </div>
              <h3 style={S.bentoTitle}>Hospital Facilities</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {doctor.hospital?.facilities?.map((f, i) => (
                <span key={i} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '8px 16px', borderRadius: '12px',
                  backgroundColor: '#f9fafb', fontSize: '13px',
                  fontWeight: 600, color: '#374151', border: '1px solid #f0f0f0',
                }}>
                  <Zap size={12} color="#3770bf" />
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ══════════ CONDITIONS — Bento Layout ══════════ */}
      <div style={S.condWrap}>
        <div style={S.condHeader}>
          <h2 style={S.condTitle}>Conditions<br />Treated</h2>
          <p style={S.condSub}>Specialized diagnosis and treatment across a wide range of ophthalmic conditions</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(100px, auto)',
          gap: '16px',
        }}>
          {doctor.ailments?.map((ailment, idx) => {
            const c = bannerColors[idx % bannerColors.length];
            /* Vary span sizes for visual interest */
            let colSpan, rowSpan;
            if (idx === 0) { colSpan = 5; rowSpan = 2; }       /* big featured */
            else if (idx === 1) { colSpan = 4; rowSpan = 2; }   /* medium tall */
            else if (idx === 2) { colSpan = 3; rowSpan = 2; }   /* small tall */
            else if (idx === 3) { colSpan = 6; rowSpan = 1; }   /* wide short */
            else if (idx === 4) { colSpan = 6; rowSpan = 1; }   /* wide short */
            else if (idx === 5) { colSpan = 4; rowSpan = 1; }   /* medium */
            else if (idx === 6) { colSpan = 4; rowSpan = 1; }   /* medium */
            else if (idx === 7) { colSpan = 4; rowSpan = 1; }   /* medium */
            else { colSpan = 3; rowSpan = 1; }                   /* small */

            return (
              <motion.div key={idx}
                initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.06 }}
                style={{
                  gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}`,
                  backgroundColor: c.bg, borderRadius: '24px',
                  padding: idx < 3 ? '36px 32px' : '28px 28px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  position: 'relative', overflow: 'hidden', cursor: 'pointer',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${c.bg}35`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Giant ghost number */}
                <span style={{
                  position: 'absolute',
                  bottom: idx < 3 ? '-30px' : '-20px',
                  right: idx < 3 ? '-10px' : '-5px',
                  fontFamily: "'Philosopher', sans-serif",
                  fontSize: idx < 3 ? '180px' : '120px',
                  fontWeight: 900, lineHeight: 1,
                  color: c.dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)',
                  pointerEvents: 'none', userSelect: 'none',
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Top — icon circle */}
                <div style={{
                  width: idx < 3 ? '52px' : '40px',
                  height: idx < 3 ? '52px' : '40px',
                  borderRadius: '50%',
                  backgroundColor: c.dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: idx < 3 ? '0' : '12px',
                }}>
                  <Eye size={idx < 3 ? 22 : 16} color={c.dark ? '#fff' : '#1A1A1A'} />
                </div>

                {/* Bottom — text */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Philosopher', sans-serif",
                    fontSize: idx < 3 ? '24px' : '18px',
                    fontWeight: 700, color: c.dark ? '#fff' : '#1A1A1A',
                    margin: 0, lineHeight: 1.2,
                  }}>{ailment}</h3>
                  {idx < 5 && (
                    <p style={{
                      fontSize: '13px', fontWeight: 500, margin: '8px 0 0',
                      color: c.dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.4)',
                    }}>Specialized treatment & care</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
