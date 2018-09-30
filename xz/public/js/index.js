$(function(){
  //ajax("http://localhost:3000/index")
  $.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json" //JSON.parse(res)
  })
  .then(products=>{
    //var products=JSON.parse(res);
    var {title, details, price, pic, href}=products[0];
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-2">${title}</h5>
        <h6 class="mb-5">
          <a class="text-dark" href="javascript:;">${details}</a>
        </h6>
        <span class="text-primary">¥${price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">
    </div>`;
    var first=document.querySelector(
      "#main>div:nth-child(2)>h3:nth-child(1)>div:nth-child(2)>div:first-child"
    );
    first.innerHTML=html;
    var {title, details, price, pic, href}=products[1];
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-2">${title}</h5>
        <h6 class="mb-5">
          <a class="text-dark" href="javascript:;">${details}</a>
        </h6>
        <span class="text-primary">¥${price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${pic}" data-holder-rendered="true">
    </div>`;
    first.nextElementSibling.innerHTML=html;
    var {title, price, pic, href}=products[2];
    var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="d-inline-block mb-3">${title}</h5>
        <span class="text-primary">¥${price.toFixed(2)}</span>
        <a class="btn btn-primary" href="${href}">查看详情</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"src="${pic}" data-holder-rendered="true">
    </div>`;
    var first=document.querySelector(
      "#main>div:nth-child(2)>h3:nth-child(1)>div:nth-child(3)>div:first-child"
    );
    first.innerHTML=html;
    var html="";
    for(var i=3;i<products.length;i++){
      var {title, price, pic, href}=products[i];
      html+=`<div class="col-md-4 p-0 pl-2">
        <div class="card border-0 text-center">
          <img class="card-img-top" src="${pic}" alt="Card image cap">
          <div class="card-body p-0 pr-1 pl-1">
            <span class="d-inline-block">${title}</span>
            <span class="text-primary small">¥${price.toFixed(2)}</span>
            <a class="btn btn-sm btn-primary" href="${href}">查看详情</a>
          </div>
        </div>
      </div>`;
    }
    first.nextElementSibling.children[0].innerHTML=html
  });
});