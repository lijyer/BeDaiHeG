 //tab切换
 var oli = document.getElementsByTagName("a");//获取tab列表
 var odiv = document.getElementsByClassName("errorbbs");//获取tab内容列表
    for(var i=0 ; i<oli.length ; i++){
         oli[i].index = i;//定义index变量，以便让tab按钮和tab内容相互对应
         oli[i].onclick = function( ){//移除全部tab样式和tab内容
         for(var i =0; i < oli.length; i++){
             oli[i].className = "";
             odiv[i].style.display = "none";
             }
        this.className = "active";//为当前tab添加样式
        odiv[this.index].style.display="block";//显示当前tab对应的内容
                }
            }
   //表单验证
   var realname = document.getElementById("realname");
   var idnum = document.getElementById("idnum");
   var phonenum = document.getElementById("phonenum");
   var email = document.getElementById("email");
   var codefield =document.getElementById("codefield");
   //姓名验证
   realname.onfocus = function(){
   	this.value = ("");
   	this.style.color = "";
   	this.style.border = "";
   }
   realname.onblur = function(){
   	if(this.value ==""){
   		this.value = ("姓名不能为空！");
   		this.style.color = "red";
   		this.style.border = "1px solid red";
   	}
   }
   //身份证验证
   idnum.onfocus = function(){
   	this.value = ("");
   	this.style.color = "";
   	this.style.border = "";
   }
   idnum.onblur = function(){
   	if(this.value ==""){
   		this.value = ("身份证不能为空！");
   		this.style.color = "red";
   		this.style.border = "1px solid red";
   	}
   }
   //联系电话验证
   phonenum.onfocus = function(){
   	this.value = ("");
   	this.style.color = "";
   	this.style.border = "";
   }
   phonenum.onblur = function(){
   	if(this.value ==""){
   		this.value = ("联系电话不能为空！");
   		this.style.color = "red";
   		this.style.border = "1px solid red";
   	}
   }
   //Email验证
   email.onfocus = function(){
   	this.value = ("");
   	this.style.color = "";
   	this.style.border = "";
   }
   email.onblur = function(){
   	if(this.value ==""){
   		this.value = ("Email不能为空！");
   		this.style.color = "red";
   		this.style.border = "1px solid red";
   	}
   }
   //验证码
   codefield.onfocus = function(){
   	this.value = ("");
   	this.style.color = "";
   	this.style.border = "";
   }
   codefield.onblur = function(){
   	if(this.value ==""){
   		this.value = ("验证码不能为空！");
   		this.style.color = "red";
   		this.style.border = "1px solid red";
   	}
   }