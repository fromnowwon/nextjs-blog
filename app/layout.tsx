import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 mt-6 mb-6 p-8">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white">My Blog</h1>
        </Link>
        <p className="text-slate-300 mt-3">Welcome to My Blog!</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 p-8 text-center text-slate-500">
        <h3>Developed by CW</h3>
      </div>
    </footer>
  );
  
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
