+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = false
layout = 'project'
+++

Online Visualization: [here](https://beta.collaborate.shapr3d.com/v/QiLlW8ULcsdGMxVjttpxT)

Shapr3D Project:
{{< download_link "/documents/cad/{{ replace .File.ContentBaseName \"-\" \" \" | title }}.shapr">}}
Click here to download
{{< /download_link >}}

<!--more-->

{{< gallery >}}
    {{< img src="render.png" >}}
{{</ gallery >}}
