/**
 * This function is used to format time
 * @param { string} createdTime
 * @returns {string} - Return a date string after formating
 */

export function formatTime(createdTime) {
  const date = new Date(createdTime);
  return date.toLocaleString("hi-IN");
}
