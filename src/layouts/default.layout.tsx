import { BaseLayout } from "@/types/base-layout.type";

export default function DefaultLayout({ children }: BaseLayout) {
  return (
    <div className="container mx-auto">
      <main>{children}</main>
    </div>
  );
}
