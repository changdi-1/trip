/* global L, lucide */

const categoryMeta = {
  hotel: { label: "酒店", icon: "hotel" },
  attraction: { label: "景点", icon: "landmark" },
  restaurant: { label: "餐厅", icon: "utensils" },
  shopping: { label: "购物", icon: "shopping-bag" },
  airport: { label: "机场", icon: "plane" }
};

const dayMeta = {
  1: {
    date: "9 月 24 日 · 周四",
    title: "抵达 · 明洞 · 东大门",
    description: "中午抵达仁川机场，入住明洞后完成第一轮购物、烤肉晚餐和 DDP 夜景。",
    color: "#d55232"
  },
  2: {
    date: "9 月 25 日 · 周五",
    title: "宫阙 · 韩屋 · 传统街区",
    description: "景福宫、北村、仁寺洞和南山串成一条由北向南的人文步行线。",
    color: "#268466"
  },
  3: {
    date: "9 月 26 日 · 周六",
    title: "圣水 · COEX · 江南",
    description: "上午圣水品牌店，午后首尔林和 COEX，晚餐在江南安排韩牛。",
    color: "#2478a7"
  },
  4: {
    date: "9 月 27 日 · 周日",
    title: "延南洞 · 弘大 · 返程",
    description: "轻量逛街和 Doma 午餐后返回酒店取行李，预留充足时间前往机场。",
    color: "#c48920"
  }
};

