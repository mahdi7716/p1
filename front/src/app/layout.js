import localFont from "next/font/local";
import "./globals.css";
import Create from './Create/Page'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Create/>
        {children}
      </body>
    </html>
  );
}
