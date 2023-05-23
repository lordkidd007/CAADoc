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
 objet["class"]["CATFeatureAgent"]=0;
objet["class"][0]="../CATMecModUIUseItf/class_CATFeatureAgent_24743.htm";
objet["class"]["CATFeatureImportAgent"]=1;
objet["class"][1]="../CATMecModUIUseItf/class_CATFeatureImportAgent_35765.htm";
objet["class"]["CATPrtUpdateCom"]=2;
objet["class"][2]="../CATMecModUIUseItf/class_CATPrtUpdateCom_24546.htm";
objet["interface"]["CATICATMmrLgcl3DShpWksAddin"]=0;
objet["interface"][0]="../CATMecModUIUseItf/interface_CATICATMmrLgcl3DShpWksAddin_49753.htm";
objet["interface"]["CATICATMmrLgcl3DShpWksConfiguration"]=1;
objet["interface"][1]="../CATMecModUIUseItf/interface_CATICATMmrLgcl3DShpWksConfiguration_76717.htm";
objet["interface"]["CATIMmiTemporaryVisProperties"]=2;
objet["interface"][2]="../CATMecModUIUseItf/interface_CATIMmiTemporaryVisProperties_59768.htm";
objet["interface"]["CATIPrtWksAddin"]=3;
objet["interface"][3]="../CATMecModUIUseItf/interface_CATIPrtWksAddin_27006.htm";
objet["interface"]["CATIPrtWksConfiguration"]=4;
objet["interface"][4]="../CATMecModUIUseItf/interface_CATIPrtWksConfiguration_43314.htm";
objet["typedef"]["CATFeatureAgentBehavior"]=0;
objet["typedef"][0]="../CATMecModUIUseItf/typedef_CATFeatureAgentBehavior_41102.htm";
objet["typedef"]["CATImportAgentBehavior"]=1;
objet["typedef"][1]="../CATMecModUIUseItf/typedef_CATImportAgentBehavior_38963.htm";
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