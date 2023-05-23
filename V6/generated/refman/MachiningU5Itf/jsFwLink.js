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
 objet["enum"]["PreDefinedIntegerVariableID"]=0;
objet["enum"][0]="../MachiningU5Itf/enum_PreDefinedIntegerVariableID_43424.htm";
objet["interface"]["DELIManufacturingProgramAddin"]=0;
objet["interface"][0]="../MachiningU5Itf/interface_DELIManufacturingProgramAddin_53823.htm";
objet["interface"]["DELIMfgActInEditorActivity"]=1;
objet["interface"][1]="../MachiningU5Itf/interface_DELIMfgActInEditorActivity_45866.htm";
objet["interface"]["DELIMfgApply"]=2;
objet["interface"][2]="../MachiningU5Itf/interface_DELIMfgApply_18957.htm";
objet["interface"]["DELIMfgComputeToolPathCustom"]=3;
objet["interface"][3]="../MachiningU5Itf/interface_DELIMfgComputeToolPathCustom_51531.htm";
objet["interface"]["DELIMfgCustomParameters"]=4;
objet["interface"][4]="../MachiningU5Itf/interface_DELIMfgCustomParameters_38795.htm";
objet["interface"]["DELIMfgCustomizeCSOFilter"]=5;
objet["interface"][5]="../MachiningU5Itf/interface_DELIMfgCustomizeCSOFilter_42118.htm";
objet["interface"]["DELIMfgCustomizeHighlight"]=6;
objet["interface"][6]="../MachiningU5Itf/interface_DELIMfgCustomizeHighlight_43478.htm";
objet["interface"]["DELIMfgCustomizeRep"]=7;
objet["interface"][7]="../MachiningU5Itf/interface_DELIMfgCustomizeRep_29949.htm";
objet["interface"]["DELIMfgExternalCEManagement"]=8;
objet["interface"][8]="../MachiningU5Itf/interface_DELIMfgExternalCEManagement_47307.htm";
objet["interface"]["DELIMfgExternalPPManagement"]=9;
objet["interface"][9]="../MachiningU5Itf/interface_DELIMfgExternalPPManagement_47678.htm";
objet["interface"]["DELIMfgFeatureAccess"]=10;
objet["interface"][10]="../MachiningU5Itf/interface_DELIMfgFeatureAccess_31437.htm";
objet["interface"]["DELIMfgFeedAndSpeedEditorActivity"]=11;
objet["interface"][11]="../MachiningU5Itf/interface_DELIMfgFeedAndSpeedEditorActivity_66372.htm";
objet["interface"]["DELIMfgFeedAndSpeedTabPage"]=12;
objet["interface"][12]="../MachiningU5Itf/interface_DELIMfgFeedAndSpeedTabPage_43286.htm";
objet["interface"]["DELIMfgGeometryActivity"]=13;
objet["interface"][13]="../MachiningU5Itf/interface_DELIMfgGeometryActivity_39121.htm";
objet["interface"]["DELIMfgGeometryTabPage"]=14;
objet["interface"][14]="../MachiningU5Itf/interface_DELIMfgGeometryTabPage_35202.htm";
objet["interface"]["DELIMfgInsertActivity"]=15;
objet["interface"][15]="../MachiningU5Itf/interface_DELIMfgInsertActivity_34440.htm";
objet["interface"]["DELIMfgMachineEditor"]=16;
objet["interface"][16]="../MachiningU5Itf/interface_DELIMfgMachineEditor_31503.htm";
objet["interface"]["DELIMfgMachiningProcessLog"]=17;
objet["interface"][17]="../MachiningU5Itf/interface_DELIMfgMachiningProcessLog_45407.htm";
objet["interface"]["DELIMfgMacroEditorActivity"]=18;
objet["interface"][18]="../MachiningU5Itf/interface_DELIMfgMacroEditorActivity_46202.htm";
objet["interface"]["DELIMfgMacrosTabPage"]=19;
objet["interface"][19]="../MachiningU5Itf/interface_DELIMfgMacrosTabPage_30756.htm";
objet["interface"]["DELIMfgNavigateProcessTree"]=20;
objet["interface"][20]="../MachiningU5Itf/interface_DELIMfgNavigateProcessTree_45586.htm";
objet["interface"]["DELIMfgReplayToolPathCustom"]=21;
objet["interface"][21]="../MachiningU5Itf/interface_DELIMfgReplayToolPathCustom_48624.htm";
objet["interface"]["DELIMfgStrategyActivity"]=22;
objet["interface"][22]="../MachiningU5Itf/interface_DELIMfgStrategyActivity_39074.htm";
objet["interface"]["DELIMfgTPReplayActivityToolVisu"]=23;
objet["interface"][23]="../MachiningU5Itf/interface_DELIMfgTPReplayActivityToolVisu_60793.htm";
objet["interface"]["DELIMfgToolActivity"]=24;
objet["interface"][24]="../MachiningU5Itf/interface_DELIMfgToolActivity_30223.htm";
objet["interface"]["DELIMfgToolEditorCustom"]=25;
objet["interface"][25]="../MachiningU5Itf/interface_DELIMfgToolEditorCustom_38658.htm";
objet["interface"]["DELIMfgUserDataFeature"]=26;
objet["interface"][26]="../MachiningU5Itf/interface_DELIMfgUserDataFeature_35556.htm";
objet["interface"]["DELIMfgUserEditorActivity"]=27;
objet["interface"][27]="../MachiningU5Itf/interface_DELIMfgUserEditorActivity_43739.htm";
objet["interface"]["DELIMfgWorkbenchMgt"]=28;
objet["interface"][28]="../MachiningU5Itf/interface_DELIMfgWorkbenchMgt_29517.htm";
objet["typedef"]["DELIMfgExternalCEManagementAddDofInstruction"]=0;
objet["typedef"][0]="../MachiningU5Itf/typedef_DELIMfgExternalCEManagementAddDofInstruction_107190.htm";
objet["typedef"]["DELIMfgExternalCEManagementAddIntegerInstruction"]=1;
objet["typedef"][1]="../MachiningU5Itf/typedef_DELIMfgExternalCEManagementAddIntegerInstruction_126975.htm";
objet["typedef"]["DELIMfgExternalCEManagementAddUserVariableInstruction"]=2;
objet["typedef"][2]="../MachiningU5Itf/typedef_DELIMfgExternalCEManagementAddUserVariableInstruction_152505.htm";
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