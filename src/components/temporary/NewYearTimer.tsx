export function NewYearTimer() {
  const timeElapsed =
    (new Date('2025-01-01T00:00:00Z').getTime() -
      Date.now() +
      new Date().getTimezoneOffset() * 60 * 1000) /
    1000
  return (
    <p className="mt-4 text-lg font-bold text-emerald-600">
      До нового года
      {` ${Math.trunc(timeElapsed / 86400)}д. и ${Math.trunc((timeElapsed % 86400) / 3600)}ч.`}
    </p>
  )
}
