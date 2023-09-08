export default function Arrow() {
  const ArrowDown = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9181 8.94922L13.3981 15.4692C12.6281 16.2392 11.3681 16.2392 10.5981 15.4692L4.07812 8.94922"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const ArrowRight = () => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.91016 19.9181L15.4302 13.3981C16.2002 12.6281 16.2002 11.3681 15.4302 10.5981L8.91016 4.07812"
        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  )

  const ArrowUp2 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <g>
        <path className="set-svg-stroke" d="M12 15.5V9.5" stroke="#292D32" strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"/>
        <path className="set-svg-stroke" d="M9 11.5L12 8.5L15 11.5" stroke="#292D32" strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"/>
      </g>
    </svg>
  )

  const ArrowUp3 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0016 18.0003H9.33163C6.02163 18.0003 4.66163 15.6503 6.32163 12.7803L7.66163 10.4703L9.00163 8.16031C10.6616 5.29031 13.3716 5.29031 15.0316 8.16031L16.3716 10.4703L17.7116 12.7803C19.3716 15.6503 18.0116 18.0003 14.7016 18.0003H12.0016Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const Frame2 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
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

  const Refresh = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
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
    ArrowDown,
    ArrowRight,
    ArrowUp2,
    ArrowUp3,
    Frame2,
    Refresh,
  }
}
