import { school } from './data/school';

const navItems = [
  { label: 'Početna', href: '#top' },
  { label: 'O nama', href: '#about' },
  { label: 'Obuka', href: '#training' },
  { label: 'Proces', href: '#process' },
  { label: 'Vozila', href: '#vehicles' },
  { label: 'Galerija', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' }
];

const steps = [
  ['01', 'Informiši se', 'Pozovi nas i saznaj aktuelne informacije o početku obuke.'],
  ['02', 'Upis', 'Dogovori naredne korake za upis u autoškolu.'],
  ['03', 'Obuka', 'Kroz teorijsku i praktičnu nastavu gradiš sigurnost za volanom.'],
  ['04', 'Samostalna vožnja', 'Znanje i navike koje stekneš ostaju s tobom i nakon ispita.']
];

const benefits = [
  ['Jasan početak', 'Od prvog poziva znaš koji su naredni koraci.'],
  ['Sigurnost na prvom mjestu', 'Obuka se temelji na razumijevanju saobraćaja i odgovornoj vožnji.'],
  ['Podrška kroz proces', 'Pitanja i nedoumice rješavaš uz podršku tokom obuke.'],
  ['Praktična lokacija', 'Pronađi nas u WOG Centru na adresi Jošanička 55, Vogošća.']
];

const trainingPoints = ['razumijevanje saobraćaja', 'kontrola vozila', 'opažanje i procjena situacije', 'donošenje odluka', 'sigurno ponašanje', 'samopouzdanje u vožnji'];

const faqs = [
  ['Gdje se nalazi Autoškola TEMPO?', `U WOG Centru, na adresi ${school.address}.`],
  ['Kako mogu kontaktirati autoškolu?', `Telefonom na ${school.phone}.`],
  ['Kako mogu započeti obuku?', 'Pozovi nas kako bi dobio aktuelne informacije o upisu i narednim koracima.'],
  ['Da li je moguće plaćanje na rate?', 'Javne informacije navode mogućnost plaćanja na rate. Za aktuelne uslove pozovi autoškolu.']
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: school.name,
  telephone: school.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jošanička 55',
    addressLocality: 'Vogošća',
    addressRegion: 'Sarajevo',
    addressCountry: 'BA'
  },
  hasMap: school.googleMapsUrl
};

