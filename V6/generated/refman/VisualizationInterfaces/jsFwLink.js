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
 objet["class"]["CATColorPathElement"]=0;
objet["class"][0]="../VisualizationInterfaces/class_CATColorPathElement_45263.htm";
objet["notification"]["CATCreate"]=0;
objet["notification"][0]="../VisualizationInterfaces/class_CATCreate_31306.htm";
DSCharacteristic["CATCreate"]="notification";
objet["notification"]["CATDelete"]=1;
objet["notification"][1]="../VisualizationInterfaces/class_CATDelete_31316.htm";
DSCharacteristic["CATDelete"]="notification";
objet["class"]["CATGraphicElementIntersection"]=1;
objet["class"][1]="../VisualizationInterfaces/class_CATGraphicElementIntersection_70429.htm";
objet["collection"]["CATLISTP(CATPathElement)"]=0;
objet["collection"][0]="../VisualizationInterfaces/class_CATLISTP(CATPathElement)_52497.htm";
objet["notification"]["CATModelEntityNotification"]=2;
objet["notification"][2]="../VisualizationInterfaces/class_CATModelEntityNotification_61928.htm";
DSCharacteristic["CATModelEntityNotification"]="notification";
objet["notification"]["CATModelNotification"]=3;
objet["notification"][3]="../VisualizationInterfaces/class_CATModelNotification_47576.htm";
DSCharacteristic["CATModelNotification"]="notification";
objet["notification"]["CATModify"]=4;
objet["notification"][4]="../VisualizationInterfaces/class_CATModify_31429.htm";
DSCharacteristic["CATModify"]="notification";
objet["notification"]["CATModifyVisProperties"]=5;
objet["notification"][5]="../VisualizationInterfaces/class_CATModifyVisProperties_52266.htm";
DSCharacteristic["CATModifyVisProperties"]="notification";
objet["class"]["CATNotificationDispatcher"]=2;
objet["class"][2]="../VisualizationInterfaces/class_CATNotificationDispatcher_59024.htm";
objet["class"]["CATPathElement"]=3;
objet["class"][3]="../VisualizationInterfaces/class_CATPathElement_37059.htm";
objet["class"]["CATVisPropertiesPrivateValues"]=4;
objet["class"][4]="../VisualizationInterfaces/class_CATVisPropertiesPrivateValues_70472.htm";
objet["class"]["CATVisPropertiesValues"]=5;
objet["class"][5]="../VisualizationInterfaces/class_CATVisPropertiesValues_52156.htm";
objet["enum"]["CATCameraType"]=0;
objet["enum"][0]="../VisualizationInterfaces/enum_CATCameraType_35230.htm";
objet["enum"]["CATPickAttribut"]=1;
objet["enum"][1]="../VisualizationInterfaces/enum_CATPickAttribut_38346.htm";
objet["enum"]["CATPickingStyle"]=2;
objet["enum"][2]="../VisualizationInterfaces/enum_CATPickingStyle_38221.htm";
objet["enum"]["CATShowAttribut"]=3;
objet["enum"][3]="../VisualizationInterfaces/enum_CATShowAttribut_38483.htm";
objet["enum"]["CATViewerPlacement"]=4;
objet["enum"][4]="../VisualizationInterfaces/enum_CATViewerPlacement_43163.htm";
objet["enum"]["CATVisInteractiveContext"]=5;
objet["enum"][5]="../VisualizationInterfaces/enum_CATVisInteractiveContext_56539.htm";
objet["enum"]["CATVisPropertyType"]=6;
objet["enum"][6]="../VisualizationInterfaces/enum_CATVisPropertyType_43662.htm";
objet["interface"]["CATI2DCamera"]=0;
objet["interface"][0]="../VisualizationInterfaces/interface_CATI2DCamera_36357.htm";
objet["interface"]["CATI2DGeoVisu"]=1;
objet["interface"][1]="../VisualizationInterfaces/interface_CATI2DGeoVisu_37802.htm";
objet["interface"]["CATI3DCamera"]=2;
objet["interface"][2]="../VisualizationInterfaces/interface_CATI3DCamera_36361.htm";
objet["interface"]["CATI3DGeoVisu"]=3;
objet["interface"][3]="../VisualizationInterfaces/interface_CATI3DGeoVisu_37806.htm";
objet["interface"]["CATIBuildPath"]=4;
objet["interface"][4]="../VisualizationInterfaces/interface_CATIBuildPath_37997.htm";
objet["interface"]["CATICamera"]=5;
objet["interface"][5]="../VisualizationInterfaces/interface_CATICamera_34647.htm";
objet["interface"]["CATIModelEvents"]=6;
objet["interface"][6]="../VisualizationInterfaces/interface_CATIModelEvents_41132.htm";
objet["interface"]["CATIReframeCamera"]=7;
objet["interface"][7]="../VisualizationInterfaces/interface_CATIReframeCamera_43752.htm";
objet["interface"]["CATIVisProperties"]=8;
objet["interface"][8]="../VisualizationInterfaces/interface_CATIVisProperties_44710.htm";
objet["interface"]["CATIVisPropertiesAbstract"]=9;
objet["interface"][9]="../VisualizationInterfaces/interface_CATIVisPropertiesAbstract_61673.htm";
objet["interface"]["CATIVisu"]=10;
objet["interface"][10]="../VisualizationInterfaces/interface_CATIVisu_33126.htm";
objet["typedef"]["CATViewModeType"]=0;
objet["typedef"][0]="../VisualizationInterfaces/typedef_CATViewModeType_39480.htm";
objet["typedef"]["CATViewerStyle"]=1;
objet["typedef"][1]="../VisualizationInterfaces/typedef_CATViewerStyle_38363.htm";
objet["typedef"]["CATVisGeomType"]=2;
objet["typedef"][2]="../VisualizationInterfaces/typedef_CATVisGeomType_38083.htm";
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