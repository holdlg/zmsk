

import { SidebarI, ZmskSidebar } from "./sidebar"


const zmsk元因维度文档: Array<SidebarI> = [
  {
    title: '元因维度',
    baseLink: '/元因维度/',
    collapsible: true,
    collapsed: false,
    docs: [
      '元因维度',
      '修身体系',
      '武器体系',
      '文明体系',
    ]
  }
]

const zmsk元因维度侧边栏 = new ZmskSidebar(zmsk元因维度文档).setSidebar()


export { zmsk元因维度侧边栏 }