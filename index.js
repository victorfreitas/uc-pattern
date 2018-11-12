const text = 'lorem IpsUm is simPly dummy teXt'

const ucPattern = (str, pattern) => (
  str
    .toLowerCase()
    .replace(pattern, s => s.toUpperCase())
)
const ucFirst = str => ucPattern(str, /^\w/)
const ucWords = words => ucPattern(words, /\b(\w)/g)

console.log(ucFirst(text))
// Output: Lorem ipsum is simply dummy text

console.log(ucWords(text))
// Output: Lorem Ipsum Is Simply Dummy Text
