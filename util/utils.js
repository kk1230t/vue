function generateQuerystring(obj) {
  return Object.entries(obj).map(e => e.join('=')).join('&')
}

export default {
  generateQuerystring
}
