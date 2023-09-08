export default function Weather() {
  const Moon = () => (
    <svg
      fill="none" height="24" viewBox="0 0 24 24" width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.03107 12.4209C2.39107 17.5709 6.76107 21.7609 11.9911 21.9909C15.6811 22.1509 18.9811 20.4309 20.9611 17.7209C21.7811 16.6109 21.3411 15.8709 19.9711 16.1209C19.3011 16.2409 18.6111 16.2909 17.8911 16.2609C13.0011 16.0609 9.00107 11.9709 8.98107 7.14094C8.97107 5.84094 9.24107 4.61094 9.73107 3.49094C10.2711 2.25094 9.62107 1.66094 8.37107 2.19094C4.41107 3.86094 1.70107 7.85094 2.03107 12.4209Z"
        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
    </svg>
  )

  const Sun = () => (
    <svg
      fill="none" height="24" viewBox="0 0 24 24" width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        className="set-svg-stroke"
        d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      />
    </svg>
  )

  return {
    Moon,
    Sun,
  }
}
