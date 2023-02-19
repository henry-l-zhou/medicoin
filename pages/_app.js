import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { TokenContext } from '@/contexts/TokenContext'
import { useMemo, useState } from 'react'

export default function App({ Component, pageProps, session }) {
  const [tokenAmount, setTokenAmount] = useState(0)

  return (
    <SessionProvider session={session}>
      <TokenContext.Provider value={{tokenAmount, setTokenAmount}}>
        <Component {...pageProps}/>
      </TokenContext.Provider>
    </SessionProvider>
  )
}
