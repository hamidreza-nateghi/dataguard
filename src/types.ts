export type Tab = {
  id: string
  title: string
  icon: string
  plugins: string[]
}

export type Plugin = {
  id: string
  title: string
  description: string
  active: boolean
  disabled: boolean
}