const places = {
  icn: {
    name: "仁川国际机场 T1",
    subtitle: "抵达 / 返程",
    type: "airport",
    coords: [37.4602, 126.4505],
    description: "国际航班建议至少提前 3 小时到机场。返程日还需为市区到机场预留 75–100 分钟。",
    address: "Incheon International Airport Terminal 1",
    amap: "https://uri.amap.com/marker?position=126.4505,37.4602&name=仁川国际机场T1&coordinate=wgs84&callnative=0"
  },
  hotel: {
    name: "Four Points Myeongdong",
    subtitle: "三晚住宿主方案",
    type: "hotel",
    coords: [37.5654, 126.9894],
    description: "乙支路三街附近，去景福宫、仁寺洞、明洞、东大门和南山都方便。建议预订 3 间可取消双人房。",
    address: "36 Samil-daero 10-gil, Jung-gu, Seoul",
    amap: "https://uri.amap.com/marker?position=126.9894,37.5654&name=Four%20Points%20Myeongdong&coordinate=wgs84&callnative=0"
  },
  myeongdong: {
    name: "明洞",
    subtitle: "美妆与百货集中区",
    type: "shopping",
    coords: [37.5636, 126.9850],
    image: "assets/myeongdong.webp",
    description: "第一天先比较 Olive Young、百货和品牌直营店的含税价、退税价与赠品，建立清单后再购买。",
    address: "Myeong-dong, Jung-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/6a6ab1d5000000000f015d04",
    amap: "https://uri.amap.com/marker?position=126.9850,37.5636&name=首尔明洞&coordinate=wgs84&callnative=0"
  },
  goldpig: {
    name: "金猪食堂",
    subtitle: "금돼지식당 · 烤肉",
    type: "restaurant",
    coords: [37.5575, 127.0118],
    description: "高赞笔记中的热门烤肉店。6 人需提前确认预约或排队规则，建议设置 60–90 分钟排队上限。",
    address: "서울 중구 다산로 149",
    xhs: "https://www.xiaohongshu.com/explore/68e78b8d000000000703bf97",
    amap: "https://uri.amap.com/marker?position=127.0118,37.5575&name=金猪食堂%20금돼지식당&coordinate=wgs84&callnative=0"
  },
  ddp: {
    name: "DDP 东大门设计广场",
    subtitle: "建筑与夜景",
    type: "attraction",
    coords: [37.5665, 127.0094],
    image: "assets/ddp.webp",
    description: "适合看建筑曲线、夜景和临时展览。下雨时把行程移入 DDP 或东大门商场室内。",
    address: "281 Eulji-ro, Jung-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/69a05bca000000001a01d1d7",
    amap: "https://uri.amap.com/marker?position=127.0094,37.5665&name=东大门设计广场DDP&coordinate=wgs84&callnative=0"
  },
  gyeongbokgung: {
    name: "景福宫",
    subtitle: "朝鲜王朝宫阙",
    type: "attraction",
    coords: [37.5796, 126.9770],
    image: "assets/gyeongbokgung.webp",
    description: "09:00 入场，建议 10:00 看守门将换岗。普通门票、韩服免票和换岗安排需出发前按官方公告复核。",
    address: "161 Sajik-ro, Jongno-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/69fbfd02000000001f001547",
    amap: "https://uri.amap.com/marker?position=126.9770,37.5796&name=首尔景福宫&coordinate=wgs84&callnative=0"
  },
  bukchon: {
    name: "北村韩屋村",
    subtitle: "传统韩屋居民区",
    type: "attraction",
    coords: [37.5826, 126.9850],
    image: "assets/bukchon.webp",
    description: "真实居民区而非主题公园。11:30 后进入，轻声、避开私人门院，并按现场游客时段标识通行。",
    address: "Gyedong-gil, Jongno-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/69fbfd02000000001f001547",
    amap: "https://uri.amap.com/marker?position=126.9850,37.5826&name=北村韩屋村&coordinate=wgs84&callnative=0"
  },
  insadong: {
    name: "仁寺洞",
    subtitle: "工艺、画廊与传统茶",
    type: "shopping",
    coords: [37.5740, 126.9850],
    image: "assets/insadong.webp",
    description: "传统工艺、书画、画廊和茶屋集中，适合买有韩国文化辨识度的礼物。",
    address: "Insadong-gil, Jongno-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/69fbfd02000000001f001547",
    amap: "https://uri.amap.com/marker?position=126.9850,37.5740&name=首尔仁寺洞&coordinate=wgs84&callnative=0"
  },
  eelArea: {
    name: "公平洞海鳗 · 钟路店",
    subtitle: "钟路午餐区参考点",
    type: "restaurant",
    coords: [37.5710, 126.9844],
    description: "原小红书笔记确认了门店名，但没有可稳定核验的门牌。地图点位仅表示钟路午餐区域，出发前请用韩文名 공평동꼼장어 종로점 让酒店前台确认。",
    address: "钟路店门牌待出发前复核",
    xhs: "https://www.xiaohongshu.com/explore/68e78b8d000000000703bf97",
    amap: "https://www.amap.com/search?query=首尔%20公平洞海鳗%20钟路店"
  },
  namsan: {
    name: "N 首尔塔",
    subtitle: "日落与城市夜景",
    type: "attraction",
    coords: [37.5512, 126.9882],
    image: "assets/namsan-tower.webp",
    description: "傍晚上山可覆盖日落、蓝调时刻和夜景。只上免费露台也能看城市景观；观景台价格以当天为准。",
    address: "105 Namsangongwon-gil, Yongsan-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/69fbfd02000000001f001547",
    amap: "https://uri.amap.com/marker?position=126.9882,37.5512&name=N首尔塔&coordinate=wgs84&callnative=0"
  },
  seongsu: {
    name: "圣水洞",
    subtitle: "品牌旗舰店与快闪",
    type: "shopping",
    coords: [37.5446, 127.0560],
    description: "围绕 Yeonmujang-gil 选择 3–4 家目标店。临时快闪变化快，以出发前一周品牌官方信息为准。",
    address: "Seongsu-dong 2-ga, Seongdong-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/6a6ab1d5000000000f015d04",
    amap: "https://uri.amap.com/marker?position=127.0560,37.5446&name=首尔圣水洞&coordinate=wgs84&callnative=0"
  },
  dakhanmari: {
    name: "圣水一只鸡",
    subtitle: "남다른본가닭한마리",
    type: "restaurant",
    coords: [37.5419, 127.0562],
    description: "6 人建议分两锅，先吃清汤鸡肉，再加刀切面或粥。小红书作者描述鸡肉 Q 弹不柴、特色蘸料突出。",
    address: "서울특별시 성동구 성수동2가 315-70 세대빌딩 201호",
    xhs: "https://www.xiaohongshu.com/explore/6a75c33300000000220320a0",
    amap: "https://www.amap.com/search?query=首尔%20남다른본가닭한마리"
  },
  seoulforest: {
    name: "首尔林",
    subtitle: "城市公园休息段",
    type: "attraction",
    coords: [37.5444, 127.0374],
    description: "用作圣水购物与 COEX 之间的低密度休息段。下雨时缩短到 20 分钟并提前去 COEX。",
    address: "273 Ttukseom-ro, Seongdong-gu, Seoul",
    amap: "https://uri.amap.com/marker?position=127.0374,37.5444&name=首尔林&coordinate=wgs84&callnative=0"
  },
  coex: {
    name: "COEX 星空图书馆",
    subtitle: "书墙与大型商场",
    type: "attraction",
    coords: [37.5126, 127.0592],
    image: "assets/starfield-library.webp",
    description: "图书馆免费进入。周六人多，拍照后把主要时间留给 COEX 品牌店、咖啡和统一集合。",
    address: "513 Yeongdong-daero, Gangnam-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/69a05bca000000001a01d1d7",
    amap: "https://uri.amap.com/marker?position=127.0592,37.5126&name=COEX星空图书馆&coordinate=wgs84&callnative=0"
  },
  chowon: {
    name: "草原韩牛江南店",
    subtitle: "초원 강남점",
    type: "restaurant",
    coords: [37.5211, 127.0353],
    description: "先问当日部位、每份克重和总价，再点韩牛拼盘、黑松露鸡蛋羹与炒饭。6 人必须提前订桌。",
    address: "서울특별시 강남구 도산대로 232",
    xhs: "https://www.xiaohongshu.com/explore/6a75c33300000000220320a0",
    amap: "https://uri.amap.com/marker?position=127.0353,37.5211&name=草原韩牛江南店%20초원강남점&coordinate=wgs84&callnative=0"
  },
  yeonnam: {
    name: "延南洞",
    subtitle: "社区漫步与独立小店",
    type: "shopping",
    coords: [37.5652, 126.9224],
    image: "assets/hongdae-yeonnam.webp",
    description: "周日上午先走延南洞，再返回弘大，可避开一部分午后人流。返程日务必遵守购物截止时间。",
    address: "Yeonnam-dong, Mapo-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/6a6ab1d5000000000f015d04",
    amap: "https://uri.amap.com/marker?position=126.9224,37.5652&name=延南洞&coordinate=wgs84&callnative=0"
  },
  doma: {
    name: "Doma 弘大本店",
    subtitle: "도마 홍대본점 · 烤肉",
    type: "restaurant",
    coords: [37.5539, 126.9211],
    image: "assets/xhs-doma.jpg",
    description: "推荐韩牛或烤肉拼盘、烤泡菜和招牌调料。6 人先确认套餐克重，再按实际食量加主食。",
    address: "서울특별시 마포구 양화로16길 33",
    xhs: "https://www.xiaohongshu.com/explore/6a75c33300000000220320a0",
    amap: "https://uri.amap.com/marker?position=126.9211,37.5539&name=Doma弘大本店%20도마홍대본점&coordinate=wgs84&callnative=0"
  },
  hongdae: {
    name: "弘大入口",
    subtitle: "最后购物与机场铁路",
    type: "shopping",
    coords: [37.5563, 126.9240],
    image: "assets/hongdae-yeonnam.webp",
    description: "集中补潮流服饰、配饰和美妆。14:20 强制结束购物，回酒店取行李后前往机场。",
    address: "Hongik University Station, Mapo-gu, Seoul",
    xhs: "https://www.xiaohongshu.com/explore/6a06f8f000000000080258bd",
    amap: "https://uri.amap.com/marker?position=126.9240,37.5563&name=弘大入口&coordinate=wgs84&callnative=0"
  }
};

