import { Link } from "react-router-dom";
import ImageCredit from "../components/ImageCredit.jsx";

const eras = [
  {
    className: "era-country",
    animation: "fadeInLeft",
    years: "2006 — 2010",
    title: <>Những năm<br />country</>,
    albums: "Khởi đầu · Fearless · Speak Now",
    to: "/albums#debut",
  },
  {
    className: "era-pop",
    animation: "fadeInUp",
    years: "2012 — 2019",
    title: <>Mở rộng<br />thanh âm</>,
    albums: "Red · 1989 · reputation · Lover",
    to: "/albums#pop",
  },
  {
    className: "era-folk",
    animation: "fadeInDown",
    years: "2020 — 2022",
    title: <>Những câu chuyện<br />thì thầm</>,
    albums: "folklore · evermore · Midnights",
    to: "/albums#folk",
  },
  {
    className: "era-now",
    animation: "zoomIn",
    years: "2023 — 2025",
    title: <>Tái thu âm<br />và chương mới</>,
    albums: "Taylor’s Version · TTPD · Showgirl",
    to: "/albums#recent",
  },
];

function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-content wrap">
          <div className="hero-copy" data-animate="fadeInUp">
            <p className="eyebrow"><span className="spark">✳</span> Chân dung nghệ sĩ · 1989 — nay</p>
            <h1>Từ Nashville<br />đến <em>mọi sân khấu.</em></h1>
            <p className="hero-lede">Hành trình của Taylor Swift — từ một nhạc sĩ trẻ theo đuổi country đến nghệ sĩ liên tục tái định nghĩa âm thanh và câu chuyện của mình.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/career">Khám phá hành trình <span aria-hidden="true">↗</span></Link>
              <Link className="button button-quiet" to="/albums">Đi đến các album</Link>
            </div>
          </div>
          <figure className="hero-art" data-animate="fadeInRight">
            <img
              className="hero-photo"
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Taylor_Swift_%286820736052%29.jpg/960px-Taylor_Swift_%286820736052%29.jpg?utm_source=commons.wikimedia.org&amp;utm_campaign=imageinfo&amp;utm_content=thumbnail"
              alt="Taylor Swift biểu diễn trong Speak Now World Tour tại Sydney năm 2012"
              fetchPriority="high"
            />
            <span className="hero-stamp">SONGWRITER<br />FIRST</span>
            <span className="hero-art-note">SPEAK NOW WORLD TOUR · 2012</span>
            <ImageCredit
              href="https://commons.wikimedia.org/wiki/File:Taylor_Swift_(6820736052).jpg"
              author="Eva Rinaldi"
              licenseHref="https://creativecommons.org/licenses/by-sa/2.0/"
              license="CC BY-SA 2.0"
            />
          </figure>
          <div className="hero-index"><span>01 — 05</span><span>MỘT SỰ NGHIỆP LUÔN CHUYỂN ĐỘNG</span></div>
        </div>
      </section>

      <section className="quick-facts wrap" aria-label="Một vài dấu mốc">
        <div data-animate="fadeInUp"><strong>12</strong><span>Album phòng thu<br />tính đến 2025</span></div>
        <div data-animate="zoomIn" data-animate-delay="120"><strong>4×</strong><span>Album of the Year<br />tại GRAMMY</span></div>
        <div data-animate="fadeInRight" data-animate-delay="240"><strong>2006</strong><span>Album đầu tay<br />ra mắt</span></div>
        <div data-animate="fadeIn" data-animate-delay="360"><strong>∞</strong><span>Những lần<br />chuyển mình</span></div>
      </section>

      <section className="intro-section wrap">
        <div className="section-kicker">01 / CHÂN DUNG</div>
        <div className="intro-copy" data-animate="fadeInUp">
          <p className="eyebrow">Ca sĩ · Nhạc sĩ · Người kể chuyện</p>
          <h2>Một giọng viết.<br />Nhiều <em>thế giới.</em></h2>
          <p>Taylor Alison Swift sinh ngày 13 tháng 12 năm 1989 tại Reading, Pennsylvania. Cô bắt đầu sự nghiệp âm nhạc chuyên nghiệp ở tuổi thiếu niên tại Nashville. Khả năng tự viết ca khúc trở thành một dấu ấn xuyên suốt, trong khi âm nhạc dần đi qua country, pop, folk và nhiều sắc thái khác.</p>
          <Link className="text-link" to="/career">Đọc câu chuyện sự nghiệp <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="eras-section">
        <div className="wrap">
          <div className="section-heading">
            <div><span className="section-kicker">02 / NHỮNG CHƯƠNG ÂM NHẠC</span><h2>Mỗi kỷ nguyên<br />mở ra một <em>cánh cửa.</em></h2></div>
            <Link className="text-link" to="/albums">Xem danh sách album <span aria-hidden="true">→</span></Link>
          </div>
          <div className="era-grid">
            {eras.map((era, index) => (
              <Link
                className={`era-card ${era.className}`}
                to={era.to}
                data-animate={era.animation}
                data-animate-delay={index * 80}
                key={era.className}
              >
                <span>{era.years}</span><strong>{era.title}</strong><small>{era.albums}</small><b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-band wrap" data-animate="fadeInLeft">
        <span className="feature-number">03</span>
        <div><p className="eyebrow">DẤU MỐC GRAMMY</p><h2>Bốn lần được vinh danh<br />ở hạng mục <em>Album of the Year.</em></h2></div>
        <Link className="round-link" to="/milestones" aria-label="Xem các dấu mốc và giải thưởng">↗</Link>
      </section>

      <section className="closing-note wrap">
        <p>Đây là bản tóm lược chọn lọc, không phải tiểu sử đầy đủ.</p>
        <Link className="text-link" to="/sources">Xem nguồn tham khảo <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}

export default HomePage;
