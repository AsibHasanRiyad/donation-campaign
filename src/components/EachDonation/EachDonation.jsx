import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const EachDonation = ({ don }) => {
    const {
        campaign_id,
        category,
        title,
        category_bg_color,
        card_bg_color,
        text_button_bg_color,
        description,
        price,
        image_url,
      } = don;
  return (
    <div>
      <div style={{background: card_bg_color}} className="relative flex w-full flex-col  md:h-[250px] md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-full md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-b-none md:rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image_url}
            alt="image"
            className="md:h-full md:w-full object-cover"
          />
        </div>
        <div className="p-6">
            <h1 className=" text-sm font-normal w-fit px-2 py-1 rounded mb-2" style={{color:text_button_bg_color, background:category_bg_color}}>{category}</h1>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased">
            {title}
          </h4>
          <p style={{color:text_button_bg_color}} className="mb-8 block font-sans text-base  font-semibold leading-relaxed  antialiased ">
            ${price}
          </p>
          <a className="inline-block" href="#">
            <NavLink to={`/details/${campaign_id}`}
            style={{background:text_button_bg_color}}
              className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-lg font-semibold uppercase text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              View Details
            </NavLink>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EachDonation;
