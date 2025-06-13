export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="p-0 m-0">{children}</main>
}
