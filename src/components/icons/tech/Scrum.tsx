import { cn } from "@/lib/utils";

export default function Scrum({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg stroke="#6C47FF" fill="none" strokeWidth="2" viewBox="0 0 24 24" className={cn("size-3.5", className)} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="4" height="18" rx="1" /><rect x="10" y="7" width="4" height="14" rx="1" /><rect x="17" y="11" width="4" height="10" rx="1" />
    </svg>
  );
}
