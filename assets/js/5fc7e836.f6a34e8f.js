"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[2816],{60834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>E,frontMatter:()=>a,metadata:()=>c,toc:()=>d});n(67294);var s=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"Chat2DB AI\u52a9\u624b\u4ecb\u7ecd",sidebar_position:11,description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"},i="AI\u529f\u80fd\u4ecb\u7ecd",c={unversionedId:"ai/ai",id:"ai/ai",title:"Chat2DB AI\u52a9\u624b\u4ecb\u7ecd",description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177",source:"@site/docs/ai/ai.md",sourceDirName:"ai",slug:"/ai/",permalink:"/docs/ai/",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/ai/ai.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Chat2DB AI\u52a9\u624b\u4ecb\u7ecd",sidebar_position:11,description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"},sidebar:"docSidebar",previous:{title:"Chat2DB\u6280\u672f\u67b6\u6784\u4ecb\u7ecd",permalink:"/docs/architecture/server"},next:{title:"Chat2DB \u652f\u6301\u7684\u6570\u636e\u5e93\u4ecb\u7ecd",permalink:"/docs/dbsupport/"}},l={},d=[{value:"\u529f\u80fd\u4e00\uff1a\u81ea\u7136\u8bed\u8a00\u751f\u6210SQL",id:"\u529f\u80fd\u4e00\u81ea\u7136\u8bed\u8a00\u751f\u6210sql",level:2},{value:"\u529f\u80fd\u4e8c\uff1aSQL\u89e3\u91ca\u4e3a\u81ea\u7136\u8bed\u8a00",id:"\u529f\u80fd\u4e8csql\u89e3\u91ca\u4e3a\u81ea\u7136\u8bed\u8a00",level:2},{value:"\u529f\u80fd\u4e09\uff1aSQL\u4f18\u5316",id:"\u529f\u80fd\u4e09sql\u4f18\u5316",level:2},{value:"\u529f\u80fd\u56db\uff1aSQL\u8f6c\u6362",id:"\u529f\u80fd\u56dbsql\u8f6c\u6362",level:2},{value:"AI\u529f\u80fd\u6f14\u793a",id:"ai\u529f\u80fd\u6f14\u793a",level:2}],N={toc:d},p="wrapper";function E(e){var{components:t}=e,n=u(e,["components"]);return(0,s.kt)(p,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){r(e,t,n[t])}))}return e}({},N,n),{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ai\u529f\u80fd\u4ecb\u7ecd"},"AI\u529f\u80fd\u4ecb\u7ecd"),(0,s.kt)("h2",{id:"\u529f\u80fd\u4e00\u81ea\u7136\u8bed\u8a00\u751f\u6210sql"},"\u529f\u80fd\u4e00\uff1a\u81ea\u7136\u8bed\u8a00\u751f\u6210SQL"),(0,s.kt)("p",null,"\u9996\u5148\u5efa\u597d\u6d4b\u8bd5\u9700\u8981\u7528\u7684\u8868\uff0c\u8fd9\u91cc\u7528\u5230\u4e864\u5f20\u8868\u505a\u6d4b\u8bd5\u3002\u5927\u5bb6\u4e5f\u53ef\u4ee5\u5efa\u81ea\u5df1\u7684\u8868\u505a\u6d4b\u8bd5\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE student (\n  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '\u5b66\u751fID',\n  name VARCHAR(50) NOT NULL COMMENT '\u5b66\u751f\u59d3\u540d',\n  gender VARCHAR(10) NOT NULL COMMENT '\u5b66\u751f\u6027\u522b',\n  birthday DATE NOT NULL COMMENT '\u5b66\u751f\u751f\u65e5',\n  address VARCHAR(100) NOT NULL COMMENT '\u5b66\u751f\u4f4f\u5740',\n  phone VARCHAR(20) NOT NULL COMMENT '\u5b66\u751f\u8054\u7cfb\u65b9\u5f0f'\n) COMMENT '\u5b66\u751f\u4fe1\u606f\u8868';\n\u79d1\u76ee\u8868\uff1a\n\nCREATE TABLE course (\n  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '\u79d1\u76eeID',\n  name VARCHAR(50) NOT NULL COMMENT '\u79d1\u76ee\u540d\u79f0',\n  teacher VARCHAR(50) NOT NULL COMMENT '\u6388\u8bfe\u6559\u5e08',\n  credit INT NOT NULL COMMENT '\u79d1\u76ee\u5b66\u5206'\n) COMMENT '\u79d1\u76ee\u8868';\n\u5b66\u751f\u9009\u4fee\u79d1\u76ee\u8868\uff1a\n\nCREATE TABLE student_course (\n  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '\u5173\u7cfbID',\n  student_id INT NOT NULL COMMENT '\u5b66\u751fID',\n  course_id INT NOT NULL COMMENT '\u79d1\u76eeID',\n  FOREIGN KEY (student_id) REFERENCES student(id),\n  FOREIGN KEY (course_id) REFERENCES course(id)\n) COMMENT '\u5b66\u751f\u9009\u4fee\u79d1\u76ee\u8868';\n\u5b66\u751f\u6210\u7ee9\u8868\uff1a\n\nCREATE TABLE score (\n  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '\u6210\u7ee9ID',\n  student_id INT NOT NULL COMMENT '\u5b66\u751fID',\n  course_id INT NOT NULL COMMENT '\u79d1\u76eeID',\n  score INT NOT NULL COMMENT '\u6210\u7ee9',\n  FOREIGN KEY (student_id) REFERENCES student(id),\n  FOREIGN KEY (course_id) REFERENCES course(id)\n) COMMENT '\u5b66\u751f\u6210\u7ee9\u8868';\n")),(0,s.kt)("p",null,"\u8868\u5efa\u597d\u540e\uff0c\u53ef\u4ee5\u63d2\u5165\u4e00\u4e9b\u6d4b\u8bd5\u6570\u636e\u3002\n\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u7528\u81ea\u7136\u8bed\u8a00\u8f93\u5165\u6bd4\u5982\uff1a\u201c\u67e5\u8be2\u5c0f\u660e\u7684\u5404\u79d1\u76ee\u6210\u7ee9\u201d\xa0\u751f\u6210\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"## ---BEGIN---\n## \u67e5\u8be2\u5b66\u751f\u5c0f\u660e\u7684\u5404\u79d1\u76ee\u6210\u7ee9\n\n## ---\u81ea\u7136\u8bed\u8a00\u8f6c\u6362:---\nSELECT score.score \nFROM score \nINNER JOIN student_course ON score.course_id = student_course.course_id \nINNER JOIN student ON student_course.student_id = student.id \nWHERE student.name = '\u5c0f\u660e'\n## --- END ---\n")),(0,s.kt)("p",null,'\u518d\u6bd4\u5982\uff1a"\u67e5\u8be2\u603b\u6210\u7ee9\u6392\u540d\u73ed\u7ea7\u524d\u5341\u7684\u540c\u5b66"\xa0\u751f\u6210\u7ed3\u679c\u5982\u4e0b\uff1a'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"## ---BEGIN---\n## \u67e5\u8be2\u603b\u6210\u7ee9\u6392\u540d\u73ed\u7ea7\u524d\u5341\u7684\u540c\u5b66\n\n## ---\u81ea\u7136\u8bed\u8a00\u8f6c\u6362:---\nSELECT s.name, SUM(sc.score) AS total_score\nFROM student s\nINNER JOIN student_course sc ON s.id = sc.student_id\nGROUP BY s.id\nORDER BY total_score DESC\nLIMIT 10;\n## --- END ---\n")),(0,s.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u9009\u62e9\u81ea\u7136\u8bed\u8a00\u8f6cSQL\uff0c\u9700\u8981\u9009\u62e9\u4e00\u4e0b\u7528\u4e8e\u751f\u6210\u7684SQL\u7684\u539f\u59cb\u8868\uff0c\u76ee\u7684\u63d0\u5347Prompt\u8bad\u7ec3\u7684\u7cbe\u5ea6\uff0c\u8ba9GPT\u6839\u636e\u4f60\u9009\u62e9\u7684\u7279\u5b9a\u8868\u751f\u6210SQL\u3002"),(0,s.kt)("p",null,"\u8c03\u7528ChatGPT\xa0API\xa0Prompt\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, List<TableColumn>> tableColumns = buildTableColumn(queryParam, queryRequest.getTableNames());\nList<String> tableSchemas = tableColumns.entrySet().stream().map(\n    entry -> String.format("%s(%s)", entry.getKey(),\n                           entry.getValue().stream().map(TableColumn::getName).collect(\n                               Collectors.joining(", ")))).collect(Collectors.toList());\nString properties = String.join("\\n#", tableSchemas);\nString prompt = queryRequest.getMessage();\nString promptType = StringUtils.isBlank(queryRequest.getPromptType()) ? PromptType.NL_2_SQL.getCode()\n: queryRequest.getPromptType();\nPromptType pType = EasyEnumUtils.getEnum(PromptType.class, promptType);\nString ext = StringUtils.isNotBlank(queryRequest.getExt()) ? queryRequest.getExt() : "";\nString schemaProperty = CollectionUtils.isNotEmpty(tableSchemas) ? String.format(\n    "### \u8bf7\u6839\u636e\u4ee5\u4e0btable properties\u548cSQL input%s. %s\\n#\\n### %s SQL tables, with their properties:\\n#\\n# "\n    + "%s\\n#\\n#\\n### SQL input: %s", pType.getDescription(), ext, dataSourceType,\n    properties, prompt) : String.format("### \u8bf7\u6839\u636e\u4ee5\u4e0bSQL input%s. %s\\n#\\n### SQL input: %s",\n                                        pType.getDescription(), ext, prompt);\n')),(0,s.kt)("h2",{id:"\u529f\u80fd\u4e8csql\u89e3\u91ca\u4e3a\u81ea\u7136\u8bed\u8a00"},"\u529f\u80fd\u4e8c\uff1aSQL\u89e3\u91ca\u4e3a\u81ea\u7136\u8bed\u8a00"),(0,s.kt)("p",null,"\u6709\u7684\u65f6\u5019\u6211\u4eec\u4f1a\u9047\u5230\u975e\u5e38\u590d\u6742\u7684SQL\uff0c\u6709\u7684\u751a\u81f3\u6210\u767e\u4e0a\u5343\u884c\u7684SQL\uff0c\u8981\u8bfb\u61c2\u8fd9\u6bb5SQL\u53ef\u80fd\u9700\u8981\u51e0\u4e2a\u5c0f\u65f6\u751a\u81f3\u51e0\u5929\u65f6\u95f4\u3002\u6211\u4eec\u901a\u8fc7Chat2DB\u4e5f\u53ef\u4ee5\u5feb\u901f\u7684\u4e86\u89e3\u8fd9\u6bb5SQL\u7684\u542b\u4e49\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"## ---BEGIN---\n## SELECT score.score \nFROM score \nINNER JOIN student_course ON score.course_id = student_course.course_id \nINNER JOIN student ON student_course.student_id = student.id \nWHERE student.name = '\u5c0f\u660e'\n## ---\u89e3\u91caSQL:---\n\u8fd9\u4e2aSQL\u67e5\u8be2\u8bed\u53e5\u7684\u4f5c\u7528\u662f\u4ece\u201cscore\u201d\u8868\u4e2d\u9009\u62e9\u201cscore\u201d\u5217\uff0c\u540c\u65f6\u4f7f\u7528\u201cINNER JOIN\u201d\u5c06\u201cscore\u201d\u8868\u4e0e\u201cstudent_course\u201d\u8868\u548c\u201cstudent\u201d\u8868\u8fde\u63a5\u8d77\u6765\u3002\u8fde\u63a5\u7684\u6761\u4ef6\u662f\u201cscore\u201d\u8868\u4e2d\u7684\u201ccourse_id\u201d\u5217\u7b49\u4e8e\u201cstudent_course\u201d\u8868\u4e2d\u7684\u201ccourse_id\u201d\u5217\uff0c\u201cstudent_course\u201d\u8868\u4e2d\u7684\u201cstudent_id\u201d\u5217\u7b49\u4e8e\u201cstudent\u201d\u8868\u4e2d\u7684\u201cid\u201d\u5217\u3002\u6700\u540e\uff0c\u4f7f\u7528\u201cWHERE\u201d\u5b50\u53e5\u7b5b\u9009\u51fa\u201cstudent\u201d\u8868\u4e2d\u201cname\u201d\u5217\u4e3a\u201c\u5c0f\u660e\u201d\u7684\u8bb0\u5f55\u3002\u8fd9\u4e2a\u67e5\u8be2\u8bed\u53e5\u7684\u76ee\u7684\u662f\u627e\u5230\u5b66\u751f\u201c\u5c0f\u660e\u201d\u5728\u6240\u6709\u8bfe\u7a0b\u4e2d\u7684\u6210\u7ee9\u3002\n## --- END ---\n")),(0,s.kt)("h2",{id:"\u529f\u80fd\u4e09sql\u4f18\u5316"},"\u529f\u80fd\u4e09\uff1aSQL\u4f18\u5316"),(0,s.kt)("p",null,"\u6709\u7684\u65f6\u5019\u6211\u4eec\u5199\u4e86\u4e00\u6bb5SQL\u6027\u80fd\u4e0d\u597d\uff0cChat2DB\u4e5f\u53ef\u4ee5\u5e2e\u6211\u4eec\u4f18\u5316SQL\uff0c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"## ---BEGIN---\n## SELECT score.score \nFROM score \nINNER JOIN student_course ON score.course_id = student_course.course_id \nINNER JOIN student ON student_course.student_id = student.id \nWHERE student.name = '\u5c0f\u660e'\n## ---SQL\u4f18\u5316:---\n\u4f18\u5316\u5efa\u8bae\uff1a\n\n1. \u7d22\u5f15\u4f18\u5316\uff1a\u4e3astudent\u8868\u7684name\u5b57\u6bb5\u521b\u5efa\u7d22\u5f15\uff0c\u53ef\u4ee5\u52a0\u5febWHERE\u6761\u4ef6\u7684\u67e5\u8be2\u901f\u5ea6\u3002\n\n2. JOIN\u4f18\u5316\uff1a\u53ef\u4ee5\u4f7f\u7528\u5b50\u67e5\u8be2\u6216\u8005\u4e34\u65f6\u8868\u7684\u65b9\u5f0f\uff0c\u5c06student\u8868\u4e2dname\u4e3a\u5c0f\u660e\u7684\u8bb0\u5f55\u5148\u7b5b\u9009\u51fa\u6765\uff0c\u518d\u8fdb\u884cJOIN\u64cd\u4f5c\uff0c\u53ef\u4ee5\u51cf\u5c11JOIN\u64cd\u4f5c\u7684\u6570\u636e\u91cf\uff0c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002\n\n3. \u6570\u636e\u5e93\u8bbe\u8ba1\u4f18\u5316\uff1a\u53ef\u4ee5\u8003\u8651\u5c06student\u8868\u548cstudent_course\u8868\u5408\u5e76\u4e3a\u4e00\u5f20\u8868\uff0c\u907f\u514dJOIN\u64cd\u4f5c\uff0c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002\n\n4. \u7f13\u5b58\u4f18\u5316\uff1a\u53ef\u4ee5\u5c06\u67e5\u8be2\u7ed3\u679c\u7f13\u5b58\u8d77\u6765\uff0c\u907f\u514d\u91cd\u590d\u67e5\u8be2\uff0c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002\n## --- END ---\n")),(0,s.kt)("h2",{id:"\u529f\u80fd\u56dbsql\u8f6c\u6362"},"\u529f\u80fd\u56db\uff1aSQL\u8f6c\u6362"),(0,s.kt)("p",null,"\u4e0d\u540c\u6570\u636e\u5e93SQL\u9884\u53d1\u95f4\u6709\u7565\u5fae\u7684\u5dee\u5f02\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7Chat2DB\u8ba9\u4ed6\u5e2e\u6211\u4eec\u53bb\u8f6c\u6362\u8fd9\u4e2aSQL\u7684\u8bed\u6cd5\u3002\n\u6bd4\u5982\u5c06\u5982\u4e0b\u7684\u5206\u9875\u4eceMysql\u8bed\u6cd5\u8f6c\u6362\u6210Oracel\u7684\u8bed\u6cd5\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"## ---BEGIN---\n## SELECT s.name, SUM(sc.score) AS total_score\nFROM student s\nINNER JOIN student_course sc ON s.id = sc.student_id\nGROUP BY s.id\nORDER BY total_score DESC\nLIMIT 10;\n## ---SQL\u8f6c\u6362:---\nSQL\u8f6c\u6362:\n\nSELECT s.name, SUM(sc.score) AS total_score\nFROM student s\nINNER JOIN student_course sc ON s.id = sc.student_id\nGROUP BY s.id, s.name\nORDER BY total_score DESC\nFETCH FIRST 10 ROWS ONLY;\n## --- END ---\n")),(0,s.kt)("h2",{id:"ai\u529f\u80fd\u6f14\u793a"},"AI\u529f\u80fd\u6f14\u793a"),(0,s.kt)("p",null,"...\u5f85\u8865\u5145"))}E.isMDXComponent=!0}}]);