const routes = {
  1: {
    stops: [
      { place: "icn", time: "11:00", note: "入境与取行李" },
      { place: "hotel", time: "15:30", note: "入住 / 寄存" },
      { place: "myeongdong", time: "16:15", note: "购物与比价" },
      { place: "goldpig", time: "18:30", note: "晚餐" },
      { place: "ddp", time: "20:30", note: "夜景" },
      { place: "hotel", time: "22:00", note: "返回酒店" }
    ],
    segments: [
      { from: "icn", to: "hotel", transport: "AREX + 出租车", icon: "train-front", duration: "75–100 分钟", note: "AREX 普通列车到首尔站，再分 2 辆出租车前往酒店。" },
      { from: "hotel", to: "myeongdong", transport: "步行", icon: "footprints", duration: "8–12 分钟", note: "轻装步行；第一天只建购物清单，不一次买完。" },
      { from: "myeongdong", to: "goldpig", transport: "地铁或 2 辆出租车", icon: "train-front", duration: "20–25 分钟", note: "晚高峰优先地铁；购物袋多时拆成两车。" },
      { from: "goldpig", to: "ddp", transport: "出租车", icon: "car", duration: "10–15 分钟", note: "6 人拆两车；排队超时则取消 DDP。" },
      { from: "ddp", to: "hotel", transport: "地铁或出租车", icon: "train-front", duration: "15–20 分钟", note: "体力不足时直接打车回酒店。" }
    ]
  },
  2: {
    stops: [
      { place: "hotel", time: "08:20", note: "出发" },
      { place: "gyeongbokgung", time: "09:00", note: "宫阙参观" },
      { place: "bukchon", time: "11:30", note: "韩屋步行" },
      { place: "insadong", time: "13:20", note: "传统街区" },
      { place: "eelArea", time: "13:30", note: "午餐区" },
      { place: "namsan", time: "17:00", note: "日落与夜景" },
      { place: "hotel", time: "19:30", note: "返回明洞" }
    ],
    segments: [
      { from: "hotel", to: "gyeongbokgung", transport: "地铁 3 号线", icon: "train-front", duration: "20–25 分钟", note: "08:20 集合，09:00 前抵达光化门。" },
      { from: "gyeongbokgung", to: "bukchon", transport: "步行", icon: "footprints", duration: "20–25 分钟", note: "石路和坡道较多，穿防滑运动鞋。" },
      { from: "bukchon", to: "insadong", transport: "步行", icon: "footprints", duration: "20–25 分钟", note: "选择下坡方向，减少折返。" },
      { from: "insadong", to: "eelArea", transport: "步行", icon: "footprints", duration: "5–10 分钟", note: "点位是钟路午餐区参考，门店门牌需出发前复核。" },
      { from: "eelArea", to: "namsan", transport: "2 辆出租车", icon: "car", duration: "20–30 分钟", note: "16:30 左右离开仁寺洞，避开日落前拥堵。" },
      { from: "namsan", to: "hotel", transport: "出租车或步行", icon: "car", duration: "15–25 分钟", note: "根据体力决定；晚餐在明洞轻量解决。" }
    ]
  },
  3: {
    stops: [
      { place: "hotel", time: "09:00", note: "出发" },
      { place: "seongsu", time: "09:30", note: "品牌店 / 快闪" },
      { place: "dakhanmari", time: "11:50", note: "午餐" },
      { place: "seoulforest", time: "13:30", note: "公园休息" },
      { place: "coex", time: "15:00", note: "图书馆与商场" },
      { place: "chowon", time: "18:30", note: "韩牛晚餐" },
      { place: "hotel", time: "21:30", note: "返回酒店" }
    ],
    segments: [
      { from: "hotel", to: "seongsu", transport: "地铁", icon: "train-front", duration: "30–40 分钟", note: "周六 09:30 前到圣水，先逛目标店。" },
      { from: "seongsu", to: "dakhanmari", transport: "步行", icon: "footprints", duration: "6–10 分钟", note: "6 人提前联系餐厅，建议两锅。" },
      { from: "dakhanmari", to: "seoulforest", transport: "步行或短程出租车", icon: "footprints", duration: "20–25 分钟", note: "下雨时跳过公园，直接前往 COEX。" },
      { from: "seoulforest", to: "coex", transport: "2 辆出租车", icon: "car", duration: "20–30 分钟", note: "遇堵车改地铁；COEX 设固定集合点。" },
      { from: "coex", to: "chowon", transport: "出租车", icon: "car", duration: "15–25 分钟", note: "购物结束后两车前往岛山大路。" },
      { from: "chowon", to: "hotel", transport: "2 辆出租车", icon: "car", duration: "25–35 分钟", note: "购物袋多，晚餐后不再安排地铁换乘。" }
    ]
  },
  4: {
    stops: [
      { place: "hotel", time: "08:30", note: "退房 / 寄存" },
      { place: "yeonnam", time: "09:00", note: "社区漫步" },
      { place: "doma", time: "11:10", note: "午餐" },
      { place: "hongdae", time: "12:40", note: "最后购物" },
      { place: "hotel", time: "14:40", note: "取行李" },
      { place: "icn", time: "16:30", note: "退税 / 托运" }
    ],
    segments: [
      { from: "hotel", to: "yeonnam", transport: "地铁", icon: "train-front", duration: "30–40 分钟", note: "退房后把大件行李寄存酒店，只带随身包。" },
      { from: "yeonnam", to: "doma", transport: "步行", icon: "footprints", duration: "18–22 分钟", note: "由延南洞向南步行进入弘大核心区。" },
      { from: "doma", to: "hongdae", transport: "步行", icon: "footprints", duration: "6–10 分钟", note: "午餐后集中补货，14:20 强制结束购物。" },
      { from: "hongdae", to: "hotel", transport: "地铁或 2 辆出租车", icon: "train-front", duration: "30–40 分钟", note: "回酒店取行李，检查退税单和液体。" },
      { from: "hotel", to: "icn", transport: "出租车 + AREX", icon: "train-front", duration: "75–100 分钟", note: "国际航班按起飞前 4.5 小时从酒店倒推。" }
    ]
  }
};

