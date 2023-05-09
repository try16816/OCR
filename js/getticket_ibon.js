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
                preserve_interword_spaces: '0',                
                user_defined_dpi: '150',
                tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
                tessedit_ocr_engine_mode: Tesseract.PSM.LSTM_ONLY,
                tessedit_pageseg_mode: Tesseract.PSM_SINGLE_BLOCK
            })
    
            let counter = 1;
            let resultText = '';
            // 使用 Tesseract 進行圖像識別
            do{
                const {data} = await worker.recognize(image);
                
                resultText = data.text.trim();
                counter++;
            } while(resultText.length !== 4 && counter < 10);
            
            return resultText;
        } catch (error) {
            // 如果發生錯誤，則將錯誤消息發送回客戶端
            console.log(error);
        }
    }

      if(result.ibon_quick) { //如果插件是啟動的

          if(window.location.href.indexOf("ActivityInfo/Details")>0) {
          }
          else if($("div[class='step-grid active']").text().indexOf("座位/數量")>0) {
            let captchf=(captchf_version)=>{
                if(captchf_version=="new"){
                    const imagePath = $('#chk_pic')[0].src;
                    ocr(imagePath).then((result) => {
                        const chk = $('#ctl00_ContentPlaceHolder1_CHK')[0];
                        chk.value = result;
                    }).catch((err) => {
                        console.log(err);
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