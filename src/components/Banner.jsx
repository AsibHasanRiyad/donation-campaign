const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[55vh] my-4 rounded-md"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Zh5sbYc/Screenshot-2023-09-25-at-2-45-24-PM-overlay-1.png)",
        }}
      >
        <div className=" hero-overlay rounded-md bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-lg md:text-2xl lg:text-4xl text-black font-bold">I Grow By Helping People In Need</h1>
            <div className=" btn-group btn-group-horizontal border border-gray-400 rounded-lg">
                <input className=" sm:px-1  md:px-4 rounded-s-md text-rose-500" type="text" placeholder="Search Here.........." />
                <button className=" btn text-white bg-rose-500">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
