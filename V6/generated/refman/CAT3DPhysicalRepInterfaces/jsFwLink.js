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
 objet["interface"]["CATIPsiPLMRepRefFactory"]=0;
objet["interface"][0]="../CAT3DPhysicalRepInterfaces/interface_CATIPsiPLMRepRefFactory_61932.htm";
objet["interface"]["CATIPsiRepRefApplicativeDataAccess"]=1;
objet["interface"][1]="../CAT3DPhysicalRepInterfaces/interface_CATIPsiRepRefApplicativeDataAccess_92934.htm";
objet["interface"]["CATIPsiRepRefFactory"]=2;
objet["interface"][2]="../CAT3DPhysicalRepInterfaces/interface_CATIPsiRepRefFactory_56147.htm";
objet["interface"]["CATIPsiRepresentationLoadMode"]=3;
objet["interface"][3]="../CAT3DPhysicalRepInterfaces/interface_CATIPsiRepresentationLoadMode_78100.htm";
objet["interface"]["CATIPsiRepresentationReference"]=4;
objet["interface"][4]="../CAT3DPhysicalRepInterfaces/interface_CATIPsiRepresentationReference_81953.htm";
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