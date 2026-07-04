import { heroContent } from "../data/content";

import "../styles/badge.css";

function SaleBadge() {
  return (
    <div className="sale-badge">
      {heroContent.badge}
    </div>
  );
}

export default SaleBadge;
