const axios = require("axios");

const getAvailableCountries = async () => {
  try {
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
    if (!country) {
      const e = new Error();
      e.name = "badRequest";
      e.message = "A valid country is required.";
      throw e;
    }
    const borderCountries = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${country}`
    );
    const populationData = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      { country: borderCountries.data.commonName }
    );
    const getFlag = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      { iso2: populationData.data.data.iso3.slice(0, -1) }
    );
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
