import type { SvgSize } from '@/types'

export default function Paragraph() {
  const translate = (size?: SvgSize) => (
    <svg fill="none" height={size ?? 20} viewBox="0 0 24 24" width={size ?? 20}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.0612 18.6684L16.9212 14.3984L14.7812 18.6684" stroke="#292D32" strokeLinecap="round"
        strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        d="M15.1719 17.9102H18.6919" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M16.9198 21.9998C14.1198 21.9998 11.8398 19.7298 11.8398 16.9198C11.8398 14.1198 14.1098 11.8398 16.9198 11.8398C19.7198 11.8398 21.9998 14.1098 21.9998 16.9198C21.9998 19.7298 19.7298 21.9998 16.9198 21.9998Z"
        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
        stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        d="M9.01312 5.85156H4.95312" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M6.97266 5.17188V5.85187" stroke="#292D32" strokeLinecap="round" strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7.99141 5.84375C7.99141 7.59375 6.62141 9.01373 4.94141 9.01373" stroke="#292D32"
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        d="M7.99141 5.84375C7.99141 7.59375 6.62141 9.01373 4.94141 9.01373" stroke="#292D32"
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        d="M9.01015 9.01001C8.28015 9.01001 7.62016 8.62 7.16016 8" stroke="#292D32" strokeLinecap="round"
        strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        className="set-svg-stroke" d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25" stroke="#292D32" strokeLinecap="round"
        strokeLinejoin="round" strokeWidth="1.5"
      />
      <path
        className="set-svg-stroke" d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="#292D32" strokeLinecap="round"
        strokeLinejoin="round" strokeWidth="1.5"
      />
    </svg>

  )

  return {
    translate,
  }
}
