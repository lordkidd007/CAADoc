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
 objet["class"]["CATCkeGenerateReportFactory"]=0;
objet["class"][0]="../GenKnowledgeInterfaces/class_CATCkeGenerateReportFactory_61774.htm";
objet["class"]["CATExpertReportEnum"]=1;
objet["class"][1]="../GenKnowledgeInterfaces/class_CATExpertReportEnum_43008.htm";
objet["class"]["CATExpertRuleEnum"]=2;
objet["class"][2]="../GenKnowledgeInterfaces/class_CATExpertRuleEnum_39088.htm";
objet["class"]["CATExpertSolveModeEnum"]=3;
objet["class"][3]="../GenKnowledgeInterfaces/class_CATExpertSolveModeEnum_48639.htm";
objet["collection"]["CATLISTV(CATICheckReport_var)."]=0;
objet["collection"][0]="../GenKnowledgeInterfaces/class_CATLISTV(CATICheckReport_var)_64378.htm";
objet["collection"]["CATLISTV(CATIGenericRuleBaseComponent_var)."]=1;
objet["collection"][1]="../GenKnowledgeInterfaces/class_CATLISTV(CATIGenericRuleBaseComponent_var)_110947.htm";
objet["collection"]["CATLISTV(CATIReportObject_var)."]=2;
objet["collection"][2]="../GenKnowledgeInterfaces/class_CATLISTV(CATIReportObject_var)_67434.htm";
objet["collection"]["CATLISTV(CATIRuleBaseComponent_var)."]=3;
objet["collection"][3]="../GenKnowledgeInterfaces/class_CATLISTV(CATIRuleBaseComponent_var)_83920.htm";
objet["collection"]["CATLISTV(CATIRuleSet_var)."]=4;
objet["collection"][4]="../GenKnowledgeInterfaces/class_CATLISTV(CATIRuleSet_var)_53320.htm";
objet["interface"]["CATICheck"]=0;
objet["interface"][0]="../GenKnowledgeInterfaces/interface_CATICheck_31014.htm";
objet["interface"]["CATICheckReport"]=1;
objet["interface"][1]="../GenKnowledgeInterfaces/interface_CATICheckReport_38432.htm";
objet["interface"]["CATICkeGenerateReport"]=2;
objet["interface"][2]="../GenKnowledgeInterfaces/interface_CATICkeGenerateReport_49359.htm";
objet["interface"]["CATICkeReportColumn"]=3;
objet["interface"][3]="../GenKnowledgeInterfaces/interface_CATICkeReportColumn_45376.htm";
objet["interface"]["CATICkeReportRow"]=4;
objet["interface"][4]="../GenKnowledgeInterfaces/interface_CATICkeReportRow_40031.htm";
objet["interface"]["CATIGenericRuleBaseComponent"]=5;
objet["interface"][5]="../GenKnowledgeInterfaces/interface_CATIGenericRuleBaseComponent_66469.htm";
objet["interface"]["CATIKwxComponentJustification"]=6;
objet["interface"][6]="../GenKnowledgeInterfaces/interface_CATIKwxComponentJustification_70589.htm";
objet["interface"]["CATIReportObject"]=7;
objet["interface"][7]="../GenKnowledgeInterfaces/interface_CATIReportObject_39888.htm";
objet["interface"]["CATIReportOptions"]=8;
objet["interface"][8]="../GenKnowledgeInterfaces/interface_CATIReportOptions_42132.htm";
objet["interface"]["CATIRule"]=9;
objet["interface"][9]="../GenKnowledgeInterfaces/interface_CATIRule_30339.htm";
objet["interface"]["CATIRuleBase"]=10;
objet["interface"][10]="../GenKnowledgeInterfaces/interface_CATIRuleBase_34001.htm";
objet["interface"]["CATIRuleBaseComponent"]=11;
objet["interface"][11]="../GenKnowledgeInterfaces/interface_CATIRuleBaseComponent_49328.htm";
objet["interface"]["CATIRuleBaseFactory"]=12;
objet["interface"][12]="../GenKnowledgeInterfaces/interface_CATIRuleBaseFactory_45120.htm";
objet["interface"]["CATIRuleBaseSet"]=13;
objet["interface"][13]="../GenKnowledgeInterfaces/interface_CATIRuleBaseSet_37934.htm";
objet["interface"]["CATIRuleSet"]=14;
objet["interface"][14]="../GenKnowledgeInterfaces/interface_CATIRuleSet_33072.htm";
objet["typedef"]["conflictingImportFunctionPtr"]=0;
objet["typedef"][0]="../GenKnowledgeInterfaces/typedef_conflictingImportFunctionPtr_66036.htm";
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