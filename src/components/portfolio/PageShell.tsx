import { ReactNode } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SiteNav />
    <main className="flex-1 pt-16">{children}</main>
    <SiteFooter />
  </div>
);

export default PageShell;
