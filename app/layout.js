
import Mainheader from "@/component/main-header/main-header";
import "./globals.css";
export const metadata = {
  title: 'book shelf'
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Mainheader/>       
        {children}
        </body>
    </html>
  );
}
