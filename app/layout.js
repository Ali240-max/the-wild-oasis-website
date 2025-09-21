import "@/app/_styles/globals.css";
import Header from "./_components/Header";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvidor } from "./_components/ReservationContext";
import { SessionProvider } from "next-auth/react";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary950 text-primary100 min-h-screen flex flex-col relative`}
      >
        <SessionProvider>
          <Header />
          <div className="flex-1 px-8 py-12 grid max-sm:px-3">
            <main className="max-w-7xl mx-auto max-sm:mx-0 w-full">
              <ReservationProvidor>{children}</ReservationProvidor>
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
