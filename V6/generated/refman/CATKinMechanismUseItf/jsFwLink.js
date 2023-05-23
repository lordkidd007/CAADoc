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
 objet["enum"]["CATKinematicsCommandType"]=0;
objet["enum"][0]="../CATKinMechanismUseItf/enum_CATKinematicsCommandType_50324.htm";
objet["enum"]["CATKinematicsSimulationStatus"]=1;
objet["enum"][1]="../CATKinMechanismUseItf/enum_CATKinematicsSimulationStatus_65189.htm";
objet["function"]["CATKinGetKinematicsServices"]=0;
objet["function"][0]="../CATKinMechanismUseItf/function_CATKinGetKinematicsServices_96588.htm";
objet["interface"]["CATIKinematicsCommand"]=0;
objet["interface"][0]="../CATKinMechanismUseItf/interface_CATIKinematicsCommand_46293.htm";
objet["interface"]["CATIKinematicsMechEdit"]=1;
objet["interface"][1]="../CATKinMechanismUseItf/interface_CATIKinematicsMechEdit_47880.htm";
objet["interface"]["CATIKinematicsMechanism"]=2;
objet["interface"][2]="../CATKinMechanismUseItf/interface_CATIKinematicsMechanism_50951.htm";
objet["interface"]["CATIKinematicsServices"]=3;
objet["interface"][3]="../CATKinMechanismUseItf/interface_CATIKinematicsServices_48970.htm";
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