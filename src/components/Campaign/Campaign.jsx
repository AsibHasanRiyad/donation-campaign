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
    <div>
      <div style={{background: card_bg_color, color:text_button_bg_color}} className="h-[290px] bg-[`${category_bg_color}] rounded">
        <figure>
          <img
            className=" h-[160px] w-full rounded-md"
            src={image_url}
            alt="Campaign"
          />
        </figure>
        <div className="card-body">
          <p style={{background:category_bg_color}} className=" w-fit px-2 rounded-md ">{category}</p>
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
