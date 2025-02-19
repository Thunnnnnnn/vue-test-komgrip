const formatNumber = (num: number): string => {
  if (num) {
    num = Number(num.toFixed(0))
    return num.toLocaleString()
  }

  return 'NO LIMIT'
}

export { formatNumber }
