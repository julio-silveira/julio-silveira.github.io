import { useState } from 'react'
import { usePageRef } from '../../../../hooks'

export default function useHeader() {
  const { handleScrollToProjects, handleScrollToStacks, handleScrollToAbout } =
    usePageRef()

  const pages = [
    { name: 'SOBRE', scrollFn: handleScrollToAbout },
    { name: 'PROJETOS', scrollFn: handleScrollToProjects },
    { name: 'TECNOLOGIAS', scrollFn: handleScrollToStacks }
  ]
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return { pages, anchorElNav, handleOpenNavMenu, handleCloseNavMenu }
}
