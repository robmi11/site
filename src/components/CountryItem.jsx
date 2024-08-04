import PropTypes from "prop-types";

function CountryItem({ country }) {
  if (!country || country.lenght === 0) return <h1>Error fetching data!</h1>;

  return (
    <div className="grid place-content-center">
      <div className="card bg-verylightgray dark:bg-darkblue w-full h-[510px] lg:w-80 shadow-xl rounded-md">
        <figure>
          <img
            className="w-full"
            src={country.flags.png}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-darkblue dark:text-verylightgray font-extrabold">
            {country.name.common}
          </h2>
          <div>
            <h3 className="text-darkblue dark:text-verylightgray font-bold">
              Population:{" "}
              <span className="font-normal">
                {new Intl.NumberFormat("pl-PL").format(country.population)}
              </span>
            </h3>
          </div>
          <div>
            <h3 className="text-darkblue dark:text-verylightgray font-bold">
              Region: <span className="font-normal">{country.region}</span>
            </h3>
          </div>
          <div>
            <h3 className="text-darkblue dark:text-verylightgray font-bold">
              Capital: <span className="font-normal">{country.capital}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};
export default CountryItem;
