//Dialog.jsx
"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

const Dialog = ({ isOpen, onClose, title, content }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent scrolling when dialog is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "" // Restore scrolling when dialog is closed
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm" />
      <div
        ref={dialogRef}
        className="relative z-50 w-full max-w-lg p-6 rounded-lg border border-pink-200 bg-black text-pink-200 shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-pink-200 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
          <div className="mt-4">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default Dialog

