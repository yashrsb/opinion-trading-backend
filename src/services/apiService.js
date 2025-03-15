const axios = require("axios");
const logger = require("../utils/logger");

const fetchLiveData = async () => {
  try {
    const response = await axios.get("https://api.mock.com/events");
    return response.data;
  } catch (error) {
    logger.error("Error fetching live data", error);
    return [];
  }
};

module.exports = { fetchLiveData };
