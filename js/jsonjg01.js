var originalright = document.querySelector(".original-right");
var originaldiv = document.querySelector(".original-div");
var originalright = [{
		"num": "幻想小贝HiFi2.1音响"
	},
	{
		"num": "申请时间剩余：13天5小时37分钟"
	},
	{
		"num": "立即申请"
	},
];
var originaldiv = [{
		"num": "126人申请"
	},
	{
		"num": "￥599"
	},
	{
		"num": "70台"
	},
];
var originalright1 = '';
originalright1 += "<strong class='original-title'>" + originalright[0].num + "</strong>";
originalright1 += "<div class='original-div'></div>";
originalright1 += "<span>" + originalright[1].num + "</span>";
originalright1 += "<a href='' class='original-a'>" + originalright[2].num + "</a>";
$(".original-right").html(originalright1);
var originaldiv1 = '';
for(var i = 0; i < originaldiv.length; i++) {
	originaldiv1 += "<span>" + originaldiv[i].num + "</span>";
}
$(".original-div").html(originaldiv1);




/*lunbo*/
var lunbo1 = document.querySelector(".jg01-lunbo-span");
var lunbo2 = document.querySelector(".lunbo2");
var nian = document.querySelector(".jg01-lunbo-nian");
var lunbo = [{
	    "num": "hot9.jpg"
    },{
    	"num": "巴慕达 The Toaster 烤面包机"
	},{
		"num":"2032"
	},{
		"num":"20台"
	},{
		"num":"1392"
	},{
		"num":"申请"
	},{
		"num":"剩余时间2天"
	},{
		"num":"查看试用名单"
	},{
		"num":"首发"
	},{
		"num":"体验师专享"
	},{
		"num":"Osprey小鹰户外运动专业腰包"
	},
];
var lunbos="";
lunbos+="<img class='hot9' src=img/"+lunbo[0].num+"/>";
lunbos+="<strong>"+lunbo[1].num+"<strong>";
lunbos+="<div class='jg01-lunbo-nian'><span class='jg01-lunbo-nian-span1'>"+lunbo[2].num+"</span><span class='jg01-lunbo-nian-span1'>"+lunbo[3].num+"</span></div>";
lunbos+="<div class='jg01-lunbo-span-p'>"+lunbo[4].num+"<span class='jg01-lunbo-font'>"+lunbo[5].num+"</span></div>";
lunbos+="<div class='jg01-lunbo-color-p1'>"+lunbo[6].num+"</div>";
lunbos+="<div class='shoufa'>"+lunbo[8].num+"</div>";
$(".jg01-lunbo-span").html(lunbos);
var lunboss="";
lunboss+="<img class='hot9' src=img/"+lunbo[0].num+"/>";
lunboss+="<strong>"+lunbo[10].num+"<strong>";
lunboss+="<div class='jg01-lunbo-nian'><span class='jg01-lunbo-nian-span2'>"+lunbo[2].num+"</span><span class='jg01-lunbo-nian-span2'>"+lunbo[3].num+"</span></div>";
lunboss+="<div class='jg01-lunbo-span-p'>"+lunbo[4].num+"<span class='jg01-lunbo-font'>"+lunbo[5].num+"</span></div>";
lunboss+="<div class='jg01-lunbo-color-p'>"+lunbo[6].num+"</div>";
lunboss+="<div class='shoufa1'>"+lunbo[9].num+"</div>";
$(".lunbo2").html(lunboss);

/*<!--报告精选-->*/
var bgjx=document.querySelector(".bgjxb");
var bgjx=[{
	    "num": "re1.jpg"
    },{
    	"num": "空气净化器里面学问多得惊呆你，你选对了吗？"
	},{
		"num":"● 苏苏"
	},{
		"num":"zan.png"
	},{
		"num":"3"
	},{
		"num":"reply.png"
	},{
		"num":"3"
	},
];
var bgjxs="";
for (i=1;i<=4;i++) {
	bgjxs+="<a href='jg14.html' class='bgjx-div'><img class='re' src=img/"+bgjx[0].num+"/><div class='bgjx-font'>"+bgjx[1].num+"</div><div class='bgjx-bottom'><div class='bgjx-left'>"+bgjx[2].num+"</div><div class='bgjx-right'><span><img class='zan' src=img/"+bgjx[3].num+"/>"+bgjx[4].num+"</span><span><img class='zan' src=img/"+bgjx[5].num+"/>"+bgjx[6].num+"</span></div></div></a>";
    $(".bgjxb").html(bgjxs);
}