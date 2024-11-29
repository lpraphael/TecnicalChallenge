const countriesService = require("../Services/Countries.service");

const getAvailableCountries = async (_req, res) => {
  try {
    console.log("cheguei aqui");

    const response = await countriesService.getAvailableCountries();

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).send("Something wrong happened");
  }
};

const getCountryInfo = async (req, res) => {
  try {
    const { country } = req.body;

    const response = await countriesService.getCountryInfo(country);

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).send("Something wrong happened");
  }
};

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};
