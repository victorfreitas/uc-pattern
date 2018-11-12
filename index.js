const ucPattern = (str, pattern) => (
  str
    .toLowerCase()
    .replace(pattern, s => s.toUpperCase())
)
const ucFirst = str => ucPattern(str, /^\w/)
const ucWords = words => ucPattern(words, /\b(\w)/g)
