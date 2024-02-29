export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Programs',
    route: '/programs',
  },
  {
    label: 'Events&Competitions',
    route: '/events',
  },
  {
    label: 'Schedules',
    route: '/schedules',
  },
  {
    label: 'Blog',
    route: '/blog',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
