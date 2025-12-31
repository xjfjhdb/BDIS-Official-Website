package com.bdis.bdis_website.controller;

import com.bdis.bdis_website.common.Result;
import com.bdis.bdis_website.entity.LabInfo;
import com.bdis.bdis_website.service.LabInfoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lab")
public class LabInfoController {

    private final LabInfoService labInfoService;

    // 构造器注入
    public LabInfoController(LabInfoService labInfoService) {
        this.labInfoService = labInfoService;
    }

    @GetMapping("/info")
    public Result<LabInfo> getLabInfo() {
        LabInfo labInfo = labInfoService.getById(1L);
        return Result.success(labInfo);
    }
}
