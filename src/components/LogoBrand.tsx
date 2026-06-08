import Image from 'next/image'

interface LogoBrandProps {
  light?: boolean
  size?: 'sm' | 'lg'
}

export function LogoBrand({ light = false, size = 'sm' }: LogoBrandProps) {
  if (size === 'lg') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Image
          src="/logo.png"
          alt="The Big Day"
          width={380}
          height={415}
          priority
          style={{
            width: 'clamp(180px, 25vw, 380px)',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    )
  }

  // Version navbar compacte
  return (
    <Image
      src="/logo.png"
      alt="The Big Day"
      width={80}
      height={87}
      priority
      style={{
        height: '64px',
        width: 'auto',
      }}
    />
  )
}
