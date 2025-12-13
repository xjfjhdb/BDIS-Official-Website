<template>
  <link rel="stylesheet" href="../assets/iconfont/iconfont.css">
  <div class="footer">
    <div class="footer-one"></div>
    <div class="footer-two">
      <div class="footer-two-left"></div>
      <div class="footer-two-right">
        <div class="footer-two-right-icon">
          <div class="linkway" v-for="item in iconItems" :key="item.id">
            <div class="icon-box">
              <span :class="[iconfont, item.icon]"></span>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-three"></div>
  </div>
</template>

<script setup>
const iconItems = [
  { id: 1, label: "实验概况", icon: ".icon-yunyingguanli", router: "/wip" },
  { id: 2, label: "成员简介", icon: ".icon-zuzhiqunzu", router: "/wip" },
  { id: 3, label: "在研项目", icon: ".icon-xiaoxitongzhi", router: "/wip" },
  { id: 4, label: "公告通知", icon: ".icon-gongdan", router: "/wip" },
  { id: 5, label: "创新竞赛", icon: ".icon-lianjieliu", router: "/wip" },
  { id: 6, label: "加入我们", icon: ".icon-wuxiandianbo", router: "/wip" },
]

</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  height: 600px;
  background-color: rgb(249, 249, 250);
}

.footer-one {
  height: 150px;
  background-color: rgb(249, 249, 250);
}

.footer-two {
  height: 260px;
  background-color: rgb(249, 249, 250);
  display: flex;
  justify-content: space-between;
}

.footer-three {
  height: 190px;
  background-color: rgb(249, 249, 250);
}


.footer-two-left {
  height: 100%;
  width: 225px;
}

.footer-two-right {
  height: 100%;
  width: 800px;
}

.footer-two-right-icon {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin: 50px 0 50px 0;
}

.icon-box {
  display: flex;
  flex-direction: column;
}

.linkway {
  height: 120px;
  width: 120px;
  padding: 19px;
  margin: 0 0 10px 10px;
}
</style>