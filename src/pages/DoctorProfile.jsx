import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronDown, Phone, MapPin, Award,
  GraduationCap, Eye, BookOpen, Presentation, Users,
  Building2, Zap, Globe, Star, Calendar, Briefcase,
  FileText, Mic, Shield,
} from 'lucide-react';
import { doctors } from '../data/doctors';
import drImg from '../img/R-1.jpg';

/* ════════════════════════════════════════════════════════
   COLOR PALETTE CONSTANTS
   ════════════════════════════════════════════════════════ */
const COLORS = {
  moonTint:   '#f3f6ff',
  sunnyHerb:  '#cef26d',
  blueHarbor: '#3770bf',
  iceBlue:    '#8dc2ff',
  dark:       '#1A1A1A',
  darkSoft:   '#2a2a2a',
  textMuted:  '#6b7280',
  white:      '#ffffff',
};

/* ════════════════════════════════════════════════════════
   ACCORDION COMPONENT
   ════════════════════════════════════════════════════════ */
function Accordion({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="dp-accordion">
      <button
        className="dp-accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="dp-accordion-icon-wrap">{icon}</span>
        <span className="dp-accordion-title">{title}</span>
        <ChevronDown
          size={20}
          style={{
            marginLeft: 'auto',
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            color: COLORS.blueHarbor,
          }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="dp-accordion-content">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   INDIA MAP SVG COMPONENT
   ════════════════════════════════════════════════════════ */
function JourneyMap({ locations }) {
  const [activePin, setActivePin] = useState(null);

  /* Pin positions mapped to SVG viewBox coordinates */
  const pinData = [
    { ...locations[0], svgX: 340, svgY: 280, color: COLORS.sunnyHerb },  // Nagpur
    { ...locations[1], svgX: 310, svgY: 430, color: COLORS.iceBlue },    // Tirunelveli
    { ...locations[2], svgX: 325, svgY: 400, color: COLORS.iceBlue },    // Madurai
    { ...locations[3], svgX: 80,  svgY: 80,  color: COLORS.blueHarbor }, // London
    { ...locations[4], svgX: 30,  svgY: 120, color: COLORS.blueHarbor }, // USA
  ];

  /* Path connecting pins chronologically: Nagpur → Tirunelveli → Madurai → London → USA → back to Nagpur */
  const pathD = `M340,280 C330,350 315,400 310,430 Q315,415 325,400 C280,300 150,150 80,80 C60,90 40,110 30,120 C100,200 250,250 340,280`;

  return (
    <div className="dp-map-container">
      <svg viewBox="0 0 500 500" className="dp-map-svg" aria-label="Journey map showing Dr. Ambatkar's career path across cities">
        {/* Background grid */}
        <defs>
          <pattern id="mapGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke={COLORS.iceBlue} strokeWidth="0.3" opacity="0.4" />
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <rect width="500" height="500" fill="url(#mapGrid)" />

        {/* Simplified India outline */}
        <path
          d="M280,180 C290,170 320,160 340,165 C360,170 380,180 390,200 C400,220 405,250 400,270 C395,290 385,310 370,340 C355,370 340,390 330,420 C325,440 315,460 300,470 C285,465 275,450 270,430 C265,410 260,390 255,370 C250,350 245,330 250,310 C255,290 265,280 270,260 C275,240 275,220 280,200 Z"
          fill={COLORS.iceBlue}
          opacity="0.15"
          stroke={COLORS.iceBlue}
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* UK small circle */}
        <circle cx="80" cy="80" r="20" fill={COLORS.iceBlue} opacity="0.12" stroke={COLORS.iceBlue} strokeWidth="0.8" strokeOpacity="0.4" />
        <text x="80" y="60" textAnchor="middle" fill={COLORS.blueHarbor} fontSize="8" fontFamily="Inter" fontWeight="600" opacity="0.7">UK</text>

        {/* USA small area */}
        <rect x="10" y="100" width="40" height="30" rx="8" fill={COLORS.iceBlue} opacity="0.12" stroke={COLORS.iceBlue} strokeWidth="0.8" strokeOpacity="0.4" />
        <text x="30" y="95" textAnchor="middle" fill={COLORS.blueHarbor} fontSize="8" fontFamily="Inter" fontWeight="600" opacity="0.7">USA</text>

        {/* Connection path */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={COLORS.blueHarbor}
          strokeWidth="1.5"
          strokeDasharray="6,4"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />

        {/* Location pins */}
        {pinData.map((pin, idx) => (
          <g
            key={idx}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setActivePin(idx)}
            onMouseLeave={() => setActivePin(null)}
          >
            {/* Pulse ring */}
            <motion.circle
              cx={pin.svgX} cy={pin.svgY} r="12"
              fill="none" stroke={pin.color} strokeWidth="1.5"
              initial={{ r: 8, opacity: 0.6 }}
              animate={{ r: [8, 16, 8], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
            />
            {/* Pin dot */}
            <circle cx={pin.svgX} cy={pin.svgY} r="6" fill={pin.color} filter="url(#glow)" />
            <circle cx={pin.svgX} cy={pin.svgY} r="3" fill={COLORS.white} />

            {/* Label */}
            <text
              x={pin.svgX + (pin.svgX > 250 ? -15 : 15)}
              y={pin.svgY - 14}
              textAnchor={pin.svgX > 250 ? 'end' : 'start'}
              fill={COLORS.dark}
              fontSize="9"
              fontFamily="'Playfair Display', serif"
              fontWeight="700"
            >
              {pin.city}
            </text>
          </g>
        ))}
      </svg>

      {/* Pin detail cards */}
      <div className="dp-map-pins-list">
        {pinData.map((pin, idx) => (
          <motion.div
            key={idx}
            className={`dp-map-pin-card ${activePin === idx ? 'active' : ''}`}
            onMouseEnter={() => setActivePin(idx)}
            onMouseLeave={() => setActivePin(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="dp-map-pin-dot" style={{ backgroundColor: pin.color }} />
            <div>
              <p className="dp-map-pin-city">{pin.city}<span className="dp-map-pin-country">, {pin.country}</span></p>
              <p className="dp-map-pin-label">{pin.label}</p>
              <p className="dp-map-pin-period">{pin.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MAIN DOCTOR PROFILE COMPONENT
   ════════════════════════════════════════════════════════ */
export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!doctor) {
    return (
      <div className="dp-not-found">
        <h2>Doctor not found</h2>
        <Link to="/" style={{ color: COLORS.blueHarbor, fontWeight: 600 }}>Return to Home</Link>
      </div>
    );
  }

  const yearsSince = new Date().getFullYear() - (doctor.practisingSince || 2001);

  /* Polaroid rotation angles for conditions cards */
  const rotations = [-3, 2, -1.5, 3, -2, 1, -2.5, 2.5, -1, 1.5];

  return (
    <div className="dp-page">

      {/* ╔══════════════════════════════════════════════════╗
          ║  SECTION 1 — HERO & OVERVIEW                    ║
          ╚══════════════════════════════════════════════════╝ */}
      <section className="dp-hero">
        <div className="dp-hero-gridlines" />

        <div className="dp-wrap">
          <Link to="/" className="dp-back-link">
            <ChevronLeft size={18} />
            <span>Back to Home</span>
          </Link>

          <div className="dp-hero-layout">
            {/* Left — Text */}
            <motion.div
              className="dp-hero-left"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="dp-hero-badge-row">
                <span className="dp-pill dp-pill-herb">
                  <Eye size={14} /> Vitreo-Retinal Surgeon
                </span>
                <span className="dp-pill dp-pill-ice">
                  <Calendar size={14} /> Since {doctor.practisingSince}
                </span>
              </div>

              <h1 className="dp-hero-title">
                <span className="dp-hero-title-dr">Dr.</span>
                <br />
                <span className="dp-hero-title-name">Shamik A.</span>
                <br />
                <span className="dp-hero-title-surname">Ambatkar</span>
              </h1>

              <p className="dp-hero-quals">{doctor.qualifications}</p>

              <p className="dp-hero-desc">{doctor.about}</p>

              {/* Stats row */}
              <div className="dp-hero-stats">
                <div className="dp-stat">
                  <span className="dp-stat-num">{yearsSince}+</span>
                  <span className="dp-stat-label">Years<br/>Experience</span>
                </div>
                <div className="dp-stat-divider" />
                <div className="dp-stat">
                  <span className="dp-stat-num">{doctor.ailments?.length || 0}</span>
                  <span className="dp-stat-label">Conditions<br/>Treated</span>
                </div>
                <div className="dp-stat-divider" />
                <div className="dp-stat">
                  <span className="dp-stat-num">{doctor.publications?.length || 0}</span>
                  <span className="dp-stat-label">Research<br/>Papers</span>
                </div>
              </div>
            </motion.div>

            {/* Right — Image collage */}
            <motion.div
              className="dp-hero-right"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            >
              {/* Main image with overlapping frames */}
              <div className="dp-hero-collage">
                <div className="dp-collage-frame dp-collage-frame-accent" />
                <div className="dp-collage-frame dp-collage-frame-ice" />
                <div className="dp-collage-main-img">
                  <img src={drImg} alt="Dr. Shamik A. Ambatkar" />
                </div>
                {/* Abstract map element */}
                <div className="dp-collage-map-element">
                  <MapPin size={16} color={COLORS.sunnyHerb} />
                  <span>Nagpur, India</span>
                </div>
                {/* Floating credential badge */}
                <motion.div
                  className="dp-collage-badge"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Award size={18} color={COLORS.blueHarbor} />
                  <div>
                    <p className="dp-collage-badge-title">DNB Ophthalmology</p>
                    <p className="dp-collage-badge-sub">Aravind Eye Hospital</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative quote strip */}
        <div className="dp-hero-quote-strip">
          <p>"Dedicated to restoring and preserving vision through advanced surgical excellence."</p>
        </div>
      </section>


      {/* ╔══════════════════════════════════════════════════╗
          ║  SECTION 2 — SPECIALIZATIONS NODE MAP           ║
          ╚══════════════════════════════════════════════════╝ */}
      <section className="dp-skills">
        <div className="dp-wrap">
          <motion.div
            className="dp-section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="dp-section-tag">Expertise</span>
            <h2 className="dp-section-title">Specialization &<br/>Core Competencies</h2>
          </motion.div>

          <div className="dp-node-map">
            {/* Central node */}
            <motion.div
              className="dp-node-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <Eye size={28} color={COLORS.white} />
              <span>Core Expertise</span>
            </motion.div>

            {/* Connecting lines + skill nodes */}
            <div className="dp-node-ring">
              {(doctor.specializations || []).map((spec, idx) => {
                const angle = (idx * 72) - 90; /* 360/5 = 72 degrees apart, start from top */
                return (
                  <motion.div
                    key={idx}
                    className="dp-node-item"
                    style={{ '--angle': `${angle}deg`, '--idx': idx }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                  >
                    {/* Connecting line */}
                    <div className="dp-node-line" style={{ '--angle': `${angle}deg` }} />
                    <div className="dp-node-card">
                      <h4 className="dp-node-card-title">{spec.title}</h4>
                      <p className="dp-node-card-desc">{spec.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ╔══════════════════════════════════════════════════╗
          ║  SECTION 3 — EDUCATION & EXPERIENCE TIMELINE    ║
          ╚══════════════════════════════════════════════════╝ */}
      <section className="dp-timeline">
        <div className="dp-wrap">
          <motion.div
            className="dp-section-header dp-section-header-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="dp-section-tag dp-section-tag-light">Career</span>
            <h2 className="dp-section-title dp-section-title-light">Education &<br/>Experience</h2>
          </motion.div>

          <div className="dp-timeline-grid">
            {/* Education cards */}
            {(doctor.education || []).map((edu, idx) => (
              <motion.div
                key={`edu-${idx}`}
                className="dp-passport-card"
                style={{ '--rotate': `${idx % 2 === 0 ? -1.5 : 1.5}deg` }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="dp-passport-stamp">
                  <GraduationCap size={20} color={COLORS.sunnyHerb} />
                </div>
                <span className="dp-passport-year">{edu.year}</span>
                <h4 className="dp-passport-degree">{edu.degree}</h4>
                <p className="dp-passport-institution">{edu.institution}</p>
                <p className="dp-passport-location">
                  <MapPin size={12} /> {edu.location}
                </p>
              </motion.div>
            ))}

            {/* Experience cards */}
            {(doctor.experienceTimeline || []).map((exp, idx) => (
              <motion.div
                key={`exp-${idx}`}
                className="dp-passport-card dp-passport-card-wide"
                style={{ '--rotate': `${idx % 2 === 0 ? 1 : -1}deg` }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                <div className="dp-passport-stamp">
                  <Briefcase size={20} color={COLORS.sunnyHerb} />
                </div>
                <span className="dp-passport-year">{exp.period}</span>
                <h4 className="dp-passport-degree">{exp.role}</h4>
                <p className="dp-passport-institution">{exp.institution}</p>
                <p className="dp-passport-desc">{exp.description}</p>
              </motion.div>
            ))}

            {/* Fellowship cards */}
            {(doctor.fellowships || []).map((f, idx) => {
              const parts = f.split('.');
              return (
                <motion.div
                  key={`fellow-${idx}`}
                  className="dp-passport-card dp-passport-card-accent"
                  style={{ '--rotate': `${idx % 2 === 0 ? -2 : 2}deg` }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
                >
                  <div className="dp-passport-stamp">
                    <Award size={20} color={COLORS.dark} />
                  </div>
                  <span className="dp-passport-year">{parts[2]?.trim() || ''}</span>
                  <h4 className="dp-passport-degree">{parts[0]?.trim()}</h4>
                  <p className="dp-passport-institution">{parts[1]?.trim()}</p>
                  <p className="dp-passport-location">
                    <Globe size={12} /> {parts[3]?.trim().replace(/[()]/g, '') || ''}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ╔══════════════════════════════════════════════════╗
          ║  SECTION 4 — CONDITIONS TREATED GALLERY         ║
          ╚══════════════════════════════════════════════════╝ */}
      <section className="dp-conditions">
        <div className="dp-wrap">
          <motion.div
            className="dp-section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="dp-section-tag">Treatments</span>
            <h2 className="dp-section-title">Conditions<br/>Treated</h2>
            <p className="dp-section-subtitle">Specialized diagnosis and treatment across a wide range of ophthalmic conditions</p>
          </motion.div>

          <div className="dp-polaroid-grid">
            {(doctor.ailments || []).map((ailment, idx) => (
              <motion.div
                key={idx}
                className="dp-polaroid"
                style={{ '--rotate': `${rotations[idx % rotations.length]}deg` }}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotations[idx % rotations.length] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              >
                <div className="dp-polaroid-inner">
                  <div className="dp-polaroid-icon">
                    <Eye size={24} color={COLORS.blueHarbor} />
                  </div>
                  <span className="dp-polaroid-number">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <p className="dp-polaroid-label">{ailment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ╔══════════════════════════════════════════════════╗
          ║  SECTION 5 — JOURNEY OF LIFE MAP                ║
          ╚══════════════════════════════════════════════════╝ */}
      <section className="dp-journey">
        <div className="dp-wrap">
          <motion.div
            className="dp-section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="dp-section-tag">Journey</span>
            <h2 className="dp-section-title">Journey of<br/>Life</h2>
            <p className="dp-section-subtitle">Tracing the path of excellence across continents</p>
          </motion.div>

          {doctor.journeyLocations && (
            <JourneyMap locations={doctor.journeyLocations} />
          )}
        </div>
      </section>


      {/* ╔══════════════════════════════════════════════════╗
          ║  ACCORDIONS — Publications, Presentations, etc  ║
          ╚══════════════════════════════════════════════════╝ */}
      <section className="dp-accordions">
        <div className="dp-wrap">
          {/* Publications */}
          <Accordion
            title={`Publications & Research (${doctor.publications?.length || 0})`}
            icon={<BookOpen size={18} color={COLORS.blueHarbor} />}
            defaultOpen={true}
          >
            <div className="dp-pub-list">
              {(doctor.publications || []).map((pub, idx) => (
                <div key={idx} className="dp-pub-item">
                  <span className="dp-pub-number">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="dp-pub-title">{pub.title}</p>
                    <p className="dp-pub-journal">
                      <FileText size={12} /> {pub.journal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Presentations & Teaching */}
          <Accordion
            title="Presentations & Teaching"
            icon={<Mic size={18} color={COLORS.blueHarbor} />}
          >
            <div className="dp-pres-list">
              {(doctor.presentations || []).map((pres, idx) => (
                <div key={idx} className="dp-pres-item">
                  <div className="dp-pres-dot" />
                  <p>{pres}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Accreditations */}
          <Accordion
            title="Accreditations & Memberships"
            icon={<Shield size={18} color={COLORS.blueHarbor} />}
          >
            <div className="dp-pres-list">
              {(doctor.accreditations || []).map((acc, idx) => (
                <div key={idx} className="dp-pres-item">
                  <div className="dp-pres-dot" style={{ backgroundColor: COLORS.sunnyHerb }} />
                  <p>{acc}</p>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Contact */}
          <div className="dp-contact-strip">
            <div className="dp-contact-strip-inner">
              <Phone size={20} color={COLORS.blueHarbor} />
              <div>
                <p className="dp-contact-strip-label">Contact</p>
                <p className="dp-contact-strip-value">{doctor.phone}</p>
              </div>
            </div>
            <div className="dp-contact-strip-inner">
              <Building2 size={20} color={COLORS.blueHarbor} />
              <div>
                <p className="dp-contact-strip-label">Hospital</p>
                <p className="dp-contact-strip-value">{doctor.hospital?.name}</p>
                <p className="dp-contact-strip-address">{doctor.hospital?.address}</p>
              </div>
            </div>
            <div className="dp-contact-strip-inner">
              <MapPin size={20} color={COLORS.sunnyHerb} />
              <div>
                <p className="dp-contact-strip-label">Timings</p>
                <p className="dp-contact-strip-value">{doctor.hospital?.timings}</p>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="dp-facilities">
            <h3 className="dp-facilities-title">Hospital Facilities</h3>
            <div className="dp-facilities-grid">
              {(doctor.hospital?.facilities || []).map((f, idx) => (
                <motion.span
                  key={idx}
                  className="dp-facility-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Zap size={12} color={COLORS.blueHarbor} />
                  {f}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
