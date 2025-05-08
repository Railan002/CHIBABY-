import "./globals.css";

export const metadata = {
  title: "Chibaby Predictions",
  description: "High probability sports betting tips",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
