import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TruthScoreMeterProps {
  score: number;
  className?: string;
}

const TruthScoreMeter = ({ score, className }: TruthScoreMeterProps) => {
  const getStatusInfo = () => {
    if (score >= 70) {
      return {
        label: "True",
        icon: CheckCircle2,
        color: "text-truth-verified",
        bgColor: "bg-truth-verified/10",
        borderColor: "border-truth-verified",
      };
    } else if (score >= 40) {
      return {
        label: "Doubtful",
        icon: AlertTriangle,
        color: "text-truth-doubtful",
        bgColor: "bg-truth-doubtful/10",
        borderColor: "border-truth-doubtful",
      };
    } else {
      return {
        label: "False",
        icon: XCircle,
        color: "text-truth-false",
        bgColor: "bg-truth-false/10",
        borderColor: "border-truth-false",
      };
    }
  };

  const status = getStatusInfo();
  const Icon = status.icon;

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            className="text-muted"
          />
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray={`${2 * Math.PI * 88}`}
            strokeDashoffset={`${2 * Math.PI * 88 * (1 - score / 100)}`}
            className={status.color}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className={cn("h-12 w-12 mb-2", status.color)} />
          <span className="text-4xl font-bold text-foreground">{score}%</span>
        </div>
      </div>
      
      <div className={cn(
        "px-6 py-3 rounded-full border-2 font-semibold text-lg",
        status.bgColor,
        status.borderColor,
        status.color
      )}>
        {status.label}
      </div>
    </div>
  );
};

export default TruthScoreMeter;
