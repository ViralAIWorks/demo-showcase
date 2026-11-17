function ImageCredit({ href, author, licenseHref, license }) {
  return (
    <figcaption className="image-credit">
      <a href={href} target="_blank" rel="noreferrer">Ảnh: {author} / Wikimedia Commons</a>
      {" · "}
      <a href={licenseHref} target="_blank" rel="noreferrer">{license}</a>
    </figcaption>
  );
}

export default ImageCredit;
