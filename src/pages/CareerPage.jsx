import { Link } from "react-router-dom";
import ImageCredit from "../components/ImageCredit.jsx";
import NextPage from "../components/NextPage.jsx";
import PageHero from "../components/PageHero.jsx";

const chapters = [
  {
    years: "2004—2006",
    title: "Khởi đầu ở Nashville",
    description: <>Ở tuổi thiếu niên, Swift chuyển tới Nashville để theo đuổi âm nhạc. Album <em>Taylor Swift</em> ra mắt năm 2006, giới thiệu một nhạc sĩ trẻ tự viết hoặc đồng sáng tác các ca khúc country-pop.</>,
    link: "/albums#debut",
    linkText: "Album đầu tay",
  },
  {
    years: "2008—2010",
    title: "Từ country đến sân khấu lớn",
    description: <><em>Fearless</em> đưa Swift đến với lượng khán giả rộng hơn và giành giải GRAMMY Album of the Year năm 2010. Với <em>Speak Now</em>, cô tiếp tục phát triển tiếng nói sáng tác cá nhân.</>,
    link: "/albums#debut",
    linkText: "Fearless & Speak Now",
  },
  {
    years: "2012—2014",
    title: "Cây cầu mang tên Red",
    description: <><em>Red</em> pha trộn nền tảng country với pop và rock, mở đường cho bước chuyển rõ rệt hơn. <em>1989</em> đánh dấu kỷ nguyên pop với cấu trúc âm thanh và hình ảnh mới.</>,
    link: "/albums#pop",
    linkText: "Red & 1989",
  },
  {
    years: "2017—2019",
    title: "Hình ảnh mới, khoảng màu mới",
    description: <><em>reputation</em> khai thác sắc thái tối và chủ đề về danh tiếng; <em>Lover</em> chuyển sang một không khí tươi sáng hơn. Cả hai cho thấy cách Swift biến mỗi album thành một thế giới riêng.</>,
    link: "/albums#pop",
    linkText: "reputation & Lover",
  },
  {
    years: "2020—2021",
    title: "Những câu chuyện ngoài khuôn pop",
    description: <>Phát hành bất ngờ trong năm 2020, <em>folklore</em> và <em>evermore</em> thiên về kể chuyện, phối khí folk và indie. <em>folklore</em> mang về Album of the Year tại GRAMMY năm 2021.</>,
    link: "/albums#folk",
    linkText: "folklore & evermore",
  },
  {
    years: "2021—2023",
    title: "Thu âm lại, làm chủ cách kể",
    description: <>Swift bắt đầu phát hành lại một số album cũ dưới tên <em>Taylor’s Version</em>, bổ sung các bản thu mới. Trong cùng giai đoạn, <em>Midnights</em> đưa cô trở lại với pop tổng hợp và giành Album of the Year năm 2024.</>,
    link: "/albums#rerecordings",
    linkText: "Tìm hiểu các bản Taylor’s Version",
  },
  {
    years: "2023—2024",
    title: "The Eras Tour",
    description: <>Chuyến lưu diễn toàn cầu quy tụ các ca khúc từ nhiều giai đoạn sự nghiệp, biến ý tưởng “các kỷ nguyên” thành một trải nghiệm sân khấu quy mô lớn. Cùng thời gian đó, Swift phát hành <em>The Tortured Poets Department</em> (2024).</>,
    link: "/milestones#tour",
    linkText: "Dấu ấn trên sân khấu",
  },
  {
    years: "2025—",
    title: "Một chương tiếp tục mở ra",
    description: <><em>The Life of a Showgirl</em> (2025) bổ sung chương thứ mười hai vào danh mục album phòng thu của Swift. Trang chính thức tiếp tục giới thiệu các sản phẩm âm nhạc gắn với album này.</>,
    link: "/albums#recent",
    linkText: "Album giai đoạn gần đây",
  },
];

function CareerPage() {
  return (
    <main>
      <PageHero
        eyebrow="01 / DÒNG THỜI GIAN"
        animation="fadeInLeft"
        description="Không chỉ đổi thể loại, Taylor Swift liên tục mở rộng cách mình sáng tác, thu âm và xuất hiện trước công chúng."
      >
        <h1>Mỗi chương<br />là một <em>chuyển động.</em></h1>
      </PageHero>
      <figure className="page-photo wrap" data-animate="fadeIn">
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Taylor_Swift_Concert_Red_Tour.jpg/1280px-Taylor_Swift_Concert_Red_Tour.jpg?utm_source=commons.wikimedia.org&amp;utm_campaign=imageinfo&amp;utm_content=thumbnail"
          alt="Taylor Swift biểu diễn trên sân khấu trong Red Tour năm 2013"
          loading="lazy"
        />
        <ImageCredit
          href="https://commons.wikimedia.org/wiki/File:Taylor_Swift_Concert_Red_Tour.jpg"
          author="Ryan and Sarah Deeds"
          licenseHref="https://creativecommons.org/licenses/by-sa/2.0/"
          license="CC BY-SA 2.0"
        />
      </figure>
      <section className="timeline-section wrap">
        {chapters.map((chapter) => (
          <article className="timeline-entry" key={chapter.years}>
            <span className="timeline-year">{chapter.years}</span>
            <div>
              <h2>{chapter.title}</h2>
              <p>{chapter.description}</p>
              <Link to={chapter.link} className="text-link">{chapter.linkText} <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </section>
      <NextPage eyebrow="TIẾP THEO" to="/albums">Các album qua từng kỷ nguyên</NextPage>
    </main>
  );
}

export default CareerPage;
