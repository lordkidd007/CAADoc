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
 objet["interface"]["CATISrsUseBoundingBox"]=0;
objet["interface"][0]="../CATSrsUseItf/interface_CATISrsUseBoundingBox_31635.htm";
objet["interface"]["CATISrsUseCategoryMngt"]=1;
objet["interface"][1]="../CATSrsUseItf/interface_CATISrsUseCategoryMngt_34139.htm";
objet["interface"]["CATISrsUseCentreLine"]=2;
objet["interface"][2]="../CATSrsUseItf/interface_CATISrsUseCentreLine_29357.htm";
objet["interface"]["CATISrsUseCoordinateConverter"]=3;
objet["interface"][3]="../CATSrsUseItf/interface_CATISrsUseCoordinateConverter_52847.htm";
objet["interface"]["CATISrsUseGridFace"]=4;
objet["interface"][4]="../CATSrsUseItf/interface_CATISrsUseGridFace_24997.htm";
objet["interface"]["CATISrsUseGridSet"]=5;
objet["interface"][5]="../CATSrsUseItf/interface_CATISrsUseGridSet_23794.htm";
objet["interface"]["CATISrsUseMidShip"]=6;
objet["interface"][6]="../CATSrsUseItf/interface_CATISrsUseMidShip_23764.htm";
objet["interface"]["CATISrsUsePart"]=7;
objet["interface"][7]="../CATSrsUseItf/interface_CATISrsUsePart_19480.htm";
objet["interface"]["CATSrsUseInstantiateService"]=8;
objet["interface"][8]="../CATSrsUseItf/interface_CATSrsUseInstantiateService_46820.htm";
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