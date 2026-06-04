export const doctors = [
  {
    id: "shamik",
    name: "Dr. Shamik A. Ambatkar",
    qualifications: "MBBS, DNB (Ophthalmology)",
    specialisation: "Vitreo-Retinal Surgery",
    experience: "22+",
    practisingSince: 2001,
    phone: "0712 2232005",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200",
    about: "Dr. Shamik A Ambatkar is a premier Vitreo-Retinal Surgeon based in Nagpur at Shaureen Advanced Eye Care Hospital. He has an MBBS and Diplomate of the National Board (DNB) in Ophthalmology as his main medical qualifications. He did his post-graduation from Aravind Eye Hospital in Madurai, where he was also a Consultant for four years, while completing a Fellowship in Vitreo-Retina there and clearing the Part I requirements for fellow status at the International Council of Ophthalmology (London).",

    specializations: [
      { title: "Vitreo-Retinal Surgery", description: "Advanced surgical treatment of retinal detachments, macular holes, and vitreous hemorrhage." },
      { title: "Manual SICS", description: "Manual small-incision cataract surgery — a cost-effective, sutureless technique." },
      { title: "Instrumental Phacoemulsification", description: "Modern ultrasound-based cataract removal with foldable IOL implantation." },
      { title: "Orbital Surgeries", description: "Surgical management of conditions affecting the eye socket and surrounding structures." },
      { title: "Diabetic Retinopathy Management", description: "Comprehensive screening, laser treatment, and surgical intervention for diabetic eye disease." }
    ],

    education: [
      { degree: "MBBS", institution: "Government Medical College", year: 1995, location: "Nagpur" },
      { degree: "DNB (Ophthalmology)", institution: "Aravind Eye Hospital", year: 2001, location: "Tirunelveli" }
    ],

    experienceTimeline: [
      { role: "Head of Department & Consultant", institution: "Aravind Eye Hospital", period: "2002–2005", description: "Vitreo-Retina services under Dr. P Namperumalsamy. Led retinal surgery department and trained post-graduate residents." },
      { role: "Founder & Chief Surgeon", institution: "Shaureen Advanced Eye Care Hospital", period: "2007–Present", description: "Founded private practice specializing in advanced retinal surgeries, glaucoma management, and laser treatments." }
    ],

    fellowships: [
      "Fellowship in Vitreo-Retinal Surgery. Aravind Eye Hospital. 2003. (India)",
      "Fellow, International Council of Ophthalmology (Part I). London. 2003. (United Kingdom)"
    ],

    accreditations: [
      "Member, Rotary International.",
      "Member, Rotary Club of Nagpur, Wardha.",
      "Organising Committee Member, Tamil Nadu Ophthalmic Association Conference, Tirunelveli. 2004.",
      "Organising Committee Member, Glaucoma Society of India Annual Meeting, Tirunelveli. 2003."
    ],

    publications: [
      { title: "Fuchs' heterochromic uveitis with Duane's retraction syndrome: A co-existence or coincidence?", journal: "Journal of Tamil Nadu Ophthalmic Association" },
      { title: "Pseudo tumour cerebri with penicillin.", journal: "Journal of Tamil Nadu Ophthalmic Association" },
      { title: "Optical coherence tomographic findings in acute macular neuroretinopathy.", journal: "Eye Journal (London)" },
      { title: "Congenital hamartoma of retinal pigment epithelium: OCT findings.", journal: "American Journal of Ophthalmology" },
      { title: "Waardenberg syndrome.", journal: "Indian Journal of Ophthalmology" },
      { title: "OCT findings in solar retinopathy.", journal: "Indian Journal of Ophthalmology" }
    ],

    presentations: [
      "Free Paper Presentations: Annual Tamil Nadu Ophthalmic Association Conference (2000, 2002, 2003, 2004)",
      "Free Paper Presentations: Annual Conference of All India Ophthalmic Association (2003, 2004)",
      "Free Paper Presentation: Annual Conference of the Vitreo-Retinal Society (2004)",
      "Instruction Course & Ophthalmology Update Programs conducted at Aravind Eye Hospital.",
      "Guest Faculty: CME Nagpur Academy of Ophthalmology (2005), IMA Tuticorin, Vidharbha Ophthalmic Society (2007, 2008).",
      "Teaching Experience: Lecturer at INMC, Sawangi, Wardha."
    ],

    journeyLocations: [
      { city: "Nagpur", country: "India", x: 62, y: 52, label: "Government Medical College & Shaureen Hospital", period: "1990–1995, 2007–Present" },
      { city: "Tirunelveli", country: "India", x: 58, y: 82, label: "Aravind Eye Hospital — DNB, Fellowship, HOD", period: "1998–2005" },
      { city: "Madurai", country: "India", x: 60, y: 78, label: "Aravind Eye Hospital — Residency", period: "1998–2001" },
      { city: "London", country: "UK", x: 20, y: 18, label: "International Council of Ophthalmology — Part I", period: "2003" },
      { city: "USA (Telelink)", country: "USA", x: 8, y: 25, label: "Wilmer Eye Hospital — Inaugural Case Report", period: "2003" }
    ],

    ailments: [
      "Age Related Macular Degeneration",
      "Cataract",
      "Conjunctivitis",
      "Diabetic Retinopathy",
      "Endopthalmitis",
      "Glaucoma",
      "Hypertensive Retinopathy",
      "Refractive Errors",
      "Stye",
      "Uveitis"
    ],
    training: [
      "MBBS: Government Medical College. 1995.",
      "DNB (Opthalmology): Aravind Eye Hospital, Tirunelveli. 2001.",
      "Instruction course conducted: Annual Tamil Nadu Ophthalmology Conference. 2004.",
      "Ophthalmology update programme conducted: For all India post-graduates. Aravind Eye Hospital, Tirunelveli. 2002.",
      "Guest faculty: CME, Nagpur Academy of Ophthalmology. 2005."
    ],
    hospital: {
      name: "Shaureen Advanced Eye Care Hospital",
      address: "Ajni Square, Wardha Road, Vivekanand Nagar, Nagpur - 440015, Maharashtra",
      facilities: ["Perimetry", "A-Scan Biometry", "YAG Laser", "Fundus Fluorescein Angiography", "OCT", "Green Laser", "Phaco IOL", "Vitreo-Retinal Surgery"],
      timings: "Mon - Sat: By Appointment | Sun: Closed"
    }
  },
  {
    id: "demo",
    name: "Dr. Demo Specialist",
    qualifications: "MD, FRCS (Ophthalmology)",
    specialisation: "Cornea & Anterior Segment",
    experience: "15+",
    practisingSince: 2010,
    phone: "0712 1234567",
    image: "https://images.unsplash.com/photo-1594824432258-2936a7d57fa4?auto=format&fit=crop&q=80&w=800",
    coverImage: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=1200",
    about: "Dr. Demo Specialist is an experienced ophthalmologist specializing in Cornea and Anterior Segment surgeries. With over 15 years of experience, they provide comprehensive eye care and have performed thousands of successful procedures.",
    fellowships: [
      "Fellowship in Cornea, Demo Eye Institute (USA)",
      "Advanced Anterior Segment Surgery Certification"
    ],
    accreditations: [
      "Member, International Society of Refractive Surgery",
      "Member, Regional Ophthalmic Association"
    ],
    ailments: [
      "Dry Eye Syndrome",
      "Keratoconus",
      "Corneal Ulcers",
      "Pterygium",
      "Refractive Errors"
    ],
    training: [
      "MD: Demo Medical College, 2008",
      "Corneal Surgery Masterclass, 2012"
    ],
    hospital: {
      name: "Demo Vision Care Center",
      address: "Demo Square, Nagpur - 440010, Maharashtra",
      facilities: ["Topography", "Specular Microscopy", "Excimer Laser", "Corneal Cross-linking"],
      timings: "Mon - Fri: 9am - 5pm"
    }
  }
];
