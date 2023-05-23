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
 objet["class"]["CATAnimationValueUtils"]=0;
objet["class"][0]="../SIMAnimationStandardItf/class_CATAnimationValueUtils_51071.htm";
objet["enum"]["PropertyType"]=0;
objet["enum"][0]="../SIMAnimationStandardItf/enum_PropertyType_33618.htm";
objet["interface"]["CATAnimationFactory"]=0;
objet["interface"][0]="../SIMAnimationStandardItf/interface_CATAnimationFactory_47498.htm";
objet["interface"]["CATIAnimationFactory"]=1;
objet["interface"][1]="../SIMAnimationStandardItf/interface_CATIAnimationFactory_49373.htm";
objet["interface"]["CATIAnimationValue"]=2;
objet["interface"][2]="../SIMAnimationStandardItf/interface_CATIAnimationValue_45211.htm";
objet["interface"]["CATIAnimationValues"]=3;
objet["interface"][3]="../SIMAnimationStandardItf/interface_CATIAnimationValues_47281.htm";
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