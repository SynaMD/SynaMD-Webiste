export default function Home({ language }) {
  return (
    <main>
      <section className="section">
        <h2>{language.problemTitle}</h2>
        <div className="card">{language.problemText}</div>
      </section>

      <section className="section">
        <h2 className="teal">{language.solutionTitle}</h2>
        <p className="sub">{language.solutionSub}</p>

        {language.pillars.map((p) => (
          <div className="pillar" key={p.title}>
            <img src={p.icon} alt="" className="pillar-icon" />
            <div className="pillar-name">
              <b>{p.title}</b>
              <small>{p.sub}</small>
            </div>
            <p className="pillar-text">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="why">
        <div className="section">
          <h2 className="teal">{language.whyTitle}</h2>
          <div className="card">{language.whyText}</div>
        </div>
      </section>
    </main>
  );
}