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
 objet["class"]["CATPrdFactory"]=0;
objet["class"][0]="../ProductStructureUseItf/class_CATPrdFactory_33382.htm";
objet["interface"]["CATIPrd3DPartReferenceFactory"]=0;
objet["interface"][0]="../ProductStructureUseItf/interface_CATIPrd3DPartReferenceFactory_68940.htm";
objet["interface"]["CATIPrdAggregatedRepresentations"]=1;
objet["interface"][1]="../ProductStructureUseItf/interface_CATIPrdAggregatedRepresentations_80236.htm";
objet["interface"]["CATIPrdInstanceFixityManagement"]=2;
objet["interface"][2]="../ProductStructureUseItf/interface_CATIPrdInstanceFixityManagement_75940.htm";
objet["interface"]["CATIPrdPublication"]=3;
objet["interface"][3]="../ProductStructureUseItf/interface_CATIPrdPublication_43638.htm";
objet["interface"]["CATIPrdPublications"]=4;
objet["interface"][4]="../ProductStructureUseItf/interface_CATIPrdPublications_45708.htm";
objet["interface"]["CATIPrdReferenceFactory"]=5;
objet["interface"][5]="../ProductStructureUseItf/interface_CATIPrdReferenceFactory_53869.htm";
objet["interface"]["CATIPrdRepresentationReferenceFactory"]=6;
objet["interface"][6]="../ProductStructureUseItf/interface_CATIPrdRepresentationReferenceFactory_97152.htm";
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