import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Campaign = ({ campaign }) => {
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
  } = campaign;

  return (
    <NavLink to={`/details/${campaign_id}`} state={title} >
      <div style={{background: card_bg_color, color:text_button_bg_color}} className="h-[280px] bg-[`${category_bg_color}] rounded">
        <figure>
          <img
            className=" h-[160px] w-full rounded-t-md"
            src={image_url}
            alt="Campaign"
          />
        </figure>
        <div className="card-body px-4 py-4">
          <p style={{background:category_bg_color}} className=" text-sm font-medium w-fit px-2 rounded-md ">{category}</p>
          <h2 className="card-title text-xl font-semibold" >{title}</h2>
        </div>
      </div>
    </NavLink>
  );
};

export default Campaign;
