import { LoaderIcon } from "lucide-react";

function Spinner({ ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className="size-6 animate-spin"
      {...props}
    />
  );
}

export { Spinner };
