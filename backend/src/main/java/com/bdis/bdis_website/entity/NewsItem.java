package com.bdis.bdis_website.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("news_info") // 必须加，指定表名
public class NewsItem {
    @TableId(type = IdType.INPUT)
    private Long id;
    private String title;
    private String category;
    private String summary;
    private String publishDate; // 对应数据库 publish_date
    private String link;
    private String coverThumbUrl; // 对应数据库 cover_thumb_url
    private Integer order; // 对应数据库 `order`
}