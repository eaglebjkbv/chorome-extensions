window.addEventListener('onbeforeunload',function(){
    var checkPageButton=document.getElementById('tiklaGor');
    checkPageButton.addEventListener('click',()=>{
        chrome.tabs.getCurrent((tab)=>{
            alert("Merhaba ...! bu benim ilk extension ");
        });
    },false);
},false);
