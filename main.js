// Este es el array que contiene un objeto por cada unidad a convertir en otras. Este objeto contiene a su vez objetos para cada conversión, ubicados en una propiedad que los agrupa ebn un array (conversions:[...])
let conversor=[

    {unit: '%p/p', 

    conversions:[	
        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*10000*args.dgL.v},
        note:''},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*10*args.dgL.v},
        note:''},	

        {finalUnit:'mg/Kg', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*10000},
        note:''},	

        {finalUnit:'ppm', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*10000},
        note:''},	

        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*10000000*args.dgL.v},
        note:''},	

        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*10000*args.dgL.v},
        note:''},	

        {finalUnit:'µg/Kg', 
        args:{val:{name:'Valor',v:0}},conversion(args){return args.val.v*10000000},
        note:''},	

        {finalUnit:'%p/v', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v/1000},
        note:''},	
    ]},

    {unit: '%p/v', 

    conversions:[	
        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*10000000},
        note:''},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*10000},
        note:''},	

        {finalUnit:'mg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*10000000/args.dgL.v},
        note:''},	

        {finalUnit:'ppm', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*1000000/(0,1*args.dgL.v)},
        note:''},	
        
        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*10000000000},
        note:''},	

        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*10000000},
        note:''},	

        {finalUnit:'µg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*10000000000/args.dgL.v},
        note:''},	

        {finalUnit:'%p/p', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*1000/args.dgL.v},
        note:''},	
    ]},

    {unit: 'µg/Kg', 

    conversions:[	
        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v/1000},
        note:''},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v/1000000},
        note:''},	

        {finalUnit:'mg/Kg', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/1000},
        note:''},	

        {finalUnit:'ppm', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/1000},
        note:''},	

        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v},
        note:''},	

        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v/1000},
        note:''},	

        {finalUnit:'%p/p', 
        args:{val:{name:'Valor',v:0}},conversion(args){return args.val.v/10000000},
        note:''},	

        {finalUnit:'%p/v', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v/10000000000},
        note:''},	
    ]},

    {unit: 'µg/L', 

    conversions:[	
        {finalUnit:'mg/Nm3', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v/(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},	

        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v},
        note:''},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/1000},
        note:''},	

        {finalUnit:'mg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/args.dgL.v},
        note:''},	

        {finalUnit:'ppm', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/args.dgL.v},
        note:''},	

        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*1000},
        note:''},	

        {finalUnit:'%p/p', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/(10000*args.dgL.v)},
        note:''},	

        {finalUnit:'%p/v',
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/10000000},
        note:''},	

        {finalUnit:'µg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*1000/args.dgL.v},
        note:''},	
    ]},

    {unit: 'µg/m3', 

    conversions:[	
        {finalUnit:'mg/Nm3', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v/(args.prhp.v*1000*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},	

        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/1000},
        note:''},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/1000000},
        note:''},	

        {finalUnit:'mg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/(1000*args.dgL.v)},
        note:''},	

        {finalUnit:'ppm', 
        args:{val:{name:'Valor',v:0},PM:{name:'Peso Molecular',v:0},trc:{name:'Temperatura Real en °C',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return (args.val.v/(1000*args.PM.v))*8,314472*(args.trc.v+273)/(args.prhp.v/10)},
        note:'Muestra Gaseosa'},	

        {finalUnit:'%p/p', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/(10000000*args.dgL.v)},
        note:''},	

        {finalUnit:'%p/v', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/10000000000},
        note:''},	

        {finalUnit:'µg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/args.dgL.v},
        note:''},	

        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/1000},
        note:''},	

        {finalUnit:'µg/Nm3', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v/(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},	
    ]},

    {unit: 'mg/Kg', 

    conversions:[	
        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v},
        note:''},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v/1000},
        note:''},	

        {finalUnit:'%p/p', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/10000},
        note:''},	

        {finalUnit:'%p/v', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v/10000000},
        note:''},	

        {finalUnit:'µg/Kg', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*1000},
        note:''},	

        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v},
        note:''},	

        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v*1000},
        note:''},	

        {finalUnit:'ppm', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v},
        note:''},	
    ]},

    {unit: 'mg/L', 

    conversions:[	
        {finalUnit:'mg/Nm3', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return (args.val.v/(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273))))*1000},
        note:'Muestra Gaseosa'},	

        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*1000},
        note:''},	

        {finalUnit:'%p/p', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/(10*args.dgL.v)},
        note:''},	
        {finalUnit:'%p/v', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/10000},
        note:''},	

        {finalUnit:'µg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        onversion(args){return args.val.v*1000000/args.dgL.v},
        note:''},	

        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*1000},
        note:''},	

        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*1000000},
        note:''},	
        {finalUnit:'ppm', 

        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*1000/args.dgL.v},
        note:''},	

        {finalUnit:'mg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*1000/args.dgL.v},
        note:''},
    ]},

    {unit: 'mg/m3', 

    conversions:[	
        {finalUnit:'mg/Nm3', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v/(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},	

        {finalUnit:'%p/p', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/(10000*args.dgL.v)},
        note:''},	

        {finalUnit:'%p/v', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/10000000},
        note:''},	

        {finalUnit:'µg/Kg', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*1000/args.dgL.v},
        note:''},	

        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v},
        note:''},	

        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*1000},
        note:''},	

        {finalUnit:'ppm', 
        args:{val:{name:'Valor',v:0},PM:{name:'Peso Molecular',v:0},trc:{name:'Temperatura Real en °C',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return (args.val.v/(1000*args.PM.v))*8,314472*(args.trc.v+273)/(args.prhp.v/10000)},
        note:'Muestra Gaseosa'},	

        {finalUnit:'mg/Kg', 
        args:{val:{name:'Valor',v:0},dgL: {name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v/args.dgL.v},
        note:''},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/1000}
        ,note:''},	

        {finalUnit:'µg/Nm3', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v*1000/(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},

    ]},

    {unit: 'mg/Nm3', 

    conversions:[	
        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion (args){return args.val.v*(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},	

        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion (args){return args.val.v*1000*(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},	

        {finalUnit:'ppm', 
        args:{val:{name:'Valor',v:0},PM:{name:'Peso Molecular',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion (args){return args.val.v*(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))*(8,314472*(args.trc.v+273))/((args.prhp.v/10)*args.PM.v)},
        note:'Muestra Gaseosa'},	

        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v*(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v*(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)*1000))},
        note:'Muestra Gaseosa'},	

    ]},

    {unit: 'ppm', 

    conversions:[	
        {finalUnit:'mg/Nm3', 
        args:{val:{name:'Valor',v:0},PM:{name:'Peso Molecular',v:0},tnc:{name:'Temperatura Normal en °C',v:0},trc:{name:'Temperatura Real en °C',v:0},pnhp:{name:'Presión Normal en hPa',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return (args.val.v*(args.prhp.v/10)*args.PM.v/(8,314472*(args.trc.v+273)))/(args.prhp.v*(args.tnc.v+273)/(args.pnhp.v*(args.trc.v+273)))},
        note:'Muestra Gaseosa'},	

        {finalUnit:'mg/m3', 
        args:{val:{name:'Valor',v:0},PM:{name:'Peso Molecular',v:0},trc:{name:'Temperatura Real en °C',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v*(args.prhp.v/10)*args.PM.v/(8,314472*(args.trc.v+273))},
        note:'Muestra Gaseosa'},	

        {finalUnit:'mg/L', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v/1000},
        note:''},	

        {finalUnit:'mg/Kg', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v},
        note:''},	

        {finalUnit:'%p/p', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v/10000},
        note:''},	
        
        {finalUnit:'%p/v', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*0,1*args.dgL.v/1000000},
        note:''},	

        {finalUnit:'µg/Kg', 
        args:{val:{name:'Valor',v:0}},
        conversion(args){return args.val.v*1000},
        note:''},	

        {finalUnit:'µg/L', 
        args:{val:{name:'Valor',v:0},dgL:{name:'Densidad en g/L',v:0}},
        conversion(args){return args.val.v*args.dgL.v},
        note:''},	
        
        {finalUnit:'µg/m3', 
        args:{val:{name:'Valor',v:0},PM:{name:'Peso Molecular',v:0},trc:{name:'Temperatura Real en °C',v:0},prhp:{name:'Presión Real en hPa',v:0}},
        conversion(args){return args.val.v*(args.prhp.v/10)*args.PM.v*1000/(8,314472*(args.trc.v+273))},
        note:'Muestra Gaseosa'},
    ]},

];

