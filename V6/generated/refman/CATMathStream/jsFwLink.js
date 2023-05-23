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
 objet["class"]["CATCGMProgressBar"]=0;
objet["class"][0]="../CATMathStream/class_CATCGMProgressBar_22608.htm";
objet["class"]["CATGeometricModelTransaction"]=1;
objet["class"][1]="../CATMathStream/class_CATGeometricModelTransaction_48566.htm";
objet["class"]["CATMathStream"]=2;
objet["class"][2]="../CATMathStream/class_CATMathStream_17059.htm";
objet["class"]["CATSoftwareConfiguration"]=3;
objet["class"][3]="../CATMathStream/class_CATSoftwareConfiguration_38391.htm";
objet["class"]["CATSoftwareModification"]=4;
objet["class"][4]="../CATMathStream/class_CATSoftwareModification_35503.htm";
objet["define"]["CATGeometricModelTransactionBegin"]=0;
objet["define"][0]="../CATMathStream/define_CATGeometricModelTransactionBegin_63666.htm";
objet["define"]["CATGeometricModelTransactionCatch"]=1;
objet["define"][1]="../CATMathStream/define_CATGeometricModelTransactionCatch_63590.htm";
objet["define"]["CATGeometricModelTransactionEnd"]=2;
objet["define"][2]="../CATMathStream/define_CATGeometricModelTransactionEnd_57146.htm";
objet["define"]["CATGeometricModelTransactionEndTry"]=3;
objet["define"][3]="../CATMathStream/define_CATGeometricModelTransactionEndTry_67391.htm";
objet["define"]["CATGeometricModelTransactionEndTryWithoutRethrow"]=4;
objet["define"][4]="../CATMathStream/define_CATGeometricModelTransactionEndTryWithoutRethrow_128466.htm";
objet["define"]["CatQuickFindObjectFromTag"]=5;
objet["define"][5]="../CATMathStream/define_CatQuickFindObjectFromTag_39417.htm";
objet["enum"]["CATCGMStreamType"]=0;
objet["enum"][0]="../CATMathStream/enum_CATCGMStreamType_20714.htm";
objet["function"]["CATCreateSoftwareConfiguration"]=0;
objet["function"][0]="../CATMathStream/_function_CATCreateSoftwareConfiguration.htm";
objet["typedef"]["CATCGMKindOfTransaction"]=0;
objet["typedef"][0]="../CATMathStream/typedef_CATCGMKindOfTransaction_35945.htm";
objet["typedef"]["CATCGMProgressBarInterruptFunction"]=1;
objet["typedef"][1]="../CATMathStream/typedef_CATCGMProgressBarInterruptFunction_69139.htm";
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