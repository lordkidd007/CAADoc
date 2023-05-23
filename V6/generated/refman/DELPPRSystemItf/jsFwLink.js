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
 objet["function"]["GetPPRSystemAuth"]=0;
objet["function"][0]="../DELPPRSystemItf/function_GetPPRSystemAuth_70651.htm";
objet["function"]["GetPPRSystemNav"]=1;
objet["function"][1]="../DELPPRSystemItf/function_GetPPRSystemNav_66281.htm";
objet["function"]["GetPPRSystemOperationType"]=2;
objet["function"][2]="../DELPPRSystemItf/function_GetPPRSystemOperationType_118877.htm";
objet["function"]["getDELIPPRSystemOccAuth"]=3;
objet["function"][3]="../DELPPRSystemItf/function_getDELIPPRSystemOccAuth_67690.htm";
objet["interface"]["DELIPPRLiveSystemMaterialFlowLayout"]=0;
objet["interface"][0]="../DELPPRSystemItf/interface_DELIPPRLiveSystemMaterialFlowLayout_75969.htm";
objet["interface"]["DELIPPRProductFlowManagementAuth"]=1;
objet["interface"][1]="../DELPPRSystemItf/interface_DELIPPRProductFlowManagementAuth_64825.htm";
objet["interface"]["DELIPPRProductFlowManagementNav"]=2;
objet["interface"][2]="../DELPPRSystemItf/interface_DELIPPRProductFlowManagementNav_61445.htm";
objet["interface"]["DELIPPRProductionDemand"]=3;
objet["interface"][3]="../DELPPRSystemItf/interface_DELIPPRProductionDemand_39711.htm";
objet["interface"]["DELIPPRProductionDemandAuth"]=4;
objet["interface"][4]="../DELPPRSystemItf/interface_DELIPPRProductionDemandAuth_49618.htm";
objet["interface"]["DELIPPRProductionDemandNav"]=5;
objet["interface"][5]="../DELPPRSystemItf/interface_DELIPPRProductionDemandNav_46783.htm";
objet["interface"]["DELIPPRRequirementMgt"]=6;
objet["interface"][6]="../DELPPRSystemItf/interface_DELIPPRRequirementMgt_35708.htm";
objet["interface"]["DELIPPRSystemAndOperationInstancesAuth"]=7;
objet["interface"][7]="../DELPPRSystemItf/interface_DELIPPRSystemAndOperationInstancesAuth_86522.htm";
objet["interface"]["DELIPPRSystemAuth"]=8;
objet["interface"][8]="../DELPPRSystemItf/interface_DELIPPRSystemAuth_27917.htm";
objet["interface"]["DELIPPRSystemCandidateRscAuth"]=9;
objet["interface"][9]="../DELPPRSystemItf/interface_DELIPPRSystemCandidateRscAuth_54914.htm";
objet["interface"]["DELIPPRSystemCandidateRscNav"]=10;
objet["interface"][10]="../DELPPRSystemItf/interface_DELIPPRSystemCandidateRscNav_51861.htm";
objet["interface"]["DELIPPRSystemCapableRscAuth"]=11;
objet["interface"][11]="../DELPPRSystemItf/interface_DELIPPRSystemCapableRscAuth_49160.htm";
objet["interface"]["DELIPPRSystemCapableRscNav"]=12;
objet["interface"][12]="../DELPPRSystemItf/interface_DELIPPRSystemCapableRscNav_46325.htm";
objet["interface"]["DELIPPRSystemNav"]=13;
objet["interface"][13]="../DELPPRSystemItf/interface_DELIPPRSystemNav_26172.htm";
objet["interface"]["DELIPPRSystemOccAuth"]=14;
objet["interface"][14]="../DELPPRSystemItf/interface_DELIPPRSystemOccAuth_33021.htm";
objet["interface"]["DELIPPRSystemOperationType"]=15;
objet["interface"][15]="../DELPPRSystemItf/interface_DELIPPRSystemOperationType_48070.htm";
objet["interface"]["DELIPPRSystemOrOperationOutputAuth"]=16;
objet["interface"][16]="../DELPPRSystemItf/interface_DELIPPRSystemOrOperationOutputAuth_72961.htm";
objet["interface"]["DELIPPRSystemOrOperationOutputNav"]=17;
objet["interface"][17]="../DELPPRSystemItf/interface_DELIPPRSystemOrOperationOutputNav_69363.htm";
objet["interface"]["DELIPPRSystemRequirementAuth"]=18;
objet["interface"][18]="../DELPPRSystemItf/interface_DELIPPRSystemRequirementAuth_53531.htm";
objet["interface"]["DELIPPRSystemRequirementNav"]=19;
objet["interface"][19]="../DELPPRSystemItf/interface_DELIPPRSystemRequirementNav_50587.htm";
objet["interface"]["DELIPPRSystemTimeConstrAuth"]=20;
objet["interface"][20]="../DELPPRSystemItf/interface_DELIPPRSystemTimeConstrAuth_50221.htm";
objet["interface"]["DELIPPRSystemTimeConstrNav"]=21;
objet["interface"][21]="../DELPPRSystemItf/interface_DELIPPRSystemTimeConstrNav_47386.htm";
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