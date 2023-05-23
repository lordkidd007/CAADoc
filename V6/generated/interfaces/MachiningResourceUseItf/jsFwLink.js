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
 objet["interface"]["ManufacturingInsert"]=0;
objet["interface"][0]="../MachiningResourceUseItf/interface_ManufacturingInsert_47913.htm";
objet["interface"]["ManufacturingMachine"]=1;
objet["interface"][1]="../MachiningResourceUseItf/interface_ManufacturingMachine_49249.htm";
objet["interface"]["ManufacturingResource"]=2;
objet["interface"][2]="../MachiningResourceUseItf/interface_ManufacturingResource_51980.htm";
objet["interface"]["ManufacturingResourceCapture"]=3;
objet["interface"][3]="../MachiningResourceUseItf/interface_ManufacturingResourceCapture_69497.htm";
objet["interface"]["ManufacturingResourceFactory"]=4;
objet["interface"][4]="../MachiningResourceUseItf/interface_ManufacturingResourceFactory_69651.htm";
objet["interface"]["ManufacturingShank"]=5;
objet["interface"][5]="../MachiningResourceUseItf/interface_ManufacturingShank_45626.htm";
objet["interface"]["ManufacturingTool"]=6;
objet["interface"][6]="../MachiningResourceUseItf/interface_ManufacturingTool_44096.htm";
objet["interface"]["ManufacturingToolAssembly"]=7;
objet["interface"][7]="../MachiningResourceUseItf/interface_ManufacturingToolAssembly_61309.htm";
objet["interface"]["ManufacturingToolHolder"]=8;
objet["interface"][8]="../MachiningResourceUseItf/interface_ManufacturingToolHolder_55999.htm";
objet["interface"]["ManufacturingToolHolderConical"]=9;
objet["interface"][9]="../MachiningResourceUseItf/interface_ManufacturingToolHolderConical_74205.htm";
objet["interface"]["ManufacturingToolHolderPrismatic"]=10;
objet["interface"][10]="../MachiningResourceUseItf/interface_ManufacturingToolHolderPrismatic_81432.htm";
objet["interface"]["ManufacturingUserRepresentation"]=11;
objet["interface"][11]="../MachiningResourceUseItf/interface_ManufacturingUserRepresentation_79358.htm";
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