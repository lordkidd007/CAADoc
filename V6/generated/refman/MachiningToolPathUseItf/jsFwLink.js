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
 objet["interface"]["DELIMfgCompoundTraject"]=0;
objet["interface"][0]="../MachiningToolPathUseItf/interface_DELIMfgCompoundTraject_53019.htm";
objet["interface"]["DELIMfgElementaryTraject"]=1;
objet["interface"][1]="../MachiningToolPathUseItf/interface_DELIMfgElementaryTraject_57829.htm";
objet["interface"]["DELIMfgTPCycleLinkingMotion"]=2;
objet["interface"][2]="../MachiningToolPathUseItf/interface_DELIMfgTPCycleLinkingMotion_65009.htm";
objet["interface"]["DELIMfgTPDuplicate"]=3;
objet["interface"][3]="../MachiningToolPathUseItf/interface_DELIMfgTPDuplicate_44447.htm";
objet["interface"]["DELIMfgTPMachiningTime"]=4;
objet["interface"][4]="../MachiningToolPathUseItf/interface_DELIMfgTPMachiningTime_52157.htm";
objet["interface"]["DELIMfgTPModification"]=5;
objet["interface"][5]="../MachiningToolPathUseItf/interface_DELIMfgTPModification_50525.htm";
objet["interface"]["DELIMfgTPMultipleMotion"]=6;
objet["interface"][6]="../MachiningToolPathUseItf/interface_DELIMfgTPMultipleMotion_55332.htm";
objet["interface"]["DELIMfgTPMultipleMotionNurbs"]=7;
objet["interface"][7]="../MachiningToolPathUseItf/interface_DELIMfgTPMultipleMotionNurbs_68437.htm";
objet["interface"]["DELIMfgTPMultipleMotionSynchro"]=8;
objet["interface"][8]="../MachiningToolPathUseItf/interface_DELIMfgTPMultipleMotionSynchro_74688.htm";
objet["interface"]["DELIMfgTPMultipleMotionWithProfileData"]=9;
objet["interface"][9]="../MachiningToolPathUseItf/interface_DELIMfgTPMultipleMotionWithProfileData_100604.htm";
objet["interface"]["DELIMfgTPNurbsDescription"]=10;
objet["interface"][10]="../MachiningToolPathUseItf/interface_DELIMfgTPNurbsDescription_60371.htm";
objet["interface"]["DELIMfgTPRemoveCutterProfileData"]=11;
objet["interface"][11]="../MachiningToolPathUseItf/interface_DELIMfgTPRemoveCutterProfileData_79274.htm";
objet["interface"]["DELIMfgTPReplayResource3DVisu"]=12;
objet["interface"][12]="../MachiningToolPathUseItf/interface_DELIMfgTPReplayResource3DVisu_69258.htm";
objet["interface"]["DELIMfgTPReplaySelectedPosition"]=13;
objet["interface"][13]="../MachiningToolPathUseItf/interface_DELIMfgTPReplaySelectedPosition_77326.htm";
objet["interface"]["DELIMfgTPSaveData"]=14;
objet["interface"][14]="../MachiningToolPathUseItf/interface_DELIMfgTPSaveData_42119.htm";
objet["interface"]["DELIMfgTPSynchro"]=15;
objet["interface"][15]="../MachiningToolPathUseItf/interface_DELIMfgTPSynchro_41326.htm";
objet["interface"]["DELIMfgTPTransformation"]=16;
objet["interface"][16]="../MachiningToolPathUseItf/interface_DELIMfgTPTransformation_55707.htm";
objet["interface"]["DELIMfgTPUnloadData"]=17;
objet["interface"][17]="../MachiningToolPathUseItf/interface_DELIMfgTPUnloadData_45694.htm";
objet["interface"]["DELIMfgToolMotion"]=18;
objet["interface"][18]="../MachiningToolPathUseItf/interface_DELIMfgToolMotion_43267.htm";
objet["interface"]["DELIMfgToolPath"]=19;
objet["interface"][19]="../MachiningToolPathUseItf/interface_DELIMfgToolPath_39693.htm";
objet["interface"]["DELIMfgToolPathConstantFeedrate"]=20;
objet["interface"][20]="../MachiningToolPathUseItf/interface_DELIMfgToolPathConstantFeedrate_76767.htm";
objet["interface"]["DELIMfgToolPathConstantSpindle"]=21;
objet["interface"][21]="../MachiningToolPathUseItf/interface_DELIMfgToolPathConstantSpindle_74155.htm";
objet["interface"]["DELIMfgToolPathConstantToolAxis"]=22;
objet["interface"][22]="../MachiningToolPathUseItf/interface_DELIMfgToolPathConstantToolAxis_77209.htm";
objet["interface"]["DELIMfgToolPathCycle"]=23;
objet["interface"][23]="../MachiningToolPathUseItf/interface_DELIMfgToolPathCycle_48180.htm";
objet["interface"]["DELIMfgToolPathFactory"]=24;
objet["interface"][24]="../MachiningToolPathUseItf/interface_DELIMfgToolPathFactory_52996.htm";
objet["interface"]["DELIMfgToolPathFeedrate"]=25;
objet["interface"][25]="../MachiningToolPathUseItf/interface_DELIMfgToolPathFeedrate_54640.htm";
objet["interface"]["DELIMfgToolPathManagement"]=26;
objet["interface"][26]="../MachiningToolPathUseItf/interface_DELIMfgToolPathManagement_59818.htm";
objet["interface"]["DELIMfgToolPathMotionCommand"]=27;
objet["interface"][27]="../MachiningToolPathUseItf/interface_DELIMfgToolPathMotionCommand_67752.htm";
objet["interface"]["DELIMfgToolPathSpindle"]=28;
objet["interface"][28]="../MachiningToolPathUseItf/interface_DELIMfgToolPathSpindle_52676.htm";
objet["interface"]["DELIMfgToolPathToolAssembly"]=29;
objet["interface"][29]="../MachiningToolPathUseItf/interface_DELIMfgToolPathToolAssembly_65437.htm";
objet["interface"]["DELIMfgToolPathToolAxis"]=30;
objet["interface"][30]="../MachiningToolPathUseItf/interface_DELIMfgToolPathToolAxis_54930.htm";
objet["interface"]["DELIMfgTraject"]=31;
objet["interface"][31]="../MachiningToolPathUseItf/interface_DELIMfgTraject_38370.htm";
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