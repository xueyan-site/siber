import React from 'react'
import { PageDoc } from 'com/page-doc'
import pkg from '../../../package.json'
import type { PageProps } from 'sdin-react'
import type { Collection } from 'ark-doc'

const COLLECTIONS: Collection<string,string>[] = [
  {
    value: '9999',
    label: 'ๆๅ',
    contents: [
      {
        value: '0001',
        label: 'ไป็ป',
        content: () => import('./0001')
      }
    ]
  }
]

export default function Index(props: PageProps) {
  return (
    <PageDoc 
      {...props}
      language="zh"
      version={pkg.version}
      collections={COLLECTIONS}
      name={pkg.name}
      description={pkg.description}
    />
  )
}
