interface SparklineProps {
  data: number[]
  trend: "up" | "down"
  width?: number
  height?: number
}

export function Sparkline({ data, trend, width = 60, height = 20 }: SparklineProps) {
  if (data.length < 2) return null

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width
      const y = height - ((value - min) / range) * height
      return `${x},${y}`
    })
    .join(" ")

  const color = trend === "up" ? "#16a34a" : "#dc2626"

  return (
    <svg width={width} height={height} className="inline-block">
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={points} className="opacity-80" />
    </svg>
  )
}
