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
 objet["class"]["CAT2DViewer"]=0;
objet["class"][0]="../VisualizationController/class_CAT2DViewer_33747.htm";
objet["class"]["CAT3DSimpleSphereRep"]=1;
objet["class"][1]="../VisualizationController/class_CAT3DSimpleSphereRep_47357.htm";
objet["class"]["CAT3DViewer"]=2;
objet["class"][2]="../VisualizationController/class_CAT3DViewer_33750.htm";
objet["notification"]["CATAddElements"]=0;
objet["notification"][0]="../VisualizationController/class_CATAddElements_37718.htm";
DSCharacteristic["CATAddElements"]="notification";
objet["class"]["CATColorPathElementRep"]=3;
objet["class"][3]="../VisualizationController/class_CATColorPathElementRep_51808.htm";
objet["notification"]["CATCsoNotification"]=1;
objet["notification"][1]="../VisualizationController/class_CATCsoNotification_44360.htm";
DSCharacteristic["CATCsoNotification"]="notification";
objet["notification"]["CATEmptyElements"]=2;
objet["notification"][2]="../VisualizationController/class_CATEmptyElements_41027.htm";
DSCharacteristic["CATEmptyElements"]="notification";
objet["class"]["CATExtIBasicVisProperties"]=4;
objet["class"][4]="../VisualizationController/class_CATExtIBasicVisProperties_59636.htm";
objet["class"]["CATExtIModelEvents"]=5;
objet["class"][5]="../VisualizationController/class_CATExtIModelEvents_44024.htm";
objet["class"]["CATExtIVisu"]=6;
objet["class"][6]="../VisualizationController/class_CATExtIVisu_33909.htm";
objet["class"]["CATGraphicPathElement"]=7;
objet["class"][7]="../VisualizationController/class_CATGraphicPathElement_49736.htm";
objet["class"]["CATHSO"]=8;
objet["class"][8]="../VisualizationController/class_CATHSO_29500.htm";
objet["class"]["CATModelForRep2D"]=9;
objet["class"][9]="../VisualizationController/class_CATModelForRep2D_39083.htm";
objet["class"]["CATModelForRep3D"]=10;
objet["class"][10]="../VisualizationController/class_CATModelForRep3D_39097.htm";
objet["class"]["CATNavigation2DViewer"]=11;
objet["class"][11]="../VisualizationController/class_CATNavigation2DViewer_49161.htm";
objet["class"]["CATNavigation3DViewer"]=12;
objet["class"][12]="../VisualizationController/class_CATNavigation3DViewer_49174.htm";
objet["class"]["CATPSO"]=13;
objet["class"][13]="../VisualizationController/class_CATPSO_29524.htm";
objet["class"]["CATPathElementRep"]=14;
objet["class"][14]="../VisualizationController/class_CATPathElementRep_42129.htm";
objet["notification"]["CATRemoveElements"]=3;
objet["notification"][3]="../VisualizationController/class_CATRemoveElements_42605.htm";
DSCharacteristic["CATRemoveElements"]="notification";
objet["class"]["CATRepShortHelp"]=15;
objet["class"][15]="../VisualizationController/class_CATRepShortHelp_39043.htm";
objet["class"]["CATSO"]=16;
objet["class"][16]="../VisualizationController/class_CATSO_29122.htm";
objet["class"]["CATSelector"]=17;
objet["class"][17]="../VisualizationController/class_CATSelector_34116.htm";
objet["class"]["CATViewer"]=18;
objet["class"][18]="../VisualizationController/class_CATViewer_32073.htm";
objet["class"]["CATVisManager"]=19;
objet["class"][19]="../VisualizationController/class_CATVisManager_36213.htm";
objet["notification"]["CATVisViewerFeedbackEvent"]=4;
objet["notification"][4]="../VisualizationController/class_CATVisViewerFeedbackEvent_58697.htm";
DSCharacteristic["CATVisViewerFeedbackEvent"]="notification";
objet["class"]["CATXSO"]=20;
objet["class"][20]="../VisualizationController/class_CATXSO_29548.htm";
objet["define"]["NB_VISU_LINETHICKNESS"]=0;
objet["define"][0]="../VisualizationController/define_NB_VISU_LINETHICKNESS_44958.htm";
objet["enum"]["CATDisplayType"]=0;
objet["enum"][0]="../VisualizationController/enum_CATDisplayType_37441.htm";
objet["enum"]["CATGenerativeAttribute"]=1;
objet["enum"][1]="../VisualizationController/enum_CATGenerativeAttribute_52318.htm";
objet["function"]["CATVisGetCurvedPipeGPFromRep"]=0;
objet["function"][0]="../VisualizationController/function_CATVisGetCurvedPipeGPFromRep_131999.htm";
objet["function"]["CATVisGetCylinderGPFromRep"]=1;
objet["function"][1]="../VisualizationController/function_CATVisGetCylinderGPFromRep_121022.htm";
objet["function"]["sCATGetMMThicknessFromViewer"]=2;
objet["function"][2]="../VisualizationController/function_sCATGetMMThicknessFromViewer_126121.htm";
objet["function"]["sCATGetPixelThicknessFromViewer"]=3;
objet["function"][3]="../VisualizationController/function_sCATGetPixelThicknessFromViewer_129839.htm";
objet["function"]["sCATVisForceDynamicMode"]=4;
objet["function"][4]="../VisualizationController/function_sCATVisForceDynamicMode_88206.htm";
objet["interface"]["CATISelectShow"]=0;
objet["interface"][0]="../VisualizationController/interface_CATISelectShow_40244.htm";
objet["interface"]["CATIVisuFilter"]=1;
objet["interface"][1]="../VisualizationController/interface_CATIVisuFilter_40296.htm";
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