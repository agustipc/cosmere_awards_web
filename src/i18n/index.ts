import english from './en.json'
import spanish from './es.json'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

export const getI18N = ({
  currentLocale = 'en'
}: {
  currentLocale: string | undefined
}) => {
  switch (currentLocale) {
    case LANGUAGES.SPANISH:
      return spanish
    case LANGUAGES.ENGLISH:
      return english
    default:
      return english
  }
}
