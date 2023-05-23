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
 objet["class"]["CATPrintGradient"]=0;
objet["class"][0]="../Multimedia2DRendering/class_CATPrintGradient_34394.htm";
objet["class"]["CATPrintGradientLinear"]=1;
objet["class"][1]="../Multimedia2DRendering/class_CATPrintGradientLinear_45628.htm";
objet["class"]["CATPrintGradientRadial"]=2;
objet["class"][2]="../Multimedia2DRendering/class_CATPrintGradientRadial_45358.htm";
objet["class"]["CATPrintGradientStop"]=3;
objet["class"][3]="../Multimedia2DRendering/class_CATPrintGradientStop_41820.htm";
objet["enum"]["CAT2DGClipOperator"]=0;
objet["enum"][0]="../Multimedia2DRendering/enum_CAT2DGClipOperator_37059.htm";
objet["enum"]["CAT2DGTextAlign"]=1;
objet["enum"][1]="../Multimedia2DRendering/enum_CAT2DGTextAlign_31717.htm";
objet["enum"]["CAT2DGTextHinting"]=2;
objet["enum"][2]="../Multimedia2DRendering/enum_CAT2DGTextHinting_35211.htm";
objet["enum"]["CAT2DGTextStyleFlags"]=3;
objet["enum"][3]="../Multimedia2DRendering/enum_CAT2DGTextStyleFlags_40582.htm";
objet["enum"]["CAT2DGTextWeight"]=4;
objet["enum"][4]="../Multimedia2DRendering/enum_CAT2DGTextWeight_33516.htm";
objet["enum"]["CAT2DGTransferMode"]=5;
objet["enum"][5]="../Multimedia2DRendering/enum_CAT2DGTransferMode_36619.htm";
objet["enum"]["CATPrintEdgeMode"]=6;
objet["enum"][6]="../Multimedia2DRendering/enum_CATPrintEdgeMode_33316.htm";
objet["enum"]["CATPrintFillMode"]=7;
objet["enum"][7]="../Multimedia2DRendering/enum_CATPrintFillMode_33496.htm";
objet["enum"]["CATPrintFillRule"]=8;
objet["enum"][8]="../Multimedia2DRendering/enum_CATPrintFillRule_33746.htm";
objet["enum"]["CATPrintLineAttribute"]=9;
objet["enum"][9]="../Multimedia2DRendering/enum_CATPrintLineAttribute_43503.htm";
objet["enum"]["CATPrintMarkerAttribute"]=10;
objet["enum"][10]="../Multimedia2DRendering/enum_CATPrintMarkerAttribute_48135.htm";
objet["enum"]["CATPrintTextAttribute"]=11;
objet["enum"][11]="../Multimedia2DRendering/enum_CATPrintTextAttribute_43796.htm";
objet["function"]["height"]=0;
objet["function"][0]="../Multimedia2DRendering/_function_height.htm";
objet["struct"]["CAT2DGRect"]=0;
objet["struct"][0]="../Multimedia2DRendering/struct_CAT2DGRect_26560.htm";
objet["typedef"]["CAT2DGBlendingMode"]=0;
objet["typedef"][0]="../Multimedia2DRendering/typedef_CAT2DGBlendingMode_37843.htm";
objet["typedef"]["CATListOfGradientStops"]=1;
objet["typedef"][1]="../Multimedia2DRendering/typedef_CATListOfGradientStops_47124.htm";
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