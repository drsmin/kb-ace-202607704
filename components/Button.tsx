import Loader from '@/components/Loader'
import type { ButtonHTMLAttributes, RefObject } from 'react'

type Variant = 'primary' | 'secondary' | 'dark' | 'danger'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  loading?: boolean
  variant?: Variant
  ref?: RefObject<HTMLButtonElement> | ((node?: Element | null) => void)
}

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-kb-yellow text-brut-ink hover:bg-kb-yellow-strong',
  secondary: 'bg-white text-brut-ink hover:bg-paper',
  dark: 'bg-brut-ink text-kb-yellow hover:bg-black',
  danger: 'bg-white text-negative hover:bg-negative hover:text-white'
}

// 로더 색: 어두운 배경 위에서는 노랑, 밝은 배경 위에서는 잉크
const LOADER_COLOR: Record<Variant, string> = {
  primary: '#141414',
  secondary: '#141414',
  dark: '#FFBC00',
  danger: '#141414'
}

export default function Button({
  loading,
  children,
  variant = 'primary',
  className = '',
  ...restProps
}: Props) {
  return (
    <button
      {...restProps}
      disabled={restProps.disabled || loading}
      className={
        'brut-press brut-focus border-brut-ink shadow-hard inline-flex h-12 items-center justify-center border-[3px] px-5 font-mono text-sm font-bold tracking-wide uppercase disabled:cursor-not-allowed disabled:opacity-50 ' +
        VARIANTS[variant] +
        ' ' +
        className
      }>
      {loading ? (
        <Loader
          size={20}
          color={LOADER_COLOR[variant]}
        />
      ) : (
        children
      )}
    </button>
  )
}
