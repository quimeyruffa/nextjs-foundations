'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <p>Algo salió mal: {error.message}</p>
      <button onClick={reset}>Reintentar</button>
    </div>
  )
}