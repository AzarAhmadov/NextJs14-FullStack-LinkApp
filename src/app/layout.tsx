import "../assets/output.css";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
