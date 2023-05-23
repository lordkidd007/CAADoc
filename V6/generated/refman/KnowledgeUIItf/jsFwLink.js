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
 objet["class"]["CATCkeAddParametersDlgAdapter"]=0;
objet["class"][0]="../KnowledgeUIItf/class_CATCkeAddParametersDlgAdapter_50846.htm";
objet["class"]["CATKweTypesBrowserServices"]=1;
objet["class"][1]="../KnowledgeUIItf/class_CATKweTypesBrowserServices_44162.htm";
objet["interface"]["CATICkeAddParametersDlg"]=0;
objet["interface"][0]="../KnowledgeUIItf/interface_CATICkeAddParametersDlg_37722.htm";
objet["interface"]["CATIKnowledgeAdvisorAddin"]=1;
objet["interface"][1]="../KnowledgeUIItf/interface_CATIKnowledgeAdvisorAddin_42853.htm";
objet["interface"]["CATIKweTypesBrowser"]=2;
objet["interface"][2]="../KnowledgeUIItf/interface_CATIKweTypesBrowser_30479.htm";
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