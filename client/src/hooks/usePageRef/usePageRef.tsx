import { useContext } from 'react'
import { RefContext } from '../../contexts'

export default function usePageRef() {
  const {
    stacksRef,
    aboutRef,
    projectsRef,
    headerRef,
    handleScrollToAbout,
    handleScrollToProjects,
    handleScrollToStacks,
    handlescrollToHeader
  } = useContext(RefContext)
  return {
    projectsRef,
    aboutRef,
    stacksRef,
    headerRef,
    handleScrollToAbout,
    handleScrollToProjects,
    handleScrollToStacks,
    handlescrollToHeader
  }
}
