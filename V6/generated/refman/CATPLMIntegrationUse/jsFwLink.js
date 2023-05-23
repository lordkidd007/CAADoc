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
 objet["class"]["CATAdpComponentData"]=0;
objet["class"][0]="../CATPLMIntegrationUse/class_CATAdpComponentData_37922.htm";
objet["class"]["CATAdpComponentsAssociation"]=1;
objet["class"][1]="../CATPLMIntegrationUse/class_CATAdpComponentsAssociation_57673.htm";
objet["class"]["CATAdpComponentsAssociationIterator"]=2;
objet["class"][2]="../CATPLMIntegrationUse/class_CATAdpComponentsAssociationIterator_83499.htm";
objet["class"]["CATAdpDuplicator"]=3;
objet["class"][3]="../CATPLMIntegrationUse/class_CATAdpDuplicator_33157.htm";
objet["class"]["CATAdpEvolutionMaker"]=4;
objet["class"][4]="../CATPLMIntegrationUse/class_CATAdpEvolutionMaker_40286.htm";
objet["class"]["CATAdpExpandParameters"]=5;
objet["class"][5]="../CATPLMIntegrationUse/class_CATAdpExpandParameters_44645.htm";
objet["class"]["CATAdpOpenParameters"]=6;
objet["class"][6]="../CATPLMIntegrationUse/class_CATAdpOpenParameters_40390.htm";
objet["class"]["CATAdpOpener"]=7;
objet["class"][7]="../CATPLMIntegrationUse/class_CATAdpOpener_27307.htm";
objet["class"]["CATAdpPLMAttributeSet"]=8;
objet["class"][8]="../CATPLMIntegrationUse/class_CATAdpPLMAttributeSet_41802.htm";
objet["class"]["CATAdpPLMAttributeSetIter"]=9;
objet["class"][9]="../CATPLMIntegrationUse/class_CATAdpPLMAttributeSetIter_50946.htm";
objet["class"]["CATAdpPLMComponentInfos"]=10;
objet["class"][10]="../CATPLMIntegrationUse/class_CATAdpPLMComponentInfos_46406.htm";
objet["class"]["CATAdpPLMComponentInfosIter"]=11;
objet["class"][11]="../CATPLMIntegrationUse/class_CATAdpPLMComponentInfosIter_56358.htm";
objet["class"]["CATAdpPLMComponentReferences"]=12;
objet["class"][12]="../CATPLMIntegrationUse/class_CATAdpPLMComponentReferences_59334.htm";
objet["class"]["CATAdpPLMComponentReferencesIter"]=13;
objet["class"][13]="../CATPLMIntegrationUse/class_CATAdpPLMComponentReferencesIter_71306.htm";
objet["class"]["CATAdpPLMComponentUniqueKey"]=14;
objet["class"][14]="../CATPLMIntegrationUse/class_CATAdpPLMComponentUniqueKey_56562.htm";
objet["class"]["CATAdpPLMComponentsInfos"]=15;
objet["class"][15]="../CATPLMIntegrationUse/class_CATAdpPLMComponentsInfos_48987.htm";
objet["class"]["CATAdpPLMComponentsInfosIter"]=16;
objet["class"][16]="../CATPLMIntegrationUse/class_CATAdpPLMComponentsInfosIter_59343.htm";
objet["class"]["CATAdpPLMComponentsServices"]=17;
objet["class"][17]="../CATPLMIntegrationUse/class_CATAdpPLMComponentsServices_57064.htm";
objet["class"]["CATAdpPLMExtendedQueryServices"]=18;
objet["class"][18]="../CATPLMIntegrationUse/class_CATAdpPLMExtendedQueryServices_65493.htm";
objet["class"]["CATAdpPLMGenealogy"]=19;
objet["class"][19]="../CATPLMIntegrationUse/class_CATAdpPLMGenealogy_35829.htm";
objet["class"]["CATAdpPLMGenealogyInformation"]=20;
objet["class"][20]="../CATPLMIntegrationUse/class_CATAdpPLMGenealogyInformation_62654.htm";
objet["class"]["CATAdpPLMGenealogyInformationIter"]=21;
objet["class"][21]="../CATPLMIntegrationUse/class_CATAdpPLMGenealogyInformationIter_75030.htm";
objet["class"]["CATAdpPLMQueryAttributeSet"]=22;
objet["class"][22]="../CATPLMIntegrationUse/class_CATAdpPLMQueryAttributeSet_53993.htm";
objet["class"]["CATAdpPLMQueryFilter"]=23;
objet["class"][23]="../CATPLMIntegrationUse/class_CATAdpPLMQueryFilter_39805.htm";
objet["class"]["CATAdpPLMQueryServices"]=24;
objet["class"][24]="../CATPLMIntegrationUse/class_CATAdpPLMQueryServices_44279.htm";
objet["class"]["CATAdpSaver"]=25;
objet["class"][25]="../CATPLMIntegrationUse/class_CATAdpSaver_26157.htm";
objet["class"]["CATAdpVersionMaker"]=26;
objet["class"][26]="../CATPLMIntegrationUse/class_CATAdpVersionMaker_36266.htm";
objet["interface"]["CATIAdpPLMValueReader"]=0;
objet["interface"][0]="../CATPLMIntegrationUse/interface_CATIAdpPLMValueReader_43583.htm";
objet["interface"]["CATIAdpPLMValueWriter"]=1;
objet["interface"][1]="../CATPLMIntegrationUse/interface_CATIAdpPLMValueWriter_44290.htm";
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