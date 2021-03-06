[English](./README_en.md) | [设计文档](docs/design.md) | [使用文档](https://wqtester.github.io/ata-cloudwhitepaper/) | [安装文档](docs/install_local_cluster.md) | [版本更新](docs/releasenodes/)

开源社区欢迎您的参与！如果有任何反馈，您可以通过邮件或者QQ等方式联系我们

![LOGO](docs/img/bazooka_logo_600x124.jpg)
  
<h1>阿塔云 Bazooka - 自动化开发运维平台</h1>

![愿景](docs/img/Bazooka_goal.png)

Bazooka自动化开发运维平台，在[Docker](https://www.docker.com/)，[Mesos](http://mesos.apache.org/)，[Kubernetes](https://kubernetes.io/)，[Jenkins](https://jenkins.io)，[Gitlab](https://about.gitlab.com/)等开源技术的基础上，以应用和计算资源为中心，实现本地和云端的各类计算资源的一致性，帮助企业应对敏捷开发、自动化构建部署、微服务治理、多租户管理、容器和镜像仓库管理、容器监控和日志等业务场景。

# 核心功能

![功能架构](docs/img/Bazooka_functional_architecture.png)

- **资源** - 通过Mesos集群、Kubernetes集群或者独立节点的方式，管理物理机、虚拟机、云主机等各类计算资源
- **环境** - 用户根据开发场景划分，例如“测试环境”、“预发布环境”、“生产环境”等。环境通过资源切分，为各个项目中的服务提供透明、无感知的计算资源调度
- **项目** - 按照业务划分的逻辑分组，由一组关联的服务、用户组成，通过项目关联的环境向各个服务提供标准的计算资源
- [**服务**](docs/app_manage.md) - 一个服务对应一个完整的生命周期，拥有代码管理、编译、打包、容器镜像、测试、发布、部署、运维、监控等完整的功能
- **服务发布流水线** - 通过发布调度引擎和各类标准插件提供可编辑的服务流水线，自动调度以完成服务的资源检查、审批、代码拉取、质量扫描、代码编译、镜像构建、容器部署、健康检查、通知等完整流程
- **系统信息** - 系统基础信息、组件状态和凭据管理
- **用户管理** - 系统用户管理，角色分配

您也可以通过[系统截图](./user_guide.md)对Bazooka有一个更加直观的认识和理解，或者查看此页面下方的演示视频，获得更详细的信息。

# 安装和部署

可以访问[安装文档](docs/install_local_cluster.md)，获得详细的安装说明。

# 开始使用Bazooka

开始使用Bazooka之前，请阅读[使用文档](https://wqtester.github.io/ata-cloudwhitepaper)

您也可以参考以下使用演示视频

[1.登陆、系统和权限.mp4](https://download-cos.yofish.com/bazooka-ops/%E9%98%BF%E5%A1%94%E4%BA%91-Bazooka%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA/1.%20%E7%99%BB%E9%99%86%E7%B3%BB%E7%BB%9F%E7%94%A8%E6%88%B7.mp4) | [2.资源.mp4](https://download-cos.yofish.com/bazooka-ops/%E9%98%BF%E5%A1%94%E4%BA%91-Bazooka%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA/2.%20%E8%B5%84%E6%BA%90.mp4) | [3.环境.mp4](https://download-cos.yofish.com/bazooka-ops/%E9%98%BF%E5%A1%94%E4%BA%91-Bazooka%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA/3.%20%E7%8E%AF%E5%A2%83.mp4) | [4.项目.mp4](https://download-cos.yofish.com/bazooka-ops/%E9%98%BF%E5%A1%94%E4%BA%91-Bazooka%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA/4.%20%E9%A1%B9%E7%9B%AE.mp4)

[5.服务.mp4](https://download-cos.yofish.com/bazooka-ops/%E9%98%BF%E5%A1%94%E4%BA%91-Bazooka%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA/5.%20%E6%9C%8D%E5%8A%A1.mp4) | [6.服务发布配置和服务发布.mp4](https://download-cos.yofish.com/bazooka-ops/%E9%98%BF%E5%A1%94%E4%BA%91-Bazooka%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA/6.%20%E6%9C%8D%E5%8A%A1%E5%8F%91%E5%B8%83%E9%85%8D%E7%BD%AE%E5%92%8C%E6%9C%8D%E5%8A%A1%E5%8F%91%E5%B8%83.mp4) | [7.服务管理和容器管理.mp4](https://download-cos.yofish.com/bazooka-ops/%E9%98%BF%E5%A1%94%E4%BA%91-Bazooka%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA/7.%20%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86%E5%92%8C%E5%AE%B9%E5%99%A8%E7%AE%A1%E7%90%86.mp4)

# 使用Bazooka进行开发

您可以参考[设计文档](docs/design.md)中的架构设计、领域模型设计、发布流程图、发布状态机和用例图

# 开源地址

[https://github.com/ata-cloud/bazooka](https://github.com/ata-cloud/bazooka)

# 版权说明

自身使用 Apache v2.0 协议，Bazooka uses Apache 2.0.

# 阿塔云相关开源产品链接

[sword - 公共组件包，致力于减少重复开发工作量](https://github.com/ata-cloud/sword)

# BUG与建议反馈

若您安装使用时有任何建议问题、反馈或发现的 Bug，欢迎在 [GitHub Issue](https://github.com/ata-cloud/bazooka/issues) 提交 Issue。

邮件交流：893145247@qq.com

QQ交流：

<img src="docs/img/qq.jpg"  height="302" width="220">
