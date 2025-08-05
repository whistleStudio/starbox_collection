import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

export default defineUserConfig({
  bundler: viteBundler(),
  title: "创趣星盒课程（综合版）",
  head: [
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}]
  ],
  theme: defaultTheme({
    home: "/getting-started/快速索引.md",
    logo: "/images/cfdsxdoc-icon.png",
    logoAlt: "[当前网络不佳]",
    contributors: "Whistle Wang",
    sidebar: [
      {
        text: "准备工作",
        link: "/getting-started/快速索引.md",
        children: [
          { text: "快速索引", link: "/getting-started/快速索引.md" },
          { text: "创趣星盒", link: "/getting-started/创趣星盒.md" },
          { text: "编程星空软件", link: "/getting-started/编程星空软件.md" },
          { text: "注意事项", link: "/getting-started/注意事项.md" }
        ]
      },
      {
        text: "第一单元 基本输入与输出",
        link: "/第一单元_基本输入与输出/开关量的真与假.md",
        collapsible: true,
        children: [
          { text: "开关量的真与假", link: "/第一单元_基本输入与输出/开关量的真与假.md" },
          { text: "连续变化的数据", link: "/第一单元_基本输入与输出/连续变化的数据.md" },
          { text: "光控台灯", link: "/第一单元_基本输入与输出/光控台灯.md" },
          { text: "七彩灯的设置", link: "/第一单元_基本输入与输出/七彩灯的设置.md" },
          { text: "会唱歌的机器人", link: "/第一单元_基本输入与输出/会唱歌的机器人.md" },
        ]
      },
      {
        text: "第二单元 控制与系统基础",
        link: "/第二单元_控制与系统基础/旋钮控制风扇.md",
        collapsible: true,
        children: [
          { text: "旋钮控制风扇", link: "/第二单元_控制与系统基础/旋钮控制风扇.md" },
          { text: "温度控制风扇", link: "/第二单元_控制与系统基础/温度控制风扇.md" },
          { text: "土壤湿度控制好", link: "/第二单元_控制与系统基础/土壤湿度控制好.md" },
          { text: "光照温度要适宜", link: "/第二单元_控制与系统基础/光照温度要适宜.md" },
          { text: "自动读秒交通灯", link: "/第二单元_控制与系统基础/自动读秒交通灯.md" },
        ]
      },
      {
        text: "第三单元 反馈与优化",
        link: "/第三单元_反馈与优化/模拟空调控制室温.md",
        collapsible: true,
        children: [
          { text: "模拟空调控制室温", link: "/第三单元_反馈与优化/模拟空调控制室温.md" },
          { text: "智控电子秤", link: "/第三单元_反馈与优化/智控电子秤.md" },
          { text: "追光太阳能板", link: "/第三单元_反馈与优化/追光太阳能板.md" },
        ]
      },
      {
        text: "第四单元 机器人与汽车应用",
        link: "/第四单元_机器人与汽车应用/方形路径的行驶.md",
        collapsible: true,
        children: [
          { text: "方形路径的行驶", link: "/第四单元_机器人与汽车应用/方形路径的行驶.md" },
          { text: "不同参数对运动的影响", link: "/第四单元_机器人与汽车应用/不同参数对运动的影响.md" },
          { text: "沿墙行走机器人", link: "/第四单元_机器人与汽车应用/沿墙行走机器人.md" },
          { text: "跟随机器人", link: "/第四单元_机器人与汽车应用/跟随机器人.md" },
          { text: "循线机器人", link: "/第四单元_机器人与汽车应用/循线机器人.md" },
          { text: "定速巡航的控制", link: "/第四单元_机器人与汽车应用/定速巡航的控制.md" },
          { text: "自动熄灭转向灯", link: "/第四单元_机器人与汽车应用/自动熄灭转向灯.md" },
          { text: "安全带未系提醒", link: "/第四单元_机器人与汽车应用/安全带未系提醒.md" },
          { text: "倒车防撞请注意", link: "/第四单元_机器人与汽车应用/倒车防撞请注意.md" },
        ]
      },
      {
        text: "第五单元 综合场景与应用",
        link: "/第五单元_综合场景与应用/找找电梯子系统.md",
        collapsible: true,
        children: [
          { text: "找找电梯子系统", link: "/第五单元_综合场景与应用/找找电梯子系统.md" },
          { text: "到达指定的楼层", link: "/第五单元_综合场景与应用/到达指定的楼层.md" },
          { text: "电梯门的开与关", link: "/第五单元_综合场景与应用/电梯门的开与关.md" },
          { text: "如果超载电梯停", link: "/第五单元_综合场景与应用/如果超载电梯停.md" },
          { text: "刷卡开锁易实现", link: "/第五单元_综合场景与应用/刷卡开锁易实现.md" },
          { text: "人脸识别门禁更便捷", link: "/第五单元_综合场景与应用/人脸识别门禁更便捷.md" },
        ]
      },
      {
        text: "第六单元 通讯与网络基础",
        link: "/第六单元_通讯与网络基础/探究蓝牙传输距离.md",
        collapsible: true,
        children: [
          { text: "探究蓝牙传输距离", link: "/第六单元_通讯与网络基础/探究蓝牙传输距离.md" },
          { text: "巧用蓝牙做工具", link: "/第六单元_通讯与网络基础/巧用蓝牙做工具.md" },
          { text: "获取网络时间和天气", link: "/第六单元_通讯与网络基础/获取网络时间和天气.md" },
        ]
      },
      {
        text: "第七单元 物联网系统设计",
        link: "/第七单元_物联网系统设计/模拟本地单灯系统.md",
        collapsible: true,
        children: [
          { text: "模拟本地单灯系统", link: "/第七单元_物联网系统设计/模拟本地单灯系统.md" },
          { text: "模拟远程单灯系统", link: "/第七单元_物联网系统设计/模拟远程单灯系统.md" },
          { text: "模拟远程多灯系统", link: "/第七单元_物联网系统设计/模拟远程多灯系统.md" },
          { text: "可远程控制门禁", link: "/第七单元_物联网系统设计/可远程控制门禁.md" },
          { text: "可远程通知门铃", link: "/第七单元_物联网系统设计/可远程通知门铃.md" },
          { text: "场馆的人数控制", link: "/第七单元_物联网系统设计/场馆的人数控制.md" },
          { text: "场馆的温湿度控制", link: "/第七单元_物联网系统设计/场馆的温湿度控制.md" },
        ]
      },
      {
        text: "第八单元 跨学科探索",
        link: "/第八单元_跨学科探索/文物存放的适宜环境探究.md",
        collapsible: true,
        children: [
          { text: "文物存放的适宜环境探究", link: "/第八单元_跨学科探索/文物存放的适宜环境探究.md" },
          { text: "奶牛产奶监测系统", link: "/第八单元_跨学科探索/奶牛产奶监测系统.md" },
          { text: "热水的降温规律", link: "/第八单元_跨学科探索/热水的降温规律.md" },
          { text: "不同农作物的生长环境探究", link: "/第八单元_跨学科探索/不同农作物的生长环境探究.md" },
        ]
      },
    ],
    sidebarDepth: 0
  }),

  base: "/tutorial/starbox_collection/",

  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
    backToTopPlugin()
  ],
})