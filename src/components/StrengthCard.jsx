export default function StrengthCard({ strength, selected, onSelect }) {
  return <button type="button" className={`strength-card ${selected ? "is-selected" : ""}`} onClick={onSelect} aria-pressed={selected} aria-controls="strength-detail">
    <span className="card-top"><span className="number">{strength.number}</span>{selected && <span className="selected-label">Selected</span>}</span>
    <span className="card-title">{strength.title}</span>
    <span className="card-description">{strength.shortDescription}</span>
    <span className="card-action">View Details <span aria-hidden="true">↓</span></span>
  </button>;
}
