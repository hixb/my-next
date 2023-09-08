export default function EmailsMessage() {
  const Direct = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="set-svg-stroke"
        d="M2 12.9983H5.76C6.52 12.9983 7.21 13.4283 7.55 14.1083L8.44 15.8983C9 16.9983 10 16.9983 10.24 16.9983H13.77C14.53 16.9983 15.22 16.5683 15.56 15.8883L16.45 14.0983C16.79 13.4183 17.48 12.9883 18.24 12.9883H21.98"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="set-svg-stroke" d="M10.3398 7H13.6698" stroke="#292D32" strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"/>
      <path className="set-svg-stroke" d="M9.5 10H14.5" stroke="#292D32" strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"/>
    </svg>
  )

  const Message = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path className="set-svg-stroke" d="M15.9945 11H16.0035" stroke="#292D32" strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"/>
      <path className="set-svg-stroke" d="M11.9945 11H12.0035" stroke="#292D32" strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"/>
      <path className="set-svg-stroke" d="M7.99451 11H8.00349" stroke="#292D32" strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"/>
    </svg>
  )

  const Message3 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path className="set-svg-stroke"
        d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path
        d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
    </svg>
  )

  const Sms = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path className="set-svg-stroke" d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#292D32"
        strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return {
    Direct,
    Message,
    Message3,
    Sms,
  }
}
