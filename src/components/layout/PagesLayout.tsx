import Header from "@/components/layout/Header";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
    </>
  );
}
