export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden ambient-bg-container"
    >
      {/* Auroras difusas de luz neon (fundo estático) */}
      <div className="ambient-aurora ambient-aurora-1" />
      <div className="ambient-aurora ambient-aurora-2" />

      {/* Orbes luminosos neon estáticos */}
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-orb ambient-orb-3" />
      <div className="ambient-orb ambient-orb-4" />

      {/* Malha de pontos digital sutil e estática */}
      <div className="ambient-grid absolute inset-0" />

      {/* Linha luminosa discreta */}
      <div className="ambient-scanline" />

      {/* Vinheta suave para garantir legibilidade dos textos */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/15 to-background/45" />
    </div>
  );
}
