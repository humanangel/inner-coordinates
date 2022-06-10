// PROTO PLANET INTERPOLATION PROCESS
var process = function process(y){

// sps is               sps_ is               spd is             spm is 
var sps = y.a.sign,     sps_ = y.a.signNo,    spd = y.a.degree,  spm = y.a.minute,

// eps is              eps_ is                epd is             epm is 
eps = y.b.sign,        eps_ = y.b.signNo,     epd = y.b.degree,  epm = y.b.minute, 

// sdayN is                     edayN is                          spss is 
sdayN = birthchart.day1.DayN,   edayN   = birthchart.day2.DayN,   spss = 0, 

// epss is     ipss is       motion is    _minutes is      _seconds is                                             
epss = 0,      ipss,         motion,      _minutes,        _seconds,     

// _degrees is       aipm is       comp is       Fmin is      Fdeg is     Fsec is
_degrees,            aipm,          comp,        Fmin,         Fdeg,      Fsec, 

// Fsign is           FsignNo is               ipd is
Fsign,               FsignNo,                  ipd;

// ips_ is 
var ips_ = eps_ - sps_;
if(ips_ ==0 && epd == spd && epm < spm){motion ="r"}
else if(ips_ ==0 && epd < spd){motion ="r"}
else if(ips_ < 0){motion ="r"}
else motion ="d";

// ips is 
var ips  = eps +""+ sps;
// ipm is
var ipm  = Math.abs(epm - spm);

if(epd == 0){ipd = 30;ipd = Math.abs(ipd - spd)} 
else if(spd == 0){ ipd = 30; ipd = Math.abs(ipd -epd)}
else ipd = epd - spd;
//previously defined why define these again? 
ipss = Math.abs(epss -spss);                  var comp = (ipd * 60) + ipm;

// pt is 
var pt = actions.pt; // is actions defined? I dont think so

//previously defined, why again?
comp = comp * pt;                            var compo =comp.toFixed(2).toString();

//previously defined, why again?
var aipm = Math.trunc(comp);               compo.match( /[.]/);

// compsec is 
var compsec = Math.trunc(parseInt(RegExp["$'"]));

if(motion == 'r')     {_minutes = spm - aipm;_seconds = spss - compsec;_degrees =  ipd}
else if(motion == 'd'){_minutes = spm + aipm;_seconds = spss + compsec;_degrees =  ipd} 
else _minutes; 
if(_seconds < 0)      {Fsec = _seconds +60; _minutes = _minutes - 1}
else if(_seconds > 59){Fsec = _seconds - 60; _minutes= _minutes + 1}
else Fsec =_seconds;
if(_minutes < 0)      {Fmin = _minutes +60; _degrees = spd - 1}
else if(_minutes > 59){Fmin = _minutes -60; _degrees = spd + 1}
else {Fmin = _minutes; Fdeg = _degrees}
if(_degrees < 0)      {Fdeg = _degrees +30; FsignNo = sps_ - 1}
else if(_degrees > 29){Fdeg = _degrees -30; FsignNo = sps_ + 1;Fsign = eps}
else if(_degrees == 0){Fdeg = spd; sps_ = sps_ + 0}
else Fdeg = _degrees;
if(comp == 0){Fdeg = spd; Fmin = spm; Fsec = spss}   else {;}
if(ips_ == 0){FsignNo = sps_;Fsign = sps; }   else {;}

// pla is 
var pla = [Fsign,FsignNo,Fdeg,Fmin,Fsec];
return pla;
};

