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
 objet["collection"]["CATIPrdObject_var"]=0;
objet["collection"][0]="../ProductStructureInterfaces/class_CATIPrdObject_var_49287.htm";
objet["function"]["CATPrdGetOccurrenceMngt"]=0;
objet["function"][0]="../ProductStructureInterfaces/function_CATPrdGetOccurrenceMngt_109359.htm";
objet["interface"]["CATICtxMenuProvider"]=0;
objet["interface"][0]="../ProductStructureInterfaces/interface_CATICtxMenuProvider_55798.htm";
objet["interface"]["CATIPLMProducts"]=1;
objet["interface"][1]="../ProductStructureInterfaces/interface_CATIPLMProducts_48662.htm";
objet["interface"]["CATIPLMRepInstances"]=2;
objet["interface"][2]="../ProductStructureInterfaces/interface_CATIPLMRepInstances_55195.htm";
objet["interface"]["CATIPLMRepresentations"]=3;
objet["interface"][3]="../ProductStructureInterfaces/interface_CATIPLMRepresentations_62350.htm";
objet["interface"]["CATIPrdFactory"]=4;
objet["interface"][4]="../ProductStructureInterfaces/interface_CATIPrdFactory_47405.htm";
objet["interface"]["CATIPrdIterator"]=5;
objet["interface"][5]="../ProductStructureInterfaces/interface_CATIPrdIterator_48912.htm";
objet["interface"]["CATIPrdObject"]=6;
objet["interface"][6]="../ProductStructureInterfaces/interface_CATIPrdObject_45708.htm";
objet["interface"]["CATIPrdOccurrenceMngt"]=7;
objet["interface"][7]="../ProductStructureInterfaces/interface_CATIPrdOccurrenceMngt_59474.htm";
objet["interface"]["CATIPrdRepInstance"]=8;
objet["interface"][8]="../ProductStructureInterfaces/interface_CATIPrdRepInstance_53453.htm";
objet["interface"]["CATIPrdRepositionable"]=9;
objet["interface"][9]="../ProductStructureInterfaces/interface_CATIPrdRepositionable_59839.htm";
objet["interface"]["CATIPrdRepositionableDefinition"]=10;
objet["interface"][10]="../ProductStructureInterfaces/interface_CATIPrdRepositionableDefinition_86426.htm";
objet["interface"]["CATIPrdRepositioned"]=11;
objet["interface"][11]="../ProductStructureInterfaces/interface_CATIPrdRepositioned_55871.htm";
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