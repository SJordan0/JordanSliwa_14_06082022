// Generate a random ID
const generateID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

// Normalize a string
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

export { generateID, normalizeText };