// does moon need its own unique process?
var moon_process = function moon_process(y){
// if moon does need is own process, do these variables need to be defined again?
// why not make global and use in each variant of the process(y) function? 
var sps 	= y.a.sign, sps_ = y.a.signNo,spd = y.a.degree,spm = y.a.minute,eps = y.b.sign,
eps_ = y.b.signNo, epd = y.b.degree, epm = y.b.minute, sdayN = birthchart.day1.DayN,
edayN   = birthchart.day2.DayN, spss = 0, epss = 0, ipss, motion, _minutes,_seconds, _degrees,
aipm, comp, Fmin, Fdeg, Fsec, Fsign, FsignNo, ipd;

// A repeat from base process
var ips_ = eps_ - sps_;
if(ips_ ==0 && epd == spd && epm < spm){motion ="r"}
else if(ips_ ==0 && epd < spd){motion ="r"}
else if(ips_ < 0){motion ="r"}
else motion ="d";

// A repeat from base process
var ips  = eps +""+ sps;

// A repeat from base process
var ipm  = Math.abs(epm - spm);
if(epd == 0){ipd = 30;ipd = Math.abs(ipd - spd)} 
else if(spd == 0){ ipd = 30; ipd = Math.abs(ipd -epd)} else ipd = epd - spd;

// A repeat from base process
var ipss = Math.abs(epss -spss);  var pt = actions.pt;

// weird to declare this thrice like this
var comp = (ipm / 60) + ipd;  comp = comp * pt;   var compo =comp.toFixed(2).toString();

// New, aipd is 
var aipd = Math.trunc(comp); compo.match( /[.]/);

//New, compmin is 
var compmin = Math.trunc(parseInt(RegExp["$'"]));

// A repeat from base process
if(motion == 'r')     {_degrees = spd - aipd;_minutes = spm - compmin;_seconds =  ipss}
else if(motion == 'd'){_degrees = spd + aipd;_minutes = spm + compmin;_seconds =  ipss}
else _minutes;
if(_seconds < 0)      {Fsec = _seconds +60; _minutes = _minutes - 1}
else if(_seconds > 59){Fsec = _seconds - 60; _minutes= _minutes + 1} else Fsec =_seconds;
if(_minutes < 0)      {Fmin = _minutes +60; _degrees = _degrees - 1}
else if(_minutes > 59){Fmin = _minutes -60; _degrees = _degrees + 1}
else {Fmin = _minutes; Fdeg = _degrees};
if(_degrees < 0)      {Fdeg = _degrees +30; FsignNo = sps_ - 1}
else if(_degrees > 29){Fdeg = _degrees -30; FsignNo = sps_ + 1}
else if(_degrees == 0){Fdeg = spd; sps_ = sps_ + 0}  else Fdeg = _degrees;
if(comp == 0){Fdeg = spd; Fmin = spm; Fsec = spss} else {;};
if(ips_ == 0){FsignNo = sps_;Fsign = sps; } else {;}

// A repeat from base process
var pla = [Fsign,FsignNo,Fdeg,Fmin,Fsec]; return pla;
};
// Investigate this...
const person = {		
moon 	: moon_process({a:birthchart.day1.moon,b:birthchart.day2.moon}),
sun 	: process({a:birthchart.day1.sun,b:birthchart.day2.sun}),
venus 	: process({a:birthchart.day1.venus,b:birthchart.day2.venus}),
mercury : process({a:birthchart.day1.mercury,b:birthchart.day2.mercury}),
mars 	: process({a:birthchart.day1.mars,b:birthchart.day2.mars}),
jupiter : process({a:birthchart.day1.jupiter,b:birthchart.day2.jupiter}),
saturn 	: process({a:birthchart.day1.saturn,b:birthchart.day2.saturn}),
uranus 	: process({a:birthchart.day1.uranus,b:birthchart.day2.uranus}),
neptune : process({a:birthchart.day1.neptune,b:birthchart.day2.neptune}),
pluto 	: process({a:birthchart.day1.pluto,b:birthchart.day2.pluto}),
node 	: process({a:birthchart.day1.node,b:birthchart.day2.node})
};
// Uses above object def to parse a planet to be processed. But why? Seems verbose
moon = person.moon;
sun = person.sun;

