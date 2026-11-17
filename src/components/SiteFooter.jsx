import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Link className="footer-brand" to="/">TAYLOR SWIFT</Link>
        <span>TIỂU SỬ ÂM NHẠC · BẢN TÓM LƯỢC TIẾNG VIỆT</span>
        <span>© <span>{new Date().getFullYear()}</span></span>
      </div>
    </footer>
  );
}

export default SiteFooter;
