export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden ambient-bg-container"
    >
      {/* Auroras difusas de luz em movimento orgânico */}
      <div className="ambient-aurora ambient-aurora-1" />
      <div className="ambient-aurora ambient-aurora-2" />

      {/* Orbes luminosos neon em movimento contínuo */}
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-orb ambient-orb-3" />
      <div className="ambient-orb ambient-orb-4" />

      {/* Malha de pontos digital sutil em deriva contínua */}
      <div className="ambient-grid absolute inset-0" />

      {/* Linha luminosa de varredura suave */}
      <div className="ambient-scanline" />

      {/* Vinheta suave para garantir legibilidade dos textos */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/15 to-background/45" />
    </div>
  );
}
