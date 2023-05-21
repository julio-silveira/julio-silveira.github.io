import { useContext } from 'react'
import { RefContext } from '../../contexts'

export default function usePageRef() {
  const {
    stacksRef,
    aboutRef,
    projectsRef,
    handleScrollToAbout,
    handleScrollToProjects,
    handleScrollToStacks,
    handlescrollToHeader
  } = useContext(RefContext)
  return {
    projectsRef,
    aboutRef,
    stacksRef,
    handleScrollToAbout,
    handleScrollToProjects,
    handleScrollToStacks,
    handlescrollToHeader
  }
}
