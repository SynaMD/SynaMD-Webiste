export default function Contact({language}) {
  return (
    <main>
      <section className="section contact">
        <h2 className="center">{language.contactTitle}</h2>

        <a className="contact-card" href={`mailto:${language.email}`}>
          <span className="circle">✉</span>
          <div>
            <b>{language.emailLabel}</b>
            <small>{language.email}</small>
          </div>
        </a>

        <a className="contact-card" href={language.linkedinUrl} target="_blank" rel="noreferrer">
          <span className="circle">in</span>
          <div>
            <b>{language.linkedinLabel}</b>
          </div>
        </a>
      </section>

      <section className="why empty" />
    </main>
  );
}