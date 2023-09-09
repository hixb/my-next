export default function Archive() {
  const archiveAdd = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path className="set-svg-stroke" d="M14.5 10.6523H9.5" stroke="#292D32" strokeWidth="1.5"
          strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round"/>
        <path className="set-svg-stroke" d="M12 8.21094V13.2109" stroke="#292D32" strokeWidth="1.5"
          strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round"/>
      </g>
      <path
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const archiveMinus = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path className="set-svg-stroke" d="M14.5 10.6523H9.5" stroke="#292D32" strokeWidth="1.5"
          strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round"/>
        <path className="set-svg-stroke" d="M12 8.21094V13.2109" stroke="#292D32" strokeWidth="1.5"
          strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round"/>
      </g>
      <path
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )

  const frame = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path className="set-svg-stroke" d="M14.5 10.6523H9.5" stroke="#292D32" strokeWidth="1.5"
          strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round"/>
        <path className="set-svg-stroke" d="M12 8.21094V13.2109" stroke="#292D32" strokeWidth="1.5"
          strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round"/>
      </g>
      <path
        d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )

  return {
    archiveAdd,
    archiveMinus,
    frame,
  }
}
