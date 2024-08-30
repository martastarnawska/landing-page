import "./globals.css";

export const metadata = {
  title: "Republic of Relations",
  description: "Our daily bread is to connect right people in Poland and America in their desire to create and tighten bonds in business, culture or simply in bringing communities together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tef7uvt.css"/>     
      </head>
      <body>{children}</body>
    </html>
  );
}
