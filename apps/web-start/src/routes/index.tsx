import { createFileRoute } from '@tanstack/react-router'
import { PAPEL_ROTA_ADMINISTRADOR } from '@repo/tipos'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>{`Hello bernardino e world!!! papel: ${PAPEL_ROTA_ADMINISTRADOR}`}</div>
  )
}
