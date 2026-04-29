import './globals.css'

export const metadata = {
  title: 'Maimunah Tabassum — Frontend Developer',
  description: 'Frontend-focused MERN Stack Developer from Sylhet, Bangladesh.',
  keywords: ['Frontend Developer', 'MERN Stack', 'Next.js', 'React', 'Bangladesh'],
  openGraph: {
    title: 'Maimunah Tabassum — Frontend Developer',
    description: 'Building fast, beautiful full-stack web apps.',
    url: 'https://maimunah.dev', // ✅ change to your domain
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}