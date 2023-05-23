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
 objet["enum"]["MFGProcessGenType"]=0;
objet["enum"][0]="../DELShipMfgItf/enum_MFGProcessGenType_22208.htm";
objet["function"]["GetDELShipMfgProcessAuthAccess"]=0;
objet["function"][0]="../DELShipMfgItf/function_GetDELShipMfgProcessAuthAccess_114049.htm";
objet["function"]["GetDELShipMfgProcessNavAccess"]=1;
objet["function"][1]="../DELShipMfgItf/function_GetDELShipMfgProcessNavAccess_107668.htm";
objet["function"]["GetDELShipMfgProductAuthAccess"]=2;
objet["function"][2]="../DELShipMfgItf/function_GetDELShipMfgProductAuthAccess_114085.htm";
objet["function"]["GetDELShipMfgProductNavAccess"]=3;
objet["function"][3]="../DELShipMfgItf/function_GetDELShipMfgProductNavAccess_107704.htm";
objet["function"]["GetDELShipMfgResourceAuthAccess"]=4;
objet["function"][4]="../DELShipMfgItf/function_GetDELShipMfgResourceAuthAccess_120354.htm";
objet["function"]["GetDELShipMfgResourceNavAccess"]=5;
objet["function"][5]="../DELShipMfgItf/function_GetDELShipMfgResourceNavAccess_113755.htm";
objet["interface"]["DELIShipMfgProcessAuth"]=0;
objet["interface"][0]="../DELShipMfgItf/interface_DELIShipMfgProcessAuth_34843.htm";
objet["interface"]["DELIShipMfgProcessNav"]=1;
objet["interface"][1]="../DELShipMfgItf/interface_DELIShipMfgProcessNav_32553.htm";
objet["interface"]["DELIShipMfgProductAuth"]=2;
objet["interface"][2]="../DELShipMfgItf/interface_DELIShipMfgProductAuth_34858.htm";
objet["interface"]["DELIShipMfgProductNav"]=3;
objet["interface"][3]="../DELShipMfgItf/interface_DELIShipMfgProductNav_32568.htm";
objet["interface"]["DELIShipMfgResourceAuth"]=4;
objet["interface"][4]="../DELShipMfgItf/interface_DELIShipMfgResourceAuth_37101.htm";
objet["interface"]["DELIShipMfgResourceNav"]=5;
objet["interface"][5]="../DELShipMfgItf/interface_DELIShipMfgResourceNav_34702.htm";
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