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
 objet["class"]["CATREVReviewUIServices"]=0;
objet["class"][0]="../PLMValidationInterfaces/class_CATREVReviewUIServices_50631.htm";
objet["class"]["CATVALServices"]=1;
objet["class"][1]="../PLMValidationInterfaces/class_CATVALServices_36513.htm";
objet["interface"]["CATIDMUNavigatorAddin"]=0;
objet["interface"][0]="../PLMValidationInterfaces/interface_CATIDMUNavigatorAddin_50801.htm";
objet["interface"]["CATIMarker2DFactory"]=1;
objet["interface"][1]="../PLMValidationInterfaces/interface_CATIMarker2DFactory_46823.htm";
objet["interface"]["CATIMarker2DText"]=2;
objet["interface"][2]="../PLMValidationInterfaces/interface_CATIMarker2DText_41445.htm";
objet["interface"]["CATIMarker3DArrow"]=3;
objet["interface"][3]="../PLMValidationInterfaces/interface_CATIMarker3DArrow_43141.htm";
objet["interface"]["CATIMarker3DCircle"]=4;
objet["interface"][4]="../PLMValidationInterfaces/interface_CATIMarker3DCircle_44409.htm";
objet["interface"]["CATIMarker3DFactory"]=5;
objet["interface"][5]="../PLMValidationInterfaces/interface_CATIMarker3DFactory_46833.htm";
objet["interface"]["CATIMarker3DText"]=6;
objet["interface"][6]="../PLMValidationInterfaces/interface_CATIMarker3DText_41455.htm";
objet["interface"]["CATIREVReview"]=7;
objet["interface"][7]="../PLMValidationInterfaces/interface_CATIREVReview_37618.htm";
objet["interface"]["CATIREVReviewFactory"]=8;
objet["interface"][8]="../PLMValidationInterfaces/interface_CATIREVReviewFactory_49465.htm";
objet["interface"]["CATIREVSlide"]=9;
objet["interface"][9]="../PLMValidationInterfaces/interface_CATIREVSlide_36086.htm";
objet["interface"]["CATIVALCheck"]=10;
objet["interface"][10]="../PLMValidationInterfaces/interface_CATIVALCheck_35898.htm";
objet["interface"]["CATIVALConcern"]=11;
objet["interface"][11]="../PLMValidationInterfaces/interface_CATIVALConcern_38767.htm";
objet["interface"]["CATIVALContextRoot"]=12;
objet["interface"][12]="../PLMValidationInterfaces/interface_CATIVALContextRoot_45648.htm";
objet["interface"]["CATIVALFactory"]=13;
objet["interface"][13]="../PLMValidationInterfaces/interface_CATIVALFactory_39000.htm";
objet["interface"]["CATIVALReview"]=14;
objet["interface"][14]="../PLMValidationInterfaces/interface_CATIVALReview_37554.htm";
objet["interface"]["CATIVALValidation"]=15;
objet["interface"][15]="../PLMValidationInterfaces/interface_CATIVALValidation_43588.htm";
objet["interface"]["CATIVALWorkbenchAddin"]=16;
objet["interface"][16]="../PLMValidationInterfaces/interface_CATIVALWorkbenchAddin_50515.htm";
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