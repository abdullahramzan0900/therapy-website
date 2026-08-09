import "./AccreditationBadge.scss";
import ncpsBadge from "../../assets/ncps-badge.jpeg";

function AccreditationBadge() {
  return (
    <div className="accreditation-badge">
      <img
        src={ncpsBadge}
        alt="NCPS Accredited Registrant - Professional Standards Authority Accredited Register"
        className="accreditation-badge__image"
      />
    </div>
  );
}

export default AccreditationBadge;