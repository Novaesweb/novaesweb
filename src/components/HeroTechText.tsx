import { useEffect, useState } from "react";
import TechText from "./TechText";

const lines = ["O seu crescimento", "é parte do nosso sucesso."];

export function HeroTechText() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const contrast = window.matchMedia("(forced-colors: active)");
    const update = () => {
      let supported = false;
      try {
        supported = Boolean(document.createElement("canvas").getContext("2d"));
      } catch {
        /* Use HTML fallback. */
      }
      setAnimate(!preference.matches && !contrast.matches && supported);
    };
    update();
    preference.addEventListener("change", update);
    contrast.addEventListener("change", update);
    return () => {
      preference.removeEventListener("change", update);
      contrast.removeEventListener("change", update);
    };
  }, []);

  return (
    <h1 className="hero-tech-heading mt-5">
      <span className={animate ? "sr-only" : "hero-tech-static"}>
        O seu crescimento é parte do nosso sucesso.
      </span>
      {animate && (
        <span className="hero-tech-lines" aria-hidden="true">
          {lines.map((text) => (
            <span className="hero-tech-stage" key={text}>
              <TechText
                text={text}
                fontWeight={800}
                fontSize={64}
                intro="none"
                reveal="letter"
                specks={15}
                accentColor="#f472b6"
                clickKick
                draggable
                selection
                sweep
                guides={false}
                labels={false}
              />
            </span>
          ))}
        </span>
      )}
    </h1>
  );
}
