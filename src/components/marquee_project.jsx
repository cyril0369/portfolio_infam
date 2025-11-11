import { useEffect, useRef } from "react";

export default function Marquee() {
  const trackRef = useRef(null);

  const centerProject = (className = "encore") => {
        const track = document.querySelector(".marquee-text-track");
        if (!track) return console.warn("Track non trouvé");

        const container = track.parentElement;
        if (!container) return console.warn("Conteneur non trouvé");

        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const trackRect = track.getBoundingClientRect();
        const trackWidth = trackRect.width;

        const element = track.querySelector(`.project-title.${className}`);
        const elementRect = element.getBoundingClientRect();
        const elementLeft = elementRect.left - trackRect.left;
        const elementWidth = elementRect.width;

        const elementCenter = elementLeft + (elementWidth / 2);
        const containerCenter = containerWidth / 2;
        const offset = elementCenter - containerCenter;

        const scrollableWidth = trackWidth / 2;

        let percent = (offset / scrollableWidth) * 50;

        track.style.transform = `translateX(${-percent}%)`;
        console.log(`[Résultat] Transformation appliquée: translateX(-${percent.toFixed(2)}%)`);
    }

  useEffect(() => {
    let percent = 0;
    let animationId;

    const animate = () => {
        if (!trackRef.current) return;
        percent += 0.075;
        if (percent >= 50) percent = 0;
        trackRef.current.style.transform = `translateX(-${percent}%)`;
        animationId = requestAnimationFrame(animate);
    }

    // animate();

    window.setMarquee = (percent) => {
      if (!trackRef.current) return;
      trackRef.current.style.transform = `translateX(-${percent}%)`;
    };

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="Boussole">
      <div className="BoussoleCursor"></div>
        <div className="marquee-text">
            <div className="marquee-text-track" ref={trackRef}>
                <h2 className="project-title encore" onClick={() => centerProject("encore")}>Encore</h2>
                <h2 className="project-title lvl1ne" onClick={() => centerProject("lvl1ne")}>lvl 1ne</h2>
                <h2 className="project-title plates-formes" onClick={() => centerProject("plates-formes")}>Plates-Formes</h2>
                <h2 className="project-title high-lo" onClick={() => centerProject("high-lo")}>High-lo</h2>
                <h2 className="project-title le-bazar" onClick={() => centerProject("le-bazar")}>Le Bazar</h2>
                <h2 className="project-title find-me" onClick={() => centerProject("find-me")}>FIND ME</h2>
                <h2 className="project-title covers-affiches" onClick={() => centerProject("covers-affiches")}>Covers & affiches</h2>
                <h2 className="project-title aboueb-beat-tape" onClick={() => centerProject("aboueb-beat-tape")}>Aboueb Beat Tape</h2>
                {/* Duplication pour le carrousel infini */}
                <h2 className="project-title encore" onClick={() => centerProject("encore")}>Encore</h2>
                <h2 className="project-title lvl1ne" onClick={() => centerProject("lvl1ne")}>lvl 1ne</h2>
                <h2 className="project-title plates-formes" onClick={() => centerProject("plates-formes")}>Plates-Formes</h2>
                <h2 className="project-title high-lo" onClick={() => centerProject("high-lo")}>High-lo</h2>
                <h2 className="project-title le-bazar" onClick={() => centerProject("le-bazar")}>Le Bazar</h2>
                <h2 className="project-title find-me" onClick={() => centerProject("find-me")}>FIND ME</h2>
                <h2 className="project-title covers-affiches" onClick={() => centerProject("covers-affiches")}>Covers & affiches</h2>
                <h2 className="project-title aboueb-beat-tape" onClick={() => centerProject("aboueb-beat-tape")}>Aboueb Beat Tape</h2>
            </div>
        </div>
    </div>

  );
}
