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
 objet["collection"]["CATLISTP(PLMIFolder)"]=0;
objet["collection"][0]="../PLMFolderInterfaces/class_CATLISTP(PLMIFolder)_34718.htm";
objet["collection"]["CATLISTP(PLMISubFolder)"]=1;
objet["collection"][1]="../PLMFolderInterfaces/class_CATLISTP(PLMISubFolder)_40840.htm";
objet["class"]["PLMFolderServices"]=0;
objet["class"][0]="../PLMFolderInterfaces/class_PLMFolderServices_32907.htm";
objet["class"]["PLMRootFolderFactoryServices"]=1;
objet["class"][1]="../PLMFolderInterfaces/class_PLMRootFolderFactoryServices_58307.htm";
objet["enum"]["FolderCopyMode"]=0;
objet["enum"][0]="../PLMFolderInterfaces/enum_FolderCopyMode_27564.htm";
objet["interface"]["PLMIFolder"]=0;
objet["interface"][0]="../PLMFolderInterfaces/interface_PLMIFolder_25784.htm";
objet["interface"]["PLMIRootFolderFactory"]=1;
objet["interface"][1]="../PLMFolderInterfaces/interface_PLMIRootFolderFactory_43136.htm";
objet["interface"]["PLMISubFolder"]=2;
objet["interface"][2]="../PLMFolderInterfaces/interface_PLMISubFolder_29101.htm";
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