//Esta función selecciona el objeto con las conversiones de la unidad que deseo convertir
function unitSelector(unit){
    for(obj of conversor) {
        if (unit==obj.unit) {
            return obj
        }
    }
}

//Esta función selecciona el objeto de conversión con el que voy a trabajar, que tiene la unidad destino, el objeto args y la función conversion(args)
function convSelector(unit,finalUnit){
    for (obj of unitSelector(unit).conversions){
        if (finalUnit==obj.finalUnit){
            return obj
        }
    }
}

// Esta parte maneja la lógica de las unidades de las dropdown lists
let dropUnits = document.getElementById('unit')
let dropFinalUnits = document.getElementById('finalUnit')
let result = document.getElementById('result')
let conect = document.getElementById('conect')
let toconvert = document.getElementById('toconvert')

toconvert.innerHTML = 'Convertir ' //conect y toconvert son dos spans dinámicos cosméticos, verlos como algo aislado del resto del código
conect.innerHTML = 'a'

let units ='<option></option>'
for(obj of conversor) {
    units+='<option>'+obj.unit+'</option>' 
}
dropUnits.innerHTML = units

dropUnits.onchange = function(){
    conect.innerHTML ='a'
    toconvert.innerHTML = 'Convertir '
    let finalUnits='<option></option>'
    if(unit.value){
        for(obj of unitSelector(unit.value).conversions){
            finalUnits+='<option>'+obj.finalUnit+'</option>'
        }
        dropFinalUnits.innerHTML = finalUnits
    } else {
        dropFinalUnits.innerHTML = ''
    }
    if(finalUnit.value){
        argus(unit.value,finalUnit.value)
    } else {
        extraArgs.innerHTML = '' //esto es para el comportamiento de los argumentos extra
    }
    result.innerHTML = ''
}
//

