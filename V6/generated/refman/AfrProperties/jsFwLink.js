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
 objet["class"]["CATEditor"]=0;
objet["class"][0]="../AfrProperties/class_CATEditor_13314.htm";
objet["class"]["CATEditorFactory"]=1;
objet["class"][1]="../AfrProperties/class_CATEditorFactory_22249.htm";
objet["class"]["CATEditorPage"]=2;
objet["class"][2]="../AfrProperties/class_CATEditorPage_17349.htm";
objet["define"]["CAT_EDITOR_DECLARE_FACTORY"]=0;
objet["define"][0]="../AfrProperties/define_CAT_EDITOR_DECLARE_FACTORY_35078.htm";
objet["define"]["CAT_EDITOR_DEFINE_FACTORY"]=1;
objet["define"][1]="../AfrProperties/define_CAT_EDITOR_DEFINE_FACTORY_33258.htm";
objet["define"]["CAT_EDITOR_DEFINE_FACTORY2"]=2;
objet["define"][2]="../AfrProperties/define_CAT_EDITOR_DEFINE_FACTORY2_34508.htm";
objet["enum"]["ModeReadWrite"]=0;
objet["enum"][0]="../AfrProperties/enum_ModeReadWrite_17117.htm";
objet["enum"]["ModeYesNo"]=1;
objet["enum"][1]="../AfrProperties/enum_ModeYesNo_12727.htm";
objet["interface"]["CATIEditProperties"]=0;
objet["interface"][0]="../AfrProperties/interface_CATIEditProperties_28293.htm";
objet["interface"]["CATIMoreProperties"]=1;
objet["interface"][1]="../AfrProperties/interface_CATIMoreProperties_28329.htm";
objet["interface"]["CATIRootProperties"]=2;
objet["interface"][2]="../AfrProperties/interface_CATIRootProperties_28436.htm";
objet["interface"]["CATIUserSettings"]=3;
objet["interface"][3]="../AfrProperties/interface_CATIUserSettings_24788.htm";
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