/**
 * This function is used to format time
 * @param {number | string} timestamp - A timestamp is the current time of an event that a computer records
 * @returns {string} - Return a date string after formating
 */

export function formatTime(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(timestamp);
}
