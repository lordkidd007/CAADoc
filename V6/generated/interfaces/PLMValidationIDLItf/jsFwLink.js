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
 objet["interface"]["Slide"]=0;
objet["interface"][0]="../PLMValidationIDLItf/interface_Slide_20890.htm";
objet["interface"]["Slides"]=1;
objet["interface"][1]="../PLMValidationIDLItf/interface_Slides_21465.htm";
objet["interface"]["VALCheck"]=2;
objet["interface"][2]="../PLMValidationIDLItf/interface_VALCheck_22550.htm";
objet["interface"]["VALChecks"]=3;
objet["interface"][3]="../PLMValidationIDLItf/interface_VALChecks_23470.htm";
objet["interface"]["VALConcern"]=4;
objet["interface"][4]="../PLMValidationIDLItf/interface_VALConcern_24483.htm";
objet["interface"]["VALConcerns"]=5;
objet["interface"][5]="../PLMValidationIDLItf/interface_VALConcerns_25633.htm";
objet["interface"]["VALContexts"]=6;
objet["interface"][6]="../PLMValidationIDLItf/interface_VALContexts_25837.htm";
objet["interface"]["VALReview"]=7;
objet["interface"][7]="../PLMValidationIDLItf/interface_VALReview_23614.htm";
objet["interface"]["VALReviews"]=8;
objet["interface"][8]="../PLMValidationIDLItf/interface_VALReviews_24649.htm";
objet["interface"]["VALValidation"]=9;
objet["interface"][9]="../PLMValidationIDLItf/interface_VALValidation_28012.htm";
objet["interface"]["VALValidationService"]=10;
objet["interface"][10]="../PLMValidationIDLItf/interface_VALValidationService_39589.htm";
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