---
menu: Blog
title: Hiticon 打假图标游戏 —— CSS3版
category: web-game
tags: [hiticon,whac-a-logo,打地鼠]
github: whac-a-logo
redirect_from:
- /front-end/jquery-game/hiticon-css
---

## Whac-A-Logo —— Like Whac-A-Mole Game
打假图标游戏，IE浏览器JS动画，高级浏览器CSS动画，类似打地鼠，与电脑挑战，打击假图标多者获胜。

<a href="{{site.github_url}}/{{page.github}}" title="">View On Github</a>

## <a href="/demo/hiticon-css" title="Hiticon 打假图标游戏">Play Here On Mobile</a>

### options
```html
gameTime: 20, // 游戏时长s
turnNum: 3, // 初始自动翻面商标数
turnTime: 4000, // 商标自动翻面时长
wrongTime: 1000, // 敲错减少游戏时间数
logoAddInter: 8000, // 增加一个翻面logo的间隔
wrongNum: 1, // 翻面LOGO的错误数
hitInter: 400, // 玩家连续敲击间隔，至少大于 hHitTime
ohitRating: 0.9, // 机器人命中率
oMinHitTime: 1000 // 机器人 最小反应时间
```

### snapshot
![image]({{site.url}}/{{page.github}}/snapshot/demo.png)
