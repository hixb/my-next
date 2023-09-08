export default function Files() {
  const Folder = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )

  const Folder2 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path className="set-svg-stroke" d="M8 2H17C19 2 20 3 20 5V6.38" stroke="#292D32" strokeWidth="1.5"
        strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const FolderMinus = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path className="set-svg-stroke" d="M14.4297 14.5508H9.42969" stroke="#292D32" strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )

  const FolderOpen = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.6707 14.3L21.2707 19.3C21.1207 20.83 21.0007 22 18.2907 22H5.71074C3.00074 22 2.88074 20.83 2.73074 19.3L2.33074 14.3C2.25074 13.47 2.51074 12.7 2.98074 12.11C2.99074 12.1 2.99074 12.1 3.00074 12.09C3.55074 11.42 4.38074 11 5.31074 11H18.6907C19.6207 11 20.4407 11.42 20.9807 12.07C20.9907 12.08 21.0007 12.09 21.0007 12.1C21.4907 12.69 21.7607 13.46 21.6707 14.3Z"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
      <path className="set-svg-stroke"
        d="M3.5 11.4313V6.28125C3.5 2.88125 4.35 2.03125 7.75 2.03125H9.02C10.29 2.03125 10.58 2.41125 11.06 3.05125L12.33 4.75125C12.65 5.17125 12.84 5.43125 13.69 5.43125H16.24C19.64 5.43125 20.49 6.28125 20.49 9.68125V11.4713"
        stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path className="set-svg-stroke" d="M9.42969 17H14.5697" stroke="#292D32" strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return {
    Folder,
    Folder2,
    FolderMinus,
    FolderOpen,
  }
}
