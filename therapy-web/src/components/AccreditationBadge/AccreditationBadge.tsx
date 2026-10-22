import "./AccreditationBadge.scss";
import ncpsBadge from "../../assets/ncps-badge.png";

// The BACP badge appears automatically once its official file is added to
// src/assets as bacp-badge.png (or .svg / .jpg). Use the badge supplied
// through the BACP member area, unedited.
const bacpFiles = import.meta.glob<string>("../../assets/bacp-badge.{png,svg,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});
const bacpBadge = Object.values(bacpFiles)[0];

function AccreditationBadge() {
  return (
    <div className="accreditation-badge">
      <img
        src={ncpsBadge}
        alt="NCPS Accredited Registrant - Professional Standards Authority Accredited Register"
        className="accreditation-badge__image"
      />
      {bacpBadge && (
        <img
          src={bacpBadge}
          alt="BACP Registered Member"
          className="accreditation-badge__image accreditation-badge__image--bacp"
        />
      )}
    </div>
  );
}

export default AccreditationBadge;
