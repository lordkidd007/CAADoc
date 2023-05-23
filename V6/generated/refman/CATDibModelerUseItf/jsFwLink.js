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
 objet["enum"]["CATDftStandardValueType"]=0;
objet["enum"][0]="../CATDibModelerUseItf/enum_CATDftStandardValueType_43751.htm";
objet["enum"]["CATDibStandardValueType"]=1;
objet["enum"][1]="../CATDibModelerUseItf/enum_CATDibStandardValueType_43673.htm";
objet["enum"]["CATFormatOrientationsType"]=2;
objet["enum"][2]="../CATDibModelerUseItf/enum_CATFormatOrientationsType_49631.htm";
objet["enum"]["CATSheetOrientation"]=3;
objet["enum"][3]="../CATDibModelerUseItf/enum_CATSheetOrientation_35844.htm";
objet["interface"]["CATIDftFormat"]=0;
objet["interface"][0]="../CATDibModelerUseItf/interface_CATIDftFormat_28637.htm";
objet["interface"]["CATIDftSheetFormat"]=1;
objet["interface"][1]="../CATDibModelerUseItf/interface_CATIDftSheetFormat_36330.htm";
objet["interface"]["CATIDftStandard"]=2;
objet["interface"][2]="../CATDibModelerUseItf/interface_CATIDftStandard_31312.htm";
objet["interface"]["CATIDftStandardManager"]=3;
objet["interface"][3]="../CATDibModelerUseItf/interface_CATIDftStandardManager_44006.htm";
objet["interface"]["CATIDibCustomFormat"]=4;
objet["interface"][4]="../CATDibModelerUseItf/interface_CATIDibCustomFormat_38375.htm";
objet["interface"]["CATIDibFormat"]=5;
objet["interface"][5]="../CATDibModelerUseItf/interface_CATIDibFormat_28544.htm";
objet["interface"]["CATIDibFormatsManager"]=6;
objet["interface"][6]="../CATDibModelerUseItf/interface_CATIDibFormatsManager_42034.htm";
objet["interface"]["CATIDibPrintArea"]=7;
objet["interface"][7]="../CATDibModelerUseItf/interface_CATIDibPrintArea_32515.htm";
objet["interface"]["CATIDibSheetFormat"]=8;
objet["interface"][8]="../CATDibModelerUseItf/interface_CATIDibSheetFormat_36237.htm";
objet["interface"]["CATIDibStandard"]=9;
objet["interface"][9]="../CATDibModelerUseItf/interface_CATIDibStandard_31219.htm";
objet["interface"]["CATIDibStandardsManager"]=10;
objet["interface"][10]="../CATDibModelerUseItf/interface_CATIDibStandardsManager_46337.htm";
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