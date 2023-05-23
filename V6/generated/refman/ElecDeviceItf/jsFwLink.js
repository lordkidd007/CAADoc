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
 objet["class"]["CATEhiSegmentInfo"]=0;
objet["class"][0]="../ElecDeviceItf/class_CATEhiSegmentInfo_22663.htm";
objet["collection"]["CATLISTP(CATEhiSegmentInfo)"]=0;
objet["collection"][0]="../ElecDeviceItf/class_CATLISTP(CATEhiSegmentInfo)_40798.htm";
objet["enum"]["TYPEDEF_ENUM"]=0;
objet["enum"][0]="../ElecDeviceItf/_enum_TYPEDEFENUM.htm";
objet["interface"]["CATIElbConnectionPoint"]=0;
objet["interface"][0]="../ElecDeviceItf/interface_CATIElbConnectionPoint_35446.htm";
objet["interface"]["CATIElbDeviceInstance"]=1;
objet["interface"][1]="../ElecDeviceItf/interface_CATIElbDeviceInstance_32605.htm";
objet["interface"]["CATIElbDeviceReference"]=2;
objet["interface"][2]="../ElecDeviceItf/interface_CATIElbDeviceReference_34578.htm";
objet["interface"]["CATIElbReferenceFactory"]=3;
objet["interface"][3]="../ElecDeviceItf/interface_CATIElbReferenceFactory_37446.htm";
objet["interface"]["CATIElbSupportInstance"]=4;
objet["interface"][4]="../ElecDeviceItf/interface_CATIElbSupportInstance_35471.htm";
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