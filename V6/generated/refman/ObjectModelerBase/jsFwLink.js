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
 objet["class"]["CATBaseUnknown_Associations"]=0;
objet["class"][0]="../ObjectModelerBase/class_CATBaseUnknown_Associations_51864.htm";
objet["collection"]["CATLISTP(CATOmbObjectInContext)"]=0;
objet["collection"][0]="../ObjectModelerBase/class_CATLISTP(CATOmbObjectInContext)_58405.htm";
objet["class"]["CATOmbLifeCycleOwnerNLSAdapter"]=1;
objet["class"][1]="../ObjectModelerBase/class_CATOmbLifeCycleOwnerNLSAdapter_57502.htm";
objet["class"]["CATOmbLifeCycleRootsBag"]=2;
objet["class"][2]="../ObjectModelerBase/class_CATOmbLifeCycleRootsBag_39868.htm";
objet["class"]["CATOmbLinkStatusServices"]=3;
objet["class"][3]="../ObjectModelerBase/class_CATOmbLinkStatusServices_43716.htm";
objet["class"]["CATOmbObjectInContext"]=4;
objet["class"][4]="../ObjectModelerBase/class_CATOmbObjectInContext_36398.htm";
objet["class"]["PLMPublicLinkFacade"]=5;
objet["class"][5]="../ObjectModelerBase/class_PLMPublicLinkFacade_31414.htm";
objet["define"]["E_PLMLINK_INTRACOMPONENTLINK"]=0;
objet["define"][0]="../ObjectModelerBase/define_E_PLMLINK_INTRACOMPONENTLINK_44278.htm";
objet["define"]["E_PLMLINK_INVALIDFACADE"]=1;
objet["define"][1]="../ObjectModelerBase/define_E_PLMLINK_INVALIDFACADE_33419.htm";
objet["define"]["E_PLMLINK_NOSYNCHRONIZATIONBEHAVIOR"]=2;
objet["define"][2]="../ObjectModelerBase/define_E_PLMLINK_NOSYNCHRONIZATIONBEHAVIOR_60793.htm";
objet["interface"]["CATIOmbLifeCycleOwnerNLSInfo"]=0;
objet["interface"][0]="../ObjectModelerBase/interface_CATIOmbLifeCycleOwnerNLSInfo_53887.htm";
objet["interface"]["CATIOrientation"]=1;
objet["interface"][1]="../ObjectModelerBase/interface_CATIOrientation_28435.htm";
objet["interface"]["CATInit"]=2;
objet["interface"][2]="../ObjectModelerBase/interface_CATInit_19460.htm";
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