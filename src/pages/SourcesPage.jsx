import PageHero from "../components/PageHero.jsx";
import NextPage from "../components/NextPage.jsx";

const sources = [
  {
    number: "01",
    title: "Recording Academy / GRAMMY",
    description: "Tiểu sử nghệ sĩ, các album đoạt giải Album of the Year và danh sách đề cử, chiến thắng.",
    url: "https://www.grammy.com/artists/taylor-swift/15450/",
    label: "grammy.com/artists/taylor-swift",
  },
  {
    number: "02",
    title: "Trang chính thức của Taylor Swift",
    description: "Thông tin sản phẩm, video và các cập nhật về những kỷ nguyên âm nhạc hiện tại.",
    url: "https://www.taylorswift.com/",
    label: "taylorswift.com",
  },
  {
    number: "03",
    title: "Encyclopaedia Britannica",
    description: "Tài liệu tham khảo bổ sung về tiểu sử và bối cảnh sự nghiệp.",
    url: "https://www.britannica.com/biography/Taylor-Swift",
    label: "britannica.com/biography/Taylor-Swift",
  },
];

const images = [
  {
    title: "Speak Now World Tour",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Taylor_Swift_%286820736052%29.jpg/960px-Taylor_Swift_%286820736052%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    alt: "Taylor Swift biểu diễn trong Speak Now World Tour tại Sydney năm 2012",
    file: "https://commons.wikimedia.org/wiki/File:Taylor_Swift_(6820736052).jpg",
    author: "Eva Rinaldi",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  {
    title: "Khoảnh khắc cùng banjo",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Taylor_Swift_%286820739088%29.jpg/960px-Taylor_Swift_%286820739088%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    alt: "Taylor Swift biểu diễn cùng đàn banjo trong Speak Now World Tour năm 2012",
    file: "https://commons.wikimedia.org/wiki/File:Taylor_Swift_(6820739088).jpg",
    author: "Eva Rinaldi",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  {
    title: "Red Tour",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Taylor_Swift_Concert_Red_Tour.jpg/1280px-Taylor_Swift_Concert_Red_Tour.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    alt: "Taylor Swift biểu diễn trên sân khấu trong Red Tour năm 2013",
    file: "https://commons.wikimedia.org/wiki/File:Taylor_Swift_Concert_Red_Tour.jpg",
    author: "Ryan and Sarah Deeds",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
  {
    title: "The Eras Tour · London",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg/1280px-Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    alt: "Taylor Swift biểu diễn trong phần 1989 của The Eras Tour tại London năm 2024",
    file: "https://commons.wikimedia.org/wiki/File:Taylor_Swift_Eras_Tour_London_20240819_1989era.jpg",
    author: "BrigidLIS",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
];

function SourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="GHI CHÚ BIÊN TẬP"
        animation="fadeIn"
        description="Website này tóm lược sự nghiệp bằng lời văn riêng, dựa trên hồ sơ nghệ sĩ và thông tin phát hành được công bố."
      >
        <h1>Thông tin có<br /><em>nguồn đối chiếu.</em></h1>
      </PageHero>
      <section className="sources-list wrap">
        {sources.map((source) => (
          <a className="source-row" href={source.url} target="_blank" rel="noreferrer" key={source.number}>
            <span>{source.number}</span>
            <div><h2>{source.title}</h2><p>{source.description}</p><small>{source.label}</small></div>
            <b aria-hidden="true">↗</b>
          </a>
        ))}
      </section>
      <section className="image-credits wrap">
        <span className="section-kicker">TƯ LIỆU HÌNH ẢNH</span>
        <h2>Ảnh có ghi công<br /><em>và giấy phép.</em></h2>
        <div className="image-wall">
          {images.map((image) => (
            <figure className="wall-card" key={image.title}>
              <a className="wall-image" href={image.file} target="_blank" rel="noreferrer">
                <img src={image.image} alt={image.alt} loading="lazy" />
              </a>
              <figcaption className="wall-caption">
                <strong>{image.title}</strong>
                <span>Ảnh: <a href={image.file} target="_blank" rel="noreferrer">{image.author}</a> · Wikimedia Commons</span>
                <a className="wall-license" href={image.licenseUrl} target="_blank" rel="noreferrer">{image.license} ↗</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="editorial-note wrap" data-animate="fadeInUp">
        <span className="section-kicker">PHẠM VI & CÁCH DÙNG</span>
        <h2>Bản tóm tắt, không phải<br /><em>hồ sơ chính thức.</em></h2>
        <p>Nội dung được biên soạn bằng tiếng Việt, chọn lọc một số album và cột mốc để giới thiệu tổng quan. Ngày phát hành được ghi theo năm. Chi tiết có thể thay đổi khi có thông tin mới; vui lòng đối chiếu nguồn chính thức. Website không đại diện, không được tài trợ hoặc xác nhận bởi Taylor Swift, hãng thu âm hay Recording Academy.</p>
        <p>Ảnh được nhúng từ Wikimedia Commons theo giấy phép được ghi tại từng ảnh. Website không đại diện, không được tài trợ hoặc xác nhận bởi nghệ sĩ hay các chủ thể được nhắc đến.</p>
      </section>
      <NextPage eyebrow="QUAY LẠI" to="/">Tổng quan sự nghiệp</NextPage>
    </main>
  );
}

export default SourcesPage;
