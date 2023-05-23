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
 objet["function"]["DELGetFitFactory"]=0;
objet["function"][0]="../DELFittingSequencingItf/function_DELGetFitFactory_78514.htm";
objet["interface"]["DELIFitActivityReference"]=0;
objet["interface"][0]="../DELFittingSequencingItf/interface_DELIFitActivityReference_58128.htm";
objet["interface"]["DELIFitAssemblyActivity"]=1;
objet["interface"][1]="../DELFittingSequencingItf/interface_DELIFitAssemblyActivity_56386.htm";
objet["interface"]["DELIFitAssemblyActivityPLMRetrieval"]=2;
objet["interface"][2]="../DELFittingSequencingItf/interface_DELIFitAssemblyActivityPLMRetrieval_90318.htm";
objet["interface"]["DELIFitAssemblySequenceActivity"]=3;
objet["interface"][3]="../DELFittingSequencingItf/interface_DELIFitAssemblySequenceActivity_78454.htm";
objet["interface"]["DELIFitFactory"]=4;
objet["interface"][4]="../DELFittingSequencingItf/interface_DELIFitFactory_39111.htm";
objet["interface"]["DELIFitSequenceInfo"]=5;
objet["interface"][5]="../DELFittingSequencingItf/interface_DELIFitSequenceInfo_46927.htm";
objet["interface"]["DELIFitSequencing"]=6;
objet["interface"][6]="../DELFittingSequencingItf/interface_DELIFitSequencing_43694.htm";
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