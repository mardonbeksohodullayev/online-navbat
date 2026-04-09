import './globals.css';
import Navbar from '@/components/navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}