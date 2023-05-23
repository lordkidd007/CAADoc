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
 objet["class"]["CAT2DLayoutServices"]=0;
objet["class"][0]="../Drafting2DLUseItf/class_CAT2DLayoutServices_31655.htm";
objet["enum"]["CAT2DLClippingProfileMode"]=0;
objet["enum"][0]="../Drafting2DLUseItf/enum_CAT2DLClippingProfileMode_43509.htm";
objet["enum"]["CAT2DLViewSide"]=1;
objet["enum"][1]="../Drafting2DLUseItf/enum_CAT2DLViewSide_22112.htm";
objet["enum"]["CatView2DModeVisu"]=2;
objet["enum"][2]="../Drafting2DLUseItf/enum_CatView2DModeVisu_26869.htm";
objet["enum"]["CatVisuBackgroundMode"]=3;
objet["enum"][3]="../Drafting2DLUseItf/enum_CatVisuBackgroundMode_34991.htm";
objet["interface"]["CATI2DLBackWkbAddin"]=0;
objet["interface"][0]="../Drafting2DLUseItf/interface_CATI2DLBackWkbAddin_32409.htm";
objet["interface"]["CATI2DLBackWksAddin"]=1;
objet["interface"][1]="../Drafting2DLUseItf/interface_CATI2DLBackWksAddin_32630.htm";
objet["interface"]["CATI2DLDetailWkbAddin"]=2;
objet["interface"][2]="../Drafting2DLUseItf/interface_CATI2DLDetailWkbAddin_36503.htm";
objet["interface"]["CATI2DLDetailWksAddin"]=3;
objet["interface"][3]="../Drafting2DLUseItf/interface_CATI2DLDetailWksAddin_36758.htm";
objet["interface"]["CATI2DLMainWkbAddin"]=4;
objet["interface"][4]="../Drafting2DLUseItf/interface_CATI2DLMainWkbAddin_32570.htm";
objet["interface"]["CATI2DLMainWksAddin"]=5;
objet["interface"][5]="../Drafting2DLUseItf/interface_CATI2DLMainWksAddin_32791.htm";
objet["interface"]["CATI2DLayoutClipping"]=6;
objet["interface"][6]="../Drafting2DLUseItf/interface_CATI2DLayoutClipping_35884.htm";
objet["interface"]["CATI2DLayoutLayout"]=7;
objet["interface"][7]="../Drafting2DLUseItf/interface_CATI2DLayoutLayout_32388.htm";
objet["interface"]["CATI2DLayoutSheet"]=8;
objet["interface"][8]="../Drafting2DLUseItf/interface_CATI2DLayoutSheet_30145.htm";
objet["interface"]["CATI2DLayoutView"]=9;
objet["interface"][9]="../Drafting2DLUseItf/interface_CATI2DLayoutView_28608.htm";
objet["interface"]["CATICAT2DLBackWksConfiguration"]=10;
objet["interface"][10]="../Drafting2DLUseItf/interface_CATICAT2DLBackWksConfiguration_60307.htm";
objet["interface"]["CATICAT2DLDetailWksConfiguration"]=11;
objet["interface"][11]="../Drafting2DLUseItf/interface_CATICAT2DLDetailWksConfiguration_66889.htm";
objet["interface"]["CATICAT2DLMainWksConfiguration"]=12;
objet["interface"][12]="../Drafting2DLUseItf/interface_CATICAT2DLMainWksConfiguration_60528.htm";
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