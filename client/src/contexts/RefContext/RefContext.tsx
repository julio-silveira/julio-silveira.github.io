import { createContext } from 'react'

export type RefContextType = {
  projectsRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
  stacksRef: React.RefObject<HTMLElement>
  handleScrollToProjects: VoidFunction
  handleScrollToAbout: VoidFunction
  handleScrollToStacks: VoidFunction
}

const RefContext = createContext({} as RefContextType)

export default RefContext
