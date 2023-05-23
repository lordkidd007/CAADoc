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
 objet["interface"]["DELIMfgInsert"]=0;
objet["interface"][0]="../MachiningResourceUseItf/interface_DELIMfgInsert_37590.htm";
objet["interface"]["DELIMfgMachine"]=1;
objet["interface"][1]="../MachiningResourceUseItf/interface_DELIMfgMachine_38542.htm";
objet["interface"]["DELIMfgMachineSpindle"]=2;
objet["interface"][2]="../MachiningResourceUseItf/interface_DELIMfgMachineSpindle_50806.htm";
objet["interface"]["DELIMfgMillTurnMachine"]=3;
objet["interface"][3]="../MachiningResourceUseItf/interface_DELIMfgMillTurnMachine_52867.htm";
objet["interface"]["DELIMfgResource"]=4;
objet["interface"][4]="../MachiningResourceUseItf/interface_DELIMfgResource_40391.htm";
objet["interface"]["DELIMfgResourceCapture"]=5;
objet["interface"][5]="../MachiningResourceUseItf/interface_DELIMfgResourceCapture_53564.htm";
objet["interface"]["DELIMfgResourceFactory"]=6;
objet["interface"][6]="../MachiningResourceUseItf/interface_DELIMfgResourceFactory_53694.htm";
objet["interface"]["DELIMfgShank"]=7;
objet["interface"][7]="../MachiningResourceUseItf/interface_DELIMfgShank_36071.htm";
objet["interface"]["DELIMfgTool"]=8;
objet["interface"][8]="../MachiningResourceUseItf/interface_DELIMfgTool_35063.htm";
objet["interface"]["DELIMfgToolAssembly"]=9;
objet["interface"][9]="../MachiningResourceUseItf/interface_DELIMfgToolAssembly_47284.htm";
objet["interface"]["DELIMfgToolHolder"]=10;
objet["interface"][10]="../MachiningResourceUseItf/interface_DELIMfgToolHolder_43330.htm";
objet["interface"]["DELIMfgToolHolderConical"]=11;
objet["interface"][11]="../MachiningResourceUseItf/interface_DELIMfgToolHolderConical_57354.htm";
objet["interface"]["DELIMfgToolHolderPrismatic"]=12;
objet["interface"][12]="../MachiningResourceUseItf/interface_DELIMfgToolHolderPrismatic_63123.htm";
objet["interface"]["DELIMfgUserRepresentation"]=13;
objet["interface"][13]="../MachiningResourceUseItf/interface_DELIMfgUserRepresentation_61373.htm";
objet["interface"]["DELIMfgWornUsage"]=14;
objet["interface"][14]="../MachiningResourceUseItf/interface_DELIMfgWornUsage_41664.htm";
objet["typedef"]["CATListOfCATBaseUnknown_var"]=0;
objet["typedef"][0]="../MachiningResourceUseItf/typedef_CATListOfCATBaseUnknown_var_63770.htm";
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