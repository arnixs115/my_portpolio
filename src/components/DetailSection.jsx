import { links } from "../data/portfolioData";
import ExternalLink from "./ExternalLink";

function CaseItem({ label, children }) { return <div className="case-item"><span className="case-label">{label}</span><p>{children}</p></div>; }
export default function DetailSection({ strength }) {
  const study = strength.caseStudy;
  return <section className="detail-section" id="strength-detail" aria-labelledby="detail-title">
    <div className="container detail-grid"><div className="detail-intro"><p className="eyebrow">SELECTED STRENGTH · {strength.number}</p><h2 id="detail-title">{strength.title}</h2><h3>{strength.heading}</h3><p>{strength.description}</p></div>
      <div className="detail-content"><section aria-labelledby="experience-title"><p className="section-kicker" id="experience-title">EXPERIENCE</p>{strength.applications ? <div className="application-table">{strength.applications.map(([tech, experience]) => <div className="application-row" key={tech}><strong>{tech}</strong><span>{experience}</span></div>)}</div> : <div className="experience-list">{strength.experiences.map((experience) => <article key={experience.title}><h3>{experience.title}</h3><ul>{experience.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>}</section>
      <aside className="key-point"><span>KEY POINT</span><p>{strength.keyPoint}</p></aside></div>
    </div>
    <div className="container case-study"><div className="case-heading"><p className="section-kicker">REPRESENTATIVE CASE STUDY</p><h3>{study.project}</h3></div><div className="case-flow"><CaseItem label="Situation">{study.situation}</CaseItem><CaseItem label="Action">{study.action}</CaseItem><CaseItem label="Result">{study.result}</CaseItem></div><div className="case-evidence"><span className="case-label">Evidence</span><div>{study.evidence.map((item) => <ExternalLink key={item.label} href={links[item.urlKey]} className="evidence-link">{item.label}</ExternalLink>)}</div></div></div>
  </section>;
}
