import "./globals.css";

export const metadata = {
  title: "Sports Prediction Site",
  description: "High probability match predictions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
