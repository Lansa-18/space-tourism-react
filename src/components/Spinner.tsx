
export default function Spinner() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-900 border shadow-sm rounded-xl">
      <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <div className="flex justify-center">
          <div
            className="animate-spin inline-block size-14 border-[5px] border-current border-t-transparent text-blue-300 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
