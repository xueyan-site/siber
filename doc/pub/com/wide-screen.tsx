import React, { Fragment } from 'react'
import 'solor'
import './wide-screen.scss'

export function WideScreen({
  children
}: {
  children?: React.ReactNode
}) {
  return <Fragment>{children}</Fragment>
}
