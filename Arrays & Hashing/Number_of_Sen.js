// Number of Senior Citizens

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  return details.reduce((count, current) => count + (current.slice(11, 13) > 60), 0);

};