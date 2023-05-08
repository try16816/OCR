//存檔案

//台鐵存檔
$("#railway_save").on("click",()=>{
   
  chrome.storage.local.set({
    "railway_status":$("input[name=railway_status]:checked").val(),
    "railway_country":$("input[name=railway_country]:checked").val(),
    "railway_pid":$("#railway_userid").val(),
    "railway_startStation":$("#railway_start").val(),
    "railway_endStation":$("#railway_end").val(),
    "railway_normal":$("#railway_normal").val(),
    "railway_wheelchair":$("#railway_wheelchair").val(),
    "railway_child":$("#railway_child").val(),
    "railway_num":$("#railway_num").val(),
    "railway_num2":$("#railway_num2").val(),
    "railway_num3":$("#railway_num3").val(),
    "railway_date":$("#railway_date").val().replaceAll("-","/"),
  },()=>{
    $("#railway_test").val("儲存完畢")
  });

});
//高鐵存檔
$("#thsrc_save").on("click",()=>{
   
  chrome.storage.local.set({
    "thsrc_buyticket":$("#thsrc_buyticket").prop("checked"),
    "thsrc_userid":$("#thsrc_userid").val(),
    "thsrc_phone":$("#thsrc_phone").val(),
    "thsrc_email":$("#thsrc_email").val(),
    "thsrc_lookticket":$("#thsrc_lookticket").prop("checked"),
    "thsrc_checkgetticket":$("#thsrc_checkgetticket").prop("checked"),
    "thsrc_notifycheck":$("#thsrc_notifycheck").prop("checked"),
    "thsrc_start":$("#thsrc_start").val(),
    "thsrc_end":$("#thsrc_end").val()
  },()=>{
    $("#thsrc_test").val("儲存完畢")
  });

});
//tixcraft 拓元售票
$("#tixcraft_save").on("click",()=>{
   
  chrome.storage.local.set({
    "tixcraft_quick":$("#tixcraft_quick").prop("checked"),
    "tixcraft_date":$("#tixcraft_date").val(),
    "tixcraft_time":$("#tixcraft_time").val(),
    "tixcraft_auto":$("input[name=tixcraft_getquick]:checked").val(),
    "tixcraft_area":$("#tixcraft_area").val(),
    "tixcraft_area2":$("#tixcraft_area2").val(),
    "tixcraft_area3":$("#tixcraft_area3").val(),
    "tixcraft_area4":$("#tixcraft_area4").val(),
    "tixcraft_omg":$("input[name=tixcraft_omg]:checked").val(),
    "tixcraft_omg_num":$("#tixcraft_omg_num").val(),
    "tixcraft_anser":$("#tixcraft_anser").val(),
    "tixcraft_ocr":$("#tixcraft_ocr").prop("checked"),
    "tixcraft_ocr_old":$("#tixcraft_ocr_old").prop("checked"),
    "tixcraft_autosend":$("#tixcraft_autosend").prop("checked"),
    "tixcraft_reloadtime":$("#tixcraft_reloadtime").val(),
    "tixcraft_reloadtimecheck":$("#tixcraft_reloadtimecheck").prop("checked"),
    "tixcraft_ticketcount":$("#tixcraft_ticketcount").val(),
   
  },()=>{
    $("#tixcraft_test").val("儲存完畢")
  });
});
//體育局存檔
$("#tms_save").on("click",()=>{
   
  chrome.storage.local.set({
    "tms_using":$("input[name=tms_using]:checked").val(),
    "tms_EventType":$("#tms_EventType").val(),
    "tms_GovernmentType":$("#tms_GovernmentType").val(),
    "tms_SellTickets":$("input[name=tms_SellTickets]:checked").val(),
    "tms_date":$("#tms_date").val(),
    "tms_SubVenuesTagDiv":$("#tms_SubVenuesTagDiv").val(),
    "tms_start":$("#tms_start").val(),
    "tms_end":$("#tms_end").val(),
    "tms_Broadcast":$("input[name=tms_Broadcast]:checked").val(),
    "tms_Billboards":$("input[name=tms_Billboards]:checked").val(),
    "tms_Stalls":$("input[name=tms_Stalls]:checked").val(),
    "tms_EventName":$("#tms_EventName").val(),
    "tms_EventDescription":$("#tms_EventDescription").val(),
    "tms_EventSportType":$("#tms_EventSportType").val(),
    "tms_EventParticipantsNumber":$("#tms_EventParticipantsNumber").val()
  },()=>{
    $("#tms_test").val("儲存完畢")
  });

});

