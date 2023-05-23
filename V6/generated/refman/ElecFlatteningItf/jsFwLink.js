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
 objet["class"]["CATAEhfUIPElecDimManagerAdpt"]=0;
objet["class"][0]="../ElecFlatteningItf/class_CATAEhfUIPElecDimManagerAdpt_51652.htm";
objet["interface"]["CATIEhfElectricalDim"]=0;
objet["interface"][0]="../ElecFlatteningItf/interface_CATIEhfElectricalDim_36461.htm";
objet["interface"]["CATIEhfEnvironment"]=1;
objet["interface"][1]="../ElecFlatteningItf/interface_CATIEhfEnvironment_33784.htm";
objet["interface"]["CATIEhfFlattenManager"]=2;
objet["interface"][2]="../ElecFlatteningItf/interface_CATIEhfFlattenManager_38820.htm";
objet["interface"]["CATIEhfFlatteningParameters"]=3;
objet["interface"][3]="../ElecFlatteningItf/interface_CATIEhfFlatteningParameters_54248.htm";
objet["interface"]["CATIEhfLengthTolerance"]=4;
objet["interface"][4]="../ElecFlatteningItf/interface_CATIEhfLengthTolerance_41161.htm";
objet["interface"]["CATIEhfManageLengthTolerance"]=5;
objet["interface"][5]="../ElecFlatteningItf/interface_CATIEhfManageLengthTolerance_55991.htm";
objet["interface"]["CATIEhfNetworkArc"]=6;
objet["interface"][6]="../ElecFlatteningItf/interface_CATIEhfNetworkArc_31292.htm";
objet["interface"]["CATIEhfNetworkNode"]=7;
objet["interface"][7]="../ElecFlatteningItf/interface_CATIEhfNetworkNode_33162.htm";
objet["interface"]["CATIEhfPrdWkbCfgAddin"]=8;
objet["interface"][8]="../ElecFlatteningItf/interface_CATIEhfPrdWkbCfgAddin_37694.htm";
objet["interface"]["CATIEhfUIPArrangeJunction"]=9;
objet["interface"][9]="../ElecFlatteningItf/interface_CATIEhfUIPArrangeJunction_48026.htm";
objet["interface"]["CATIEhfUIPElecDimManager"]=10;
objet["interface"][10]="../ElecFlatteningItf/interface_CATIEhfUIPElecDimManager_44159.htm";
objet["interface"]["CATIEhfUIPElectricalDimManager"]=11;
objet["interface"][11]="../ElecFlatteningItf/interface_CATIEhfUIPElectricalDimManager_60540.htm";
objet["interface"]["CATIEhfUIPLengthTolerance"]=12;
objet["interface"][12]="../ElecFlatteningItf/interface_CATIEhfUIPLengthTolerance_47665.htm";
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