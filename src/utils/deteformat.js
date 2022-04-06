import zeroPadding from "./zeroPadding";

const deteformat = (date) => {
  const D = new Date(date);
  const y = D.getFullYear();
  const month = D.getMonth() + 1;
  const d = D.getDate();
  const h = D.getHours();
  const min = D.getMinutes();

  const updatedAt = `${zeroPadding(y, 4)} ${zeroPadding(
    month,
    2
  )}/${zeroPadding(d, 2)} ${zeroPadding(h, 2)}:${zeroPadding(min, 2)}`;
  return updatedAt;
};

export default deteformat;
