export default function ExternalLink({ href, children, className = "" }) {
  if (!href) return <span className={`link-disabled ${className}`} aria-label={`${children} — Link coming soon`}>{children} <em>Link coming soon</em></span>;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children} <span aria-hidden="true">↗</span><span className="sr-only"> (새 창)</span></a>;
}
