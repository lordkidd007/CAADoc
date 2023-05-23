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
 objet["collection"]["CATLISTP(CATPLMSiteStatus)"]=0;
objet["collection"][0]="../PLMSRMExposedServices/class_CATLISTP(CATPLMSiteStatus)_52218.htm";
objet["class"]["CATPLMDetachServices"]=0;
objet["class"][0]="../PLMSRMExposedServices/class_CATPLMDetachServices_42039.htm";
objet["class"]["CATPLMExchangeChannelServices"]=1;
objet["class"][1]="../PLMSRMExposedServices/class_CATPLMExchangeChannelServices_64203.htm";
objet["class"]["CATPLMSiteStatus"]=2;
objet["class"][2]="../PLMSRMExposedServices/class_CATPLMSiteStatus_35159.htm";
objet["function"]["GetCATIPLMChannelReportServices"]=0;
objet["function"][0]="../PLMSRMExposedServices/function_GetCATIPLMChannelReportServices_139434.htm";
objet["interface"]["CATIPLMChannelReportData"]=0;
objet["interface"][0]="../PLMSRMExposedServices/interface_CATIPLMChannelReportData_52865.htm";
objet["interface"]["CATIPLMChannelReportGlobal"]=1;
objet["interface"][1]="../PLMSRMExposedServices/interface_CATIPLMChannelReportGlobal_58097.htm";
objet["interface"]["CATIPLMChannelReportServices"]=2;
objet["interface"][2]="../PLMSRMExposedServices/interface_CATIPLMChannelReportServices_64414.htm";
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