const map = L.map("map", {
  zoomControl: false,
  minZoom: 9,
  maxZoom: 18
}).setView([37.555, 126.99], 11);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  subdomains: ["b", "c", "d"],
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap &copy; CARTO"
}).addTo(map);

L.control.zoom({ position: "bottomright" }).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);
const markerByPlace = new Map();
let activeDay = "all";
let currentBounds = null;

function haversineDistance(a, b) {
  const radius = 6371;
  const toRadians = degrees => degrees * Math.PI / 180;
  const deltaLat = toRadians(b[0] - a[0]);
  const deltaLng = toRadians(b[1] - a[1]);
  const lat1 = toRadians(a[0]);
  const lat2 = toRadians(b[0]);
  const value = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(value));
}

function formatDistance(distance) {
  if (distance < 1) return `${Math.round(distance * 1000)} m`;
  return `${distance.toFixed(distance >= 10 ? 0 : 1)} km`;
}

function routeDistance(day) {
  return routes[day].segments.reduce((total, segment) => {
    return total + haversineDistance(places[segment.from].coords, places[segment.to].coords);
  }, 0);
}

function iconHtml(type) {
  return `<div class="place-marker ${type}"><span><i data-lucide="${categoryMeta[type].icon}"></i></span></div>`;
}

function createMarker(placeId) {
  const place = places[placeId];
  const icon = L.divIcon({
    className: "place-div-icon",
    html: iconHtml(place.type),
    iconSize: [36, 36],
    iconAnchor: [18, 34],
    popupAnchor: [0, -31]
  });
  const marker = L.marker(place.coords, { icon, keyboard: true });
  marker.bindPopup(`<strong>${place.name}</strong><br><span>${place.subtitle}</span>`);
  marker.on("click", () => selectPlace(placeId));
  marker.addTo(markerLayer);
  markerByPlace.set(placeId, marker);
  return marker;
}

