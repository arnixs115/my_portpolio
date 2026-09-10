import { useState } from "react";
import { links, strengths } from "./data/portfolioData";
import Header from "./components/Header";
import StrengthCard from "./components/StrengthCard";
import DetailSection from "./components/DetailSection";
import ExternalLink from "./components/ExternalLink";
import "./styles/global.css";

export default function App() {
  const [selectedId, setSelectedId] = useState(strengths[0].id);
  const selected = strengths.find((strength) => strength.id === selectedId);
  return <><Header /><main id="top"><section className="hero container" aria-labelledby="hero-title"><p className="eyebrow">AI DEVELOPER</p><h1 id="hero-title">AI를 통해 문제를 해결하고,<br />아이디어를 현실로 만드는 Developer.</h1><p>다양한 AI 기술을 직접 실험하고 프로젝트에 적용하며, 문제에 맞는 해결 방법을 만들어갑니다.</p></section>
    <section className="strengths-section container" aria-labelledby="strengths-title"><div className="section-header"><p className="eyebrow">CORE STRENGTHS</p><h2 id="strengths-title">How I Work</h2></div><div className="strength-grid">{strengths.map((strength) => <StrengthCard key={strength.id} strength={strength} selected={strength.id === selectedId} onSelect={() => setSelectedId(strength.id)} />)}</div></section>
    <section className="evidence-bar" aria-label="공개 가능한 근거"><div className="container evidence-inner"><p className="evidence-title">EVIDENCE</p><ul><li>Public Projects</li><li>Source Code</li><li>Wrap-up Reports</li></ul><ExternalLink href={links.github} className="evidence-cta">View GitHub</ExternalLink></div></section>
    <DetailSection strength={selected} />
  </main><footer><div className="container footer-inner"><p>Let&apos;s Build Something.</p><ExternalLink href={links.github} className="footer-github">GitHub</ExternalLink><small>© 2026</small></div></footer></>;
}
