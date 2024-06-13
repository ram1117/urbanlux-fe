interface NoDataProps {
  textcolor?: string;
}

const NoData = ({ textcolor = "text-dark" }: NoDataProps) => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <h2 className={`text-2xl ${textcolor}`}>
        It&apos;s us. Unable to fetch data for this section
      </h2>
    </div>
  );
};

export default NoData;
