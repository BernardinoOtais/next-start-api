import { Link } from '@tanstack/react-router'
import { useSidebar } from '@repo/ui/componentspersonalizados/dashboard/sidebar-modificada'

const BotaoHeader = () => {
  const { isMobile, state, openMobile } = useSidebar()

  const Content = (
    <div className="flex aspect-square items-center justify-center rounded-lg">
      <img src="/favicon.ico" alt="Favicon" width={32} height={32} />
    </div>
  )

  if ((isMobile && openMobile) || (state === 'expanded' && !isMobile)) {
    return (
      <Link to="/dashboard">
        <div className="flex flex-row gap-3">
          {Content}
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Fmoda</span>
            <span className="truncate text-xs">Indústria Têxtil S.A.</span>
          </div>
        </div>
      </Link>
    )
  }

  return <Link to="/dashboard">{Content}</Link>
}

export default BotaoHeader
