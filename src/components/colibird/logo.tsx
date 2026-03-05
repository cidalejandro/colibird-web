interface LogoProps {
  className?: string
  width?: number
  height?: number
  variant?: "full" | "bird-only"
}

export function Logo({ className = "", width = 200, height = 60, variant = "full" }: LogoProps) {
  const logoSrc = variant === "bird-only" ? "/images/colibird-bird-only.png" : "/images/colibird-logo.png"

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="COLIBIRD"
        width={width}
        height={height}
        className="h-auto w-auto"
        loading="eager"
      />
    </div>
  )
}

export function LogoText({ className = "" }: { className?: string }) {
  return <span className={`text-2xl font-bold gradient-text-brand ${className}`}>Colibird</span>
}
