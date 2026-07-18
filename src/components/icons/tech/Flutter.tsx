import { cn } from "@/lib/utils";

export default function Flutter({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg stroke="#02569B" fill="#02569B" strokeWidth="0" viewBox="0 0 24 24" className={cn("size-3.5", className)} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
    </svg>
  );
}