function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div id="top" className="page-shell">
        <header className="site-header">
          <div className="container header-inner">
            <a href="#top" className="brand" aria-label={school.name}>
              <span className="brand-mark">[VIP AUTOŠKOLA LOGO]</span><span className="brand-submark">SARAJEVO · ILIDŽA</span>
            </a>
            <nav className="main-nav" aria-label="Glavna navigacija">
              {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
            </nav>
            <a href="#contact" className="button button-primary small-button">UPIŠI SE</a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">AUTOŠKOLA · ILIDŽA · SARAJEVO</p>
                <h1>VIP AUTOŠKOLA</h1>
                <p className="lead">Siguran korak do vozačke dozvole.</p>
                <div className="cta-row">
                  <a href="#contact" className="button button-primary">UPIŠI SE</a>
                  <a href={school.phoneHref} className="button button-secondary">POZOVI NAS</a>
                </div>
                <p className="location-line">{school.address}</p>
              </div>
              <div className="hero-visual" aria-label="Placeholder za fotografiju vozila Auto Škole Start">
                <div className="visual-placeholder hero-placeholder"><span>START</span><small>Fotografija vozila uskoro</small></div>
              </div>
            </div>
          </section>

          <section className="trust-bar" aria-label="Osnovne informacije">
            <div className="container trust-grid">
              <div><strong>VIP</strong><span>autoškola Sarajevo</span></div>
              <div><strong>Ilidža</strong><span>Šehitluci 25</span></div>
              <div><strong>062 601 201</strong><span>pozovi nas</span></div>
            </div>
          </section>

          <section id="about" className="section">
            <div className="container about-grid">
              <div className="visual-placeholder about-placeholder"><span>START</span><small>Fotografija prostora uskoro</small></div>
              <div className="section-copy">
                <p className="section-kicker">O nama</p>
                <h2>Vaš put do vozačke dozvole.</h2>
                <p>VIP Autoškola posluje od 2019. godine.</p>
                <p>Informišite se o procesu obuke i napravite prvi korak prema odgovornoj vožnji.</p>
              </div>
            </div>
          </section>

          <section id="process" className="section process-section"><div className="container"><div className="section-heading center"><p className="section-kicker">Proces</p><h2>Jasan put kroz obuku.</h2></div><div className="steps-grid">{steps.map(([number, title, text]) => <article key={number} className="step-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

          <section className="section section-alt">
            <div className="container">
              <div className="section-heading center"><p className="section-kicker">Zašto VIP</p><h2>Početak koji daje sigurnost.</h2></div>
              <div className="card-grid benefits-grid">
                {benefits.map(([title, text], index) => <article key={title} className="info-card"><span className="card-badge">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </section>

          <section id="training" className="section">
            <div className="container training-layout">
              <div className="training-copy"><p className="section-kicker">Obuka</p><h2>Priprema za sigurnu vožnju.</h2><p>Informišite se o teorijskoj nastavi, praktičnoj obuci i pripremi za ispit.</p><ul className="check-list">{['Teorijska nastava', 'Praktična obuka', 'Priprema za ispit', 'B kategorija — informacije će biti dodane'].map((item) => <li key={item}>{item}</li>)}</ul><a href="#contact" className="button button-primary">SAZNAJ VIŠE</a></div>
              <div className="visual-placeholder training-placeholder"><span>OBUKA</span><small>Fotografija obuke uskoro</small></div>
            </div>
          </section>

          <section id="vehicles" className="section section-alt">
            <div className="container"><div className="section-heading"><p className="section-kicker">Vozila</p><h2>Mjesto za VIP vozila.</h2></div><div className="vehicle-showcase"><article className="vehicle-feature"><div className="visual-placeholder vehicle-placeholder"><span>VOZILO</span><small>Fotografija vozila će biti dodana</small></div><div className="vehicle-feature-copy"><h3>Vozila za obuku</h3><p>Detalji o vozilima bit će dodani kada budu potvrđene fotografije i informacije.</p></div></article><article className="vehicle-feature secondary"><div className="visual-placeholder vehicle-placeholder"><span>VOZILO</span><small>Fotografija vozila će biti dodana</small></div><div className="vehicle-feature-copy"><h3>Praktična obuka</h3><p>Informacije o vozilima bit će dodane.</p></div></article></div></div>
          </section>

          <section id="gallery" className="section"><div className="container"><div className="section-heading center"><p className="section-kicker">Galerija</p><h2>Stvarne VIP fotografije uskoro.</h2></div><div className="gallery-grid">{['Vozilo', 'Obuka', 'Lokacija', 'Detalj'].map((label) => <div key={label} className="gallery-tile"><span>{label}</span><small>Fotografija će biti dodana</small></div>)}</div></div></section>

          <section id="contact" className="section location-section section-alt"><div className="container location-grid"><div className="location-copy"><p className="section-kicker">Kontakt</p><h2>Spremni za prvi korak?</h2><p className="brand-line">{school.name}</p><p>{school.address}</p><div className="contact-phone-block"><a href={school.phoneHref}>{school.phone}</a><br /><a href={school.secondaryPhoneHref}>{school.secondaryPhone}</a></div><div className="cta-row location-actions"><a href={school.phoneHref} className="button button-primary">POZOVI NAS</a><a href={school.googleMapsUrl} className="button button-secondary" target="_blank" rel="noreferrer">OTVORI LOKACIJU</a></div></div><div className="map-card"><span>LOKACIJA</span><strong>Šehitluci 25<br />Ilidža, Sarajevo</strong><a href={school.googleMapsUrl} target="_blank" rel="noreferrer">Otvori Google Maps →</a></div></div></section>

          <section id="faq" className="section"><div className="container"><div className="section-heading center"><p className="section-kicker">FAQ</p><h2>Najčešća pitanja.</h2></div><div className="faq-list">{faqs.map(([q, a], index) => <details key={q} className="faq-item" open={index === 0}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

          <section className="final-cta"><div className="container final-cta-inner"><div><p className="section-kicker light">ZA POČETAK</p><h2>Spremni za prvi korak?</h2><p>Kontaktirajte VIP Autoškolu i saznajte više o procesu obuke.</p></div><div className="cta-row justify-end"><a href="#contact" className="button button-light">UPIŠI SE</a><a href={school.phoneHref} className="button button-dark">062 601 201</a></div></div></section>
        </main>

        <footer className="site-footer"><div className="container footer-grid"><div><p className="footer-brand">VIP AUTOŠKOLA</p><p>{school.address}</p></div><div><ul className="footer-list simple">{navItems.map((item) => <li key={item.label}><a href={item.href}>{item.label}</a></li>)}</ul></div><div><ul className="footer-list"><li><a href={school.phoneHref}>{school.phone}</a></li><li><a href={school.secondaryPhoneHref}>{school.secondaryPhone}</a></li><li><a href={school.googleMapsUrl} target="_blank" rel="noreferrer">Google Maps</a></li></ul></div></div></footer>
      </div>
      <a href={school.phoneHref} className="mobile-cta">POZOVI 062 601 201</a>
    </>
  );
}

export default App;