//ibon 售票
$("#ibon_save").on("click",()=>{
   
  chrome.storage.local.set({
    "ibon_quick":$("#ibon_quick").prop("checked"),
    "ibon_date":$("#ibon_date").val(),
    "ibon_time":$("#ibon_time").val(),
    "ibon_auto":$("input[name=ibon_getquick]:checked").val(),
    "ibon_area":$("#ibon_area").val(),
    "ibon_area2":$("#ibon_area2").val(),
    "ibon_area3":$("#ibon_area3").val(),
    "ibon_area4":$("#ibon_area4").val(),
    "ibon_omg":$("#ibon_omg").prop("checked"),
    "ibon_nokeep":$("#ibon_nokeep").prop("checked"),
    "ibon_autosend":$("#ibon_autosend").prop("checked"),
    "ibon_ticketcount":$("#ibon_ticketcount").val(),
   
  },()=>{
    $("#ibon_test").val("儲存完畢")
  });
});


//kktix售票
$("#kktix_save").on("click",()=>{
   
  chrome.storage.local.set({
    "kktix_quick":$("#kktix_quick").prop("checked"),
    "kktix_date":$("#kktix_date").val(),
    "kktix_time":$("#kktix_time").val(),
    "kktix_auto":$("input[name=kktix_getquick]:checked").val(),
    "kktix_area":$("#kktix_area").val(),
    "kktix_area2":$("#kktix_area2").val(),
    "kktix_area3":$("#kktix_area3").val(),
    "kktix_area4":$("#kktix_area4").val(),
    "kktix_omg":$("#kktix_omg").prop("checked"),
    "kktix_nokeep":$("#kktix_nokeep").prop("checked"),
    "kktix_autosend":$("#kktix_autosend").prop("checked"),
    "kktix_ticketcount":$("#kktix_ticketcount").val(),
   
  },()=>{
    $("#kktix_test").val("儲存完畢")
  });
});
//loading 讀檔
$(()=>{
  //台鐵
  chrome.storage.local.get([
    "railway_status",
    "railway_country",
    "railway_pid",
    "railway_startStation",
    "railway_endStation",
    "railway_normal",
    "railway_wheelchair",
    "railway_child",
    "railway_num",
    "railway_num2",
    "railway_num3",
    "railway_date",
  ],(result)=> {
    if(result.railway_status=="open"){
      $("#railway_open").prop("checked","checked");
    }else if(result.railway_status=="close"){
      $("#railway_close").prop("checked","checked");
    }
    if(result.railway_country=="PERSON_ID"){
      $("#PERSON_ID").prop("checked","checked");
    }else if(result.railway_country=="PASSPORT_NO"){
      $("#PASSPORT_NO").prop("checked","checked");
    }
    $("#railway_userid").val(result.railway_pid);
    $("#railway_start").val(result.railway_startStation);
    $("#railway_end").val(result.railway_endStation);
    $("#railway_normal").val(result.railway_normal);
    $("#railway_wheelchair").val(result.railway_wheelchair);
    $("#railway_child").val(result.railway_child);
    $("#railway_num").val(result.railway_num);
    $("#railway_num2").val(result.railway_num2);
    $("#railway_num3").val(result.railway_num3);
    $("#railway_date").val(result.railway_date!=null?result.railway_date.replaceAll("/","-"):"");
  });
  //高鐵
  chrome.storage.local.get([
    "thsrc_buyticket",
    "thsrc_userid",
    "thsrc_phone",
    "thsrc_email",
    "thsrc_lookticket",
    "thsrc_checkgetticket",
    "thsrc_notifycheck",
    "thsrc_start",
    "thsrc_end"
  ],(result)=> {
    if(result.thsrc_buyticket){
      $("#thsrc_buyticket").prop("checked","checked");
    }

    $("#thsrc_userid").val(result.thsrc_userid);
    $("#thsrc_phone").val(result.thsrc_phone);
    $("#thsrc_email").val(result.thsrc_email);
    console.log(result.thsrc_lookticket);
    if(result.thsrc_lookticket){
      $("#thsrc_lookticket").prop("checked","checked");
    }
    if(result.thsrc_checkgetticket){
      $("#thsrc_checkgetticket").prop("checked","checked");
    }
    if(result.thsrc_notifycheck){
      $("#thsrc_notifycheck").prop("checked","checked");
    }

    $("#thsrc_start").val(result.thsrc_start);
    $("#thsrc_end").val(result.thsrc_end);


  });

  //tixcraft
  chrome.storage.local.get([
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
    "tixcraft_ocr_old",
    "tixcraft_anser",
    "tixcraft_autosend",
    "tixcraft_reloadtime",
    "tixcraft_ticketcount",
    "tixcraft_reloadtimecheck"
  ] ,(result)=> {
    if(result.tixcraft_quick){
      $("#tixcraft_quick").prop("checked","checked");
    }
    if(result.tixcraft_auto=="human"){
      $("#tixcraft_human").prop("checked","checked");
    }else{
      $("#tixcraft_auto").prop("checked","checked");
    }
    $("#tixcraft_date").val(result.tixcraft_date);
    $("#tixcraft_time").val(result.tixcraft_time);
    $("#tixcraft_area").val(result.tixcraft_area);
    $("#tixcraft_area2").val(result.tixcraft_area2);
    $("#tixcraft_area3").val(result.tixcraft_area3);
    $("#tixcraft_area4").val(result.tixcraft_area4);
    $("#tixcraft_anser").val(result.tixcraft_anser);
    $("#tixcraft_reloadtime").val(result.tixcraft_reloadtime);
    if(result.tixcraft_omg==0){
      $("#tixcraft_omg0").prop("checked","checked");
    }else if(result.tixcraft_omg==1){
      $("#tixcraft_omg1").prop("checked","checked");
    }else if(result.tixcraft_omg==2){
      $("#tixcraft_omg2").prop("checked","checked");
    }else if(result.tixcraft_omg==3){
      $("#tixcraft_omg3").prop("checked","checked");
    }else if(result.tixcraft_omg==4){
      $("#tixcraft_omg4").prop("checked","checked");
    }
    $("#tixcraft_omg_num").val(result.tixcraft_omg_num);

    if(result.tixcraft_reloadtimecheck){
      $("#tixcraft_reloadtimecheck").prop("checked","checked");
    }
    
    if(result.tixcraft_ocr){
      $("#tixcraft_ocr").prop("checked","checked");
    }
    if(result.tixcraft_ocr_old){
      $("#tixcraft_ocr_old").prop("checked","checked");
    }
    if(result.tixcraft_autosend){
      $("#tixcraft_autosend").prop("checked","checked");
    }
    $("#tixcraft_ticketcount").val(result.tixcraft_ticketcount);
   
  });

  $("#tixcraft_autosend").change(()=>{
    if($("#tixcraft_autosend").prop("checked")){
      if(!$("#tixcraft_ocr").prop("checked")&&!$("#tixcraft_ocr_old").prop("checked")){
        $("#tixcraft_ocr").prop("checked","checked");
      }
    }
  })
  $("#tixcraft_ocr").change(()=>{
    if(!$("#tixcraft_ocr").prop("checked")&&!$("#tixcraft_ocr_old").prop("checked")){
      $("#tixcraft_autosend").prop("checked","");
    }else if($("#tixcraft_ocr").prop("checked")){
      $("#tixcraft_ocr_old").prop("checked","");
    }
    
  })
  $("#tixcraft_ocr_old").change(()=>{
    if(!$("#tixcraft_ocr_old").prop("checked")&&!$("#tixcraft_ocr").prop("checked")){
      $("#tixcraft_autosend").prop("checked","");
    }else if($("#tixcraft_ocr_old").prop("checked")){
      $("#tixcraft_ocr").prop("checked","");
    }
    
  })


  //台北市體育局
  chrome.storage.local.get([
    "tms_using",
    "tms_EventType",
    "tms_GovernmentType",
    "tms_SellTickets",
    "tms_date",
    "tms_SubVenuesTagDiv",
    "tms_start",
    "tms_end",
    "tms_Broadcast",
    "tms_Billboards",
    "tms_Stalls",
    "tms_EventName",
    "tms_EventDescription",
    "tms_EventSportType",
    "tms_EventParticipantsNumber"
  ],(result)=> {
    if(result.tms_using==0){
      $("#tms_using0").prop("checked","checked");
    }else{
      $("#tms_using1").prop("checked","checked");
    }
    if(result.tms_SellTickets==1){
      $("#tms_SellTickets1").prop("checked","checked");
    }else if(result.tms_SellTickets==2){
      $("#tms_SellTickets2").prop("checked","checked");
    }
    if(result.tms_Broadcast==0){
      $("#tms_Broadcast0").prop("checked","checked");
    }else if(result.tms_Broadcast==1){
      $("#tms_Broadcast1").prop("checked","checked");
    }
    if(result.tms_Billboards==0){
      $("#tms_Billboards0").prop("checked","checked");
    }else if(result.tms_Billboards==1){
      $("#tms_Billboards1").prop("checked","checked");
    }
    if(result.tms_Stalls==0){
      $("#tms_Stalls0").prop("checked","checked");
    }else if(result.tms_Stalls==1){
      $("#tms_Stalls1").prop("checked","checked");
    }

    $("#tms_EventType").val(result.tms_EventType)
    $("#tms_GovernmentType").val(result.tms_GovernmentType),
    $("#tms_date").val(result.tms_date),
    $("#tms_SubVenuesTagDiv").val(result.tms_SubVenuesTagDiv),
    $("#tms_start").val(result.tms_start),
    $("#tms_end").val(result.tms_end),
    $("#tms_EventName").val(result.tms_EventName),
    $("#tms_EventDescription").val(result.tms_EventDescription),
    $("#tms_EventSportType").val(result.tms_EventSportType),
    $("#tms_EventParticipantsNumber").val(result.tms_EventParticipantsNumber)

  });

  //ibon
  chrome.storage.local.get([
    "ibon_quick",
    "ibon_date",
    "ibon_time",
    "ibon_auto",
    "ibon_area",
    "ibon_area2",
    "ibon_area3",
    "ibon_area4",
    "ibon_omg",
    "ibon_ocr",
    "ibon_nokeep",
    "ibon_autosend",
    "ibon_ticketcount"
  ] ,(result)=> {
    if(result.ibon_quick){
      $("#ibon_quick").prop("checked","checked");
    }
    if(result.ibon_auto=="human"){
      $("#ibon_human").prop("checked","checked");
    }else{
      $("#ibon_auto").prop("checked","checked");
    }
    $("#ibon_date").val(result.ibon_date);
    $("#ibon_time").val(result.ibon_time);
    $("#ibon_area").val(result.ibon_area);
    $("#ibon_area2").val(result.ibon_area2);
    $("#ibon_area3").val(result.ibon_area3);
    $("#ibon_area4").val(result.ibon_area4);
    if(result.ibon_omg){
      $("#ibon_omg").prop("checked","checked");
    }
    if(result.ibon_nokeep){
      $("#ibon_nokeep").prop("checked","checked");
    }

    if(result.ibon_autosend){
      $("#ibon_autosend").prop("checked","checked");
    }
    $("#ibon_ticketcount").val(result.ibon_ticketcount);
   
  });

  //kktix
  chrome.storage.local.get([
    "kktix_quick",
    "kktix_date",
    "kktix_time",
    "kktix_auto",
    "kktix_area",
    "kktix_area2",
    "kktix_area3",
    "kktix_area4",
    "kktix_omg",
    "kktix_ocr",
    "kktix_nokeep",
    "kktix_autosend",
    "kktix_ticketcount"
  ] ,(result)=> {
    if(result.kktix_quick){
      $("#kktix_quick").prop("checked","checked");
    }
    if(result.kktix_auto=="human"){
      $("#kktix_human").prop("checked","checked");
    }else{
      $("#kktix_auto").prop("checked","checked");
    }
    $("#kktix_date").val(result.kktix_date);
    $("#kktix_time").val(result.kktix_time);
    $("#kktix_area").val(result.kktix_area);
    $("#kktix_area2").val(result.kktix_area2);
    $("#kktix_area3").val(result.kktix_area3);
    $("#kktix_area4").val(result.kktix_area4);
    if(result.kktix_omg){
      $("#kktix_omg").prop("checked","checked");
    }
    if(result.kktix_nokeep){
      $("#kktix_nokeep").prop("checked","checked");
    }

    if(result.kktix_autosend){
      $("#kktix_autosend").prop("checked","checked");
    }
    $("#kktix_ticketcount").val(result.kktix_ticketcount);
   
  });


});


