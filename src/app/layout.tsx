import "../assets/output.css";

export const metadata = {
  title: 'Linkro | AzarAhmadov',
  description: "A personalized link redirection application - Centralizing my favorite links in one place for easy access.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/fav-icon.png"></link>
      </head>
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
