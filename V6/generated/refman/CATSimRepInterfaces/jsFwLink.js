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
 objet["collection"]["CATLISTV(CATISimObjectInContext_var)"]=0;
objet["collection"][0]="../CATSimRepInterfaces/class_CATLISTV(CATISimObjectInContext_var)_79166.htm";
objet["class"]["CATSimObjectInContextFactory"]=0;
objet["class"][0]="../CATSimRepInterfaces/class_CATSimObjectInContextFactory_57990.htm";
objet["enum"]["CATSamAxisDefinitionMode"]=0;
objet["enum"][0]="../CATSimRepInterfaces/enum_CATSamAxisDefinitionMode_46332.htm";
objet["enum"]["CATSamAxisType"]=1;
objet["enum"][1]="../CATSimRepInterfaces/enum_CATSamAxisType_27542.htm";
objet["enum"]["CATSimLoadingMode"]=2;
objet["enum"][2]="../CATSimRepInterfaces/enum_CATSimLoadingMode_31717.htm";
objet["enum"]["CATSimOrientationMode"]=3;
objet["enum"][3]="../CATSimRepInterfaces/enum_CATSimOrientationMode_39832.htm";
objet["interface"]["CATISimObjectInContext"]=0;
objet["interface"][0]="../CATSimRepInterfaces/interface_CATISimObjectInContext_44945.htm";
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