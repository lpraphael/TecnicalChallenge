const countriesService = require("../Services/Countries.service");
const { StatusCodes } = require("http-status-codes");

const getAvailableCountries = async (_req, res, next) => {
  try {
    const response = await countriesService.getAvailableCountries();
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};

const getCountryInfo = async (req, res, next) => {
  try {
    const { country } = req.body;
    const response = await countriesService.getCountryInfo(country);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};
