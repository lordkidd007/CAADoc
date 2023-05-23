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
 objet["enum"]["CATTPSNoaRepType"]=0;
objet["enum"][0]="../CATTPSUseItf/enum_CATTPSNoaRepType_18838.htm";
objet["enum"]["CATTPSTangentPlane"]=1;
objet["enum"][1]="../CATTPSUseItf/enum_CATTPSTangentPlane_22259.htm";
objet["enum"]["CATTPSTypeWithDRF"]=2;
objet["enum"][2]="../CATTPSUseItf/enum_CATTPSTypeWithDRF_19400.htm";
objet["enum"]["CATTPSTypeWithoutDRF"]=3;
objet["enum"][3]="../CATTPSUseItf/enum_CATTPSTypeWithoutDRF_25225.htm";
objet["enum"]["CATTPSViewAssociativity"]=4;
objet["enum"][4]="../CATTPSUseItf/enum_CATTPSViewAssociativity_33856.htm";
objet["function"]["CATTPSInstantiateUseComponent"]=0;
objet["function"][0]="../CATTPSUseItf/function_CATTPSInstantiateUseComponent_84975.htm";
objet["interface"]["CATITPS3DGeoVisu"]=0;
objet["interface"][0]="../CATTPSUseItf/interface_CATITPS3DGeoVisu_21195.htm";
objet["interface"]["CATITPSAssociativeGroup"]=1;
objet["interface"][1]="../CATTPSUseItf/interface_CATITPSAssociativeGroup_36181.htm";
objet["interface"]["CATITPSCaptureFactory"]=2;
objet["interface"][2]="../CATTPSUseItf/interface_CATITPSCaptureFactory_31618.htm";
objet["interface"]["CATITPSCfgAddin"]=3;
objet["interface"][3]="../CATTPSUseItf/interface_CATITPSCfgAddin_19729.htm";
objet["interface"]["CATITPSConstructedGeomServices"]=4;
objet["interface"][4]="../CATTPSUseItf/interface_CATITPSConstructedGeomServices_54873.htm";
objet["interface"]["CATITPSConsumable"]=5;
objet["interface"][5]="../CATTPSUseItf/interface_CATITPSConsumable_23623.htm";
objet["interface"]["CATITPSFactoryAdvanced"]=6;
objet["interface"][6]="../CATTPSUseItf/interface_CATITPSFactoryAdvanced_33069.htm";
objet["interface"]["CATITPSFactoryElementary"]=7;
objet["interface"][7]="../CATTPSUseItf/interface_CATITPSFactoryElementary_38752.htm";
objet["interface"]["CATITPSFactoryTTRS"]=8;
objet["interface"][8]="../CATTPSUseItf/interface_CATITPSFactoryTTRS_24300.htm";
objet["interface"]["CATITPSNoaRepresentation"]=9;
objet["interface"][9]="../CATTPSUseItf/interface_CATITPSNoaRepresentation_38779.htm";
objet["interface"]["CATITPSOrientedDimension"]=10;
objet["interface"][10]="../CATTPSUseItf/interface_CATITPSOrientedDimension_38335.htm";
objet["interface"]["CATITPSRetrieveServices"]=11;
objet["interface"][11]="../CATTPSUseItf/interface_CATITPSRetrieveServices_36092.htm";
objet["interface"]["CATITPSSemanticGDTTolerance"]=12;
objet["interface"][12]="../CATTPSUseItf/interface_CATITPSSemanticGDTTolerance_44318.htm";
objet["interface"]["CATITPSServicesContainers"]=13;
objet["interface"][13]="../CATTPSUseItf/interface_CATITPSServicesContainers_41119.htm";
objet["interface"]["CATITPSTangentPlane"]=14;
objet["interface"][14]="../CATTPSUseItf/interface_CATITPSTangentPlane_26965.htm";
objet["interface"]["CATITPSViewFactory"]=15;
objet["interface"][15]="../CATTPSUseItf/interface_CATITPSViewFactory_25594.htm";
objet["interface"]["CATITPSViewTextAccess"]=16;
objet["interface"][16]="../CATTPSUseItf/interface_CATITPSViewTextAccess_31068.htm";
objet["interface"]["CATITPSVisualization"]=17;
objet["interface"][17]="../CATTPSUseItf/interface_CATITPSVisualization_29929.htm";
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