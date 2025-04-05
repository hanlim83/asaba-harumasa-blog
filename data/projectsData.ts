interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'To Yanagi',
    description: `To get our snack-loving colleague to attend the meeting, you'd go this far? Really... um... Deputy Chief, I think I've already gone above and beyond with my workload today. Could I maybe take next week off? 😃😃😃`,
    imgSrc: '/static/images/snack-loving-workload.jpg',
    href: 'https://x.com/ZZZ_EN/status/1854018424235811032',
  },
  {
    title: 'Yes, that is the chief laughing',
    description: `It may not seem like it, but trust me, that is what a real laugh from the chief sounds like. No kidding.`,
    imgSrc: '/static/images/miyabi-laughing.jpg',
    href: 'https://x.com/ZZZ_EN/status/1869246226996068738/',
  },
]

export default projectsData
