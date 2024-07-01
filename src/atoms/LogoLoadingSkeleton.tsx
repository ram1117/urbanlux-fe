const LogoLoadingSkeleton = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center my-10 lg:my-20 animate-pulse">
      <div className="flex uppercase text-xl lg:text-3xl font-cantarell bg-dark">
        <h2 className="border p-1 text-dark bg-light">Urban</h2>
        <h2 className="border-r border-y p-1 text-light">Trend</h2>
      </div>
    </div>
  );
};

export default LogoLoadingSkeleton;
