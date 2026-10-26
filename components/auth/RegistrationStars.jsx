"use client";

import Galaxy from "@/components/main/Galaxy";

export default function RegistrationStars() {
  return (
    <div className="registration-stars" aria-hidden="true">
      <Galaxy
        className="absolute inset-0"
        density={0.8}
        starSpeed={0.18}
        speed={0.7}
        glowIntensity={0.22}
        flareIntensity={0.25}
        hueShift={250}
        saturation={0}
        twinkleIntensity={0.25}
        layers={4}
        mouseInteraction
        mouseRepulsion
        repulsionStrength={0.85}
        clickWarp={false}
        intro
        transparent
        lightMode={false}
      />
    </div>
  );
}
