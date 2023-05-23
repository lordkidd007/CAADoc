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
 objet["class"]["CATStSettingCBManager"]=0;
objet["class"][0]="../CATFreeStyleUseItf/class_CATStSettingCBManager_37062.htm";
objet["define"]["CATSuppSelAgFeatureSupport"]=0;
objet["define"][0]="../CATFreeStyleUseItf/define_CATSuppSelAgFeatureSupport_51105.htm";
objet["define"]["CATSuppSelAgGeometricSupport"]=1;
objet["define"][1]="../CATFreeStyleUseItf/define_CATSuppSelAgGeometricSupport_56725.htm";
objet["define"]["CATSuppSelAgNoSupportInNoShow"]=2;
objet["define"][2]="../CATFreeStyleUseItf/define_CATSuppSelAgNoSupportInNoShow_58299.htm";
objet["define"]["CATSuppSelAgShapeBodyMode"]=3;
objet["define"][3]="../CATFreeStyleUseItf/define_CATSuppSelAgShapeBodyMode_46529.htm";
objet["define"]["CATSuppSelAgSubElementSupport"]=4;
objet["define"][4]="../CATFreeStyleUseItf/define_CATSuppSelAgSubElementSupport_59407.htm";
objet["define"]["CATSuppSelAgWithExplicitSelection"]=5;
objet["define"][5]="../CATFreeStyleUseItf/define_CATSuppSelAgWithExplicitSelection_71565.htm";
objet["enum"]["CATElemAndSuppAcquType"]=0;
objet["enum"][0]="../CATFreeStyleUseItf/enum_CATElemAndSuppAcquType_39631.htm";
objet["enum"]["CATFSSCrvDiscretizationQuality"]=1;
objet["enum"][1]="../CATFreeStyleUseItf/enum_CATFSSCrvDiscretizationQuality_62220.htm";
objet["enum"]["CATFSSCrvDiscretizationType"]=2;
objet["enum"][2]="../CATFreeStyleUseItf/enum_CATFSSCrvDiscretizationType_52986.htm";
objet["enum"]["CATFSSCrvDisplayType"]=3;
objet["enum"][3]="../CATFreeStyleUseItf/enum_CATFSSCrvDisplayType_35602.htm";
objet["enum"]["CATFSSCrvValuesDisplay"]=4;
objet["enum"][4]="../CATFreeStyleUseItf/enum_CATFSSCrvValuesDisplay_39881.htm";
objet["enum"]["CATStDashboardMultiEvt"]=5;
objet["enum"][5]="../CATFreeStyleUseItf/enum_CATStDashboardMultiEvt_39846.htm";
objet["enum"]["FSSnapping"]=6;
objet["enum"][6]="../CATFreeStyleUseItf/enum_FSSnapping_20825.htm";
objet["enum"]["FSToolbarStyle"]=7;
objet["enum"][7]="../CATFreeStyleUseItf/enum_FSToolbarStyle_25678.htm";
objet["function"]["CATCreateStAnalysisFactory"]=0;
objet["function"][0]="../CATFreeStyleUseItf/function_CATCreateStAnalysisFactory_99220.htm";
objet["function"]["CATCreateStConnectionMeasure"]=1;
objet["function"][1]="../CATFreeStyleUseItf/function_CATCreateStConnectionMeasure_219109.htm";
objet["function"]["CATCreateStInteractiveFactory"]=2;
objet["function"][2]="../CATFreeStyleUseItf/function_CATCreateStInteractiveFactory_116298.htm";
objet["function"]["CATCreateTopStNetSurfaceOp"]=3;
objet["function"][3]="../CATFreeStyleUseItf/function_CATCreateTopStNetSurfaceOp_179757.htm";
objet["interface"]["CATIFreeStyleWorkshopAddin"]=0;
objet["interface"][0]="../CATFreeStyleUseItf/interface_CATIFreeStyleWorkshopAddin_52458.htm";
objet["interface"]["CATIStAgentExtraFilter"]=1;
objet["interface"][1]="../CATFreeStyleUseItf/interface_CATIStAgentExtraFilter_42765.htm";
objet["interface"]["CATIStAnalysisFactory"]=2;
objet["interface"][2]="../CATFreeStyleUseItf/interface_CATIStAnalysisFactory_41184.htm";
objet["interface"]["CATIStConnectionMeasure"]=3;
objet["interface"][3]="../CATFreeStyleUseItf/interface_CATIStConnectionMeasure_45416.htm";
objet["interface"]["CATIStCurvaturePorcupineAnalysis"]=4;
objet["interface"][4]="../CATFreeStyleUseItf/interface_CATIStCurvaturePorcupineAnalysis_71505.htm";
objet["interface"]["CATIStDistanceAnalysis"]=5;
objet["interface"][5]="../CATFreeStyleUseItf/interface_CATIStDistanceAnalysis_43085.htm";
objet["interface"]["CATIStEditableFeature"]=6;
objet["interface"][6]="../CATFreeStyleUseItf/interface_CATIStEditableFeature_40437.htm";
objet["interface"]["CATIStFeatureAndSupportAgent"]=7;
objet["interface"][7]="../CATFreeStyleUseItf/interface_CATIStFeatureAndSupportAgent_58050.htm";
objet["interface"]["CATIStFreeStyleSettings"]=8;
objet["interface"][8]="../CATFreeStyleUseItf/interface_CATIStFreeStyleSettings_45591.htm";
objet["interface"]["CATIStInteractiveFactory"]=9;
objet["interface"][9]="../CATFreeStyleUseItf/interface_CATIStInteractiveFactory_48034.htm";
objet["interface"]["CATIStInteractor"]=10;
objet["interface"][10]="../CATFreeStyleUseItf/interface_CATIStInteractor_31683.htm";
objet["interface"]["CATIStNetSurfaceOp"]=11;
objet["interface"][11]="../CATFreeStyleUseItf/interface_CATIStNetSurfaceOp_34299.htm";
objet["interface"]["CATIStRefresh"]=12;
objet["interface"][12]="../CATFreeStyleUseItf/interface_CATIStRefresh_27035.htm";
objet["interface"]["CATIStSupportSelection"]=13;
objet["interface"][13]="../CATFreeStyleUseItf/interface_CATIStSupportSelection_43473.htm";
objet["typedef"]["CATEltAndSuppAgentBehavior"]=0;
objet["typedef"][0]="../CATFreeStyleUseItf/typedef_CATEltAndSuppAgentBehavior_50766.htm";
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