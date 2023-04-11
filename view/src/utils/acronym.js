export const acronym = (name) => {
  const matches = name?.match(/\b(\w)/g);
  const acronym = matches?.join("");
  return acronym;
};
