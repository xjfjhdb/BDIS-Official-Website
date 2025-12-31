package com.bdis.bdis_website.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

@Data
@TableName("home_banner")
public class BannerItem {
    @TableId
    private Long id;
    private String title;
    private String subtitle;
    private String description;
    private String buttonLink;
    private String imageUrl;

    @TableField(value = "`order`")
    private Integer order;

    private Integer active;
}