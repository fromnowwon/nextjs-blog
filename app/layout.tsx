export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const header = (
    <header>
      <div>
        <h1>My Blog</h1>
        <p>Welcome to My Blog!</p>
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
