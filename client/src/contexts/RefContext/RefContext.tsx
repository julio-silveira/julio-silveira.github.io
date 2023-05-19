import { createContext } from 'react'

export type RefContextType = {
  projectsRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
  stacksRef: React.RefObject<HTMLElement>
  headerRef: React.RefObject<HTMLElement>
  handlescrollToHeader: VoidFunction
  handleScrollToProjects: VoidFunction
  handleScrollToAbout: VoidFunction
  handleScrollToStacks: VoidFunction
}

const RefContext = createContext({} as RefContextType)

export default RefContext
