import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export const Header = ({ label }) => (
  <div className="w-full flex flex-col items-start justify-center">
    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#9ca2af]">Nebula Nexus</p>
    <div className="auth-title-row">
      <h1 className={cn("auth-form-title", font.className)}>{label || "Register"}</h1>
      <p className="auth-title-note">(Begin the challenge)</p>
    </div>
  </div>
);
