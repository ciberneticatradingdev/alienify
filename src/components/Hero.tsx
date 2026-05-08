export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--alien-dark)] via-transparent to-transparent opacity-60" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        {/* Logo / Title */}
        <div className="space-y-2">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter gradient-text">
            ALIENIFY
          </h1>
          <div className="text-5xl md:text-7xl">👽</div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Upload your photo. Get <span className="text-[var(--alien-accent)] font-bold">alienified</span>.
          <br />
          <span className="text-gray-500 text-lg">AI-powered human-to-alien transformation</span>
        </p>

        {/* CTA */}
        <a
          href="#upload"
          className="inline-block px-8 py-4 bg-[var(--alien-dark)] hover:bg-[var(--alien-accent)]/20
                     border border-[var(--alien-accent)] rounded-2xl text-lg font-bold transition-all duration-300
                     hover:scale-105 hover:shadow-lg hover:shadow-[var(--alien-accent)]/30 text-[var(--alien-accent)]"
        >
          👽 Transform Me Into an Alien
        </a>

        {/* Stats */}
        <div className="flex justify-center gap-8 pt-4 text-gray-500 text-sm">
          <span>100% Alien Guarantee</span>
          <span>•</span>
          <span>No Humans Left Behind</span>
          <span>•</span>
          <span>Probe Approved</span>
        </div>
      </div>
    </section>
  );
}
