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
 objet["collection"]["CATListPtrDELIPPRProcessGroup"]=0;
objet["collection"][0]="../DELPPRProcessItf/class_CATListPtrDELIPPRProcessGroup_53243.htm";
objet["function"]["GetPPRProcessAuth"]=0;
objet["function"][0]="../DELPPRProcessItf/function_GetPPRProcessAuth_76388.htm";
objet["function"]["GetPPRProcessNav"]=1;
objet["function"][1]="../DELPPRProcessItf/function_GetPPRProcessNav_71800.htm";
objet["function"]["getDELIPPRProcessOccAuth"]=2;
objet["function"][2]="../DELPPRProcessItf/function_getDELIPPRProcessOccAuth_73503.htm";
objet["interface"]["DELIPPRAlternateNav"]=0;
objet["interface"][0]="../DELPPRProcessItf/interface_DELIPPRAlternateNav_32720.htm";
objet["interface"]["DELIPPRMfgProcessAlternateAuth"]=1;
objet["interface"][1]="../DELPPRProcessItf/interface_DELIPPRMfgProcessAlternateAuth_60026.htm";
objet["interface"]["DELIPPRMfgProcessAlternateNav"]=2;
objet["interface"][2]="../DELPPRProcessItf/interface_DELIPPRMfgProcessAlternateNav_56864.htm";
objet["interface"]["DELIPPRMfgProcessAlternateRelationship"]=3;
objet["interface"][3]="../DELPPRProcessItf/interface_DELIPPRMfgProcessAlternateRelationship_89000.htm";
objet["interface"]["DELIPPRProcessAuth"]=4;
objet["interface"][4]="../DELPPRProcessItf/interface_DELIPPRProcessAuth_31088.htm";
objet["interface"]["DELIPPRProcessCapableRscAuth"]=5;
objet["interface"][5]="../DELPPRProcessItf/interface_DELIPPRProcessCapableRscAuth_53307.htm";
objet["interface"]["DELIPPRProcessCapableRscNav"]=6;
objet["interface"][6]="../DELPPRProcessItf/interface_DELIPPRProcessCapableRscNav_50363.htm";
objet["interface"]["DELIPPRProcessDisassembleAuth"]=7;
objet["interface"][7]="../DELPPRProcessItf/interface_DELIPPRProcessDisassembleAuth_57154.htm";
objet["interface"]["DELIPPRProcessDisassembleNav"]=8;
objet["interface"][8]="../DELPPRProcessItf/interface_DELIPPRProcessDisassembleNav_54101.htm";
objet["interface"]["DELIPPRProcessGroup"]=9;
objet["interface"][9]="../DELPPRProcessItf/interface_DELIPPRProcessGroup_33284.htm";
objet["interface"]["DELIPPRProcessNav"]=10;
objet["interface"][10]="../DELPPRProcessItf/interface_DELIPPRProcessNav_29234.htm";
objet["interface"]["DELIPPRProcessOccAuth"]=11;
objet["interface"][11]="../DELPPRProcessItf/interface_DELIPPRProcessOccAuth_36469.htm";
objet["interface"]["DELIPPRProcessOutputAuth"]=12;
objet["interface"][12]="../DELPPRProcessItf/interface_DELIPPRProcessOutputAuth_44431.htm";
objet["interface"]["DELIPPRProcessOutputComputeAuth"]=13;
objet["interface"][13]="../DELPPRProcessItf/interface_DELIPPRProcessOutputComputeAuth_64224.htm";
objet["interface"]["DELIPPRProcessOutputFilterAuth"]=14;
objet["interface"][14]="../DELPPRProcessItf/interface_DELIPPRProcessOutputFilterAuth_60766.htm";
objet["interface"]["DELIPPRProcessOutputFilterNav"]=15;
objet["interface"][15]="../DELPPRProcessItf/interface_DELIPPRProcessOutputFilterNav_57604.htm";
objet["interface"]["DELIPPRProcessOutputNav"]=16;
objet["interface"][16]="../DELPPRProcessItf/interface_DELIPPRProcessOutputNav_41923.htm";
objet["interface"]["DELIPPRProcessPrecedencesAuth"]=17;
objet["interface"][17]="../DELPPRProcessItf/interface_DELIPPRProcessPrecedencesAuth_56948.htm";
objet["interface"]["DELIPPRProcessPrecedencesNav"]=18;
objet["interface"][18]="../DELPPRProcessItf/interface_DELIPPRProcessPrecedencesNav_53895.htm";
objet["interface"]["DELIPPRProcessTypeNav"]=19;
objet["interface"][19]="../DELPPRProcessItf/interface_DELIPPRProcessTypeNav_36906.htm";
objet["typedef"]["ErrorDiagnostic"]=0;
objet["typedef"][0]="../DELPPRProcessItf/typedef_ErrorDiagnostic_25283.htm";
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