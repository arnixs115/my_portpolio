import { links } from "../data/portfolioData";
import ExternalLink from "./ExternalLink";

export default function Header() {
  return <header className="site-header"><div className="container header-inner"><a className="identity" href="#top" aria-label="페이지 처음으로"><strong>SH.</strong><span>AI Developer</span></a><ExternalLink href={links.github} className="github-link">GitHub</ExternalLink></div></header>;
}
