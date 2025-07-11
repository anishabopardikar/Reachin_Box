// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Reachinbox',
  description: 'AI-Powered Email Viewer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
