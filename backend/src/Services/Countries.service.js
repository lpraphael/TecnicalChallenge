const axios = require("axios");

const getAvailableCountries = async () => {
  try {
    console.log("cheguei aqui");

    const { data } = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );

    return data;
  } catch (error) {
    return error;
  }
};

const getCountryInfo = async (country) => {
  try {
    const borderCountries = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${country}`
    );
    // console.log(borderCountries.data);

    const populationData = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      { country: borderCountries.data.commonName }
    );
    console.log(populationData.data.data.iso3.slice(0, -1));

    const getFlag = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      { iso2: populationData.data.data.iso3.slice(0, -1) }
    );
    console.log(getFlag.data.data);

    return {
      borderCountries: borderCountries.data,
      populationData: populationData.data.data,
      flag: getFlag.data.data.flag,
    };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};
