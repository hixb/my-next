import type { SvgSize } from '@/types'

export default function DesignTools() {
  const brush2 = (size?: SvgSize) => (
    <svg width={size ?? 20} height={size ?? 20} viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.94 20.63C8.42 21.5 10.15 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 13.82 2.49003 15.53 3.34003 17L2 22L6.94 20.63Z"
        stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path className="set-svg-stroke"
        d="M17 15.1705C17 15.3505 16.96 15.5405 16.87 15.7205C16.78 15.9005 16.67 16.0705 16.53 16.2305C16.28 16.5005 16.01 16.7005 15.71 16.8205C15.41 16.9505 15.08 17.0105 14.73 17.0105C14.22 17.0105 13.67 16.8905 13.1 16.6405C12.52 16.3905 11.95 16.0605 11.38 15.6505C10.8 15.2305 10.26 14.7605 9.73999 14.2505C9.21999 13.7305 8.76003 13.1804 8.34003 12.6104C7.93003 12.0404 7.59999 11.4705 7.35999 10.9005C7.11999 10.3305 7 9.78047 7 9.26047C7 8.92047 7.05999 8.59047 7.17999 8.29047C7.29999 7.98047 7.49001 7.70047 7.76001 7.45047C8.08001 7.13047 8.42999 6.98047 8.79999 6.98047C8.93999 6.98047 9.08002 7.01047 9.21002 7.07047C9.34002 7.13047 9.45999 7.22046 9.54999 7.35046L10.71 8.99045C10.8 9.12045 10.87 9.23045 10.91 9.34045C10.96 9.45045 10.98 9.55045 10.98 9.65045C10.98 9.77045 10.94 9.89047 10.87 10.0105C10.8 10.1305 10.71 10.2505 10.59 10.3705L10.21 10.7704C10.15 10.8304 10.13 10.8905 10.13 10.9705C10.13 11.0105 10.14 11.0505 10.15 11.0905C10.17 11.1305 10.18 11.1605 10.19 11.1905C10.28 11.3605 10.44 11.5704 10.66 11.8304C10.89 12.0904 11.13 12.3605 11.39 12.6205C11.66 12.8905 11.92 13.1304 12.19 13.3604C12.45 13.5804 12.67 13.7305 12.84 13.8205C12.87 13.8305 12.9 13.8504 12.93 13.8604C12.97 13.8804 13.01 13.8805 13.06 13.8805C13.15 13.8805 13.21 13.8505 13.27 13.7905L13.65 13.4105C13.78 13.2805 13.9 13.1905 14.01 13.1305C14.13 13.0605 14.24 13.0204 14.37 13.0204C14.47 13.0204 14.57 13.0405 14.68 13.0905C14.79 13.1405 14.91 13.2005 15.03 13.2905L16.69 14.4705C16.82 14.5605 16.91 14.6705 16.97 14.7905C16.97 14.9105 17 15.0305 17 15.1705Z"
        stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )

  const copy = (size?: SvgSize) => (
    <svg width={size ?? 20} height={size ?? 20} viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const copySuccess = (size?: SvgSize) => (
    <svg width={size ?? 20} height={size ?? 20} viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path className="set-svg-stroke"
        d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.08008 15.0008L8.03008 16.9508L11.9201 13.0508" stroke="#292D32" strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"/>
    </svg>
  )

  const path = (size?: SvgSize) => (
    <svg width={size ?? 20} height={size ?? 20} viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7901 7.26814L16.7601 4.23814C15.6101 3.08814 14.0401 3.14814 13.2701 4.37814L11.5801 7.04814L16.9801 12.4481L19.6501 10.7581C20.8001 10.0281 20.8701 8.34814 19.7901 7.26814Z"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M11.58 7.0524L7.64999 6.8124C5.45999 6.6824 4.68999 7.3524 4.44999 9.4424L3.46999 17.7624C3.25999 19.5124 4.52999 20.7724 6.26999 20.5624L14.59 19.5824C16.68 19.3324 17.44 18.5724 17.22 16.3824L16.99 12.4524"
        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="set-svg-stroke" d="M4.60938 19.4189L7.63937 16.3789" stroke="#292D32" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return {
    brush2,
    copy,
    copySuccess,
    path,
  }
}