function selectPlace(placeId) {
  const place = places[placeId];
  document.querySelectorAll(".timeline-item").forEach(item => {
    item.classList.toggle("is-selected", item.dataset.place === placeId);
  });

  const image = place.image
    ? `<img class="selection-image" src="${place.image}" alt="${place.name}">`
    : "";
  const sourceLink = place.xhs
    ? `<a href="${place.xhs}" target="_blank" rel="noopener"><i data-lucide="notebook-tabs"></i>小红书来源</a>`
    : "";
  const mapLink = place.amap
    ? `<a href="${place.amap}" target="_blank" rel="noopener"><i data-lucide="map-pin"></i>高德地图</a>`
    : "";

  document.getElementById("selection-panel").innerHTML = `
    ${image}
    <div class="selection-type"><i data-lucide="${categoryMeta[place.type].icon}"></i>${categoryMeta[place.type].label} · ${place.subtitle}</div>
    <h3>${place.name}</h3>
    <p class="selection-description">${place.description}</p>
    <p class="selection-address">${place.address}</p>
    <div class="selection-actions">${sourceLink}${mapLink}</div>
  `;
  lucide.createIcons();
}

function selectSegment(day, segment, latlng) {
  const from = places[segment.from];
  const to = places[segment.to];
  const distance = haversineDistance(from.coords, to.coords);
  document.querySelectorAll(".timeline-item").forEach(item => item.classList.remove("is-selected"));
  document.getElementById("selection-panel").innerHTML = `
    <div class="selection-type"><i data-lucide="route"></i>第 ${day} 天 · 路线段</div>
    <h3>${from.name} → ${to.name}</h3>
    <div class="segment-meta">
      <span><i data-lucide="ruler"></i>直线约 ${formatDistance(distance)}</span>
      <span><i data-lucide="clock-3"></i>${segment.duration}</span>
      <span><i data-lucide="${segment.icon}"></i>${segment.transport}</span>
    </div>
    <p class="selection-description">${segment.note}</p>
  `;
  lucide.createIcons();

  if (latlng) {
    L.popup({ closeButton: false, offset: [0, -4] })
      .setLatLng(latlng)
      .setContent(`<div class="route-popup"><strong>${segment.transport}</strong><span>直线约 ${formatDistance(distance)} · ${segment.duration}</span></div>`)
      .openOn(map);
  }
}

