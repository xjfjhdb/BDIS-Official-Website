package com.bdis.bdis_website.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.bdis.bdis_website.entity.NewsItem;
import com.bdis.bdis_website.service.NewsItemService;
import com.bdis.bdis_website.common.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    @Autowired
    private NewsItemService newsItemService;

    /**
     * 获取新闻列表接口
     * 
     * @param limit
     * @param category
     * @return
     */
    @GetMapping
    public Result<List<NewsItem>> getNewsList(
            @RequestParam(required = false, defaultValue = "0") Integer limit,
            @RequestParam(required = false) String category) {
        com.baomidou.mybatisplus.core.conditions.query.QueryWrapper<NewsItem> queryWrapper = new com.baomidou.mybatisplus.core.conditions.query.QueryWrapper<>();

        queryWrapper.select(
                "id",
                "title",
                "category",
                "summary",
                "publish_date",
                "link",
                "cover_thumb_url",
                "`order`");

        queryWrapper.orderByAsc("`order`");

        if (category != null && !category.isEmpty()) {
            queryWrapper.eq("category", category);
        }

        List<NewsItem> newsList;
        if (limit > 0) {
            Page<NewsItem> page = new Page<>(1, limit);
            IPage<NewsItem> newsPage = newsItemService.page(page, queryWrapper);
            newsList = newsPage.getRecords();
        } else {
            newsList = newsItemService.list(queryWrapper);
        }

        return Result.success(newsList);
    }
}
