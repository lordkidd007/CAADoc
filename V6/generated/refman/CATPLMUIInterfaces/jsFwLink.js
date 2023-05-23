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
 objet["class"]["CATPLMNewServices"]=0;
objet["class"][0]="../CATPLMUIInterfaces/class_CATPLMNewServices_30065.htm";
objet["class"]["CATPLMObjectSelectorServices"]=1;
objet["class"][1]="../CATPLMUIInterfaces/class_CATPLMObjectSelectorServices_55373.htm";
objet["enum"]["CATPLMChooserSelectorOrigins"]=0;
objet["enum"][0]="../CATPLMUIInterfaces/enum_CATPLMChooserSelectorOrigins_55148.htm";
objet["interface"]["CATIPLMNewEngineListenerPublic"]=0;
objet["interface"][0]="../CATPLMUIInterfaces/interface_CATIPLMNewEngineListenerPublic_62994.htm";
objet["interface"]["CATIPLMNewEnginePublic"]=1;
objet["interface"][1]="../CATPLMUIInterfaces/interface_CATIPLMNewEnginePublic_41689.htm";
objet["interface"]["CATIPLMNewFactory"]=2;
objet["interface"][2]="../CATPLMUIInterfaces/interface_CATIPLMNewFactory_32532.htm";
objet["interface"]["CATIPLMObjectSelector"]=3;
objet["interface"][3]="../CATPLMUIInterfaces/interface_CATIPLMObjectSelector_40115.htm";
objet["interface"]["CATIPLMObjectSelectorFactory"]=4;
objet["interface"][4]="../CATPLMUIInterfaces/interface_CATIPLMObjectSelectorFactory_57786.htm";
objet["interface"]["CATPLMNewServicesPublic"]=5;
objet["interface"][5]="../CATPLMUIInterfaces/interface_CATPLMNewServicesPublic_44523.htm";
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