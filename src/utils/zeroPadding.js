const zeroPadding = (s, len) => {
  return ("0".repeat(len) + s).slice(-len);
};

export default zeroPadding;
