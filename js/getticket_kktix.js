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
    "ibon_ticketcount"], (result)=> {
      if(window.location.href.indexOf("activity/detail")>0) {
      }
  }
  );
}
);