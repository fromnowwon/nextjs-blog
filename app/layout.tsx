import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>My Blog</h1>
        </Link>
        <p>Welcome to My Blog!</p>
        <br />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by CW</h3>
      </div>
    </footer>
  );
  
  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
