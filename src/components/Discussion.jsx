import React, { useEffect, useRef } from "react";
import {useColorMode} from '@docusaurus/theme-common';

export default function Discussion() {
  const containerRef = useRef(null);
  const {colorMode} = useColorMode();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Avoid injecting the script multiple times
    if (container.querySelector("script[data-giscus]")) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-giscus", "true");


    script.setAttribute("data-repo", "Mechaxil/smart-auto-watering-pot");
    script.setAttribute("data-repo-id", "R_kgDOQRPlsg");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOQRPlss4Cx062");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", colorMode === 'dark' ? "dark_dimmed" : "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");

    container.appendChild(script);

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [colorMode]);

  return (
    <div
      ref={containerRef}
      style={{
        marginTop: "2rem",
        paddingTop: "1rem",
        borderTop: "1px solid var(--mx-border)",
      }}
    />
  );
}
