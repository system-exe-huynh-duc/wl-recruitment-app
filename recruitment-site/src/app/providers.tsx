'use client'

import { ReactNode, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'

interface ProvidersProps {
  children: ReactNode
  locale: string
}

export default function Providers({ children, locale }: ProvidersProps) {
  // Chỉ chạy trên client
  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}
