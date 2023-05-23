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
 objet["collection"]["CATLISTP(IID)"]=0;
objet["collection"][0]="../DataCommonProtocolUse/class_CATLISTP(IID)_28304.htm";
objet["collection"]["CATLISTV(CATIUseEntity)"]=1;
objet["collection"][1]="../DataCommonProtocolUse/class_CATLISTV(CATIUseEntity)_45822.htm";
objet["class"]["DataCommonProtocolCCPServices"]=0;
objet["class"][0]="../DataCommonProtocolUse/class_DataCommonProtocolCCPServices_64052.htm";
objet["class"]["DataCommonProtocolServices"]=1;
objet["class"][1]="../DataCommonProtocolUse/class_DataCommonProtocolServices_57465.htm";
objet["interface"]["CATI3DVisuProvider"]=0;
objet["interface"][0]="../DataCommonProtocolUse/interface_CATI3DVisuProvider_41376.htm";
objet["interface"]["CATINavigateProvider"]=1;
objet["interface"][1]="../DataCommonProtocolUse/interface_CATINavigateProvider_45502.htm";
objet["interface"]["CATIParmProvider"]=2;
objet["interface"][2]="../DataCommonProtocolUse/interface_CATIParmProvider_38174.htm";
objet["interface"]["CATIReplace"]=3;
objet["interface"][3]="../DataCommonProtocolUse/interface_CATIReplace_31102.htm";
objet["interface"]["CATIUpdateProvider"]=4;
objet["interface"][4]="../DataCommonProtocolUse/interface_CATIUpdateProvider_41624.htm";
objet["interface"]["CATIUseEntity"]=5;
objet["interface"][5]="../DataCommonProtocolUse/interface_CATIUseEntity_33870.htm";
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