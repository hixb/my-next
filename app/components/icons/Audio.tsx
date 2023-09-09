import type { SvgSize } from '@/types'

export default function Audio() {
  const subtitle = (size?: SvgSize) => (
    <svg width={size ?? 20} height={size ?? 20} viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.4405 8.89844C20.0405 9.20844 21.5105 11.0584 21.5105 15.1084V15.2384C21.5105 19.7084 19.7205 21.4984 15.2505 21.4984H8.74047C4.27047 21.4984 2.48047 19.7084 2.48047 15.2384V15.1084C2.48047 11.0884 3.93047 9.23844 7.47047 8.90844"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <g>
        <path className="set-svg-stroke" d="M12 2V14.88" stroke="#292D32" strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"/>
        <path className="set-svg-stroke" d="M15.3484 12.6484L11.9984 15.9984L8.64844 12.6484" stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  )

  return {
    subtitle,
  }
}
