import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import SigthotelIndex from "@/pages/sighthotel/index/index"
import SigthotelDetail from "@/pages/sighthotel/detail/index"
import SigthotelOrderIndex from "@/pages/sighthotel/orders/index"
import Phonearea from "@/pages/sighthotel/orders/phonearea"
import onedayList from '@/pages/oneday-list/index'
import Detail from '@/pages/CommonDetail/index'
import WeekendIndex from '@/pages/weekendIndex/index'
import Oneday from '@/pages/oneday/index'
import Weekend from '@/pages/weekend/index'
import OneDayTourDetail from '@/pages/onedaydetail/index'
import Sales from '@/pages/sales/index'
import Comment from '@/pages/comment/index'
import Promote from '@/pages/promote/index'
import City from '@/pages/city/index'
import campaignIndex from '@/pages/campaign/index/index'
import campaignHelp from '@/pages/campaign/help/index'
import campaignNewAannounce from '@/pages/campaign/newannounce/index'
import campaignComputDetails from '@/pages/campaign/detail/comput/index'
import campaignAnnounceDetails from '@/pages/campaign/detail/announceDetails/index'
import campaignMineindex from '@/pages/campaign/mine/index'
import campaignMineRegister from '@/pages/campaign/mine/register'
import campaignDetail from '@/pages/campaign/detail/activityDetails'
import campaignOrder from '@/pages/campaign/order/index'
import campaignShowText from '@/pages/campaign/order/showtext'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: "/oneday-list",
      name: "onedayList",
      component: onedayList
    }, {
      path: "/list",
      name: "list",
      component: List
    }, {
      path: "/detail",
      name: "Detail",
      component: Detail
    }, {
      path: "/city",
      name: "city",
      component: City
    }, {
      path: "/weekend/:id/:title",
      name: "weekend",
      component: Weekend
    }, {
      path: '/comment',
      name: 'comment',
      component: Comment
    }, {
      path: '/promote',
      name: 'promote',
      component: Promote
    }, {
      path: "/oneday/detail/:pid",
      name: "one-day-detail",
      component: OneDayTourDetail
    }, {
      path: "/sales",
      name: "sales",
      component: Sales
    }, {
      path: "/campaign",
      name: "campaignIndex",
      component: campaignIndex
    }, {
      path: "/campaign/help",
      name: "campaignHelp",
      component: campaignHelp
    }, {
      path: "/campaign/newannounce",
      name: "campaignNewAannounce",
      component: campaignNewAannounce
    }, {
      path: "/campaign/computDetails/:id",
      name: "campaignComputDetails",
      component: campaignComputDetails
    }, {
      path: "/campaign/announceDetails/:id",
      name: "campaignAnnounceDetails",
      component: campaignAnnounceDetails
    }, {
      path: "/campaign/mine",
      name: "campaignMineindex",
      component: campaignMineindex
    }, {
      path: "/campaign/mine/register",
      name: "campaignMineRegister",
      component: campaignMineRegister
    }, {
      path: "/campaign/detail/:productId",
      name: "campaignDetail",
      component: campaignDetail
    }, {
      path: "/campaign/order",
      name: "campaignOrder",
      component: campaignOrder
    }, {
      path: "/campaign/showtext",
      name: "campaignShowText",
      component: campaignShowText
    }, {
      path: "/weekend/index",
      name: "Weekend",
      component: WeekendIndex
    }, {
      path: '/onedaytour',
      name: 'Oneday',
      component: Oneday
    }, {
      path: "/sighthotel",
      name: "sigthotelIndex",
      component: SigthotelIndex
    }, {
      path: "/sighthotel/detail",
      name: "sigthotelDetail",
      component: SigthotelDetail
    }, {
      path: "/sighthotel/order",
      name: "sigthotelOrderIndex",
      component: SigthotelOrderIndex
    }, {
      path: "/phonearea",
      name: "phonearea",
      component: Phonearea
    }
  ]
})
