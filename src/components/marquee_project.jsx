import { useEffect, useRef } from "react";

export default function Marquee({ onSelectProject }) {
  const trackRef = useRef(null);
  const scrollAnimRef = useRef(null);
  const animRef = useRef(null);

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

    const elementCenter = elementLeft + elementWidth / 2;
    const containerCenter = containerWidth / 2;
    const offset = elementCenter - containerCenter;

    const scrollableWidth = trackWidth / 2;

    let percent = (offset / scrollableWidth) * 50;

    return percent;
  };

  const centerProject = (className) => {
    if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);

    const targetPercent = getPercentToCenterProject(className);
    if (typeof targetPercent !== "number") return;
    if (!trackRef.current) return;

    const track = trackRef.current;
    if (animRef.current) cancelAnimationFrame(animRef.current);

    const match =
      track.style.transform &&
      track.style.transform.match(/translateX\(-?([\d.]+)%\)/);
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

      checkCenteredProject();
    };

    animRef.current = requestAnimationFrame(loop);
  };

  const convertClassToKey = (className) => {
    return {
      encore: "encore",
      lvl1ne: "lvl_1ne",
      "plates-formes": "plates_formes",
      "high-lo": "high_lo",
      "le-bazar": "le_bazar",
      "find-me": "find_me",
      "covers-affiches": "covers_affiches",
      "aboueb-beat-tape": "aboueb_beat_tape",
      visuels_de_tournée: "visuels_de_tournée",

      // duplicates
      encore2: "encore",
      lvl1ne2: "lvl_1ne",
      "plates-formes2": "plates_formes",
      "high-lo2": "high_lo",
      "le-bazar2": "le_bazar",
      "find-me2": "find_me",
      "covers-affiches2": "covers_affiches",
      "aboueb-beat-tape2": "aboueb_beat_tape",
      visuels_de_tournée2: "visuels_de_tournée",
    }[className];
  };

  const checkCenteredProject = () => {
    const track = trackRef.current;
    if (!track) return;

    const titles = track.querySelectorAll(".project-title");
    if (!titles.length) return;

    const boussole = document.querySelector(".marquee-text");
    const boussoleRect = boussole.getBoundingClientRect();
    const centerX = boussoleRect.left + boussoleRect.width / 2;

    let closest = null;
    let smallestDist = Infinity;

    titles.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const elCenter = rect.left + rect.width / 2;

      const dist = Math.abs(elCenter - centerX);

      if (dist < smallestDist) {
        smallestDist = dist;
        closest = el;
      }
    });

    if (!closest) return;

    // Récupère le nom de classe → convertit en clé
    let className = [...closest.classList].find((c) => c !== "project-title");
    if (!className) return;

    // Convertir className en name dans ton JSON
    const key = convertClassToKey(className);

    if (key) onSelectProject(key);
  };

  useEffect(() => {
    let percent = 0;
    const animate = () => {
      if (!trackRef.current) return;
      percent += 0.07;
      if (percent >= 50) percent = 0;
      trackRef.current.style.transform = `translateX(-${percent}%)`;

      checkCenteredProject();

      scrollAnimRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(scrollAnimRef.current);
  }, []);

  return (
    <div className="Boussole">
      <div className="BoussoleCursor"></div>
      <div className="marquee-text">
        <div className="marquee-text-track" ref={trackRef}>
          <h2
            className="project-title encore"
            onClick={() => {
              centerProject("encore");
              onSelectProject("encore");
            }}
          >
            Encore
          </h2>
          <h2
            className="project-title lvl1ne"
            onClick={() => {
              centerProject("lvl1ne");
              onSelectProject("lvl_1ne");
            }}
          >
            lvl 1ne
          </h2>
          <h2
            className="project-title plates-formes"
            onClick={() => {
              centerProject("plates-formes");
              onSelectProject("plates_formes");
            }}
          >
            Plates-Formes
          </h2>
          <h2
            className="project-title high-lo"
            onClick={() => {
              centerProject("high-lo");
              onSelectProject("high_lo");
            }}
          >
            High-lo
          </h2>
          <h2
            className="project-title le-bazar"
            onClick={() => {
              centerProject("le-bazar");
              onSelectProject("le_bazar");
            }}
          >
            Le Bazar
          </h2>
          <h2
            className="project-title find-me"
            onClick={() => {
              centerProject("find-me");
              onSelectProject("find_me");
            }}
          >
            FIND ME
          </h2>
          <h2
            className="project-title covers-affiches"
            onClick={() => {
              centerProject("covers-affiches");
              onSelectProject("covers_affiches");
            }}
          >
            Covers & affiches
          </h2>
          <h2
            className="project-title aboueb-beat-tape"
            onClick={() => {
              centerProject("aboueb-beat-tape");
              onSelectProject("aboueb_beat_tape");
            }}
          >
            Aboueb Beat Tape
          </h2>
          <h2
            className="project-title visuels_de_tournée"
            onClick={() => {
              centerProject("visuels_de_tournée");
              onSelectProject("visuels_de_tournée");
            }}
          >
            Visuels de tournée
          </h2>

          {/* Duplication pour le carrousel infini */}
          <h2
            className="project-title encore2"
            onClick={() => {
              centerProject("encore2");
              onSelectProject("encore");
            }}
          >
            Encore
          </h2>
          <h2
            className="project-title lvl1ne2"
            onClick={() => {
              centerProject("lvl1ne2");
              onSelectProject("lvl_1ne");
            }}
          >
            lvl 1ne
          </h2>
          <h2
            className="project-title plates-formes2"
            onClick={() => {
              centerProject("plates-formes2");
              onSelectProject("plates_formes");
            }}
          >
            Plates-Formes
          </h2>
          <h2
            className="project-title high-lo2"
            onClick={() => {
              centerProject("high-lo2");
              onSelectProject("high_lo");
            }}
          >
            High-lo
          </h2>
          <h2
            className="project-title le-bazar2"
            onClick={() => {
              centerProject("le-bazar2");
              onSelectProject("le_bazar");
            }}
          >
            Le Bazar
          </h2>
          <h2
            className="project-title find-me2"
            onClick={() => {
              centerProject("find-me2");
              onSelectProject("find_me");
            }}
          >
            FIND ME
          </h2>
          <h2
            className="project-title covers-affiches2"
            onClick={() => {
              centerProject("covers-affiches2");
              onSelectProject("covers_affiches");
            }}
          >
            Covers & affiches
          </h2>
          <h2
            className="project-title aboueb-beat-tape2"
            onClick={() => {
              centerProject("aboueb-beat-tape2");
              onSelectProject("aboueb_beat_tape");
            }}
          >
            Aboueb Beat Tape
          </h2>
          <h2
            className="project-title visuels_de_tournée2"
            onClick={() => {
              centerProject("visuels_de_tournée2");
              onSelectProject("visuels_de_tournée");
            }}
          >
            Visuels de tournée
          </h2>
        </div>
      </div>
    </div>
  );
}
