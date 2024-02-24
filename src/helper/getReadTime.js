function getReadTime(content) {
  console.log(content.length);
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime;
}

module.exports = {
  getReadTime,
};
