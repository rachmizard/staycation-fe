export default (number) => {
  const num = new Intl.NumberFormat("id-ID");
  return num.format(number);
};
