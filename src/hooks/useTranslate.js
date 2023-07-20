import { useIntl } from 'react-intl'

export const useTranslate = () => {
  const { formatMessage } = useIntl()
  return { t: (id) => formatMessage({ id }) }
}
