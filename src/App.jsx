import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import AlbumsPage from "./pages/AlbumsPage.jsx";
import CareerPage from "./pages/CareerPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MilestonesPage from "./pages/MilestonesPage.jsx";
import SourcesPage from "./pages/SourcesPage.jsx";

const pageMetadata = {
  "/": {
    title: "Taylor Swift — Hành trình âm nhạc",
    description: "Khám phá hành trình sự nghiệp của Taylor Swift qua các album, những lần chuyển mình và các dấu mốc đáng nhớ.",
  },
  "/career": {
    title: "Sự nghiệp — Taylor Swift",
    description: "Dòng thời gian sự nghiệp Taylor Swift: từ những ngày đầu ở Nashville đến các album và chuyến lưu diễn toàn cầu.",
  },
  "/albums": {
    title: "Các album — Taylor Swift",
    description: "Tổng quan các album phòng thu của Taylor Swift từ album đầu tay năm 2006 đến The Life of a Showgirl năm 2025.",
  },
  "/milestones": {
    title: "Dấu mốc — Taylor Swift",
    description: "Những dấu mốc nổi bật trong sự nghiệp Taylor Swift, từ giải GRAMMY đến The Eras Tour.",
  },
  "/sources": {
    title: "Nguồn tham khảo — Taylor Swift",
    description: "Nguồn tham khảo và ghi chú biên tập cho website tóm tắt sự nghiệp Taylor Swift.",
  },
};

const animationClasses = {
  fadeIn: "animate__fadeIn",
  fadeInDown: "animate__fadeInDown",
  fadeInLeft: "animate__fadeInLeft",
  fadeInRight: "animate__fadeInRight",
  fadeInUp: "animate__fadeInUp",
  slideInUp: "animate__slideInUp",
  zoomIn: "animate__zoomIn",
};

const animationGroups = [
  { selector: ".timeline-entry:nth-child(odd)", name: "fadeInLeft", stagger: 110 },
  { selector: ".timeline-entry:nth-child(even)", name: "fadeInRight", stagger: 110 },
  { selector: ".album-row", name: "fadeInUp", stagger: 100 },
  { selector: ".milestone-card", name: "zoomIn", stagger: 110 },
  { selector: ".source-row", name: "fadeInLeft", stagger: 100 },
  { selector: ".wall-card", name: "fadeInUp", stagger: 100 },
  { selector: ".album-group-heading", name: "fadeInDown" },
  { selector: ".rerecord-section", name: "fadeIn" },
  { selector: ".next-page", name: "slideInUp" },
  { selector: ".closing-note", name: "fadeIn" },
];

function PageEffects() {
  const location = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] ?? pageMetadata["/"];
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);

    if (location.hash) {
      requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return undefined;

    animationGroups.forEach(({ selector, name, stagger = 0 }) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        if (element.hasAttribute("data-animate")) return;
        element.dataset.animate = name;
        element.dataset.animateDelay = String(Math.min(index, 3) * stagger);
      });
    });

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const animationClass = animationClasses[entry.target.dataset.animate];
        if (animationClass) {
          const delay = Number(entry.target.dataset.animateDelay) || 0;
          entry.target.style.animationDelay = `${delay}ms`;
          entry.target.classList.add("animate__animated", animationClass);
        }

        currentObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    document.querySelectorAll("[data-animate]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <PageEffects />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/milestones" element={<MilestonesPage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;
