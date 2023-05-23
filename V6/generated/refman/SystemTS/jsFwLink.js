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
 objet["class"]["CATChar"]=0;
objet["class"][0]="../SystemTS/class_CATChar_5859.htm";
objet["class"]["CATToken"]=1;
objet["class"][1]="../SystemTS/class_CATToken_6680.htm";
objet["define"]["REFIID"]=0;
objet["define"][0]="../SystemTS/define_REFIID_5358.htm";
objet["define"]["fstat64"]=1;
objet["define"][1]="../SystemTS/define_fstat64_5982.htm";
objet["define"]["interface"]=2;
objet["define"][2]="../SystemTS/define_interface_7992.htm";
objet["define"]["stat64"]=3;
objet["define"][3]="../SystemTS/define_stat64_5432.htm";
objet["enum"]["CATLibStatus"]=0;
objet["enum"][0]="../SystemTS/enum_CATLibStatus_10340.htm";
objet["function"]["CATCmpGuid"]=0;
objet["function"][0]="../SystemTS/function_CATCmpGuid_27152.htm";
objet["function"]["CATGetLoginName"]=1;
objet["function"][1]="../SystemTS/function_CATGetLoginName_49461.htm";
objet["interface"]["IClassFactory"]=0;
objet["interface"][0]="../SystemTS/interface_IClassFactory_14787.htm";
objet["interface"]["IUnknown"]=1;
objet["interface"][1]="../SystemTS/interface_IUnknown_9532.htm";
objet["struct"]["GUID"]=0;
objet["struct"][0]="../SystemTS/struct_GUID_4839.htm";
objet["typedef"]["BOOL"]=0;
objet["typedef"][0]="../SystemTS/typedef_BOOL_5363.htm";
objet["typedef"]["CATBSTR"]=1;
objet["typedef"][1]="../SystemTS/typedef_CATBSTR_6573.htm";
objet["typedef"]["CLSID"]=2;
objet["typedef"][2]="../SystemTS/typedef_CLSID_5631.htm";
objet["typedef"]["IID"]=3;
objet["typedef"][3]="../SystemTS/typedef_IID_5107.htm";
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