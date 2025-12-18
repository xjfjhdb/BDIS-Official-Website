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

  // 4. 项目进展接口（科研/项目进展模块）
  http.get('/api/projects/progress', ({ request }) => {
    const url = new URL(request.url)
    const limit = Number(url.searchParams.get('limit') || 5)
    const status = url.searchParams.get('status') // recruiting / ongoing / paused / done

    const all = [
      {
        id: "p-001",
        name: "系统开发：BDIS 官网.V1",
        tagline: "BDIS官网开发，围绕实验室品牌展示与招新传播，完成V1版本的初期开发与联调上线",
        status: "ongoing",
        progress: 82,
        recruitRoles: ["运维"],
        members: ["丁祎", "郭敦权", "杨思琦", "朱玉洁", "李林芝"],
        updatedAt: "2025-11-15",
        coverUrl: "/static/news/news1.jpg",
        link: "/projects/p-001",
        order: 1
      },
      {
        id: "p-002",
        name: "科研申报：心理健康预警分析",
        tagline: "融合多源校园行为数据构建特征体系，完成预警模型基线训练与可复现实验流程，支撑系统原型迭代",
        status: "ongoing",
        progress: 10,
        recruitRoles: ["无"],
        members: ["丁祎", "杨思琦", "朱玉洁", "李林芝"],
        updatedAt: "2026-11-01",
        coverUrl: "/static/news/news2.jpg",
        link: "/projects/p-002",
        order: 2
      },
      {
        id: "p-003",
        name: "企业合作：数据标注与质检",
        tagline: "建立小批量数据标注与抽检质控流程，沉淀统一规范与交付节奏，为后续规模化合作提供可复制范式",
        status: "recruiting",
        progress: 15,
        recruitRoles: ["数据标注", "质检", "项目助理"],
        members: ["招募中"],
        updatedAt: "2025-10-28",
        coverUrl: "/static/news/news3.jpg",
        link: "/news/5",
        order: 3
      },
    ]

    const filtered = status ? all.filter(p => p.status === status) : all
    const sorted = filtered.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

    return HttpResponse.json({
      code: 0,
      message: "ok",
      data: sorted.slice(0, limit)
    })
  }),

];