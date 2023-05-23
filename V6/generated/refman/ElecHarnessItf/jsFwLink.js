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
 objet["enum"]["CATEhiProfileType"]=0;
objet["enum"][0]="../ElecHarnessItf/enum_CATEhiProfileType_24016.htm";
objet["interface"]["CATIEhiBranch"]=0;
objet["interface"][0]="../ElecHarnessItf/interface_CATIEhiBranch_20604.htm";
objet["interface"]["CATIEhiBranchEnd"]=1;
objet["interface"][1]="../ElecHarnessItf/interface_CATIEhiBranchEnd_24541.htm";
objet["interface"]["CATIEhiFLEX"]=2;
objet["interface"][2]="../ElecHarnessItf/interface_CATIEhiFLEX_17519.htm";
objet["interface"]["CATIEhiFLEXSegmentModuli"]=3;
objet["interface"][3]="../ElecHarnessItf/interface_CATIEhiFLEXSegmentModuli_40499.htm";
objet["interface"]["CATIEhiGeoHarness"]=4;
objet["interface"][4]="../ElecHarnessItf/interface_CATIEhiGeoHarness_26788.htm";
objet["interface"]["CATIEhiHarnessBundle"]=5;
objet["interface"][5]="../ElecHarnessItf/interface_CATIEhiHarnessBundle_32314.htm";
objet["interface"]["CATIEhiProtectiveCovering"]=6;
objet["interface"][6]="../ElecHarnessItf/interface_CATIEhiProtectiveCovering_44319.htm";
objet["interface"]["CATIEhiReferenceFactory"]=7;
objet["interface"][7]="../ElecHarnessItf/interface_CATIEhiReferenceFactory_39058.htm";
objet["interface"]["CATIEhiSegment"]=8;
objet["interface"][8]="../ElecHarnessItf/interface_CATIEhiSegment_22265.htm";
objet["interface"]["CATIEhiSegmentEnd"]=9;
objet["interface"][9]="../ElecHarnessItf/interface_CATIEhiSegmentEnd_26481.htm";
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