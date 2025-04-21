export interface TechItem {
  name: string
  color: [number, number, number]
  textColor: string
  icon: string
  hover: boolean
}

export interface TechCategory {
  key: string
  label: string
  items: TechItem[]
}
