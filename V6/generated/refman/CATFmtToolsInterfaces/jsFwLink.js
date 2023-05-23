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
 objet["class"]["CATFmtFEMRepFactory"]=0;
objet["class"][0]="../CATFmtToolsInterfaces/class_CATFmtFEMRepFactory_39971.htm";
objet["class"]["CATFmtListOfPath"]=1;
objet["class"][1]="../CATFmtToolsInterfaces/class_CATFmtListOfPath_34825.htm";
objet["class"]["CATFmtPathFactory"]=2;
objet["class"][2]="../CATFmtToolsInterfaces/class_CATFmtPathFactory_37039.htm";
objet["class"]["CATFmtRepManagerServices"]=3;
objet["class"][3]="../CATFmtToolsInterfaces/class_CATFmtRepManagerServices_51333.htm";
objet["class"]["CATFmtSelectionTrap"]=4;
objet["class"][4]="../CATFmtToolsInterfaces/class_CATFmtSelectionTrap_40589.htm";
objet["define"]["CATFmtGeometry0D"]=0;
objet["define"][0]="../CATFmtToolsInterfaces/define_CATFmtGeometry0D_34732.htm";
objet["define"]["CATFmtGeometry1D"]=1;
objet["define"][1]="../CATFmtToolsInterfaces/define_CATFmtGeometry1D_34746.htm";
objet["define"]["CATFmtGeometry2D"]=2;
objet["define"][2]="../CATFmtToolsInterfaces/define_CATFmtGeometry2D_34760.htm";
objet["define"]["CATFmtGeometry3D"]=3;
objet["define"][3]="../CATFmtToolsInterfaces/define_CATFmtGeometry3D_34774.htm";
objet["define"]["CATFmtGeometryAll"]=4;
objet["define"][4]="../CATFmtToolsInterfaces/define_CATFmtGeometryAll_37298.htm";
objet["enum"]["CATFmtTrapMode"]=0;
objet["enum"][0]="../CATFmtToolsInterfaces/enum_CATFmtTrapMode_31507.htm";
objet["enum"]["CATFmtViewMode"]=1;
objet["enum"][1]="../CATFmtToolsInterfaces/enum_CATFmtViewMode_31551.htm";
objet["interface"]["CATFmtPath"]=0;
objet["interface"][0]="../CATFmtToolsInterfaces/interface_CATFmtPath_29963.htm";
objet["interface"]["CATIFmtLinkedRep"]=1;
objet["interface"][1]="../CATFmtToolsInterfaces/interface_CATIFmtLinkedRep_37357.htm";
objet["interface"]["CATIFmtTrapSelector"]=2;
objet["interface"][2]="../CATFmtToolsInterfaces/interface_CATIFmtTrapSelector_43170.htm";
objet["typedef"]["CATFmtGeometryType"]=0;
objet["typedef"][0]="../CATFmtToolsInterfaces/typedef_CATFmtGeometryType_40140.htm";
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