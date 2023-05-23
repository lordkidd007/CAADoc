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
 objet["class"]["CATElbDevice"]=0;
objet["class"][0]="../ElecIXFInterfaces/class_CATElbDevice_21258.htm";
objet["class"]["CATEwrWire"]=1;
objet["class"][1]="../ElecIXFInterfaces/class_CATEwrWire_19355.htm";
objet["enum"]["CATElecDevice"]=0;
objet["enum"][0]="../ElecIXFInterfaces/enum_CATElecDevice_22023.htm";
objet["interface"]["CATIElbUipDevices"]=0;
objet["interface"][0]="../ElecIXFInterfaces/interface_CATIElbUipDevices_30990.htm";
objet["interface"]["CATIEleUipSystems"]=1;
objet["interface"][1]="../ElecIXFInterfaces/interface_CATIEleUipSystems_31633.htm";
objet["interface"]["CATIEwrUipWires"]=2;
objet["interface"][2]="../ElecIXFInterfaces/interface_CATIEwrUipWires_28144.htm";
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