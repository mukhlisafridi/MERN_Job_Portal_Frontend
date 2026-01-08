import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <Loader2 className="h-10 w-10 animate-spin text-[#7209b7]" />
        <p className="text-gray-600 text-sm">Loading job details...</p>
      </div>
    </>
  );
};

export default Loading;
