var parent=document.getElementById('content-items')
//console.log(parent)
var send=document.getElementById('send')
send.addEventListener('click', function(){
    console.log(666)

var li=document.createElement('li')
li.setAttribute('class','content-item')

var divPic=document.createElement('div')
divPic.setAttribute('class','pic')
li.appendChild(divPic)

var img=document.createElement('img')
img.setAttribute('src','D:/Documents/Tencent Files/319472996/FileRecv/MobileFile/er.jpg')
divPic.appendChild(img)

var message=document.createElement('div')
message.setAttribute('class','message')
li.appendChild(message)

var p1=document.createElement('p')
p1.setAttribute('class','name')
var p1Text=document.createTextNode('二狗子')
p1.appendChild(p1Text)
message.appendChild(p1)

var p2=document.createElement('p')
p2.setAttribute('class','detail')
var p2Text=document.createTextNode('中午一起吃饭')
p2.appendChild(p2Text)
message.appendChild(p2)

//console.log(li)
parent.appendChild(li)
})