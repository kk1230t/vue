const menusData = [
  {
    name: '메인',
    link: '/',
    target: ''
  },
  {
    name: '회사소개',
    link: '/company',
    target: '',
    subMenu: [
      {
        name: '라이나생명',
        link: '/company/lina',
        target: ''
      }
    ]
  }
]

const commonMenu = {
  certCenter: {
    link: '/certification',
    name: '인증센터',
    target: '',
    icon: 'icon-large__setting'
  },
  alarm: {
    link: '/alarm',
    name: '알림함',
    target: '',
    icon: 'icon-large__notification'
  },
  setting: {
    link: '/setting',
    name: '환경설정',
    target: '',
    icon: 'icon-large__setting'
  },
  myInsurance: {
    link: '/my-insurance',
    name: '내보험료확인',
    target: '',
    icon: 'icon-large__check'
  }
}

export default {
  commonMenu,
  menusData
}
