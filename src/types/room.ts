export type StaffMember = {
  name: string
  title: string
  contact?: string
}

export type Room = {
  id: string
  name: string
  floor: number
  thumbnail: string
  image: string[]
  description: string
  usage: string
  staffs: StaffMember[]
  tags: string[]
}
