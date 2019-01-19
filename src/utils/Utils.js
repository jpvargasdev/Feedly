/**
 * Utils
 */
const Utils = {
  setTimeToMinutes(num) {
    return num * 60 * 1000;
  },

  formatDate(date) {
    const firstSection = date.split("T")[0];
    const secondSection = date.split("T")[1];

    const year = firstSection.split("-")[0];
    const month = firstSection.split("-")[1];
    const day = firstSection.split("-")[2];
    const hour = secondSection.split(":")[0];
    const minute = secondSection.split(":")[1];

    return `${day}/${month}/${year} ${hour}:${minute}`;
  }
};

module.exports = Utils;
