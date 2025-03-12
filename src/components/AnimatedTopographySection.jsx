//AnimatedTopographySection.jsx
import TopographicBackground from "./TopographicBackground"

const AnimatedTopographySection = ({ children, className = "" }) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <TopographicBackground />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default AnimatedTopographySection

