fetch('projects.json').then((res) => {
    return res.json()
}).then( (datas) => {
    let htmlShow = '';
    let pro_html = document.getElementById('pro')
    for(data in datas){
        const title = datas[data].name;
        const description = datas[data].description;
        const img = datas[data].img;
        const git_link = datas[data].git_link;
        
        img == "none" ? img_show = '' : img_show = `<div class="img-border" style="max-width: 800px;margin:auto;"><a href="img/${img}"><img src="img/${img}" style="width: 100%;"></a></div>`

        htmlShow+=`
        <div style="padding: 1rem;">
            ${img_show}
            <h3>${title}:</h3>
            <p><strong>รายละเอียด: </strong> ${description}</p>
            <a class="btn" href="${git_link}">🌍 Code Project</a>
        </div>
        <hr>
        `;
        pro_html.innerHTML = htmlShow;
    }
}).catch( (err) =>{
    document.getElementById('pro').innerHTML = `${err} หรืออาจจะมีปัญหาการเชื่อมต่อแบบ CORS`
})