import SessionProviderWrapper from "@/lib/SessionProviderWrapper";
import "./globals.css";

export const metadata = {
  title: "Resume Builder",
  discreption : "start building your resume"
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}

