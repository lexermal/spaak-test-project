import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanban Board",
  description: "Kanban board for SPAAK",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
