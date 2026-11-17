import { Link } from "react-router-dom";

function NextPage({ eyebrow, to, children }) {
  return (
    <section className="next-page wrap">
      <span>{eyebrow}</span>
      <Link to={to}>{children} <b aria-hidden="true">↗</b></Link>
    </section>
  );
}

export default NextPage;
