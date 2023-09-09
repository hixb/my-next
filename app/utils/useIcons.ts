import Archive from '@/app/components/icons/Archive'
import Arrow from '@/app/components/icons/Arrow'
import Audio from '@/app/components/icons/Audio'
import CryptoCompany from '@/app/components/icons/CryptoCompany'
import DesignTools from '@/app/components/icons/DesignTools'
import EmailsMessage from '@/app/components/icons/EmailsMessage'
import Essetional from '@/app/components/icons/Essetional'
import Files from '@/app/components/icons/Files'
import Paragraph from '@/app/components/icons/Paragraph'
import Search from '@/app/components/icons/Search'
import Security from '@/app/components/icons/Security'
import Settings from '@/app/components/icons/Settings'
import TypeParagraphCharacter from '@/app/components/icons/TypeParagraphCharacter'
import Users from '@/app/components/icons/Users'
import Weather from '@/app/components/icons/Weather'

export function useIcon() {
  return {
    archive: Archive(),
    arrow: Arrow(),
    audio: Audio(),
    cryptoCompany: CryptoCompany(),
    designTools: DesignTools(),
    emailsMessage: EmailsMessage(),
    essetional: Essetional(),
    files: Files(),
    paragraph: Paragraph(),
    search: Search(),
    security: Security(),
    settings: Settings(),
    typeParagraphCharacter: TypeParagraphCharacter(),
    users: Users(),
    weather: Weather(),
  }
}
