import React from 'react'
import { usePageContext } from './usePageContext'

export { Links }

function Links(props) {
  const pageContext = usePageContext()
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active'].filter(Boolean).join(' ')
  return <a {...props} className={className} />
}