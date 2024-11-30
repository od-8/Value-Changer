const dbutton = document.getElementById('distance-button');
dbutton.addEventListener('click', distanceFunction);
function distanceFunction () {
    let km = document.getElementById('kilometers');
    let m = document.getElementById('meters');
    let cm = document.getElementById('centimeters');
    let mm = document.getElementById('millimeters'); 
    if (km && km.value) {
        km = parseFloat(document.getElementById('kilometers').value);
        m.value = (km * 1000);
        cm.value = (km * 100000);
        mm.value = (km * 1000000);
    }
    if (m && m.value) {
        m = parseFloat(document.getElementById('meters').value);
        km.value = (m / 1000);
        cm.value = (m * 100);
        mm.value = (m * 1000);
    }
    if (cm && cm.value) {
        cm = parseFloat(document.getElementById('centimeters').value);
        km.value = (cm / 100000);
        m.value = (cm / 100);
        mm.value = (cm * 10);
    }
    if (mm && mm.value) {
        mm = parseFloat(document.getElementById('millimeters').value);
        km.value = (mm / 1000000);
        m.value = (mm / 1000);
        cm.value = (mm / 10);
    }
    const cbutton = document.getElementById('clear-distance-button')
    cbutton.addEventListener('click', clearFunction)

    function clearFunction () {
        if (km.value || m.value || cm.value || mm.value) {
            km.value = "";
            m.value = "";
            cm.value = "";
            mm.value = "";
        }
    }
}
const wbutton = document.getElementById('weight-button');
wbutton.addEventListener('click', weightFunction);
function weightFunction () {
    let kg = document.getElementById('kilograms');
    let g = document.getElementById('grams');
    let lbs = document.getElementById('pounds');
    let st = document.getElementById('stone'); 
    if (kg && kg.value) {
        kg = parseFloat(document.getElementById('kilograms').value);
        g.value = (kg * 1000);
        lbs.value = (kg * 2.205);
        st.value = (kg * 0.157);
    } else if (g && g.value) {
        g = parseFloat(document.getElementById('grams').value);
        kg.value = (g / 1000);
        lbs.value = (g / 0.002);
        st.value = (g / 0.00016);
    } else if (lbs && lbs.value) {
        lbs = parseFloat(document.getElementById('pounds').value);
        kg.value = (lbs / 0.454);
        g.value = (lbs * 453.6);
        st.value = (lbs / 0.071);
    }  else if (st && st.value) {
        st = parseFloat(document.getElementById('stone').value);
        kg.value = (st * 6.35);
        g.value = (st * 6350);
        lbs.value = (st * 14);
    }
}
const vbutton = document.getElementById('volume-button');
vbutton.addEventListener('click', volumeFunction);
function volumeFunction () {
    let l = document.getElementById('liters');
    let cl = document.getElementById('centiliters');
    let ml = document.getElementById('milliliters');
    if (l && l.value) {
        l = parseFloat(document.getElementById('liters').value);
        cl.value = (l * 100);
        ml.value = (l * 1000);
    } else if (cl && cl.value) {
        cl = parseFloat(document.getElementById('centiliters').value);
        l.value = (cl / 100);
        ml.value = (cl * 10);
    } else if (ml && ml.value) {
        ml = parseFloat(document.getElementById('milliliters').value);
        l.value = (ml / 10);
        cl.value = (ml / 1000);
    }
}