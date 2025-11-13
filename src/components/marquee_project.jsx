import { useEffect, useRef } from "react";

export default function Marquee() {
  const trackRef = useRef(null);
  const scrollAnimRef = useRef(null);

  const getPercentToCenterProject = (className = "encore") => {
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

      return percent
    }
  
  const animRef = useRef(null);

  const centerProject = (className) => {

    if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);
    
    const targetPercent = getPercentToCenterProject(className);
    if (typeof targetPercent !== "number") return;
    if (!trackRef.current) return;

    const track = trackRef.current;
    if (animRef.current) cancelAnimationFrame(animRef.current);

    const match = track.style.transform && track.style.transform.match(/translateX\(-?([\d.]+)%\)/);
    let currentPercent = match ? parseFloat(match[1]) : 0;

    let target = targetPercent;

    const duration = 800;
    const start = performance.now();

    const loop = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      let value = currentPercent + (target - currentPercent) * ease;

      if (value > 50) value -= 50;
      if (value < 0) value += 50;

      track.style.transform = `translateX(-${value}%)`;

      if (t < 1) {
        animRef.current = requestAnimationFrame(loop);
      } else {
        if (target > 50) target -= 50;
        if (target < 0) target += 50;
        track.style.transform = `translateX(-${target}%)`;
        animRef.current = null;
      }
    };

    animRef.current = requestAnimationFrame(loop);
  };



  useEffect(() => {
    let percent = 0;

    const animate = () => {
      if (!trackRef.current) return;
      percent += 0.075;
      if (percent >= 50) percent = 0;
      trackRef.current.style.transform = `translateX(-${percent}%)`;
      scrollAnimRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.setMarquee = (percent) => {
      if (!trackRef.current) return;
      trackRef.current.style.transform = `translateX(-${percent}%)`;
    };

    return () => cancelAnimationFrame(scrollAnimRef.current);
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
                <h2 className="project-title encore2" onClick={() => centerProject("encore2")}>Encore</h2>
                <h2 className="project-title lvl1ne2" onClick={() => centerProject("lvl1ne2")}>lvl 1ne</h2>
                <h2 className="project-title plates-formes2" onClick={() => centerProject("plates-formes2")}>Plates-Formes</h2>
                <h2 className="project-title high-lo2" onClick={() => centerProject("high-lo2")}>High-lo</h2>
                <h2 className="project-title le-bazar2" onClick={() => centerProject("le-bazar2")}>Le Bazar</h2>
                <h2 className="project-title find-me2" onClick={() => centerProject("find-me2")}>FIND ME</h2>
                <h2 className="project-title covers-affiches2" onClick={() => centerProject("covers-affiches2")}>Covers & affiches</h2>
                <h2 className="project-title aboueb-beat-tape2" onClick={() => centerProject("aboueb-beat-tape2")}>Aboueb Beat Tape</h2>
            </div>
        </div>
    </div>

  );
}
