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
 objet["class"]["CATDftGenViewProperties"]=0;
objet["class"][0]="../CATDraftingGenUseItf/class_CATDftGenViewProperties_46608.htm";
objet["enum"]["CATDftFilletRep"]=0;
objet["enum"][0]="../CATDraftingGenUseItf/enum_CATDftFilletRep_30121.htm";
objet["enum"]["CATDftGenUpdateStatus"]=1;
objet["enum"][1]="../CATDraftingGenUseItf/enum_CATDftGenUpdateStatus_41424.htm";
objet["enum"]["CatDftGenRepresentationMode"]=2;
objet["enum"][2]="../CATDraftingGenUseItf/enum_CatDftGenRepresentationMode_55968.htm";
objet["enum"]["DftGenShowMode"]=3;
objet["enum"][3]="../CATDraftingGenUseItf/enum_DftGenShowMode_28744.htm";
objet["enum"]["RasterLevelOfDetail"]=4;
objet["enum"][4]="../CATDraftingGenUseItf/enum_RasterLevelOfDetail_36711.htm";
objet["enum"]["VCType"]=5;
objet["enum"][5]="../CATDraftingGenUseItf/enum_VCType_21105.htm";
objet["enum"]["catDftGenRepPolicy"]=6;
objet["enum"][6]="../CATDraftingGenUseItf/enum_catDftGenRepPolicy_35199.htm";
objet["interface"]["CATIDftGenExtendSpecsAccesProvider"]=0;
objet["interface"][0]="../CATDraftingGenUseItf/interface_CATIDftGenExtendSpecsAccesProvider_79839.htm";
objet["interface"]["CATIDftGenGeom"]=1;
objet["interface"][1]="../CATDraftingGenUseItf/interface_CATIDftGenGeom_31372.htm";
objet["interface"]["CATIDftGenGeomAccess"]=2;
objet["interface"][2]="../CATDraftingGenUseItf/interface_CATIDftGenGeomAccess_41323.htm";
objet["interface"]["CATIDftGenViewFactory"]=3;
objet["interface"][3]="../CATDraftingGenUseItf/interface_CATIDftGenViewFactory_44151.htm";
objet["interface"]["CATIDftGenViewModification"]=4;
objet["interface"][4]="../CATDraftingGenUseItf/interface_CATIDftGenViewModification_55933.htm";
objet["interface"]["CATIDftGenViewUpdate"]=5;
objet["interface"][5]="../CATDraftingGenUseItf/interface_CATIDftGenViewUpdate_41702.htm";
objet["interface"]["CATIDrwGenDrawShape"]=6;
objet["interface"][6]="../CATDraftingGenUseItf/interface_CATIDrwGenDrawShape_39521.htm";
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