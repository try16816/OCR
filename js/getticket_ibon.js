$(()=> { 
  chrome.storage.local.get([ //取得瀏覽器擴充本地儲存
    "ibon_quick",
    "ibon_date",
    "ibon_time",
    "ibon_auto",
    "ibon_area",
    "ibon_area2",
    "ibon_area3",
    "ibon_area4",
    "ibon_omg",
    "ibon_nokeep",
    "ibon_autosend",
    "ibon_ticketcount"
], (result)=> {
    async function ocr(image){
        try {
            
            const worker = await Tesseract.createWorker();
            await worker.load();

            // 加載 Tesseract 語言庫
            await worker.loadLanguage('eng');
            // 初始化語言庫
            await worker.initialize('eng');
            
            // 設置 Tesseract 的參數
            await worker.setParameters({
                tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
            })
    
            // 使用 Tesseract 進行圖像識別
            const {data} = await worker.recognize(image);
            return data.text;
        } catch (error) {
            // 如果發生錯誤，則將錯誤消息發送回客戶端
            console.log(error);
        }
    }

      if(result.ibon_quick) { //如果插件是啟動的

          if(window.location.href.indexOf("ActivityInfo/Details")>0) {
          }
          else if($("div[class='step-grid active']").text().indexOf("座位/數量")>0) {

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
                $('#ctl00_ContentPlaceHolder1_CHK').val(ocrstring);
            }
            let captchf=(captchf_version)=>{
                if(captchf_version=="new"){
                    const imagePath = $('#chk_pic')[0].src;
                    ocr(imagePath).then((result) => {
                        console.log(result);
                    }).catch((err) => {
                        console.log(err);
                    });

                    getocrimg(imagePath,(ocrstring)=>{
                        sendanser(captchf_version,ocrstring);
                    });
                }
            }
            if(result.ibon_autosend){
                captchf("new");
            }
          }
      }
  }
  );
}

);