
#

* 官网：https://openui5.org/releases/
* 学习地址: https://sdk.openui5.org/topic/592f36fd077b45349a67dcb3efb46ab1
* 下载地址：https://github.com/SAP/openui5/releases/download/1.102.10/openui5-runtime-1.102.10.zip
* * 下载后将 `resource` 目录直接解压到本项目根目录下 `/resource` 即可

通过Tomcat启动，配置文件 `/conf/server.xml` 关键配置如下 

````html
<Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
    
        <!-- path 为你访问的URI，例如 localhost:8080/SimpleOpenUI -->
        <!-- docBase 直接指定为你本地的项目路径 -->
		<Context path="/SimpleOpenUI" reloadable="true" docBase="D:\Workspaces\StudyWorkspaces\SimpleOpenUI"></Context>
    
      </Host>
````