function addSegment(day, segment, opacity) {
  const from = places[segment.from];
  const to = places[segment.to];
  const color = dayMeta[day].color;
  const points = [from.coords, to.coords];
  const line = L.polyline(points, {
    color,
    weight: 4,
    opacity,
    lineCap: "round"
  }).addTo(routeLayer);

  const hitLine = L.polyline(points, {
    color,
    weight: 18,
    opacity: 0.01,
    interactive: true
  }).addTo(routeLayer);

  const decorator = L.polylineDecorator(line, {
    patterns: [{
      offset: "18%",
      repeat: "30%",
      symbol: L.Symbol.arrowHead({
        pixelSize: 9,
        polygon: true,
        pathOptions: {
          color,
          fillColor: color,
          fillOpacity: opacity,
          weight: 1
        }
      })
    }]
  }).addTo(routeLayer);

  const handleClick = event => selectSegment(day, segment, event.latlng);
  line.on("click", handleClick);
  hitLine.on("click", handleClick);
  decorator.on("click", handleClick);
}

function timelineItem(stop) {
  const place = places[stop.place];
  return `
    <button class="timeline-item" type="button" data-place="${stop.place}">
      <span class="timeline-time">${stop.time}</span>
      <span class="timeline-name"><strong>${place.name}</strong><small>${stop.note}</small></span>
      <i data-lucide="chevron-right"></i>
    </button>
  `;
}

