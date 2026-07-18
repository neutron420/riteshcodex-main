import { cn } from "@/lib/utils";

export default function Agile({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg stroke="#00A3E0" fill="none" strokeWidth="2" viewBox="0 0 24 24" className={cn("size-3.5", className)} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a10 10 0 1 1-3.16 19.44" /><path d="M12 6v6l4 2" /><path d="M4.93 4.93 2 2v6h6" />
    </svg>
  );
}
