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
 objet["define"]["DEL_LIVE_SIM_MSR_PPR_CTX"]=0;
objet["define"][0]="../DELLiveSimUseItf/define_DEL_LIVE_SIM_MSR_PPR_CTX_36310.htm";
objet["define"]["DEL_LIVE_SIM_MSR_PRD_CTX"]=1;
objet["define"][1]="../DELLiveSimUseItf/define_DEL_LIVE_SIM_MSR_PRD_CTX_36080.htm";
objet["define"]["DEL_LIVE_SIM_PPR_CTX"]=2;
objet["define"][2]="../DELLiveSimUseItf/define_DEL_LIVE_SIM_PPR_CTX_29093.htm";
objet["define"]["DEL_LIVE_SIM_PRD_CTX"]=3;
objet["define"][3]="../DELLiveSimUseItf/define_DEL_LIVE_SIM_PRD_CTX_28911.htm";
objet["interface"]["DELILiveSimContextInfo"]=0;
objet["interface"][0]="../DELLiveSimUseItf/interface_DELILiveSimContextInfo_39279.htm";
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