function renderTimeline(days) {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = days.map(day => {
    const heading = days.length > 1
      ? `<div class="timeline-day-heading">第 ${day} 天 · ${dayMeta[day].date}</div>`
      : "";
    return heading + routes[day].stops.map(timelineItem).join("");
  }).join("");

  timeline.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("click", () => {
      const placeId = item.dataset.place;
      const marker = markerByPlace.get(placeId);
      selectPlace(placeId);
      if (marker) {
        map.flyTo(places[placeId].coords, Math.max(map.getZoom(), 14), { duration: 0.6 });
        marker.openPopup();
      }
    });
  });
}

function updateSummary(days) {
  const totalDistance = days.reduce((sum, day) => sum + routeDistance(day), 0);
  const status = document.getElementById("map-status");
  if (days.length === 1) {
    const day = days[0];
    document.getElementById("summary-date").textContent = dayMeta[day].date;
    document.getElementById("summary-title").textContent = dayMeta[day].title;
    document.getElementById("summary-description").textContent = dayMeta[day].description;
    document.getElementById("summary-distance").textContent = `连线约 ${formatDistance(totalDistance)}`;
    status.innerHTML = `<span class="status-dot" style="background:${dayMeta[day].color}"></span><span>第 ${day} 天路线</span>`;
  } else {
    document.getElementById("summary-date").textContent = "四日总览";
    document.getElementById("summary-title").textContent = "首尔单城 · 四条主题路线";
    document.getElementById("summary-description").textContent = "抵达、宫阙人文、圣水江南购物与弘大返程，地图显示全部地点及每日方向。";
    document.getElementById("summary-distance").textContent = `连线约 ${formatDistance(totalDistance)}`;
    status.innerHTML = `<span class="status-dot"></span><span>全部路线</span>`;
  }
}

function fitCurrentRoute() {
  if (!currentBounds || !currentBounds.isValid()) return;
  map.fitBounds(currentBounds, {
    paddingTopLeft: [35, 35],
    paddingBottomRight: [35, 35],
    maxZoom: activeDay === "all" ? 11 : 13
  });
}

function render(day) {
  activeDay = day;
  const days = day === "all" ? [1, 2, 3, 4] : [Number(day)];
  markerLayer.clearLayers();
  routeLayer.clearLayers();
  markerByPlace.clear();

  const placeIds = new Set();
  days.forEach(dayNumber => {
    routes[dayNumber].stops.forEach(stop => placeIds.add(stop.place));
  });
  placeIds.forEach(createMarker);

  days.forEach(dayNumber => {
    routes[dayNumber].segments.forEach(segment => addSegment(dayNumber, segment, day === "all" ? 0.72 : 0.94));
  });

  const bounds = L.latLngBounds([...placeIds].map(placeId => places[placeId].coords));
  currentBounds = bounds;
  renderTimeline(days);
  updateSummary(days);
  lucide.createIcons();
  window.setTimeout(() => {
    map.invalidateSize();
    fitCurrentRoute();
  }, 50);
}

document.querySelectorAll(".day-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".day-tab").forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle("is-active", selected);
      tab.setAttribute("aria-pressed", String(selected));
    });
    document.getElementById("selection-panel").innerHTML = `
      <div class="selection-empty"><i data-lucide="mouse-pointer-click"></i><p>选择地图地点或路线段</p></div>
    `;
    render(button.dataset.day);
  });
});

document.getElementById("fit-route").addEventListener("click", fitCurrentRoute);

lucide.createIcons();
render("all");
