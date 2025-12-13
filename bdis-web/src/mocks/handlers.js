// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'; // 替换 rest 为 http + HttpResponse

export const handlers = [
  // 1. 实验室信息接口
  http.get('/api/lab/info', () => {
    return HttpResponse.json({
      code: 0,
      message: "ok",
      data: {
        name: "大数据智能工作室",
        nameEn: "Big Data Intelligence Studio · BDIS",
        introShort: "依托大数据管理与应用专业，由泰迪·重理工大数据智能工作室与重庆理工大学创新实验室联合组建，聚焦创新创业、系统开发与大模型训练。",
        address: "重庆理工大学 博园4号楼305",
        email: "studio@example.com",
        qqGroup: "888888888",
        logoUrl: "/static/logo/bdis-logo.png",
        picture: "@/assets/lab-main.png"
      }
    });
  }),

  // 2. 首页轮播Banner接口
  http.get('/api/home/banners', () => {
    console.log('%c[MSW] 命中 /api/home/banners handler', 'color: red; font-weight: bold;')
    return HttpResponse.json({
      code: 0,
      message: "ok",
      data: [
        {
          id: 1,
          title: "2025-2026年度社团招新启动",
          subtitle: "加入我们，共创精彩",
          description: "覆盖技术、设计、运营等多个方向，提供系统化培训与实践机会",
          buttonLink: "/recruit/2025",
          imageUrl: "/static/banners/banner1.png",
          order: 1,
          active: true
        },
        {
          id: 2,
          title: "省级创新创业大赛获奖",
          subtitle: "以赛促学，斩获佳绩",
          description: "团队凭借'智能校园助手'项目，荣获省级二等奖，彰显技术实力",
          buttonLink: "/project/award/2025",
          imageUrl: "/static/banners/banner2.jpg",
          order: 2,
          active: true
        },
        {
          id: 3,
          title: "校企合作项目落地",
          subtitle: "理论结合实践，赋能成长",
          description: "与某科技公司联合开发的'校园智慧管理系统'正式上线试运行",
          buttonLink: "/cooperation/tech2025",
          imageUrl: "/static/banners/banner3.jpg",
          order: 3,
          active: true
        }
      ]
    });
  }),

  // 3. 新闻列表接口（其他接口同理，保持数据不变，只改响应方式）
  http.get('/api/news', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('limit') || 5);
    return HttpResponse.json({
      code: 0,
      message: "ok",
      data: [
        {
          id: 1,
          title: "2026春季成员招新说明",
          category: "recruit",
          summary: "面向两江校区同学，欢迎关注大数据智能工作室。",
          publishDate: "2026-02-20",
          link: "/news/1",
          coverThumbUrl: "/static/news/news1.jpg",
          order: 1
        },
        {
          id: 2,
          title: "2月组会：大模型应用与官网开发实践分享",
          category: "activity",
          summary: "分享近期大模型应用与官网开发的实践体会。",
          publishDate: "2026-02-15",
          link: "/news/2",
          coverThumbUrl: "/static/news/news2.jpg",
          order: 2
        },
        {
          id: 3,
          title: "实验室官网测试版上线说明",
          category: "notice",
          summary: "官网处于测试阶段，部分页面与功能仍在建设与优化。",
          publishDate: "2026-02-25",
          link: "/news/3",
          coverThumbUrl: "/static/news/news3.jpg",
          order: 3
        },
        {
          id: 4,
          title: "创新竞赛与组队板块上线公告",
          category: "contest",
          summary: "集中展示赛事信息，支持发布和查询组队。",
          publishDate: "2026-03-01",
          link: "/news/4",
          coverThumbUrl: "/static/news/news4.jpg",
          order: 4
        },
        {
          id: 5,
          title: "企业合作数据标注项目招募成员",
          category: "project_recruit",
          summary: "企业数据标注项目报名中，提供实践证明与补贴。",
          publishDate: "2026-03-05",
          link: "/news/5",
          coverThumbUrl: "/static/news/news5.jpg",
          order: 5
        }
      ].slice(0, limit)
    });
  }),


  // 4. 四宫格入口接口
  http.get('/api/home/features', () => {
    return HttpResponse.json({
      code: 0,
      message: "ok",
      data: [
        { id: 1, title: "加入我们", type: "join", link: "/join", order: 1 },
        { id: 2, title: "项目成果", type: "projects", link: "/projects", order: 2 },
        { id: 3, title: "创新竞赛", type: "events", link: "/activities", order: 3 },
        { id: 4, title: "学习资料", type: "resources", link: "/resources", order: 4 }
      ]
    });
  }),

  // 5. 项目进展接口
  http.get('/api/projects/highlight', (req) => {
    const limit = req.url.searchParams.get('limit') || 3;
    return HttpResponse.json({
      code: 0,
      message: "ok",
      data: [
        {
          id: 1,
          name: "党建矩阵·力量聚变",
          type: "system",
          year: 2025,
          tags: ["数据挖掘", "可视化", "后端开发"],
          brief: "基于SpringBoot+Vue开发的党建数据管理平台...",
          coverUrl: "@/assets/projects/project1.png",
          link: "/projects/1",
          isRecruiting: false,
          recruitRoles: [],
          recruitNote: "",
          order: 1
        },
        {
          id: 2,
          name: "校园智慧导航系统",
          type: "Cooperation",
          year: 2026,
          tags: ["前端开发", "GIS", "移动端适配"],
          brief: "与某科技公司合作开发...",
          coverUrl: "@/assets/projects/project2.png",
          link: "/projects/2",
          isRecruiting: true,
          recruitRoles: ["前端", "UI设计"],
          recruitNote: "需要前端2人、UI设计1人...",
          order: 2
        },
        {
          id: 3,
          name: "智能垃圾分类识别系统",
          type: "contest",
          year: 2025,
          tags: ["机器学习", "图像识别", "Python"],
          brief: "基于CNN模型开发的垃圾分类识别工具...",
          coverUrl: "@/assets/projects/project3.png",
          link: "/projects/3",
          isRecruiting: true,
          recruitRoles: ["算法优化", "后端部署"],
          recruitNote: "需要1名算法工程师优化模型...",
          order: 3
        }
      ].slice(0, limit)
    });
  }),

  // 6. 工作室生活接口
  http.get('/api/life', () => {
    return HttpResponse.json({
      code: 0,
      message: "ok",
      data: []
    });
  })
];