// ssc is
var ssc = function ssc(b){ let y = b.hour;  let z = b.minute;
var arr = [.0,.1,.2,.3,.39,.49,.59,1.9,1.28,1.39,1.48,1.58,2.8,2.18,2.28,2.29,2.38,2.48,
			2.57,3.7,3.17,3.27,3.37,3.47];
switch(y){case 0: y = arr[0]; break; case 1: y = arr[1]; break; case 2: y = arr[2]; break;
case 3: y = arr[3]; break; case 4: y = arr[4]; break; case 5: y = arr[5]; break;
case 6: y = arr[6]; break; case 7: y = arr[7]; break; case 8: y = arr[8]; break;
case 9: y = arr[9]; break; case 10:y = arr[10]; break; case 11:y = arr[11]; break; 
case 12:y = arr[12]; break;case 13:y = arr[13]; break; case 14:y = arr[14]; break;
case 15:y = arr[15]; break; case 16:y = arr[16]; break; case 17:y = arr[17]; break;
case 18:y = arr[18]; break; case 19:y = arr[19]; break; case 20:y = arr[20]; break;
case 21:y = arr[21]; break; case 22:y = arr[22]; break; case 23:y = arr[23]; break;
default: y;}
min = [0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.10];
	switch(z){
case 0: z = min[0]; break;case 1: z = min[0]; break;case 2: z = min[0]; break;case 3: z = min[0]; break;
case 4: z = min[0]; break;case 5: z = min[1]; break;case 6: z = min[1]; break;case 7: z = min[1]; break;
case 8: z = min[1]; break;case 9: z = min[1]; break;case 10: z = min[2]; break;case 11: z = min[2]; break; 
case 12: z = min[2]; break;case 13: z = min[2]; break;case 14: z = min[2]; break;case 15: z = min[2]; break;
case 16: z = min[3]; break;case 17: z = min[3]; break;case 18: z = min[3]; break;case 19: z = min[3]; break;
case 20: z = min[3]; break;case 21: z = min[3]; break;case 22: z = min[4]; break;case 23: z = min[4]; break;
case 24: z = min[4]; break; case 25: z = min[4]; break;case 26: z = min[4]; break;case 27: z = min[4]; break;
case 28: z = min[5]; break;case 29: z = min[5]; break;case 30: z = min[5]; break;case 31: z = min[5]; break;
case 32: z = min[5]; break;case 33: z = min[5]; break;case 34: z = min[6]; break;case 35: z = min[6]; break;
case 36: z = min[6]; break;case 37: z = min[6]; break;case 38: z = min[6]; break;case 39: z = min[6]; break;
case 40: z = min[7]; break;case 41: z = min[7]; break;case 42: z = min[7]; break;case 43: z = min[7]; break;
case 44: z = min[7]; break;case 45: z = min[7]; break;case 46: z = min[8]; break;case 47: z = min[8]; break;
case 48: z = min[8]; break;case 49: z = min[8]; break;case 50: z = min[8]; break;case 51: z = min[8]; break;
case 52: z = min[9]; break;case 53: z = min[9]; break;case 54: z = min[9]; break;case 55: z = min[9]; break;
case 56: z = min[9]; break;case 57: z = min[9]; break;case 58: z = min[10]; break;case 59: z = min[10]; break; 
default: z;
}   if (y > 23){ /* make a type error */ y = arr[23]} else y;
	if (z > 12){ /* make a type error */ z = min[12]} else z;
	a = y + z;  return a; };
// Above function in action. Yet, actions may not be defined...
var ssc = ssc(actions);


// bSRT //
SRTh = birthchart.day1.SRT.hour;
SRTm = birthchart.day1.SRT.minute;
SRTs = birthchart.day1.SRT.second;
ssc = ssc.toString();

// sscM is
var sscM = Math.trunc(ssc);
ssc.match( /[.]/);

// sscS is
var sscS = parseInt(RegExp["$'"]);
// separate minute from second in ssc before comparing
// bSRT = actions.UTC + ssc +  SRTh  -  actions.offset; 
		bSRT = function bSRT(){ 
		// Why are these previously defined vars now defined as const ? 
		const bhour = actions.UTC; 
        
        // why define something to be its own self unchanged?
	    sscM= sscM; sscS = sscS; SRTh = SRTh; SRTm = SRTm; SRTs = SRTs;
		
		// bminute is             bsecond is 
		bminute = actions.minute; bsecond= actions.second;
		
		// lte is 
		lte = actions.offset;
		//lte is currently only hours, must itemize into hours, minutes, seconds
		// investigate what this means
		hour = bhour + SRTh - lte;
		minute = bminute + sscM + SRTm;
		second = bsecond + sscS + SRTs;
				
if (second > 59){second = second - 60; minute= minute + 1}
else second = second;
if (minute > 59){minute = minute -60; hour = hour + 1}
else minute = minute;
if( hour > 23){hour = hour -24; offsetDay =  1;}
else hour = hour;	
		time = hour + " "+ minute + " "+ second;
		return time;
		}; 
// bSRT //


