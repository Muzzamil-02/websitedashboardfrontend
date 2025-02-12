const JsonFormatter = (json) => {
  const result = {};
  data.forEach((item) => {
    result[item.slug] = item.attributes;
  });

  return result;
};
