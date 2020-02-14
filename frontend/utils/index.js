const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR

const secondsToHumanTime = (s) => {
  let d, h, m

  if (s >= SECONDS_PER_DAY) {
    d = Math.floor(s / SECONDS_PER_DAY)
    s = s % SECONDS_PER_DAY
  }
  if (s >= SECONDS_PER_HOUR) {
    h = Math.floor(s / SECONDS_PER_HOUR)
    s = s % SECONDS_PER_HOUR
  }
  if (s >= SECONDS_PER_MINUTE) {
    m = Math.floor(s / SECONDS_PER_MINUTE)
    s = s % SECONDS_PER_MINUTE
  }

  const days = d ? `${d} day${d > 1 ? 's' : ''}` : ''
  const hours = h ? `${h} hour${h > 1 ? 's' : ''}` : ''
  const minutes = m ? `${m} minute${m > 1 ? 's' : ''}` : ''
  const seconds = s ? `${s} second${s > 1 ? 's' : ''}` : ''

  return `${days} ${hours} ${minutes} ${seconds}`
}

export { secondsToHumanTime }
