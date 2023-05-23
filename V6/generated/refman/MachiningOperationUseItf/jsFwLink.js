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
 objet["interface"]["DELIMfg5AxisSpiralMilling"]=0;
objet["interface"][0]="../MachiningOperationUseItf/interface_DELIMfg5AxisSpiralMilling_62380.htm";
objet["interface"]["DELIMfgAxialOperation"]=1;
objet["interface"][1]="../MachiningOperationUseItf/interface_DELIMfgAxialOperation_53722.htm";
objet["interface"]["DELIMfgAxialOperationCheckFaces"]=2;
objet["interface"][2]="../MachiningOperationUseItf/interface_DELIMfgAxialOperationCheckFaces_78381.htm";
objet["interface"]["DELIMfgAxialToolPathGeneratorBase"]=3;
objet["interface"][3]="../MachiningOperationUseItf/interface_DELIMfgAxialToolPathGeneratorBase_85360.htm";
objet["interface"]["DELIMfgLatheLocalPlaneElement"]=4;
objet["interface"][4]="../MachiningOperationUseItf/interface_DELIMfgLatheLocalPlaneElement_72843.htm";
objet["interface"]["DELIMfgMachinableAreaMngt"]=5;
objet["interface"][5]="../MachiningOperationUseItf/interface_DELIMfgMachinableAreaMngt_61749.htm";
objet["interface"]["DELIMfgMachinableAreaSites"]=6;
objet["interface"][6]="../MachiningOperationUseItf/interface_DELIMfgMachinableAreaSites_64579.htm";
objet["interface"]["DELIMfgMachinableFeatureMngt"]=7;
objet["interface"][7]="../MachiningOperationUseItf/interface_DELIMfgMachinableFeatureMngt_70410.htm";
objet["interface"]["DELIMfgMachinableGeomMngt"]=8;
objet["interface"][8]="../MachiningOperationUseItf/interface_DELIMfgMachinableGeomMngt_62047.htm";
objet["interface"]["DELIMfgMultiAxisContourDriven"]=9;
objet["interface"][9]="../MachiningOperationUseItf/interface_DELIMfgMultiAxisContourDriven_74378.htm";
objet["interface"]["DELIMfgMultiAxisCurveMachining"]=10;
objet["interface"][10]="../MachiningOperationUseItf/interface_DELIMfgMultiAxisCurveMachining_76536.htm";
objet["interface"]["DELIMfgMultiAxisFlankContouring"]=11;
objet["interface"][11]="../MachiningOperationUseItf/interface_DELIMfgMultiAxisFlankContouring_80460.htm";
objet["interface"]["DELIMfgMultiAxisIsoparametricMachining"]=12;
objet["interface"][12]="../MachiningOperationUseItf/interface_DELIMfgMultiAxisIsoparametricMachining_104560.htm";
objet["interface"]["DELIMfgMultiAxisSweeping"]=13;
objet["interface"][13]="../MachiningOperationUseItf/interface_DELIMfgMultiAxisSweeping_60572.htm";
objet["interface"]["DELIMfgPocketingStartingPoint"]=14;
objet["interface"][14]="../MachiningOperationUseItf/interface_DELIMfgPocketingStartingPoint_74484.htm";
objet["interface"]["DELIMfgPrismMachiningDirectionMgt"]=15;
objet["interface"][15]="../MachiningOperationUseItf/interface_DELIMfgPrismMachiningDirectionMgt_86063.htm";
objet["interface"]["DELIMfgProfileContouringGuidingCurves"]=16;
objet["interface"][16]="../MachiningOperationUseItf/interface_DELIMfgProfileContouringGuidingCurves_101587.htm";
objet["interface"]["DELIMfgProfileContouringPartDirection"]=17;
objet["interface"][17]="../MachiningOperationUseItf/interface_DELIMfgProfileContouringPartDirection_101390.htm";
objet["interface"]["DELIMfgProfileContouringRelimitingElement"]=18;
objet["interface"][18]="../MachiningOperationUseItf/interface_DELIMfgProfileContouringRelimitingElement_117488.htm";
objet["interface"]["DELIMfgSeqMotionFactory"]=19;
objet["interface"][19]="../MachiningOperationUseItf/interface_DELIMfgSeqMotionFactory_58342.htm";
objet["interface"]["DELIMfgSeqMotionParameters"]=20;
objet["interface"][20]="../MachiningOperationUseItf/interface_DELIMfgSeqMotionParameters_65922.htm";
objet["interface"]["DELISmgFactory"]=21;
objet["interface"][21]="../MachiningOperationUseItf/interface_DELISmgFactory_41491.htm";
objet["interface"]["DELISmgMachiningAreaChecks"]=22;
objet["interface"][22]="../MachiningOperationUseItf/interface_DELISmgMachiningAreaChecks_64288.htm";
objet["interface"]["DELISmgMachiningAreaGuidingCurves"]=23;
objet["interface"][23]="../MachiningOperationUseItf/interface_DELISmgMachiningAreaGuidingCurves_85999.htm";
objet["interface"]["DELISmgMachiningAreaParts"]=24;
objet["interface"][24]="../MachiningOperationUseItf/interface_DELISmgMachiningAreaParts_62395.htm";
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