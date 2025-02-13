export const JsonFormatter = (json) => {
  const result = {};
  json.forEach((item) => {
    result[item.slug] = item.attributes;
  });

  return result;
};

export const JsonToSLugFormatter = (json) => {
  console.log("Json: ", json);
  const result = { sections: [] };
  Object.keys(json).map((section) => {
    result.sections.push({
      slug: section,
      attributes: json[section],
    });
  });
  return result;
};
