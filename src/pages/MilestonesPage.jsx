import { Link } from "react-router-dom";
import ImageCredit from "../components/ImageCredit.jsx";
import NextPage from "../components/NextPage.jsx";
import PageHero from "../components/PageHero.jsx";

const awards = [
  {
    year: "2010",
    album: "Fearless",
    description: "Album of the Year đầu tiên tại GRAMMY, đưa một nghệ sĩ country trẻ bước vào trung tâm nhạc pop đại chúng.",
  },
  {
    year: "2016",
    album: "1989",
    description: "Chiến thắng Album of the Year thứ hai, đánh dấu thành công lớn của giai đoạn pop.",
  },
  {
    year: "2021",
    album: "folklore",
    description: "Album of the Year thứ ba, ghi nhận bước chuyển sang cách kể chuyện indie-folk trong giai đoạn phát hành bất ngờ.",
  },
  {
    year: "2024",
    album: "Midnights",
    description: "Chiến thắng thứ tư giúp Swift trở thành nghệ sĩ nắm giữ nhiều chiến thắng nhất ở hạng mục này.",
  },
];

function MilestonesPage() {
  return (
    <main>
      <PageHero
        eyebrow="03 / NHỮNG DẤU MỐC ĐÁNG NHỚ"
        animation="fadeInRight"
        description="Các giải thưởng và sân khấu là một phần câu chuyện; sức bền sáng tạo và quyền chủ động với tác phẩm cũng góp nên di sản nghề nghiệp."
      >
        <h1>Không chỉ là<br /><em>những con số.</em></h1>
      </PageHero>
      <figure className="page-photo wrap" data-animate="fadeInLeft">
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg/1280px-Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg?utm_source=commons.wikimedia.org&amp;utm_campaign=imageinfo&amp;utm_content=thumbnail"
          alt="Taylor Swift biểu diễn trong phần 1989 của The Eras Tour tại London năm 2024"
          loading="lazy"
        />
        <ImageCredit
          href="https://commons.wikimedia.org/wiki/File:Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg"
          author="BrigidLIS"
          licenseHref="https://creativecommons.org/licenses/by/4.0/"
          license="CC BY 4.0"
        />
      </figure>
      <section className="award-feature wrap" data-animate="fadeInRight">
        <div className="award-count"><strong>4</strong><span>LẦN<br />ALBUM OF THE YEAR</span></div>
        <div>
          <span className="section-kicker">GRAMMY AWARDS</span>
          <h2>Một kỷ lục<br />trong lịch sử <em>giải thưởng.</em></h2>
          <p>Taylor Swift là nghệ sĩ đầu tiên và duy nhất tính đến nay giành GRAMMY Album of the Year bốn lần, với <em>Fearless</em>, <em>1989</em>, <em>folklore</em> và <em>Midnights</em>.</p>
          <a className="text-link" href="https://www.grammy.com/artists/taylor-swift/15450/" target="_blank" rel="noreferrer">Hồ sơ GRAMMY chính thức <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="milestone-grid wrap">
        {awards.map((award) => (
          <article className="milestone-card" key={award.year}>
            <span>{award.year}</span><h2>{award.album}</h2><p>{award.description}</p>
          </article>
        ))}
      </section>
      <section className="tour-feature wrap" id="tour" data-animate="fadeInUp">
        <div className="tour-art" aria-hidden="true"><span>ERAS</span><i>✳</i><b>TOUR</b></div>
        <div>
          <span className="section-kicker">2023—2024 / SÂN KHẤU TOÀN CẦU</span>
          <h2>The Eras Tour:<br />một sự nghiệp<br /><em>trên cùng sân khấu.</em></h2>
          <p>Chuyến lưu diễn được xây dựng như hành trình qua các album và hình ảnh khác nhau của Swift. Cấu trúc này giúp người hâm mộ nhìn lại nhiều giai đoạn âm nhạc trong một chương trình thống nhất.</p>
        </div>
      </section>
      <section className="impact-note wrap" data-animate="fadeInDown">
        <span className="section-kicker">SÁNG TÁC & QUYỀN CHỦ ĐỘNG</span>
        <h2>Giữ vai trò người viết<br />trong câu chuyện của mình.</h2>
        <p>Swift thường được ghi nhận với việc tự viết hoặc đồng sáng tác các ca khúc. Từ năm 2021, loạt <em>Taylor’s Version</em> còn đưa quá trình tái thu âm các album cũ thành một phần nổi bật trong hành trình sáng tạo của cô.</p>
        <Link className="text-link" to="/albums#rerecordings">Tìm hiểu các bản tái thu âm <span aria-hidden="true">→</span></Link>
      </section>
      <NextPage eyebrow="CẬP NHẬT" to="/news">Đọc bản tin âm nhạc</NextPage>
    </main>
  );
}

export default MilestonesPage;
