/* Remounts on every navigation, so the entrance animation replays —
   a lightweight page transition with no client JS. */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-transition">{children}</div>;
}
