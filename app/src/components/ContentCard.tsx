import type { ReactNode } from 'react'

export function ContentCard({ children, tone = '' }: { children: ReactNode, tone?: 'good' | 'challenge' | '' }) {
  return <article className={`card ${tone}`}>{children}</article>
}
