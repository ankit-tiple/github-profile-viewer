import Navibar from "@/components/Navibar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navibar />
      {children}
    </>
  );
}
