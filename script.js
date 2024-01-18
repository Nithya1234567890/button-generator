let generatedbtn=document.getElementById('generated-btn');
let btnlabel=document.getElementById('btn-label');
let fontsize=document.getElementById('font-size');
let fontcolor=document.getElementById('font-color');
let paddingtop=document.getElementById('padding-top');
let paddingright=document.getElementById('padding-right');
let paddingbottom=document.getElementById('padding-bottom');
let paddingleft=document.getElementById('padding-left');
let bgcolor=document.getElementById('bg-color');
let bordercolor=document.getElementById('border-color');
let borderwidth=document.getElementById('border-width');
let borderradius=document.getElementById('border-radius');
let generate=document.getElementById('generate');
let html=document.getElementById('html-code');
let css=document.getElementById('css-code');
let container=document.getElementById('container');
let msg=document.getElementById('pop-up');
let close=document.getElementById('close');

btnlabel.value=generatedbtn.value;
fontsize.value=(window.getComputedStyle(generatedbtn).fontSize).substring(0,(window.getComputedStyle(generatedbtn).fontSize).length-2);
paddingtop.value=(window.getComputedStyle(generatedbtn).paddingTop).substring(0,(window.getComputedStyle(generatedbtn).paddingTop).length-2);
paddingright.value=(window.getComputedStyle(generatedbtn).paddingRight).substring(0,(window.getComputedStyle(generatedbtn).paddingRight).length-2);
paddingbottom.value=(window.getComputedStyle(generatedbtn).paddingBottom).substring(0,(window.getComputedStyle(generatedbtn).paddingBottom).length-2);
paddingleft.value=(window.getComputedStyle(generatedbtn).paddingLeft).substring(0,(window.getComputedStyle(generatedbtn).paddingLeft).length-2);
// bgcolor.value=(window.getComputedStyle(generatedbtn).backgroundColor).substring(0,2);
borderwidth.value=1;
borderradius.value=(window.getComputedStyle(generatedbtn).borderRadius).substring(0,(window.getComputedStyle(generatedbtn).borderRadius).length-2);

btnlabel.addEventListener('input',function(){
    generatedbtn.value=btnlabel.value;
});
fontsize.addEventListener('input',function(){
    generatedbtn.style.fontSize=fontsize.value+"px";
})
fontcolor.addEventListener('change',function(e){
    generatedbtn.style.color='#'+this.jscolor;
})
paddingtop.addEventListener('input',function(){
    generatedbtn.style.paddingTop=paddingtop.value+"px";
})
paddingright.addEventListener('input',function(){
    generatedbtn.style.paddingRight=paddingright.value+"px";
})
paddingbottom.addEventListener('input',function(){
    generatedbtn.style.paddingbBottom=paddingbottom.value+"px";
})
paddingleft.addEventListener('input',function(){
    generatedbtn.style.paddingLeft=paddingleft.value+"px";
})
bgcolor.addEventListener('change',function(e){
    generatedbtn.style.backgroundColor='#'+this.jscolor;
})
bordercolor.addEventListener('change',function(e){
    generatedbtn.style.borderColor='#'+this.jscolor;
})
borderwidth.addEventListener('input',function(){
    generatedbtn.style.borderWidth=borderwidth.value+"px";
})
borderradius.addEventListener('input',function(){
    generatedbtn.style.borderRadius=borderradius.value+"px";
})
generate.onclick=function(){
    msg.style.display="block"
    msg.style.opacity="1";
    container.style.opacity="0.5";
    html.innerHTML=`&lt;input id="generated-button" type="button" value="${generatedbtn.value}"&gt;`;
    css.innerHTML=`#generated-button{font-size: ${window.getComputedStyle(generatedbtn).fontSize}; color: ${window.getComputedStyle(generatedbtn).color}; padding:${window.getComputedStyle(generatedbtn).paddingTop} ${window.getComputedStyle(generatedbtn).paddingRight} ${window.getComputedStyle(generatedbtn).paddingBottom} ${window.getComputedStyle(generatedbtn).paddingLeft}; background-color:${window.getComputedStyle(generatedbtn).backgroundColor}; border:${window.getComputedStyle(generatedbtn).borderWidth} solid ${window.getComputedStyle(generatedbtn).borderColor}; border-radius:${window.getComputedStyle(generatedbtn).borderRadius}}`;
    msg.style.transform='translateY(20px)';
}
close.onclick=function(){
    msg.style.transform='translateY(-600px)';
    container.style.opacity='1';
}