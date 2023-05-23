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
 objet["enum"]["CATCciFlattenMode"]=0;
objet["enum"][0]="../CATCompositesUseItf/enum_CATCciFlattenMode_31878.htm";
objet["enum"]["CATCciPhysicalEntityType"]=1;
objet["enum"][1]="../CATCompositesUseItf/enum_CATCciPhysicalEntityType_47190.htm";
objet["enum"]["CATCciProducibilityFilter"]=2;
objet["enum"][2]="../CATCompositesUseItf/enum_CATCciProducibilityFilter_49708.htm";
objet["enum"]["CATCciRelimitingCurvesJoinType"]=3;
objet["enum"][3]="../CATCompositesUseItf/enum_CATCciRelimitingCurvesJoinType_63472.htm";
objet["interface"]["CATICciBaseContour"]=0;
objet["interface"][0]="../CATCompositesUseItf/interface_CATICciBaseContour_37014.htm";
objet["interface"]["CATICciCompositesDataFactory"]=1;
objet["interface"][1]="../CATCompositesUseItf/interface_CATICciCompositesDataFactory_60253.htm";
objet["interface"]["CATICciCompositesGeometry"]=2;
objet["interface"][2]="../CATCompositesUseItf/interface_CATICciCompositesGeometry_53049.htm";
objet["interface"]["CATICciCompositesParameters"]=3;
objet["interface"][3]="../CATCompositesUseItf/interface_CATICciCompositesParameters_58191.htm";
objet["interface"]["CATICciCompositesWorkbenchAddin"]=4;
objet["interface"][4]="../CATCompositesUseItf/interface_CATICciCompositesWorkbenchAddin_68640.htm";
objet["interface"]["CATICciContour"]=5;
objet["interface"][5]="../CATCompositesUseItf/interface_CATICciContour_30747.htm";
objet["interface"]["CATICciCore"]=6;
objet["interface"][6]="../CATCompositesUseItf/interface_CATICciCore_26526.htm";
objet["interface"]["CATICciCutPiece"]=7;
objet["interface"][7]="../CATCompositesUseItf/interface_CATICciCutPiece_31450.htm";
objet["interface"]["CATICciCutPiecesGroup"]=8;
objet["interface"][8]="../CATCompositesUseItf/interface_CATICciCutPiecesGroup_42710.htm";
objet["interface"]["CATICciEdgeOfPart"]=9;
objet["interface"][9]="../CATCompositesUseItf/interface_CATICciEdgeOfPart_34410.htm";
objet["interface"]["CATICciLimitContour"]=10;
objet["interface"][10]="../CATCompositesUseItf/interface_CATICciLimitContour_39156.htm";
objet["interface"]["CATICciMaterialCache"]=11;
objet["interface"][11]="../CATCompositesUseItf/interface_CATICciMaterialCache_39820.htm";
objet["interface"]["CATICciMaterialExcess"]=12;
objet["interface"][12]="../CATCompositesUseItf/interface_CATICciMaterialExcess_42730.htm";
objet["interface"]["CATICciPhysicalEntity"]=13;
objet["interface"][13]="../CATCompositesUseItf/interface_CATICciPhysicalEntity_43161.htm";
objet["interface"]["CATICciPliesGroup"]=14;
objet["interface"][14]="../CATCompositesUseItf/interface_CATICciPliesGroup_35212.htm";
objet["interface"]["CATICciPly"]=15;
objet["interface"][15]="../CATCompositesUseItf/interface_CATICciPly_25646.htm";
objet["interface"]["CATICciProducibility"]=16;
objet["interface"][16]="../CATCompositesUseItf/interface_CATICciProducibility_41291.htm";
objet["interface"]["CATICciProducibilityFactory"]=17;
objet["interface"][17]="../CATCompositesUseItf/interface_CATICciProducibilityFactory_58234.htm";
objet["interface"]["CATICciRetrieveCompositesData"]=18;
objet["interface"][18]="../CATCompositesUseItf/interface_CATICciRetrieveCompositesData_62983.htm";
objet["interface"]["CATICciRosette"]=19;
objet["interface"][19]="../CATCompositesUseItf/interface_CATICciRosette_30621.htm";
objet["interface"]["CATICciRosetteTransferType"]=20;
objet["interface"][20]="../CATCompositesUseItf/interface_CATICciRosetteTransferType_55195.htm";
objet["interface"]["CATICciRosetteTransferTypeFactoryServices"]=21;
objet["interface"][21]="../CATCompositesUseItf/interface_CATICciRosetteTransferTypeFactoryServices_107103.htm";
objet["interface"]["CATICciSequence"]=22;
objet["interface"][22]="../CATCompositesUseItf/interface_CATICciSequence_31841.htm";
objet["interface"]["CATICciSkinSwapping"]=23;
objet["interface"][23]="../CATCompositesUseItf/interface_CATICciSkinSwapping_38869.htm";
objet["interface"]["CATICciStacking"]=24;
objet["interface"][24]="../CATCompositesUseItf/interface_CATICciStacking_31814.htm";
objet["interface"]["CATICciZone"]=25;
objet["interface"][25]="../CATCompositesUseItf/interface_CATICciZone_26651.htm";
objet["interface"]["CATICciZonesGroup"]=26;
objet["interface"][26]="../CATCompositesUseItf/interface_CATICciZonesGroup_35351.htm";
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