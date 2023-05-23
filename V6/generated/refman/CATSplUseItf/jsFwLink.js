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
 objet["interface"]["CATISsmUseCuttingFamily"]=0;
objet["interface"][0]="../CATSplUseItf/interface_CATISsmUseCuttingFamily_36325.htm";
objet["interface"]["CATISsmUseCuttingInput"]=1;
objet["interface"][1]="../CATSplUseItf/interface_CATISsmUseCuttingInput_34413.htm";
objet["interface"]["CATISsmUseDesignSpace"]=2;
objet["interface"][2]="../CATSplUseItf/interface_CATISsmUseDesignSpace_31170.htm";
objet["interface"]["CATISsmUseMSLimitMngt"]=3;
objet["interface"][3]="../CATSplUseItf/interface_CATISsmUseMSLimitMngt_31146.htm";
objet["interface"]["CATISsmUseManufacturingSpace"]=4;
objet["interface"][4]="../CATSplUseItf/interface_CATISsmUseManufacturingSpace_49051.htm";
objet["interface"]["CATISsmUseMoldedSurface"]=5;
objet["interface"][5]="../CATSplUseItf/interface_CATISsmUseMoldedSurface_35712.htm";
objet["interface"]["CATISsmUseSpace"]=6;
objet["interface"][6]="../CATSplUseItf/interface_CATISsmUseSpace_20590.htm";
objet["interface"]["CATISsmUseSpaceConceptNode"]=7;
objet["interface"][7]="../CATSplUseItf/interface_CATISsmUseSpaceConceptNode_42812.htm";
objet["interface"]["CATISsmUseSpaceConceptRoot"]=8;
objet["interface"][8]="../CATSplUseItf/interface_CATISsmUseSpaceConceptRoot_43539.htm";
objet["interface"]["CATISsmUseSpaceFolder"]=9;
objet["interface"][9]="../CATSplUseItf/interface_CATISsmUseSpaceFolder_31251.htm";
objet["interface"]["CATISsmUseSpaceInput"]=10;
objet["interface"][10]="../CATSplUseItf/interface_CATISsmUseSpaceInput_29659.htm";
objet["interface"]["CATISsmUseSpaceManager"]=11;
objet["interface"][11]="../CATSplUseItf/interface_CATISsmUseSpaceManager_33284.htm";
objet["interface"]["CATISsmUseSpaceRoot"]=12;
objet["interface"][12]="../CATSplUseItf/interface_CATISsmUseSpaceRoot_27571.htm";
objet["interface"]["CATISsmUseSpaceSystem"]=13;
objet["interface"][13]="../CATSplUseItf/interface_CATISsmUseSpaceSystem_31913.htm";
objet["interface"]["CATISsmUseSsmTool"]=14;
objet["interface"][14]="../CATSplUseItf/interface_CATISsmUseSsmTool_24105.htm";
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