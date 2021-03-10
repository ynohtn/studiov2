import React, { ReactChild } from 'react'
import Seo, { SeoProps } from '~/components/Seo'
import classNames from 'classnames/bind'
import css from './styles.module.scss'

const cx = classNames.bind(css)

export interface PageProps {
  className?: string
  children?: ReactChild | ReactChild[]
  seo?: SeoProps
}

function Page({ className, children, seo }: PageProps) {
  const pageSeo = seo
  return (
    <div className={cx(className, css.Page)}>
      <Seo {...pageSeo} />
      {children}
    </div>
  )
}

Page.defaultProps = {}

export default Page
