const express = require("express");
const CountriesController = require("../Controllers/Countries.controller");

const routers = express.Router();

routers.get("/available-countries", CountriesController.getAvailableCountries);
routers.get("/country-info", CountriesController.getCountryInfo);


module.exports = routers;
