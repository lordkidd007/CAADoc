var objet=new Array; 
     objet["class"]=new Array; 
     objet["exception"]=new Array; 
     objet["collection"]=new Array; 
     objet["notification"]=new Array; 
     objet["interface"]=new Array; 
     objet["struct"]=new Array; 
     objet["enum"]=new Array; 
     objet["define"]=new Array; 
     objet["typedef"]=new Array; 
     objet["function"]=new Array; 
 	var DSCharacteristic=new Array ; 
 objet["class"]["DELLiveInfraBrowserData"]=0;
objet["class"][0]="../DELLiveInfraU5Itf/class_DELLiveInfraBrowserData_39396.htm";
objet["notification"]["DELLiveInfraRefreshNotif"]=0;
objet["notification"][0]="../DELLiveInfraU5Itf/class_DELLiveInfraRefreshNotif_42044.htm";
DSCharacteristic["DELLiveInfraRefreshNotif"]="notification";
objet["define"]["DEL_LS_BrwDisable"]=0;
objet["define"][0]="../DELLiveInfraU5Itf/define_DEL_LS_BrwDisable_27573.htm";
objet["define"]["DEL_LS_BrwEnable"]=1;
objet["define"][1]="../DELLiveInfraU5Itf/define_DEL_LS_BrwEnable_25854.htm";
objet["define"]["DEL_LS_BrwHide"]=2;
objet["define"][2]="../DELLiveInfraU5Itf/define_DEL_LS_BrwHide_22877.htm";
objet["define"]["DEL_LS_BrwShow"]=3;
objet["define"][3]="../DELLiveInfraU5Itf/define_DEL_LS_BrwShow_23342.htm";
objet["define"]["DEL_LS_DeleteStamp"]=4;
objet["define"][4]="../DELLiveInfraU5Itf/define_DEL_LS_DeleteStamp_29604.htm";
objet["define"]["DEL_LS_ModifyStamp"]=5;
objet["define"][5]="../DELLiveInfraU5Itf/define_DEL_LS_ModifyStamp_29801.htm";
objet["define"]["DEL_LS_NewStamp"]=6;
objet["define"][6]="../DELLiveInfraU5Itf/define_DEL_LS_NewStamp_24724.htm";
objet["define"]["DEL_LS_SameStamp"]=7;
objet["define"][7]="../DELLiveInfraU5Itf/define_DEL_LS_SameStamp_26164.htm";
objet["define"]["DEL_LS_SetASO"]=8;
objet["define"][8]="../DELLiveInfraU5Itf/define_DEL_LS_SetASO_20988.htm";
objet["define"]["DEL_LS_SetCommands"]=9;
objet["define"][9]="../DELLiveInfraU5Itf/define_DEL_LS_SetCommands_29656.htm";
objet["define"]["DEL_LS_SetCtrls"]=10;
objet["define"][10]="../DELLiveInfraU5Itf/define_DEL_LS_SetCtrls_24805.htm";
objet["define"]["DEL_LS_SetOptions"]=11;
objet["define"][11]="../DELLiveInfraU5Itf/define_DEL_LS_SetOptions_28300.htm";
objet["interface"]["DELILiveInfraBrowserAgent"]=0;
objet["interface"][0]="../DELLiveInfraU5Itf/interface_DELILiveInfraBrowserAgent_47035.htm";
objet["interface"]["DELILiveInfraBrowserCusto"]=1;
objet["interface"][1]="../DELLiveInfraU5Itf/interface_DELILiveInfraBrowserCusto_47695.htm";
objet["interface"]["DELILiveInfraInOutNotif"]=2;
objet["interface"][2]="../DELLiveInfraU5Itf/interface_DELILiveInfraInOutNotif_41874.htm";
objet["interface"]["DELILiveInfraSelectable"]=3;
objet["interface"][3]="../DELLiveInfraU5Itf/interface_DELILiveInfraSelectable_41867.htm";
objet["interface"]["DELILiveInfraSelectableNoEdit"]=4;
objet["interface"][4]="../DELLiveInfraU5Itf/interface_DELILiveInfraSelectableNoEdit_56733.htm";
objet["interface"]["DELILiveInfraStampProxy"]=5;
objet["interface"][5]="../DELLiveInfraU5Itf/interface_DELILiveInfraStampProxy_42888.htm";
objet["typedef"]["DELLiveInfraEvent"]=0;
objet["typedef"][0]="../DELLiveInfraU5Itf/typedef_DELLiveInfraEvent_28712.htm";
objet["typedef"]["DELLiveInfraStampStatus"]=1;
objet["typedef"][1]="../DELLiveInfraU5Itf/typedef_DELLiveInfraStampStatus_41368.htm";
function getDsCharacteristic(name,itype) { 
     var dsCh = null; 
     if (name!=null && itype!=null && itype == "class") { 
         dsCh = DSCharacteristic[name]; 
     } 
     if (dsCh == null) { 
        dsCh=itype; 
    }   
    return dsCh; 
 } 
 function locateObject(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){      
   return 1; 
 }else{ 
    return 0; 
 } 
 } 
 function openLinkNP(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){ 
     this.location=findobj; 
 } 
 }