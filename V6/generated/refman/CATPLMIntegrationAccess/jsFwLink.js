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
 objet["class"]["CATAdpAttributeSet"]=0;
objet["class"][0]="../CATPLMIntegrationAccess/class_CATAdpAttributeSet_42729.htm";
objet["class"]["CATAdpDataSizeServices"]=1;
objet["class"][1]="../CATPLMIntegrationAccess/class_CATAdpDataSizeServices_50649.htm";
objet["class"]["CATAdpDictionaryServices"]=2;
objet["class"][2]="../CATPLMIntegrationAccess/class_CATAdpDictionaryServices_55913.htm";
objet["class"]["CATAdpIdentificationSet"]=3;
objet["class"][3]="../CATPLMIntegrationAccess/class_CATAdpIdentificationSet_53029.htm";
objet["class"]["CATAdpLockInformation"]=4;
objet["class"][4]="../CATPLMIntegrationAccess/class_CATAdpLockInformation_48835.htm";
objet["class"]["CATAdpLockServices"]=5;
objet["class"][5]="../CATPLMIntegrationAccess/class_CATAdpLockServices_42643.htm";
objet["class"]["CATAdpMaturityServices"]=6;
objet["class"][6]="../CATPLMIntegrationAccess/class_CATAdpMaturityServices_51381.htm";
objet["class"]["CATAdpOpenSaveServices"]=7;
objet["class"][7]="../CATPLMIntegrationAccess/class_CATAdpOpenSaveServices_50681.htm";
objet["class"]["CATAdpPLMErrorReviewerFactory"]=8;
objet["class"][8]="../CATPLMIntegrationAccess/class_CATAdpPLMErrorReviewerFactory_68971.htm";
objet["class"]["CATAdpPLMExpandFilter"]=9;
objet["class"][9]="../CATPLMIntegrationAccess/class_CATAdpPLMExpandFilter_47814.htm";
objet["class"]["CATAdpPLMExpandSpecification"]=10;
objet["class"][10]="../CATPLMIntegrationAccess/class_CATAdpPLMExpandSpecification_65411.htm";
objet["class"]["CATAdpPublicSecurityServices"]=11;
objet["class"][11]="../CATPLMIntegrationAccess/class_CATAdpPublicSecurityServices_66655.htm";
objet["class"]["CATAdpQueryResult"]=12;
objet["class"][12]="../CATPLMIntegrationAccess/class_CATAdpQueryResult_41358.htm";
objet["class"]["CATAdpQueryServices"]=13;
objet["class"][13]="../CATPLMIntegrationAccess/class_CATAdpQueryServices_44840.htm";
objet["class"]["CATAdpVersioningServices"]=14;
objet["class"][14]="../CATPLMIntegrationAccess/class_CATAdpVersioningServices_55882.htm";
objet["collection"]["CATLISTP(CATAdpLockInformation)"]=0;
objet["collection"][0]="../CATPLMIntegrationAccess/class_CATLISTP(CATAdpLockInformation)_71013.htm";
objet["collection"]["CATLISTP(CATAdpQueryResult)"]=1;
objet["collection"][1]="../CATPLMIntegrationAccess/class_CATLISTP(CATAdpQueryResult)_59970.htm";
objet["interface"]["CATIAdpEnvironment"]=0;
objet["interface"][0]="../CATPLMIntegrationAccess/interface_CATIAdpEnvironment_45633.htm";
objet["interface"]["CATIAdpPLMError"]=1;
objet["interface"][1]="../CATPLMIntegrationAccess/interface_CATIAdpPLMError_39581.htm";
objet["interface"]["CATIAdpPLMErrorIterator"]=2;
objet["interface"][2]="../CATPLMIntegrationAccess/interface_CATIAdpPLMErrorIterator_55303.htm";
objet["interface"]["CATIAdpPLMErrorReviewer"]=3;
objet["interface"][3]="../CATPLMIntegrationAccess/interface_CATIAdpPLMErrorReviewer_55251.htm";
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