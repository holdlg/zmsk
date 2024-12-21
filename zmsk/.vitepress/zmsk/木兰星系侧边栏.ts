

import { SidebarI, ZmskSidebar } from "./sidebar"

const zmsk木兰星系人文地理: Array<SidebarI> = [
  {
    title: '人文地理',
    baseLink: '/木兰星系/人文地理/',
    collapsible: true,
    collapsed: false,
    docs: [
      '地理空间',
      '人物简集',
      '科普纪实',
    ]
  }
]

const zmsk木兰星系人物传记: Array<SidebarI> = [
  {
    title: '人物传记',
    baseLink: '/木兰星系/人物传记/',
    collapsible: true,
    collapsed: false,
    docs: [
      '故事背景',
      '温仁千代',
      // '巴山夜雨',
      // '中河守卫',
      // '白月墨方',
      // '夜影六组',
      // '良义双子',
      // '克隆天才',
      // '木兰五族',
    ]
  }
]

const zmsk木兰星系子与沐: Array<SidebarI> = [
  {
    title: '子与沐•木卫',
    baseLink: '/木兰星系/子与沐/',
    collapsible: true,
    collapsed: false,
    docs: [
      '序章',
      '第1章 王子来了',
      '第2章 王子走了',
    ]
  }
]



const zmsk木兰星系人文地理侧边栏 = new ZmskSidebar(zmsk木兰星系人文地理).setSidebar()
const zmsk木兰星系人物传记侧边栏 = new ZmskSidebar(zmsk木兰星系人物传记).setSidebar()



export { 
  zmsk木兰星系人文地理侧边栏,
  zmsk木兰星系人物传记侧边栏,
}