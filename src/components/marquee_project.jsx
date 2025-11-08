import { useEffect, useRef } from "react";

export default function Marquee() {
  const trackRef = useRef(null);

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

    window.centerProject = (title = "Encore") => {
        const track = document.querySelector(".marquee-text-track");
        if (!track) return;

        const container = track.parentElement;
        const containerWidth = container.offsetWidth;
        const trackWidth = track.scrollWidth / 2;

        // trouve le premier h2 correspondant au titre
        const element = Array.from(track.querySelectorAll("h2")).find(
            (h2) => h2.textContent.trim() === title
        );
        if (!element) return console.warn("Élément non trouvé");

        const elementOffset = element.offsetLeft;
        const elementWidth = element.offsetWidth;
        console.log(elementOffset,elementWidth)

        // calcule le pourcentage pour translateX(-%)
        let percent = ((elementOffset + elementWidth / 2 - containerWidth / 2) / trackWidth) * 50;

        // clamp pour rester entre 0 et 50
        percent = percent % 50;

        // applique la transformation
        track.style.transform = `translateX(-${percent}%)`;

        console.log(`Centré sur "${title}", percent: ${percent.toFixed(2)}%`);
        };


    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="Boussole">
        <div className="BoussoleCursor"></div>
        <div className="marquee-text">
            <div className="marquee-text-track" ref={trackRef}>
                <h2>Encore</h2>
                <h2>lvl 1ne</h2>
                <h2>Plates-Formes</h2>
                <h2>High-lo</h2>
                <h2>Le Bazar</h2>
                <h2>FIND ME</h2>
                <h2>Covers & affiches</h2>
                <h2>Aboueb Beat Tape</h2>
                <h2>Encore</h2>
                <h2>lvl 1ne</h2>
                <h2>Plates-Formes</h2>
                <h2>High-lo</h2>
                <h2>Le Bazar</h2>
                <h2>FIND ME</h2>
                <h2>Covers & affiches</h2>
                <h2>Aboueb Beat Tape</h2>
            </div>
        </div>
    </div>
  );
}
