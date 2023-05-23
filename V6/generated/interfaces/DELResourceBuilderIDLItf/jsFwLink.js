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
 objet["enum"]["AccuracyType"]=0;
objet["enum"][0]="../DELResourceBuilderIDLItf/enum_AccuracyType_34055.htm";
objet["enum"]["MotionBasis"]=1;
objet["enum"][1]="../DELResourceBuilderIDLItf/enum_MotionBasis_32775.htm";
objet["interface"]["RscAccuracyProfile"]=0;
objet["interface"][0]="../DELResourceBuilderIDLItf/interface_RscAccuracyProfile_45971.htm";
objet["interface"]["RscApplicativeProfile"]=1;
objet["interface"][1]="../DELResourceBuilderIDLItf/interface_RscApplicativeProfile_51966.htm";
objet["interface"]["RscApplicativeProfilesGroup"]=2;
objet["interface"][2]="../DELResourceBuilderIDLItf/interface_RscApplicativeProfilesGroup_67066.htm";
objet["interface"]["RscApplicativeProfilesMgr"]=3;
objet["interface"][3]="../DELResourceBuilderIDLItf/interface_RscApplicativeProfilesMgr_61180.htm";
objet["interface"]["RscMotionProfile"]=4;
objet["interface"][4]="../DELResourceBuilderIDLItf/interface_RscMotionProfile_42608.htm";
objet["interface"]["RscObjFrameProfile"]=5;
objet["interface"][5]="../DELResourceBuilderIDLItf/interface_RscObjFrameProfile_45652.htm";
objet["interface"]["RscToolProfile"]=6;
objet["interface"][6]="../DELResourceBuilderIDLItf/interface_RscToolProfile_39523.htm";
objet["interface"]["RscUserProfilesMgr"]=7;
objet["interface"][7]="../DELResourceBuilderIDLItf/interface_RscUserProfilesMgr_45879.htm";
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