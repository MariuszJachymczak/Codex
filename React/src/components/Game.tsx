import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

interface GameProps {
  status: string;
  reset: () => void;
}

export function Game({ status, reset }: GameProps) {
  const { toast } = useToast();

  useEffect(() => {
    if (status === "noPanorama") {
      toast({ description: "Brak Street View – spróbuj ponownie" });
      reset();
    }
  }, [status, toast, reset]);

  return <div>Game component</div>;
}
