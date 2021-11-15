export const parseColor = (priceChange: number | undefined = 0) => {
  if (!priceChange) return '#F9AA4B'
  if (priceChange < 0) return '#F9575E'
  if (priceChange > 0) return '#16FB48'
  return '#fcb017'
}
