// function for wechat code

// function wechat(){
//     showimage(`<img src='QRcode.jpg'>'`)
// }

// function showimage(content){
//     layer.open({
//       type: 1
//       ,title: false
//       ,shadeClose: true
//       ,area: ['auto', 'auto']
//       ,shade: 0.8
//       ,id: 'LAY_showimage_001'
//       ,moveType: 1
//       ,content: content
//     });
// }

// function openWindow(this){
//     document.getElementById(this.id).style.display='block';
//     document.getElementById('fade').style.display='block';
// }
// function closeWindow(this){
//     document.getElementById(this.id).style.display='none';
//     document.getElementById('fade').style.display='none';
// }

// if we have both wechat and qq
// function openWindow(obj){
//     var qq_or_weixin = "light_qq";
//     switch(obj.id)
//     {
//         case 'contact_weixin':
//         qq_or_weixin = "light_weixin";
//         break;
        
//         case 'contact_qq':
//         qq_or_weixin = "light_qq";
//         break;
//     }
//     document.getElementById(qq_or_weixin).style.display='block';
//     document.getElementById('fade').style.display='block';
// }
// function closeWindow(){
//     document.getElementById('light_weixin').style.display='none';
//     document.getElementById('light_qq').style.display='none';
//     document.getElementById('fade').style.display='none';
// }