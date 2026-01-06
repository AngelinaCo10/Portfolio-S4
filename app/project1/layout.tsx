import "../project-styles.css"; // 1x importeren voor ALLE projectpagina’s

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
