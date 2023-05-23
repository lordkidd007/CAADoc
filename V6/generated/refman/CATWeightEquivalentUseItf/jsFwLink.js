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
 objet["interface"]["CATIComputedEquivalentUse"]=0;
objet["interface"][0]="../CATWeightEquivalentUseItf/interface_CATIComputedEquivalentUse_65821.htm";
objet["interface"]["CATIDeclaredEquivalentUse"]=1;
objet["interface"][1]="../CATWeightEquivalentUseItf/interface_CATIDeclaredEquivalentUse_65509.htm";
objet["interface"]["CATIDeclaredWeightEquivalentUse"]=2;
objet["interface"][2]="../CATWeightEquivalentUseItf/interface_CATIDeclaredWeightEquivalentUse_82647.htm";
objet["interface"]["CATIEquivalentProxyBSMUse"]=3;
objet["interface"][3]="../CATWeightEquivalentUseItf/interface_CATIEquivalentProxyBSMUse_64393.htm";
objet["interface"]["CATIGenericEquivalentUse"]=4;
objet["interface"][4]="../CATWeightEquivalentUseItf/interface_CATIGenericEquivalentUse_63118.htm";
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