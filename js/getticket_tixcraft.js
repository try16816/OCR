
$(()=>{
    chrome.runtime.sendMessage({
        type: "createmodel"
        });

    
    chrome.storage.local.get([ //取得瀏覽器擴充本地儲存
    "tixcraft_quick",
    "tixcraft_date",
    "tixcraft_time",
    "tixcraft_auto",
    "tixcraft_area",
    "tixcraft_area2",
    "tixcraft_area3",
    "tixcraft_area4",
    "tixcraft_omg",
    "tixcraft_omg_num",
    "tixcraft_ocr",
    "tixcraft_anser",
    "tixcraft_autosend",
    "tixcraft_ticketcount",
    "tixcraft_reloadtime",
    "tixcraft_reloadtimecheck"
  ] ,(result)=> {
    
    if(result.tixcraft_quick){  //如果插件是啟動的
        
        if(window.location.href.indexOf("activity/detail")>0){

            $("a").each((k,e)=>{  //each 每個都會跑  所以會影響效能
            if($(e).text()=="立即購票"){
                $(e).parent().parent().append($("<a>").attr("href",$(e).attr("href")).text("gmae網址"));
            }}); 

        }else if(window.location.href.indexOf("activity/game")>0){
            
        }else if(window.location.href.indexOf("ticket/area")>0){
             
        }else if(window.location.href.indexOf("ticket/ticket")>0){
            
            const getocrimg = async(url,callback)=>{ //傳送圖片
                const img = new Image();
                img.onload = function(e) {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    chrome.runtime.sendMessage(
                        {
                            type:"predit",
                            saveimage:Array.from(imageData.data),   
                            width: img.width,
                            height: img.height},
                          (response) => {
                              callback(response);
                          });
                };
                const timestamp = Date.now(); // 取得當前時間戳記
                img.src = `${url}?t=${timestamp}`; // 加上時間戳記             
            }

            let x=0;
            let sendanser=(captchf_version,ocrstring)=>{
                $('#TicketForm_verifyCode').val(ocrstring);  
                if(result.tixcraft_autosend){
                      fetch(window.location.href, {
                    "headers": {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                        "accept-language": "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                        "cache-control": "max-age=0",
                        "content-type": "application/x-www-form-urlencoded",
                        "sec-ch-ua-mobile": "?0",
                        "sec-fetch-dest": "document",
                        "sec-fetch-mode": "navigate",
                        "sec-fetch-site": "same-origin",
                        "sec-fetch-user": "?1",
                        "upgrade-insecure-requests": "1"
                    },
                    "referrer": window.location.href,
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "_csrf="+encodeURIComponent($("meta[name=csrf-token]").attr("content"))+"&"+encodeURIComponent($($("#form-ticket-ticket").find("select")).attr("name"))+"="+$($("#form-ticket-ticket").find("select")).val()+"&"+encodeURIComponent($($("#form-ticket-ticket").find("select").parent().find("input")).attr("name"))+"="+$($("#form-ticket-ticket").find("select").parent().find("input")).val()+"&TicketForm%5BverifyCode%5D="+$("#TicketForm_verifyCode").val()+"&TicketForm%5Bagree%5D=1",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                    }).then((response)=>{
                        if(response.url.indexOf("order")>0){
                            window.location.href=response.url;
                        }else  if(response.url.indexOf("login")>0){
                            window.location.href=response.url;
                        }else{
                            captchf(captchf_version);
                            if(x>3){
                                window.location.reload();
                            }
                            x++;

                        }
                    });
                   
                }
            }
            let captchf=(captchf_version)=>{
                if(captchf_version=="new"){
                    getocrimg('/ticket/captcha',(ocrstring)=>{
                        sendanser(captchf_version,ocrstring);
                    });
                }
            }
            if(result.tixcraft_ocr){
                captchf("new");
            }
        }else if(window.location.href.indexOf("ticket/verify")>0){ //驗證快速通過
        
            $.ajax({
                url: window.location.href.replaceAll("verify","check-code"),
                type: "POST",
                data: "_csrf="+encodeURIComponent($("meta[name=csrf-token]").attr("content"))+"&checkCode="+result.tixcraft_anser,
                success: function (response) {
                    if (response.message) {
                        $("input[name=checkCode]").val(result.tixcraft_anser);
                        $("input[name=checkCode]").parent().append($("<p>").text("冰塊：錯誤 無法快速通關 快改"));
                    } else if (response.confirm) {
                        $.ajax({
                            url: window.location.href.replaceAll("verify","check-code"),
                            type: "POST",
                            data: "_csrf="+encodeURIComponent($("meta[name=csrf-token]").attr("content"))+"&checkCode="+result.tixcraft_anser+"&confirmed=true",
                            success: function (response) {
                                window.location.reload();
                            },
                            error: function() {
                            
                            }
                        });
                    } else if (response.url) {
                        window.location.href = response.url;
                    }
                },
                error: function() {
                
                }
            });
        }
       


    }
});
});
