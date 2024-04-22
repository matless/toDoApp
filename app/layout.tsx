//import { ThemeProvider } from 'next-themes';
import ThemeSwitch from './components/ThemeSwitch';
import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Simple TodoApp',
  description: 'simple todo app for learning next js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers></body>
    </html>
  )
}
