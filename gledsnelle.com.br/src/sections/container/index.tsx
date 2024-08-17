export function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-5xl w-full flex items-center justify-end">
      {children}
    </div>
  );
}