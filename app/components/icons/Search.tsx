export default function Search() {
  const search = () => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        className="set-svg-stroke" d="M22 22L20 20" stroke="#292D32" strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )

  return {
    search,
  }
}
