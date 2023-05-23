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
 objet["class"]["CATGraphicAttributeSet"]=0;
objet["class"][0]="../VisualizationCore/class_CATGraphicAttributeSet_39320.htm";
objet["enum"]["CATSymbolType"]=0;
objet["enum"][0]="../VisualizationCore/enum_CATSymbolType_23081.htm";
objet["enum"]["VisAttributeID"]=1;
objet["enum"][1]="../VisualizationCore/enum_VisAttributeID_23792.htm";
objet["enum"]["VisDataType"]=2;
objet["enum"][2]="../VisualizationCore/enum_VisDataType_20594.htm";
objet["enum"]["VisRenderingModeValue"]=3;
objet["enum"][3]="../VisualizationCore/enum_VisRenderingModeValue_36357.htm";
objet["typedef"]["CATPredefinedColorName"]=0;
objet["typedef"][0]="../VisualizationCore/typedef_CATPredefinedColorName_39645.htm";
objet["typedef"]["VisSize"]=1;
objet["typedef"][1]="../VisualizationCore/typedef_VisSize_18645.htm";
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