//Esta parte es para el comportamiento de los argumentos extra (aparición según unidades planteadas)
function argus(unit,finalUnit){

    let extraArgs = document.getElementById('extraArgs')

    let args = ''
    let conv = convSelector(unit,finalUnit).args

    for (arg in conv){
        if(arg!='val'){
        args+= '<label for="'+arg+'">'+conv[arg].name+': </label><input name="'+arg+'" id="'+arg+'" type="number"><br>'
        }
    }
    extraArgs.innerHTML = '<br>'+ args  

    if(convSelector(unit,finalUnit).note!==''){
    notes.innerHTML=convSelector(unit,finalUnit).note //esto muestra algun mensaje para la conversión en cuestión, está en su objeto
    }else{notes.innerHTML=''}
}

                        /* Esto también se ocupa de la renderización del resultado cada vez que cambia un campo o selecciono la unidad estino */
dropFinalUnits.onchange = function(){
    if(finalUnit.value){
    argus(unit.value,finalUnit.value)
    } else {
        extraArgs.innerHTML = ''
    }
    result.innerHTML = ''
    
    convert(unit.value,finalUnit.value)
    
    value.onchange = function() {
            convert(unit.value,finalUnit.value)
        }
            let conv = convSelector(unit.value,finalUnit.value).args
            for (arg in conv)  {
            if(arg!=='val'){
                    let el = document.getElementById(arg)
                    el.onchange = function() {
                        convert(unit.value,finalUnit.value)
                    }
                }
            }
}
//

//Esta función setea los valores de args en el objeto destino, luego ejecuta su método conversion(args) y lo renderiza
function convert(unit,finalUnit){
    if(!unit||!finalUnit) return
    let conv = convSelector(unit,finalUnit).args
    conv.val.v = value.value ? value.value : ''
    //esto es para que no de resultados si no están todos los campos completos
    checkValue = [value.value]
    let check = true
    //
        for (arg in conv){
            if(arg!=='val'){
                let el = document.getElementById(arg)
                conv[arg].v = el.value ? el.value : ''
                checkValue.push(el.value)
            }
        }
        
    let convSetted = convSelector(unit,finalUnit)

    for(arg of checkValue){
        if(arg=='') check = false
    }
    
    result.innerHTML = check? convSetted.conversion(convSetted.args) : ''
    conect.innerHTML = check? '=' : 'a'
    toconvert.innerHTML = check? '' : 'Convertir ' 
}
//
