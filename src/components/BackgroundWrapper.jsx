//BackgroundWrapper.jsx
import TopographicBackground from "./TopographicBackground"

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative">
      <TopographicBackground />
      {children}
    </div>
  )
}

export default BackgroundWrapper

