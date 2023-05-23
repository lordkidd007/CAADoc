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
 objet["define"]["CATLevelClient"]=0;
objet["define"][0]="../DataExchangeKernelItf/define_CATLevelClient_32073.htm";
objet["define"]["CATLevelDebug"]=1;
objet["define"][1]="../DataExchangeKernelItf/define_CATLevelDebug_30532.htm";
objet["define"]["CATLevelDevelop"]=2;
objet["define"][2]="../DataExchangeKernelItf/define_CATLevelDevelop_33627.htm";
objet["define"]["CATLevelMaintenance"]=3;
objet["define"][3]="../DataExchangeKernelItf/define_CATLevelMaintenance_40286.htm";
objet["define"]["CATLevelStat"]=4;
objet["define"][4]="../DataExchangeKernelItf/define_CATLevelStat_29530.htm";
objet["define"]["XCAD_ACTIVE_LAYERS_ONLY"]=5;
objet["define"][5]="../DataExchangeKernelItf/define_XCAD_ACTIVE_LAYERS_ONLY_43034.htm";
objet["define"]["XCAD_CONVERT_AXIS_SYSTEM"]=6;
objet["define"][6]="../DataExchangeKernelItf/define_XCAD_CONVERT_AXIS_SYSTEM_45101.htm";
objet["define"]["XCAD_COORDSYS_IN_TESS_MODE"]=7;
objet["define"][7]="../DataExchangeKernelItf/define_XCAD_COORDSYS_IN_TESS_MODE_48692.htm";
objet["define"]["XCAD_EXACT"]=8;
objet["define"][8]="../DataExchangeKernelItf/define_XCAD_EXACT_26160.htm";
objet["define"]["XCAD_FALSE"]=9;
objet["define"][9]="../DataExchangeKernelItf/define_XCAD_FALSE_26097.htm";
objet["define"]["XCAD_GENERATED_DATA_DIRECTORY"]=10;
objet["define"][10]="../DataExchangeKernelItf/define_XCAD_GENERATED_DATA_DIRECTORY_53976.htm";
objet["define"]["XCAD_GEOMETRY_TYPE"]=11;
objet["define"][11]="../DataExchangeKernelItf/define_XCAD_GEOMETRY_TYPE_35108.htm";
objet["define"]["XCAD_LAYERS_TO_CONVERT"]=12;
objet["define"][12]="../DataExchangeKernelItf/define_XCAD_LAYERS_TO_CONVERT_41321.htm";
objet["define"]["XCAD_LOD_IN_TESS_MODE"]=13;
objet["define"][13]="../DataExchangeKernelItf/define_XCAD_LOD_IN_TESS_MODE_39347.htm";
objet["define"]["XCAD_OPEN_SURFACES"]=14;
objet["define"][14]="../DataExchangeKernelItf/define_XCAD_OPEN_SURFACES_34466.htm";
objet["define"]["XCAD_REFERENCE_SET"]=15;
objet["define"][15]="../DataExchangeKernelItf/define_XCAD_REFERENCE_SET_34500.htm";
objet["define"]["XCAD_TESSELLATED"]=16;
objet["define"][16]="../DataExchangeKernelItf/define_XCAD_TESSELLATED_31694.htm";
objet["define"]["XCAD_TRUE"]=17;
objet["define"][17]="../DataExchangeKernelItf/define_XCAD_TRUE_25599.htm";
objet["enum"]["TextureWrapingMode"]=0;
objet["enum"][0]="../DataExchangeKernelItf/enum_TextureWrapingMode_37586.htm";
objet["enum"]["XCADOptionStatus"]=1;
objet["enum"][1]="../DataExchangeKernelItf/enum_XCADOptionStatus_34592.htm";
objet["interface"]["CATIExchangeGroupProperty"]=0;
objet["interface"][0]="../DataExchangeKernelItf/interface_CATIExchangeGroupProperty_56842.htm";
objet["interface"]["CATIExchangeInputDocument"]=1;
objet["interface"][1]="../DataExchangeKernelItf/interface_CATIExchangeInputDocument_56130.htm";
objet["interface"]["CATIExchangeLogError"]=2;
objet["interface"][2]="../DataExchangeKernelItf/interface_CATIExchangeLogError_44203.htm";
objet["interface"]["CATIExchangeMaterialAndTexture"]=3;
objet["interface"][3]="../DataExchangeKernelItf/interface_CATIExchangeMaterialAndTexture_69638.htm";
objet["interface"]["CATIExchangeMaterialAndTextureProperty"]=4;
objet["interface"][4]="../DataExchangeKernelItf/interface_CATIExchangeMaterialAndTextureProperty_98897.htm";
objet["interface"]["CATIExchangeOutputDocument"]=5;
objet["interface"][5]="../DataExchangeKernelItf/interface_CATIExchangeOutputDocument_59093.htm";
objet["interface"]["CATIExchangeProperty"]=6;
objet["interface"][6]="../DataExchangeKernelItf/interface_CATIExchangeProperty_45062.htm";
objet["interface"]["CATIExchangeRepresentation"]=7;
objet["interface"][7]="../DataExchangeKernelItf/interface_CATIExchangeRepresentation_59237.htm";
objet["interface"]["CATIExchangeTransformation"]=8;
objet["interface"][8]="../DataExchangeKernelItf/interface_CATIExchangeTransformation_59279.htm";
objet["interface"]["CATIExchangeUserProperties"]=9;
objet["interface"][9]="../DataExchangeKernelItf/interface_CATIExchangeUserProperties_59108.htm";
objet["interface"]["CATIExchangeUserProperty"]=10;
objet["interface"][10]="../DataExchangeKernelItf/interface_CATIExchangeUserProperty_54177.htm";
objet["typedef"]["Date"]=0;
objet["typedef"][0]="../DataExchangeKernelItf/typedef_Date_23991.htm";
objet["typedef"]["FilePath"]=1;
objet["typedef"][1]="../DataExchangeKernelItf/typedef_FilePath_26212.htm";
objet["typedef"]["URL"]=2;
objet["typedef"][2]="../DataExchangeKernelItf/typedef_URL_23593.htm";
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