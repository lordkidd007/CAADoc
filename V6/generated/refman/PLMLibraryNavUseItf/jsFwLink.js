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
 objet["collection"]["CATLISTP(PLMICLGClass)"]=0;
objet["collection"][0]="../PLMLibraryNavUseItf/class_CATLISTP(PLMICLGClass)_37063.htm";
objet["collection"]["CATLISTP(PLMICLGItem)"]=1;
objet["collection"][1]="../PLMLibraryNavUseItf/class_CATLISTP(PLMICLGItem)_34912.htm";
objet["class"]["PLMCLGPublicLibraryNavServices"]=0;
objet["class"][0]="../PLMLibraryNavUseItf/class_PLMCLGPublicLibraryNavServices_62920.htm";
objet["interface"]["PLMICLGClass"]=0;
objet["interface"][0]="../PLMLibraryNavUseItf/interface_PLMICLGClass_27039.htm";
objet["interface"]["PLMICLGItem"]=1;
objet["interface"][1]="../PLMLibraryNavUseItf/interface_PLMICLGItem_25856.htm";
objet["interface"]["PLMICLGLibrary"]=2;
objet["interface"][2]="../PLMLibraryNavUseItf/interface_PLMICLGLibrary_29820.htm";
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