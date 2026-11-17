function PageHero({ eyebrow, children, description, animation = "fadeInUp" }) {
  return (
    <section className="page-hero wrap" data-animate={animation}>
      <p className="eyebrow"><span className="spark">✳</span> {eyebrow}</p>
      {children}
      <p className="page-lede">{description}</p>
    </section>
  );
}

export default PageHero;
