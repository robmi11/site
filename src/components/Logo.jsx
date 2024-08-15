import PropTypes from "prop-types";

function Logo({ title }) {
  return <h1 className="text-md md:text-xl md:font-bold">{title}</h1>;
}

Logo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Logo;
