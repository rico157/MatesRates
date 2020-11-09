export const averageRatings = (ratings) => {
  if(!ratings) return 0
    const arrayOfRatings = ratings.map(rating => rating.rating)
    const total = arrayOfRatings.reduce((a, b) => a + b)
    const average = total / arrayOfRatings.length
    return average.toFixed(1);
  }