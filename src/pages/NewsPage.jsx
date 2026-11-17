import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import NextPage from "../components/NextPage.jsx";

const stories = [
  {
    year: "2025",
    category: "ALBUM MỚI",
    title: "The Life of a Showgirl mở ra chương thứ mười hai",
    description: "Ra mắt năm 2025, album phòng thu thứ mười hai bổ sung một chương mới vào hành trình âm nhạc của Taylor Swift.",
    to: "/albums#recent",
    linkText: "Khám phá album",
  },
  {
    year: "2024",
    category: "GRAMMY",
    title: "Midnights mang về chiến thắng Album of the Year thứ tư",
    description: "Với chiến thắng năm 2024, Swift trở thành nghệ sĩ đầu tiên giành giải này bốn lần, sau Fearless, 1989 và folklore.",
    to: "/milestones",
    linkText: "Xem dấu mốc giải thưởng",
  },
  {
    year: "2024",
    category: "PHÁT HÀNH",
    title: "The Tortured Poets Department tiếp nối câu chuyện album",
    description: "Album phát hành năm 2024 trở thành chương mới trong danh mục âm nhạc của Swift, trong giai đoạn The Eras Tour diễn ra trên toàn cầu.",
    to: "/albums#recent",
    linkText: "Xem các album gần đây",
  },
  {
    year: "2023—2024",
    category: "SÂN KHẤU",
    title: "The Eras Tour đưa nhiều kỷ nguyên lên cùng sân khấu",
    description: "Chuyến lưu diễn quy tụ ca khúc từ nhiều giai đoạn sự nghiệp, biến hành trình qua các album thành một trải nghiệm sân khấu thống nhất.",
    to: "/milestones#tour",
    linkText: "Đọc về The Eras Tour",
  },
];

function NewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="BẢN TIN ÂM NHẠC"
        animation="fadeIn"
        description="Những cập nhật và dấu mốc đáng chú ý trong âm nhạc của Taylor Swift, được điểm lại từ các thông tin đã công bố đến năm 2025."
      >
        <h1>Chuyện mới<br />trong <em>âm nhạc.</em></h1>
      </PageHero>
      <section className="timeline-section news-list wrap" aria-label="Tin tức Taylor Swift">
        {stories.map((story) => (
          <article className="timeline-entry news-card" key={story.title}>
            <span className="timeline-year">{story.year}</span>
            <div>
              <span className="news-category">{story.category}</span>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              <Link to={story.to} className="text-link">{story.linkText} <span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </section>
      <NextPage eyebrow="ĐỌC TIẾP" to="/milestones">Những dấu mốc trong sự nghiệp</NextPage>
    </main>
  );
}

export default NewsPage;
