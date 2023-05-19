import React, { ReactNode } from 'react'
import { RefContext } from '../../contexts'

interface ProviderProps {
  children: ReactNode
}

const DEFAULT_SCROLL_OPTIONS: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest'
}

export function RefProvider({ children }: ProviderProps) {
  const headerRef = React.useRef<HTMLElement>(null)
  const projectsRef = React.useRef<HTMLElement>(null)
  const aboutRef = React.useRef<HTMLElement>(null)
  const stacksRef = React.useRef<HTMLElement>(null)

  const handleScrollToProjects = (): void => {
    projectsRef.current?.scrollIntoView(DEFAULT_SCROLL_OPTIONS)
  }

  const handleScrollToAbout = (): void => {
    aboutRef.current?.scrollIntoView(DEFAULT_SCROLL_OPTIONS)
  }

  const handleScrollToStacks = (): void => {
    stacksRef.current?.scrollIntoView(DEFAULT_SCROLL_OPTIONS)
  }

  const handlescrollToHeader = (): void => {
    headerRef.current?.scrollIntoView(DEFAULT_SCROLL_OPTIONS)
  }

  return (
    <RefContext.Provider
      value={{
        projectsRef,
        aboutRef,
        stacksRef,
        headerRef,
        handlescrollToHeader,
        handleScrollToProjects,
        handleScrollToAbout,
        handleScrollToStacks
      }}
    >
      {children}
    </RefContext.Provider>
  )
}

export default RefProvider
