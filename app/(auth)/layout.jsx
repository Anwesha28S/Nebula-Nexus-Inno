import "../globals.css";
import "./auth-theme.css";
import RegistrationStars from "@/components/auth/RegistrationStars";
import AmbientAudio from "@/components/main/AmbientAudio";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Register | Nebula Nexus",
  description: "Register for Nebula Nexus by the Algorithm & Programming Society, NIT Rourkela.",
};

const AuthLayout = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <main className="auth-shell">
        <RegistrationStars />
        <AmbientAudio />
        <div className="auth-content">{children}</div>
      </main>
    </body>
  </html>
);

export default AuthLayout;
