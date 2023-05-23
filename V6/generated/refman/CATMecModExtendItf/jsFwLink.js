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
 objet["class"]["CATExtIVisuChildren"]=0;
objet["class"][0]="../CATMecModExtendItf/class_CATExtIVisuChildren_33801.htm";
objet["class"]["CATIniInputDescriptionAdaptor"]=1;
objet["class"][1]="../CATMecModExtendItf/class_CATIniInputDescriptionAdaptor_58878.htm";
objet["class"]["CATMf3DBehaviorAdapter"]=2;
objet["class"][2]="../CATMecModExtendItf/class_CATMf3DBehaviorAdapter_39499.htm";
objet["class"]["CATMmrReplaceAdapter"]=3;
objet["class"][3]="../CATMecModExtendItf/class_CATMmrReplaceAdapter_35589.htm";
objet["class"]["CATMmrShapeFeaturePropertiesAdapter"]=4;
objet["class"][4]="../CATMecModExtendItf/class_CATMmrShapeFeaturePropertiesAdapter_78171.htm";
objet["class"]["CATMmrUseSolidInsertionAdapt"]=5;
objet["class"][5]="../CATMecModExtendItf/class_CATMmrUseSolidInsertionAdapt_55231.htm";
objet["interface"]["CATIBuildShape"]=0;
objet["interface"][0]="../CATMecModExtendItf/interface_CATIBuildShape_27918.htm";
objet["interface"]["CATIMfResultManagement"]=1;
objet["interface"][1]="../CATMecModExtendItf/interface_CATIMfResultManagement_42780.htm";
objet["interface"]["CATIMmiAlgoConfigServices"]=2;
objet["interface"][2]="../CATMecModExtendItf/interface_CATIMmiAlgoConfigServices_49582.htm";
objet["interface"]["CATIMmiAutoServices"]=3;
objet["interface"][3]="../CATMecModExtendItf/interface_CATIMmiAutoServices_36605.htm";
objet["interface"]["CATIMmiErrUpdate"]=4;
objet["interface"][4]="../CATMecModExtendItf/interface_CATIMmiErrUpdate_30958.htm";
objet["interface"]["CATIMmiFeatureAttributes"]=5;
objet["interface"][5]="../CATMecModExtendItf/interface_CATIMmiFeatureAttributes_47993.htm";
objet["interface"]["CATIMmiMechanicalCCP"]=6;
objet["interface"][6]="../CATMecModExtendItf/interface_CATIMmiMechanicalCCP_36319.htm";
objet["interface"]["CATIMmiMechanicalImportApplicative"]=7;
objet["interface"][7]="../CATMecModExtendItf/interface_CATIMmiMechanicalImportApplicative_77006.htm";
objet["interface"]["CATIMmiMechanicalSet"]=8;
objet["interface"][8]="../CATMecModExtendItf/interface_CATIMmiMechanicalSet_37887.htm";
objet["interface"]["CATIMmiMechanicalSetServices"]=9;
objet["interface"][9]="../CATMecModExtendItf/interface_CATIMmiMechanicalSetServices_57616.htm";
objet["interface"]["CATIMmiProcReport"]=10;
objet["interface"][10]="../CATMecModExtendItf/interface_CATIMmiProcReport_33006.htm";
objet["interface"]["CATIMmiUpdateError"]=11;
objet["interface"][11]="../CATMecModExtendItf/interface_CATIMmiUpdateError_34621.htm";
objet["interface"]["CATIReplacable"]=12;
objet["interface"][12]="../CATMecModExtendItf/interface_CATIReplacable_27957.htm";
objet["interface"]["CATIReplaceUI"]=13;
objet["interface"][13]="../CATMecModExtendItf/interface_CATIReplaceUI_26121.htm";
objet["interface"]["CATIVisuChildren"]=14;
objet["interface"][14]="../CATMecModExtendItf/interface_CATIVisuChildren_31206.htm";
objet["interface"]["CATMmiExtendServicesFactory"]=15;
objet["interface"][15]="../CATMecModExtendItf/interface_CATMmiExtendServicesFactory_55620.htm";
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