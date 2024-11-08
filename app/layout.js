import "./globals.css";

import TransitionProvider from "@/components/TransitionProvider";
export const metadata = {
  title: "My Personal Portfolio Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <TransitionProvider>
          {children}
        </TransitionProvider>
        
      </body>
    </html>
  );
}
