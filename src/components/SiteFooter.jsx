import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Link className="footer-brand" to="/">TAYLOR SWIFT</Link>
        <span>NHIỀU KỶ NGUYÊN · MỘT HÀNH TRÌNH ÂM NHẠC</span>
        <span>© <span>{new Date().getFullYear()}</span></span>
      </div>
    </footer>
  );
}

export default SiteFooter;
