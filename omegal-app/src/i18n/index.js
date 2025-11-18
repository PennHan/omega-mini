import { createI18n } from 'vue-i18n'

const getDefaultLocale = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('locale') || 'zh'
  }
  return 'zh'
}

const messages = {
  en: {
    common: {
      brand: 'OMEGAL',
      navigation: {
        home: 'Home',
        shop: 'Shop',
        profile: 'Profile',
      },
      buttons: {
        discoverTree: 'Discover Your Tree',
        memberCTA: "I'm already a member",
        exploreProducts: 'Explore OMEGAL Products',
        exploreMore: 'Explore More from OMEGAL',
        renew: 'Renew Now',
        manage: 'Manage Claim',
        claim: 'Claim Now (¥888 / year)',
        copy: 'Copy',
      },
    },
    welcome: {
      hero: {
        title: 'Embrace the Soul of Greece',
        description:
          'Co-own an organic olive tree, and receive pure, luxurious cosmetics crafted from its precious oil.',
      },
      features: {
        origin: {
          title: 'Authentic Greek Origin',
          description: 'From historic groves',
        },
        organic: {
          title: '100% Organic',
          description: 'Pure and sustainable',
        },
        skincare: {
          title: 'From Tree to Skin',
          description: 'Premium cosmetics',
        },
      },
      cta: {
        primary: '@:common.buttons.discoverTree',
        secondary: '@:common.buttons.memberCTA',
      },
    },
    dashboard: {
      hero: {
        subtitle: 'The Aegean Sea Beauty Secrets',
      },
      cards: {
        myTree: {
          title: 'My Olive Tree',
          description: "View your tree's status",
        },
        journey: {
          title: 'Videos & Reports',
          description: 'Watch the latest updates',
        },
        giftBox: {
          title: 'My Gift Box',
          description: 'Check your delivery',
        },
        subscription: {
          title: 'Subscription',
          description: 'Manage your plan',
        },
      },
    },
    myTree: {
      header: 'My Olive Tree',
      name: "Athena's Grove #127",
      tagline: 'Your personal source of liquid gold.',
      tabs: {
        details: 'Details',
        growth: 'Growth Log',
      },
      logs: {
        irrigation: {
          stage: 'Precision Irrigation',
          date: 'Mar 02, 2024',
          description: 'Low-flow emitters delivered a soft pulse to balance early spring moisture.',
          status: 'Moisture Optimal',
          metricLabel: 'Soil Moisture',
          metricValue: '68%',
        },
        bloom: {
          stage: 'Blossom Watch',
          date: 'Apr 12, 2024',
          description: 'Gentle coastal winds kept the blossoms stable during peak bloom.',
          status: 'Flower Retention',
          metricLabel: 'Bloom Stability',
          metricValue: '92%',
        },
        fruitset: {
          stage: 'Fruit Set Check',
          date: 'May 28, 2024',
          description: 'Young olives measured at 6 mm with healthy clusters across all branches.',
          status: 'Clusters Formed',
          metricLabel: 'Average Size',
          metricValue: '6 mm',
        },
        harvestprep: {
          stage: 'Harvest Prep',
          date: 'Jun 18, 2024',
          description: 'Leaf analysis confirmed balanced oils, and nets were scheduled for installation.',
          status: 'Oil Density',
          metricLabel: 'Polyphenols',
          metricValue: '330 mg/kg',
        },
      },
      stats: {
        region: {
          label: 'Region',
          value: 'Crete, Greece',
        },
        climate: {
          label: 'Climate',
          value: '24°C, Sunny',
        },
        growth: {
          label: 'Growth',
          value: 'Thriving',
        },
        yield: {
          label: 'Expected Yield',
          value: '2.5 Liters',
        },
      },
      action: '@:common.buttons.exploreProducts',
    },
    journey: {
      header: "My Tree's Journey",
      heroTitle: "Follow Your Olive's Story",
      heroSubtitle: 'From the groves of Greece to your home.',
      tabs: {
        videos: 'Farm Videos',
        reports: 'Monitoring Reports',
      },
      cards: {
        spring: {
          title: 'Spring Pruning',
          date: 'March 2024',
        },
        harvest: {
          title: 'October Harvest',
          date: 'October 2023',
        },
        pressing: {
          title: 'The Pressing Process',
          date: 'November 2023',
        },
        bottling: {
          title: 'From Grove to Bottle',
          date: 'December 2023',
        },
      },
      reports: {
        growth: {
          title: 'Growth Report - Q2 2024',
          issued: 'Issued: April 5, 2024',
        },
        soil: {
          title: 'Soil & Health Analysis',
          issued: 'Issued: March 12, 2024',
        },
        annual: {
          title: 'Annual Summary 2023',
          issued: 'Issued: January 15, 2024',
        },
        action: '@:common.buttons.copy',
      },
    },
    giftBox: {
      header: 'My Gift Box',
      title: 'OMEGAL Premium Organic Cosmetic Gift Box',
      subtitle: "The essence of your Greek olive tree, delivered with care.",
      price: '¥888.00',
      insideTitle: "What's Inside",
      inside: {
        serum: 'Organic Olive Oil Face Serum',
        balm: 'Nourishing Olive Body Balm',
        cream: 'Revitalizing Olive Hand Cream',
      },
      fromTreeTitle: 'From Your Tree',
      fromTreeDescription:
        "Crafted from the sun-kissed olives of your very own tree in Greece. This exclusive gift box contains a curated selection of our finest organic cosmetics, each product a testament to purity and nature's nourishing power. Experience the Mediterranean's best-kept secret for radiant skin.",
      status: {
        label: 'Status',
        value: 'In Transit',
        carrier: 'SF Express',
        timeline: {
          shipped: {
            title: 'Shipped',
            time: '2024-10-27 09:30 AM',
          },
          processing: {
            title: 'Processing',
            time: '2024-10-26 04:15 PM',
          },
          confirmed: {
            title: 'Order Confirmed',
            time: '2024-10-26 04:10 PM',
          },
        },
        tracking: 'SF1029384756',
      },
      cta: '@:common.buttons.exploreMore',
    },
    subscription: {
      header: 'My Olive Tree Subscription',
      badge: 'Active',
      planName: 'One-year co-ownership',
      expiry: 'Valid until: 2024-12-31',
      actions: {
        renew: '@:common.buttons.renew',
        manage: '@:common.buttons.manage',
      },
      includesTitle: 'Your subscription includes',
      includes: {
        certificate: 'Co-ownership certificate',
        updates: 'Quarterly farm updates',
        giftBox: 'Annual gift box',
      },
      historyTitle: 'Payment History',
      history: {
        latest: {
          title: 'One-year subscription',
          date: 'Dec 31, 2023',
          amount: '¥888.00',
          status: 'Paid',
        },
        previous: {
          title: 'One-year subscription',
          date: 'Dec 31, 2022',
          amount: '¥888.00',
          status: 'Paid',
        },
      },
      cta: '@:common.buttons.claim',
    },
  },
  zh: {
    common: {
      brand: 'OMEGAL',
      navigation: {
        home: '首页',
        shop: '商店',
        profile: '我的',
      },
      buttons: {
        discoverTree: '探索我的橄榄树',
        memberCTA: '我是会员',
        exploreProducts: '探索 OMEGAL 产品',
        exploreMore: '查看更多 OMEGAL 精选',
        renew: '立即续订',
        manage: '管理认领',
        claim: '立即认领 (¥888 / 年)',
        copy: '复制',
      },
    },
    welcome: {
      hero: {
        title: '拥抱希腊的灵魂',
        description:
          '与我们共同认领一棵有机橄榄树，收获由其珍贵橄榄油精心打造的奢华护肤礼遇。',
      },
      features: {
        origin: {
          title: '地道希腊产地',
          description: '源自百年橄榄园',
        },
        organic: {
          title: '100% 有机',
          description: '纯净且可持续',
        },
        skincare: {
          title: '从橄榄树到肌肤',
          description: '臻选护肤体验',
        },
      },
      cta: {
        primary: '@:common.buttons.discoverTree',
        secondary: '@:common.buttons.memberCTA',
      },
    },
    dashboard: {
      hero: {
        subtitle: '爱琴海的美肤秘密',
      },
      cards: {
        myTree: {
          title: '我的橄欖樹',
          description: '查看树木状态',
        },
        journey: {
          title: '影像与报告',
          description: '获取最新动态',
        },
        giftBox: {
          title: '我的礼盒',
          description: '追踪物流进度',
        },
        subscription: {
          title: '认领计划',
          description: '管理订阅方案',
        },
      },
    },
    myTree: {
      header: '我的橄榄树',
      name: '雅典娜橄榄林 #127',
      tagline: '属于你的液体黄金之源。',
      tabs: {
        details: '详情',
        growth: '生长日志',
      },
      logs: {
        irrigation: {
          stage: '精准灌溉',
          date: '2024 年 3 月 2 日',
          description: '低流量滴灌轻柔补水，平衡初春土壤含水量。',
          status: '水分稳定',
          metricLabel: '土壤湿度',
          metricValue: '68%',
        },
        bloom: {
          stage: '花期巡查',
          date: '2024 年 4 月 12 日',
          description: '海风温和，帮助花朵在盛花期保持稳定状态。',
          status: '花量保持',
          metricLabel: '花序稳定度',
          metricValue: '92%',
        },
        fruitset: {
          stage: '坐果检测',
          date: '2024 年 5 月 28 日',
          description: '幼果平均直径 6 毫米，各枝条均形成健康果串。',
          status: '果串形成',
          metricLabel: '平均果径',
          metricValue: '6 毫米',
        },
        harvestprep: {
          stage: '采收准备',
          date: '2024 年 6 月 18 日',
          description: '叶片分析显示油脂平衡，采收网已安排安装。',
          status: '油脂密度',
          metricLabel: '多酚含量',
          metricValue: '330 mg/kg',
        },
      },
      stats: {
        region: {
          label: '产区',
          value: '希腊·克里特',
        },
        climate: {
          label: '气候',
          value: '24°C · 晴朗',
        },
        growth: {
          label: '生长状况',
          value: '生长旺盛',
        },
        yield: {
          label: '预计年产',
          value: '2.5 升',
        },
      },
      action: '@:common.buttons.exploreProducts',
    },
    journey: {
      header: '我的橄榄旅程',
      heroTitle: '追随你的橄榄故事',
      heroSubtitle: '从希腊橄榄园到你的家中。',
      tabs: {
        videos: '农场实况',
        reports: '监测报告',
      },
      cards: {
        spring: {
          title: '春季修剪',
          date: '2024 年 3 月',
        },
        harvest: {
          title: '十月采摘',
          date: '2023 年 10 月',
        },
        pressing: {
          title: '冷榨工艺',
          date: '2023 年 11 月',
        },
        bottling: {
          title: '从果园到瓶中',
          date: '2023 年 12 月',
        },
      },
      reports: {
        growth: {
          title: '生长报告 - 2024 年 Q2',
          issued: '发布于：2024-04-05',
        },
        soil: {
          title: '土壤与健康分析',
          issued: '发布于：2024-03-12',
        },
        annual: {
          title: '年度总结 2023',
          issued: '发布于：2024-01-15',
        },
        action: '查看',
      },
    },
    giftBox: {
      header: '我的礼盒',
      title: 'OMEGAL 有机奢宠护肤礼盒',
      subtitle: '来自你专属橄榄树的臻美凝萃。',
      price: '¥888.00',
      insideTitle: '礼盒清单',
      inside: {
        serum: '有机橄榄精华油',
        balm: '滋养橄榄身体霜',
        cream: '焕活橄榄护手霜',
      },
      fromTreeTitle: '源自你的橄榄树',
      fromTreeDescription:
        '甄选自你在希腊的橄榄树，阳光与海风滋养的果实凝练成一整套高端有机护肤礼遇。每一件产品都以纯净为本，为肌肤注入地中海的焕活能量。',
      status: {
        label: '状态',
        value: '运输中',
        carrier: '顺丰速运',
        timeline: {
          shipped: {
            title: '已发货',
            time: '2024-10-27 09:30',
          },
          processing: {
            title: '打包处理中',
            time: '2024-10-26 16:15',
          },
          confirmed: {
            title: '订单已确认',
            time: '2024-10-26 16:10',
          },
        },
        tracking: 'SF1029384756',
      },
      cta: '@:common.buttons.exploreMore',
    },
    subscription: {
      header: '我的橄榄树认领',
      badge: '有效',
      planName: '一年期橄榄树共同所有权',
      expiry: '有效期至：2024-12-31',
      actions: {
        renew: '@:common.buttons.renew',
        manage: '@:common.buttons.manage',
      },
      includesTitle: '您的认领包含',
      includes: {
        certificate: '共同所有权证书',
        updates: '季度农场更新',
        giftBox: '年度礼品盒',
      },
      historyTitle: '支付历史',
      history: {
        latest: {
          title: '一年期认领',
          date: '2023 年 12 月 31 日',
          amount: '¥888.00',
          status: '已支付',
        },
        previous: {
          title: '一年期认领',
          date: '2022 年 12 月 31 日',
          amount: '¥888.00',
          status: '已支付',
        },
      },
      cta: '@:common.buttons.claim',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages,
})

export default i18n

