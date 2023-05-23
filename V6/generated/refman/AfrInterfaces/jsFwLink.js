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
 objet["define"]["CATAfrEditabilityAvailability"]=0;
objet["define"][0]="../AfrInterfaces/define_CATAfrEditabilityAvailability_52268.htm";
objet["define"]["CATAfrLargeScaleAvailability"]=1;
objet["define"][1]="../AfrInterfaces/define_CATAfrLargeScaleAvailability_48542.htm";
objet["define"]["CATAfrNormalAvailability"]=2;
objet["define"][2]="../AfrInterfaces/define_CATAfrNormalAvailability_38493.htm";
objet["define"]["CATAfrSmallScaleAvailability"]=3;
objet["define"][3]="../AfrInterfaces/define_CATAfrSmallScaleAvailability_48647.htm";
objet["enum"]["CATFrmState"]=0;
objet["enum"][0]="../AfrInterfaces/enum_CATFrmState_14398.htm";
objet["interface"]["CATIAfrActivateWorkbench"]=0;
objet["interface"][0]="../AfrInterfaces/interface_CATIAfrActivateWorkbench_40175.htm";
objet["interface"]["CATIAfrCommandHeader"]=1;
objet["interface"][1]="../AfrInterfaces/interface_CATIAfrCommandHeader_30617.htm";
objet["interface"]["CATIAfrCommandHeaderRep"]=2;
objet["interface"][2]="../AfrInterfaces/interface_CATIAfrCommandHeaderRep_36842.htm";
objet["interface"]["CATIAfrDialog"]=3;
objet["interface"][3]="../AfrInterfaces/interface_CATIAfrDialog_19469.htm";
objet["interface"]["CATIAfrDialogForAgent"]=4;
objet["interface"][4]="../AfrInterfaces/interface_CATIAfrDialogForAgent_32662.htm";
objet["interface"]["CATIAfrGeneralWksAddin"]=5;
objet["interface"][5]="../AfrInterfaces/interface_CATIAfrGeneralWksAddin_34748.htm";
objet["interface"]["CATIAfrUIActivation"]=6;
objet["interface"][6]="../AfrInterfaces/interface_CATIAfrUIActivation_29212.htm";
objet["interface"]["CATICSOFilter"]=7;
objet["interface"][7]="../AfrInterfaces/interface_CATICSOFilter_19387.htm";
objet["interface"]["CATIContextualSubMenu"]=8;
objet["interface"][8]="../AfrInterfaces/interface_CATIContextualSubMenu_33529.htm";
objet["interface"]["CATIDocumentEdit"]=9;
objet["interface"][9]="../AfrInterfaces/interface_CATIDocumentEdit_24024.htm";
objet["interface"]["CATIEdit"]=10;
objet["interface"][10]="../AfrInterfaces/interface_CATIEdit_14507.htm";
objet["interface"]["CATIIcon"]=11;
objet["interface"][11]="../AfrInterfaces/interface_CATIIcon_14512.htm";
objet["interface"]["CATIMultiWorkshopWorkbench"]=12;
objet["interface"][12]="../AfrInterfaces/interface_CATIMultiWorkshopWorkbench_45890.htm";
objet["interface"]["CATIRepeatableCommand"]=13;
objet["interface"][13]="../AfrInterfaces/interface_CATIRepeatableCommand_33014.htm";
objet["interface"]["CATIUIActivate"]=14;
objet["interface"][14]="../AfrInterfaces/interface_CATIUIActivate_20902.htm";
objet["interface"]["CATIWorkbench"]=15;
objet["interface"][15]="../AfrInterfaces/interface_CATIWorkbench_19755.htm";
objet["interface"]["CATIWorkbenchAddin"]=16;
objet["interface"][16]="../AfrInterfaces/interface_CATIWorkbenchAddin_27050.htm";
objet["interface"]["CATIWorkbenchInitialization"]=17;
objet["interface"][17]="../AfrInterfaces/interface_CATIWorkbenchInitialization_48877.htm";
objet["interface"]["CATIWorkbenchTransition"]=18;
objet["interface"][18]="../AfrInterfaces/interface_CATIWorkbenchTransition_38558.htm";
objet["interface"]["CATInPlaceSite"]=19;
objet["interface"][19]="../AfrInterfaces/interface_CATInPlaceSite_20847.htm";
objet["typedef"]["CATAfrAvailabilityType"]=0;
objet["typedef"][0]="../AfrInterfaces/typedef_CATAfrAvailabilityType_34511.htm";
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