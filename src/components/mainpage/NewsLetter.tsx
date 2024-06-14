const NewsLetter = () => {
  return (
    <section className="min-h-[40vh] bg-dark text-light flex flex-col items-center justify-center py-12 lg:py-4 px-4 bg-newsletter bg-no-repeat sm:bg-cover bg-fill">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-11/12">
        <div className="">
          <h2 className="text-xl lg:text-3xl font-semibold">Subscribe Now</h2>
          <p className="text-sm lg:text-base">
            To receive latest offers, seasonal promotions and latest fashion
            news.
          </p>
        </div>
        <form className="flex items-stretch">
          <input
            className="text-dark h-max p-3 w-2/3 lg:w-3/4"
            placeholder="E-mail"
            type="email"
          />
          <button className="text-xs sm:text-base w-1/3 lg:w-1/4 text-light bg-dark px-4 font-semibold hover:bg-secondary border-light border">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
