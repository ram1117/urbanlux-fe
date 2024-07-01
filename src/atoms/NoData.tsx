interface NoDataProps {
  textcolor?: string;
  children?: React.ReactNode;
}

const NoData = ({ textcolor = "text-dark", children = <></> }: NoDataProps) => {
  return (
    <div className="min-h-[50vh] flex flex-col gap-4 items-center justify-center">
      <h2 className={`text-2xl ${textcolor}`}>
        It&apos;s us. Unable to fetch data for this section
      </h2>
      <p className="text-xl text-red-800 font-bold">{children}</p>
    </div>
  );
};

export default NoData;
