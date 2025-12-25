import PropTypes from "prop-types";

const Card = (props) => {
  const { url, download_url, author } = props;
  return (
    <a className="h-full w-full" href={url}>
      <div className="h-full w-full ">
        <img
          className="h-full w-full object-cover overflow-hidden rounded-xl"
          src={download_url}
          alt="image"
        />
        <h3 className="text-lg px-4 pb-3">{author}</h3>
      </div>
    </a>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  download_url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Card;
