export const getTodaysDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month =
    today.getMonth() > 10 ? today.getMonth() : `0${today.getMonth()}`;
  const day = today.getDate() > 10 ? today.getDate() : `0${today.getDate()}`;
  return `${year}-${month}-${day}`;
};
