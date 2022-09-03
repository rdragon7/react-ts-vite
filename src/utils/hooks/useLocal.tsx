import { useTranslation } from 'react-i18next'

const useLocal = () => {
  const { t } = useTranslation()
  return t
}

export default useLocal
