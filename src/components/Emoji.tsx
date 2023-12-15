export default function Emoji({ children }: { children: React.ReactNode }) {
  return <span className={`font-emoji text-[1.2em]`}>{children}</span>;
}
