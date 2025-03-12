import NavBar from "@/components/NavBar";
import StoreProvider from "./StoreProvider";
import "@/app/globals.css";

export const metadata = {
  title: "BarterX product dashboard",
  description: "add your products and let users can buy it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <StoreProvider>
          <NavBar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
