import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@mui/material/styles'

export const metadata: Metadata = {
    title: 'Material-Next UI',
    description: 'next js with material ui'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ThemeProvider theme={{}}>{children}</ThemeProvider>
            </body>
        </html>
    )
}
