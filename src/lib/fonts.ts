import { Inter, Rowdies, Kanit } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-rowdies",
});

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-kanit",
});
