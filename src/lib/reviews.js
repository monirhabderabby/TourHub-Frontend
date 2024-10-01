export function transformRatings(ratings) {
  const getTag = (review) => {
    if (review === 5.0) return "Excellent";
    if (review >= 4.0) return "Good";
    if (review >= 3.0) return "Average";
    if (review >= 2.0) return "Below Average";
    return "Poor";
  };

  return Object.keys(ratings).map((title, index) => ({
    id: index + 1,
    tag: getTag(ratings[title]),
    review: ratings[title],
    title: title,
  }));
}

export function addSpaceBeforeUppercase(text) {
  return text.replace(/([a-z])([A-Z])/g, "$1 $2");
}
