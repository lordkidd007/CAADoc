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
 objet["collection"]["CATLISTV(CATIMmiMechanicalFeature_var)"]=0;
objet["collection"][0]="../CATMecModLiveUseItf/class_CATLISTV(CATIMmiMechanicalFeature_var)_85346.htm";
objet["enum"]["CATMfBRepAccessElementType"]=0;
objet["enum"][0]="../CATMecModLiveUseItf/enum_CATMfBRepAccessElementType_50642.htm";
objet["enum"]["CATMfBRepBuildError"]=1;
objet["enum"][1]="../CATMecModLiveUseItf/enum_CATMfBRepBuildError_34774.htm";
objet["enum"]["CATMfBRepBuildType"]=2;
objet["enum"][2]="../CATMecModLiveUseItf/enum_CATMfBRepBuildType_32835.htm";
objet["enum"]["CATMfBRepDecodeType"]=3;
objet["enum"][3]="../CATMecModLiveUseItf/enum_CATMfBRepDecodeType_34495.htm";
objet["enum"]["CATMfBRepSelectType"]=4;
objet["enum"][4]="../CATMecModLiveUseItf/enum_CATMfBRepSelectType_34806.htm";
objet["enum"]["CATMfBRepSupport"]=5;
objet["enum"][5]="../CATMecModLiveUseItf/enum_CATMfBRepSupport_30092.htm";
objet["enum"]["CATMfBRepSupportType"]=6;
objet["enum"][6]="../CATMecModLiveUseItf/enum_CATMfBRepSupportType_37428.htm";
objet["enum"]["CATMfBRepType"]=7;
objet["enum"][7]="../CATMecModLiveUseItf/enum_CATMfBRepType_25230.htm";
objet["enum"]["CATMfBRepUpdateSupport"]=8;
objet["enum"][8]="../CATMecModLiveUseItf/enum_CATMfBRepUpdateSupport_41753.htm";
objet["enum"]["CATMfConnexityType"]=9;
objet["enum"][9]="../CATMecModLiveUseItf/enum_CATMfConnexityType_33775.htm";
objet["enum"]["CATMfNodeReportType"]=10;
objet["enum"][10]="../CATMecModLiveUseItf/enum_CATMfNodeReportType_35295.htm";
objet["enum"]["CATMfSharpnessType"]=11;
objet["enum"][11]="../CATMecModLiveUseItf/enum_CATMfSharpnessType_33619.htm";
objet["enum"]["CATMfTypeNamingReference"]=12;
objet["enum"][12]="../CATMecModLiveUseItf/enum_CATMfTypeNamingReference_45531.htm";
objet["enum"]["CATMmiDimension"]=13;
objet["enum"][13]="../CATMecModLiveUseItf/enum_CATMmiDimension_28480.htm";
objet["enum"]["CATMmiDimensionType"]=14;
objet["enum"][14]="../CATMecModLiveUseItf/enum_CATMmiDimensionType_35398.htm";
objet["enum"]["CATMmrFondType"]=15;
objet["enum"][15]="../CATMecModLiveUseItf/enum_CATMmrFondType_26798.htm";
objet["enum"]["CATMmrLimitationType"]=16;
objet["enum"][16]="../CATMecModLiveUseItf/enum_CATMmrLimitationType_37525.htm";
objet["enum"]["CATMmrSupportType"]=17;
objet["enum"][17]="../CATMecModLiveUseItf/enum_CATMmrSupportType_32052.htm";
objet["interface"]["CATIBasicTool"]=0;
objet["interface"][0]="../CATMecModLiveUseItf/interface_CATIBasicTool_28347.htm";
objet["interface"]["CATIBodyRequest"]=1;
objet["interface"][1]="../CATMecModLiveUseItf/interface_CATIBodyRequest_31577.htm";
objet["interface"]["CATIMmiMechanicalFeature"]=2;
objet["interface"][2]="../CATMecModLiveUseItf/interface_CATIMmiMechanicalFeature_48539.htm";
objet["interface"]["CATIMmiUseBodyContent"]=3;
objet["interface"][3]="../CATMecModLiveUseItf/interface_CATIMmiUseBodyContent_42122.htm";
objet["interface"]["CATIMmiUsePrtPart"]=4;
objet["interface"][4]="../CATMecModLiveUseItf/interface_CATIMmiUsePrtPart_34315.htm";
objet["interface"]["CATIMmiViewServices"]=5;
objet["interface"][5]="../CATMecModLiveUseItf/interface_CATIMmiViewServices_38227.htm";
objet["interface"]["CATIPartRequest"]=6;
objet["interface"][6]="../CATMecModLiveUseItf/interface_CATIPartRequest_31612.htm";
objet["typedef"]["CATMfFeaturizeMode"]=0;
objet["typedef"][0]="../CATMecModLiveUseItf/typedef_CATMfFeaturizeMode_34637.htm";
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