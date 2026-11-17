import NextPage from "../components/NextPage.jsx";
import PageHero from "../components/PageHero.jsx";

const albumGroups = [
  {
    id: "debut",
    range: "01 — 05",
    title: <>Từ country<br />đến pop.</>,
    description: "Những năm đầu định hình lối viết giàu chi tiết, rồi dần mở rộng sang cấu trúc pop.",
    albums: [
      ["2006", "Taylor Swift", "Album đầu tay; country-pop và những câu chuyện tuổi trẻ.", "COUNTRY"],
      ["2008", "Fearless", "Country-pop với các ca khúc crossover đưa Swift đến đông đảo khán giả hơn.", "COUNTRY POP"],
      ["2010", "Speak Now", "Album tự sự, nhấn mạnh vai trò viết ca khúc và cách kể chuyện cá nhân.", "COUNTRY POP"],
      ["2012", "Red", "Bản phối nhiều màu, kết nối country với pop và rock.", "COUNTRY · POP"],
      ["2014", "1989", "Bước chuyển sang pop rõ nét, với sản xuất synth-pop và diện mạo mới.", "POP"],
    ],
  },
  {
    id: "pop",
    range: "06 — 08",
    title: <>Những thế giới<br />đối lập.</>,
    description: "Từ hình ảnh sắc cạnh đến những sắc màu lãng mạn và tươi sáng.",
    albums: [
      ["2017", "reputation", "Âm thanh điện tử và chủ đề về danh tiếng, hình ảnh công chúng.", "ELECTRO-POP"],
      ["2019", "Lover", "Một kỷ nguyên pop nhiều màu sắc, hướng đến những góc nhìn gần gũi và lạc quan.", "POP"],
      ["2022", "Midnights", "Pop tổng hợp với không khí đêm khuya; giành GRAMMY Album of the Year năm 2024.", "SYNTH-POP"],
    ],
  },
  {
    id: "folk",
    range: "09 — 10",
    title: <>Lời kể trong<br /><em>tĩnh lặng.</em></>,
    description: "Hai album phát hành năm 2020 mở rộng thế giới âm nhạc sang hướng folk và indie.",
    albums: [
      ["2020", "folklore", "Album giàu tính tự sự, với những nhân vật và câu chuyện đan xen.", "INDIE FOLK"],
      ["2020", "evermore", "Album đồng hành cùng folklore, tiếp tục khai thác màu sắc folk và kể chuyện.", "INDIE FOLK"],
    ],
  },
  {
    id: "recent",
    range: "11 — 12",
    title: <>Chương gần<br />đây.</>,
    description: "Những phát hành mới tiếp tục cho thấy sự chuyển động trong cách Swift xây dựng album.",
    albums: [
      ["2024", "The Tortured Poets Department", "Album phòng thu thứ mười một, khai thác cách kể chuyện và những lớp cảm xúc phức tạp.", "POP"],
      ["2025", "The Life of a Showgirl", "Album phòng thu thứ mười hai; trang chính thức giới thiệu các sản phẩm thuộc kỷ nguyên này.", "POP"],
    ],
  },
];

function AlbumsPage() {
  return (
    <main>
      <PageHero
        eyebrow="02 / DANH MỤC ÂM NHẠC"
        animation="fadeInDown"
        description="Một hành trình từ country-pop đến pop, folk và những thử nghiệm âm thanh mới. Mô tả dưới đây là tóm lược, không trích lời bài hát."
      >
        <h1>Mười hai album.<br /><em>Nhiều sắc thái.</em></h1>
      </PageHero>
      <section className="photo-ribbon wrap" aria-label="Taylor Swift trên sân khấu qua các giai đoạn">
        <figure data-animate="zoomIn">
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Taylor_Swift_%286820739088%29.jpg/960px-Taylor_Swift_%286820739088%29.jpg?utm_source=commons.wikimedia.org&amp;utm_campaign=imageinfo&amp;utm_content=thumbnail"
            alt="Taylor Swift biểu diễn cùng đàn banjo trong Speak Now World Tour năm 2012"
            loading="lazy"
          />
          <figcaption className="image-credit">
            <a href="https://commons.wikimedia.org/wiki/File:Taylor_Swift_(6820739088).jpg" target="_blank" rel="noreferrer">Eva Rinaldi / Wikimedia Commons</a>
            {" · "}
            <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noreferrer">CC BY-SA 2.0</a>
          </figcaption>
        </figure>
        <figure data-animate="fadeInRight" data-animate-delay="100">
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg/1280px-Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg?utm_source=commons.wikimedia.org&amp;utm_campaign=imageinfo&amp;utm_content=thumbnail"
            alt="Taylor Swift biểu diễn trong phần 1989 của The Eras Tour tại London năm 2024"
            loading="lazy"
          />
          <figcaption className="image-credit">
            <a href="https://commons.wikimedia.org/wiki/File:Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg" target="_blank" rel="noreferrer">Ảnh: BrigidLIS / Wikimedia Commons</a>
            {" · "}
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a>
          </figcaption>
        </figure>
      </section>
      {albumGroups.map((group) => (
        <section className="album-section wrap" id={group.id} key={group.id}>
          <div className="album-group-heading">
            <span>{group.range}</span><h2>{group.title}</h2><p>{group.description}</p>
          </div>
          <div className="album-list">
            {group.albums.map(([year, title, description, era]) => (
              <article className="album-row" key={title}>
                <span className="album-year">{year}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="album-era">{era}</span>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section className="rerecord-section wrap" id="rerecordings">
        <span className="section-kicker">MỘT NHÁNH RIÊNG / TÁI THU ÂM</span>
        <h2>Những phiên bản<br /><em>được làm lại.</em></h2>
        <p>Bắt đầu từ năm 2021, Swift phát hành một số album cũ dưới nhãn <em>Taylor’s Version</em>: <em>Fearless</em> và <em>Red</em> (2021), <em>Speak Now</em> và <em>1989</em> (2023). Các bản phát hành này có thêm những ca khúc thu âm mới bên cạnh phần tái thu.</p>
      </section>
      <NextPage eyebrow="TIẾP THEO" to="/milestones">Giải thưởng và dấu mốc</NextPage>
    </main>
  );
}

export default AlbumsPage;
