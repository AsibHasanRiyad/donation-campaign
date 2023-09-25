const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[55vh] my-4 rounded-md"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR3TSlalQQvqmXLz-uFxJaz8pTT3IuU_DWWqyngN7KHU8mfJTu57htMSQT8_aem_ARR6IWoB2F75ZRzLzGb1PMyMc2mz5L_Jc586NR6BIltl-xX7CHNMjgFR61nQbqXZpzU&mibextid=2JQ9oc)",
        }}
      >
        <div className=" hero-overlay rounded-md bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-lg md:text-2xl lg:text-4xl text-white font-bold">I Grow By Helping People In Need</h1>
            <div className=" btn-group btn-group-horizontal">
                <input className=" sm:px-1 md:px-4 rounded-s-md text-rose-500" type="text" placeholder="Search Here.........." />
                <button className=" btn text-white bg-rose-500">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
