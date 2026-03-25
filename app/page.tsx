import CallToActionSection from "@/components/features/home/CallToActionSection";
import HeroSection from "@/components/features/home/HeroSection";
import StatsSection from "@/components/features/home/StatsSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--hero-gradient)" }}
        aria-hidden
      />
      <HeroSection />
      <StatsSection />
      <CallToActionSection />
    </div>
  );
}
