"use client"

import { useEffect, useState } from "react"
import { Music, Disc, Guitar, Headphones, Radio } from "lucide-react"

type Note = {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  rotation: number
  velocityY: number
  velocityX: number
  velocityRot: number
  icon: string
  color: string
  isIcon: boolean // Store whether this note is an icon or a symbol
}

export function MusicalNotes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsActive(true)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (!isActive) return

    const noteSymbols = ["♩", "♪", "♫", "♬", "𝄞"]
    const icons = ["music", "disc", "guitar", "headphones", "radio"]
    const colors = ["#aa8bf8", "#FFD700", "#f6f2d0", "#9333ea", "#6b21a8"]

    // Create a new note occasionally when mouse moves
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        const isIcon = Math.random() > 0.5
        const newNote: Note = {
          id: Date.now(),
          x: mousePosition.x,
          y: mousePosition.y,
          size: Math.random() * 20 + 10,
          opacity: 1,
          rotation: Math.random() * 360,
          velocityY: (Math.random() - 0.5) /100, // Slower upward movement
          velocityX: (Math.random() - 0.5) / 100, // Slower horizontal movement
          velocityRot: (Math.random() - 0.5) * 0.5, // Slower rotation
          icon: icons[Math.floor(Math.random() * icons.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          isIcon: isIcon, // Store the decision
        }

        setNotes((prevNotes) => [...prevNotes, newNote])
      }
    }, 100)

    // Animation loop for existing notes
    const animationFrame = requestAnimationFrame(function animate() {
      setNotes((prevNotes) =>
        prevNotes
          .map((note) => ({
            ...note,
            y: note.y + note.velocityY,
            x: note.x + note.velocityX,
            opacity: note.opacity - 0.00005, // Slower fade out
            //rotation: note.rotation + note.velocityRot, // Apply rotation
          }))
          .filter((note) => note.opacity > 0),
      )

      requestAnimationFrame(animate)
    })

    return () => {
      clearInterval(interval)
      cancelAnimationFrame(animationFrame)
    }
  }, [isActive, mousePosition])

  const renderIcon = (icon: string, color: string, size: number) => {
    switch (icon) {
      case "music":
        return <Music style={{ color, height: size, width: size }} />
      case "disc":
        return <Disc style={{ color, height: size, width: size }} />
      case "guitar":
        return <Guitar style={{ color, height: size, width: size }} />
      case "headphones":
        return <Headphones style={{ color, height: size, width: size }} />
      case "radio":
        return <Radio style={{ color, height: size, width: size }} />
      default:
        return <Music style={{ color, height: size, width: size }} />
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {notes.map((note) => (
        <div
          key={note.id}
          className="absolute transition-transform duration-300 ease-linear"
          style={{
            left: `${note.x}px`,
            top: `${note.y}px`,
            opacity: note.opacity,
            transform: `rotate(${note.rotation}deg)`,
          }}
        >
          {note.isIcon ? (
            renderIcon(note.icon, note.color, note.size)
          ) : (
            <span style={{ color: note.color, fontSize: `${note.size}px` }}>♪</span>
          )}
        </div>
      ))}
    </div>
  )
}
