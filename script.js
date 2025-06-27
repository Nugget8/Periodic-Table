const m = "±";
const n = "⎯";
const p = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "¹⁰", "¹¹", "¹²", "¹³", "¹⁴"];

const backgrounds = [
    "#ffabab", //Alkali metal
    "#ffd5ab", //Alkali earth metal
    "#ffffab", //Lanthanides
    "#d5ffab", //Actinides
    "#abffab", //Transition metal
    "#abffd5", //Metal
    "#abffff", //Semimetal
    "#abd5ff", //Nonmetal
    "#ababff", //Halogen
    "#ffffff", //Noble gas
];

const colors = [
    "#000000",
    "#0000c0",
    "#c00000",
    "#c000c0",
];

const shapes = [
    "./images/cubic.png",
    "./images/tetragonal.png",
    "./images/orthorhombic.png",
    "./images/rhombohedral.png",
    "./images/monoclinic.png",
    "./images/hexagonal.png",
];

const nf = new Intl.NumberFormat("en", { notation: "scientific" });

//#region Layout

const title = document.createElement("title0");
title.textContent = "PERIODIC TABLE OF THE ELEMENTS (LONG FORM)";
document.body.appendChild(title);

const container = document.createElement("container");
document.body.appendChild(container);

const info = document.createElement("info");
document.body.appendChild(info);

let div0 = document.createElement("div");
info.appendChild(div0);

let div1 = document.createElement("div");
div0.appendChild(div1);

let col = document.createElement("div");
div1.appendChild(col);

function ColorDescription(parent, color, description) {
    let cell = document.createElement("div");
    parent.appendChild(cell);
    
    let col = document.createElement("div");
    col.style.backgroundColor = color;
    cell.appendChild(col);
    
    let desc = document.createElement("span");
    desc.textContent = description;
    cell.appendChild(desc);
}

ColorDescription(col, backgrounds[0], "Alkali metals");
ColorDescription(col, backgrounds[1], "Alkali earth metals");
ColorDescription(col, backgrounds[2], "Lanthanides");
ColorDescription(col, backgrounds[3], "Actinides");
ColorDescription(col, backgrounds[4], "Transition metals");

col = document.createElement("space");
div1.appendChild(col);

col = document.createElement("div");
div1.appendChild(col);

ColorDescription(col, backgrounds[5], "Post-transition metals");
ColorDescription(col, backgrounds[6], "Semimetals");
ColorDescription(col, backgrounds[7], "Nonmetals");
ColorDescription(col, backgrounds[8], "Halogens");
ColorDescription(col, backgrounds[9], "Noble gasses");

col = document.createElement("space");
div1.appendChild(col);

col = document.createElement("div");
div1.appendChild(col);

function TextDescription(parent, text, color, description) {
    let cell = document.createElement("div");
    parent.appendChild(cell);
    
    let col = document.createElement("color");
    col.textContent = text;
    col.style.color = color;
    cell.appendChild(col);

    let desc = document.createElement("span");
    desc.textContent = description;
    cell.appendChild(desc);
}

TextDescription(col, "Black symbols", colors[0], "show solid elements");
TextDescription(col, "Blue symbols", colors[1], "show liquid elements");
TextDescription(col, "Red symbols", colors[2], "show gaseous elements");
TextDescription(col, "Magenta symbols", colors[3], "show synthetic elements");

let cell = document.createElement("div");
col.appendChild(cell);

let sign = document.createElement("img");
sign.src = "./images/radioactive.png";
sign.width = 18;
sign.height = 18;
cell.appendChild(sign);

let desc = document.createElement("span");
desc.textContent = "marks radioactive elements";
cell.appendChild(desc);


cell = document.createElement("div");
cell.textContent = "\"" + n + "\" marks no data";
col.appendChild(cell);

col = document.createElement("space");
div1.appendChild(col);

col = document.createElement("div");
div1.appendChild(col);

function CrystalDescription(parent, shape, description) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    parent.appendChild(row);
    
    let structure = document.createElement("img");
    structure.src = shape;
    structure.style.width = "18px";
    structure.style.height = "18px";
    structure.style.marginRight = "4px";
    row.appendChild(structure);
    
    let desc = document.createElement("span");
    desc.textContent = description;
    row.appendChild(desc);
}

CrystalDescription(col, shapes[0], "Cubic");
CrystalDescription(col, shapes[1], "Tetragonal");
CrystalDescription(col, shapes[2], "Orthorhombic");
CrystalDescription(col, shapes[3], "Rhombohedral");
CrystalDescription(col, shapes[4], "Monoclinic");
CrystalDescription(col, shapes[5], "Hexagonal");

function GroupsAndPeriods(group, period, text1, text2, description) {
    const elm = document.createElement("guide");
    elm.className = text2 ? description ? "description" : "" : "period";
    elm.style.left = (group < 3 ? group - 1 : group + 1) * 129 + 16 + "px";
    elm.style.top = (period - 1) * 129 + 16 + (description ? 48 : 0) + "px";

    if (text2) {
        if (description) {
            let cell = document.createElement("div");
            cell.style.margin = "32px 0px 0px 124px";
            cell.textContent = text1;
            elm.appendChild(cell);

            cell = document.createElement("div");
            cell.style.margin = "0px 0px 10px 140px";
            cell.textContent = text2;
            elm.appendChild(cell);
        } else {
            let div = document.createElement("div");
            div.style.textAlign = "center";
            elm.appendChild(div);

            let cell = document.createElement("div");
            cell.textContent = text1;
            div.appendChild(cell);

            cell = document.createElement("div");
            cell.textContent = text2;
            cell.className = text2 == "VIII" ? "special1" : "";
            div.appendChild(cell);
        }
    } else {
        elm.textContent = text1;
    }
    
    document.body.appendChild(elm);
}

let k = document.createElement("special0");
k.textContent = "STP = 273.15 K (0 °C, 32 °F), 100 kPa (1 bar, 14.7 psi)";
document.body.appendChild(k);

document.body.appendChild(document.createElement("special1"));
document.body.appendChild(document.createElement("special2"));
let special = document.createElement("special3");
cell = document.createElement("div");
cell.textContent = "d - block (transition) elements";
special.appendChild(cell);
document.body.appendChild(special);

special = document.createElement("special2");
special.className = "s";
document.body.appendChild(special);
special = document.createElement("special3");
special.className = "s";
document.body.appendChild(special);
cell = document.createElement("div");
cell.textContent = "s - block elements";
special.appendChild(cell);

special = document.createElement("special2");
special.className = "p";
document.body.appendChild(special);
special = document.createElement("special3");
special.className = "p";
document.body.appendChild(special);
cell = document.createElement("div");
cell.textContent = "p - block elements (except He: s - block element)";
special.appendChild(cell);
document.body.appendChild(document.createElement("special4"));

special = document.createElement("special2");
special.className = "f";
document.body.appendChild(special);
special = document.createElement("special3");
special.className = "f";
document.body.appendChild(special);
cell = document.createElement("div");
cell.textContent = "f - block (inner - transition) elements";
special.appendChild(cell);

GroupsAndPeriods(8.1, 1, "1", "IA");
GroupsAndPeriods(1, 2, "1", "IA");
GroupsAndPeriods(2, 2, "2", "IIA");
GroupsAndPeriods(3, 4, "3", "IIA");
GroupsAndPeriods(4, 4, "4", "IVA");
GroupsAndPeriods(5, 4, "5", "VA");
GroupsAndPeriods(6, 4, "6", "VIA");
GroupsAndPeriods(7, 4, "7", "VIIA");
GroupsAndPeriods(8, 4, "8", "\u200e");
GroupsAndPeriods(9, 4, "9", "VIII");
GroupsAndPeriods(10, 4, "10", "\u200e");
GroupsAndPeriods(11, 4, "11", "IB");
GroupsAndPeriods(12, 4, "12", "IIB");
GroupsAndPeriods(13, 2, "13", "IIIA");
GroupsAndPeriods(14, 2, "14", "IVA");
GroupsAndPeriods(15, 2, "15", "VA");
GroupsAndPeriods(16, 2, "16", "VIA");
GroupsAndPeriods(17, 2, "17", "VIIA");
GroupsAndPeriods(18, 1, "18", "VIIIA");

GroupsAndPeriods(18, 1, "← Group", "↓ Period", true);

GroupsAndPeriods(19, 2, "1");
GroupsAndPeriods(19, 3, "2");
GroupsAndPeriods(19, 4, "3");
GroupsAndPeriods(19, 5, "4");
GroupsAndPeriods(19, 6, "5");
GroupsAndPeriods(19, 7, "6");
GroupsAndPeriods(19, 8, "7");

//#endregion

class Elm {
    constructor(group, period, type, number, mass, unstable, symbol, name, appearance, radioactive, density, abundance, electro, oxidation, melt, boil, radius, ionization, electron, crystal, description) {
        const elm = document.createElement("element");
        elm.style.left = (group < 3 || period > 7 ? group - 1 : group + 1) * 129 + 16 + "px";
        elm.style.top = period * 129 + 16 + "px";
        elm.style.backgroundColor = backgrounds[type];

        let cell;
        
        if (description) {
            const desc = document.createElement("description");
            document.body.appendChild(desc);

            let col = document.createElement("div");
            desc.appendChild(col);

            cell = document.createElement("div");
            cell.style.marginTop = "10px";
            cell.textContent = "Atomic number " + n;
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.style.marginTop = "3px";
            cell.textContent = "Oxidation states " + n;
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.textContent = "Atomic radius (van der Waals, pm) " + n;
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.textContent = "Melting point (°C) " + n;
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.style.marginTop = "-1px";
            cell.textContent = "Density at STP (g/L) " + n;
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.style.marginTop = "2px";
            cell.textContent = "Name (symbol above) " + n;
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.style.marginTop = "3px";
            cell.textContent = "Electron structure " + n;
            col.appendChild(cell);

            desc.appendChild(elm);

            col = document.createElement("div");
            col.className = "right";
            desc.appendChild(col);

            cell = document.createElement("div");
            cell.style.marginTop = "10px";
            cell.textContent = n + " Atomic mass (u)";
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.style.marginTop = "3px";
            cell.textContent = n + " Electronegativity (Pauling scale)";
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.textContent = n + " First ionization energy (eV)";
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.textContent = n + " Boiling point (°C)";
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.style.marginTop = "-1px";
            cell.textContent = n + " Natural abundance in the Earth's crust and oceans (ppm)";
            col.appendChild(cell);

            cell = document.createElement("div");
            cell.style.marginTop = "19px";
            cell.textContent = n + " Crystal structure";
            col.appendChild(cell);
        } else {
            document.body.appendChild(elm);
        }
        
        let row = document.createElement("row");
        row.className = "header";
        elm.appendChild(row);
        
        cell = document.createElement("div");
        cell.textContent = number;
        row.appendChild(cell);

        if (radioactive) {
            cell = document.createElement("img");
            cell.src = "./images/radioactive.png";
            cell.width = 18;
            cell.height = 18;
        } else {
            cell = document.createElement("div");
        }
        row.appendChild(cell);

        cell = document.createElement("div");
        cell.textContent = parseFloat((Math.round(mass * 1000000) / 1000000).toPrecision(6));
        row.appendChild(cell);

        row = document.createElement("row");
        row.style.marginBottom = "-5px";
        elm.appendChild(row);

        cell = document.createElement("div");
        cell.textContent = oxidation;
        row.appendChild(cell);

        cell = document.createElement("div");
        cell.textContent = electro;
        row.appendChild(cell);

        row = document.createElement("row");
        elm.appendChild(row);

        let col = document.createElement("div");
        row.appendChild(col);

        cell = document.createElement("div");
        cell.textContent = radius;
        col.appendChild(cell);

        cell = document.createElement("div");
        let mult;
        if (melt != n) {
            melt -= 273.15;
            mult = melt > 300 ? 1 : 1000;
        }
        cell.textContent = melt == n ? n : parseFloat((Math.round(melt * mult) / mult).toPrecision(4));
        col.appendChild(cell);

        cell = document.createElement("div");
        cell.textContent = density == n ? n : parseFloat(Math.round(density * 100000000) / 100000);
        col.appendChild(cell);

        let stateColor;
        if (number > 94) {
            stateColor = colors[3];
        } else if (melt >= 20) {
            stateColor = colors[0];
        } else if (boil > 50 + 273.15) {
            stateColor = colors[1];
        } else {
            stateColor = colors[2];
        }

        cell = document.createElement("symbol");
        cell.textContent = symbol;
        cell.style.color = stateColor;
        row.appendChild(cell);

        col = document.createElement("div");
        col.className = "right";
        row.appendChild(col);

        cell = document.createElement("div");
        cell.textContent = ionization;
        col.appendChild(cell);

        cell = document.createElement("div");
        if (boil != n) {
            boil -= 273.15;
            mult = boil > 300 ? 1 : 1000;
        }
        cell.textContent = boil == n ? n : parseFloat((Math.round(boil * mult) / mult).toPrecision(4));
        col.appendChild(cell);

        cell = document.createElement("div");
        cell.textContent = abundance == 0 ? n : abundance < 1e-5 ? nf.format(abundance) : abundance;
        col.appendChild(cell);

        row = document.createElement("row");
        row.className = "name";
        row.textContent = name;
        elm.appendChild(row);

        row = document.createElement("row");
        row.className = "footer";
        elm.appendChild(row);

        cell = document.createElement("div");
        cell.textContent = electron;
        row.appendChild(cell);

        if (crystal >= 0) {
            cell = document.createElement("img");
            cell.src = shapes[crystal];
            cell.width = 18;
            cell.height = 18;
            row.appendChild(cell);
        }
    }
}

const table = new Array();

table.push(new Elm(9.5, 1, 7, 1, 1.008, false, "H", "Hydrogen", "#e784b2", false, 0.00008988, 1400, 2.2, m + "1", 13.81, 20.28, 120, 13.598, "1s" + p[1], 5, true));

table.push(new Elm(18, 1, 9, 2, 4.0026, false, "He", "Helium", "#fdb9f4", false, 0.0001785, 0.008, n, "0", 0.95, 4.22, 140, 24.587, "1s" + p[2], 5));

table.push(new Elm(1, 2, 0, 3, 7, false, "Li", "Lithium", "#676862", false, 0.534, 20, 0.98, "+1", 453.65, 1615, 182, 5.392, "(He)2s" + p[1], 0));
table.push(new Elm(2, 2, 1, 4, 9.012183, false, "Be", "Beryllium", "#58595d", false, 1.85, 2.8, 1.57, "+2", 1560, 2744, 153, 9.323, "(He)2s" + p[2], 5));
table.push(new Elm(13, 2, 6, 5, 10.81, false, "B", "Boron", "#3d444c", false, 2.370, 10, 2.04, "+3", 2348, 4273, 192, 8.298, "(He)2s" + p[2] + "2p" + p[1], 3));
table.push(new Elm(14, 2, 7, 6, 12.011, false, "C", "Carbon", "#4a4a4a", false, 2.267, 200, 2.55, m + "4, +2", 3823, 4098, 170, 11.26, "(He)2s" + p[2] + "2p" + p[2], 5));
table.push(new Elm(15, 2, 7, 7, 14.007, false, "N", "Nitrogen", "#cc7bfb", false, 0.0012506, 19, 3.04, "+5, +4, " + m + "3, " + m + "2, " + m + "1", 63.15, 77.36, 155, 14.534, "(He)2s" + p[2] + "2p" + p[3], 5));
table.push(new Elm(16, 2, 7, 8, 15.999, false, "O", "Oxygen", "#b6daf2", false, 0.001429, 461000, 3.44, "-2", 54.36, 90.2, 152, 13.618, "(He)2s" + p[2] + "2p" + p[4], 0));
table.push(new Elm(17, 2, 8, 9, 18.99840316, false, "F", "Flourine", "#c4d165", false, 0.001696, 585, 3.98, "-1", 53.53, 85.03, 135, 17.423, "(He)2s" + p[2] + "2p" + p[5], 0));
table.push(new Elm(18, 2, 9, 10, 20.18, false, "Ne", "Neon", "#e0617e", false, 0.0008999, 0.0051, n, "0", 24.56, 27.07, 154, 21.565, "(He)2s" + p[2] + "2p" + p[6], 0));

table.push(new Elm(1, 3, 0, 11, 22.9897693, false, "Na", "Sodium", "#aaa0a1", false, 0.970, 23600, 0.93, "+1", 370.95, 1156, 227, 5.139, "(Ne)3s" + p[1], 0));
table.push(new Elm(2, 3, 1, 12, 24.305, false, "Mg", "Magnesium", "#adadad", false, 1.740, 23300, 1.31, "+2", 923, 1363, 173, 7.646, "(Ne)3s" + p[2], 5));
table.push(new Elm(13, 3, 5, 13, 26.981538, false, "Al", "Aluminium", "#bdc8ce", false, 2.700, 82300, 1.61, "+3", 933.437, 2792, 184, 5.986, "(Ne)3s" + p[2] + "3p" + p[1], 0));
table.push(new Elm(14, 3, 6, 14, 28.085, false, "Si", "Silicon", "#696e72", false, 2.3296, 282000, 1.9, m + "4, +2", 1687, 3538, 210, 8.152, "(Ne)3s" + p[2] + "3p" + p[2], 0));
table.push(new Elm(15, 3, 7, 15, 30.973762, false, "P", "Phophorus", "#e9e9e9", false, 1.820, 1050, 2.19, "+5, " + m + "3", 317.3, 553.65, 180, 10.487, "(Ne)3s" + p[2] + "3p" + p[3], 4));
table.push(new Elm(16, 3, 7, 16, 32.07, false, "S", "Sulphur", "#cacc6b", false, 2.067, 350, 2.58, "+6, +4, -2", 388.36, 717.75, 180, 10.36, "(Ne)3s" + p[2] + "3p" + p[4], 2));
table.push(new Elm(17, 3, 8, 17, 35.45, false, "Cl", "Chlorine", "#bcb117", false, 0.003214, 145, 3.16, "+7, +5, " + m + "1", 171.65, 239.11, 175, 12.968, "(Ne)3s" + p[2] + "3p" + p[5], 2));
table.push(new Elm(18, 3, 9, 18, 39.9, false, "Ar", "Argon", "#b538ec", false, 0.0017837, 3.5, n, "0", 83.8, 87.3, 188, 15.76, "(Ne)3s" + p[2] + "3p" + p[6], 0));

table.push(new Elm(1, 4, 0, 19, 39.0983, false, "K", "Potassium", "#636b6e", false, 0.890, 20900, 0.82, "+1", 336.53, 1032, 275, 4.341, "(Ar)4s" + p[1], 0));
table.push(new Elm(2, 4, 1, 20, 40.08, false, "Ca", "Calcium", "#aea797", false, 1.540, 41500, 1, "+2", 1115, 1757, 231, 6.113, "(Ar)4s" + p[2], 0));
table.push(new Elm(3, 4, 4, 21, 44.95591, false, "Sc", "Scandium", "#847c6f", false, 2.990, 22, 1.36, "+3", 1814, 3109, 211, 6.561, "(Ar)4s" + p[2] + "3d" + p[1], 5));
table.push(new Elm(4, 4, 4, 22, 47.867, false, "Ti", "Titanium", "#9c9c90", false, 4.500, 5650, 1.54, "+4, +3, +2", 1941, 3560, 187, 6.828, "(Ar)4s" + p[2] + "3d" + p[2], 5));
table.push(new Elm(5, 4, 4, 23, 50.9415, false, "V", "Vanadium", "#6d747c", false, 6.000, 120, 1.63, "+5, +4, +3, +2", 2183, 3680, 179, 6.746, "(Ar)4s" + p[2] + "3d" + p[3], 0));
table.push(new Elm(6, 4, 4, 24, 51.996, false, "Cr", "Chromium", "#858b97", false, 7.150, 102, 1.66, "+6, +3, +2", 2180, 2944, 189, 6.767, "(Ar)4s" + p[1] + "3d" + p[5], 0));
table.push(new Elm(7, 4, 4, 25, 54.93804, false, "Mn", "Manganese", "#514f50", false, 7.300, 950, 1.55, "+7, +4, +3, +2", 1519, 2334, 197, 7.434, "(Ar)4s" + p[2] + "3d" + p[5], 0));
table.push(new Elm(8, 4, 4, 26, 55.84, false, "Fe", "Iron", "#6a6a6a", false, 7.874, 56300, 1.83, "+3, +2", 1811, 3134, 194, 7.902, "(Ar)4s" + p[2] + "3d" + p[6], 0));
table.push(new Elm(9, 4, 4, 27, 58.93319, false, "Co", "Cobalt", "#777781", false, 8.860, 25, 1.88, "+3, +2", 1768, 3200, 192, 7.881, "(Ar)4s" + p[2] + "3d" + p[7], 5));
table.push(new Elm(10, 4, 4, 28, 58.693, false, "Ni", "Nickel", "#838174", false, 8.912, 84, 1.91, "+3, +2", 1728, 3186, 163, 7.640, "(Ar)4s" + p[2] + "3d" + p[8], 0));
table.push(new Elm(11, 4, 4, 29, 63.55, false, "Cu", "Copper", "#e1845b", false, 8.933, 60, 1.9, "+2, +1", 1357.77, 2835, 140, 7.726, "(Ar)4s" + p[1] + "3d" + p[10], 0));
table.push(new Elm(12, 4, 4, 30, 65.4, false, "Zn", "Zinc", "#8c9497", false, 7.134, 70, 1.65, "+2", 692.68, 1180, 139, 9.394, "(Ar)4s" + p[2] + "3d" + p[10], 5));
table.push(new Elm(13, 4, 5, 31, 69.723, false, "Ga", "Gallium", "#9caeb8", false, 5.910, 19, 1.81, "+3", 302.91, 2477, 187, 5.999, "(Ar)4s" + p[2] + "3d" + p[10] + "4p" + p[1], 2));
table.push(new Elm(14, 4, 6, 32, 72.63, false, "Ge", "Germanium", "#475148", false, 5.323, 1.5, 2.01, "+4, +2", 1211.4, 3106, 211, 7.9, "(Ar)4s" + p[2] + "3d" + p[10] + "4p" + p[2], 0));
table.push(new Elm(15, 4, 6, 33, 74.92159, false, "As", "Arsenic", "#62655e", false, 5.776, 1.8, 2.18, "+5, " + m + "3", 1090, 887, 185, 9.815, "(Ar)4s" + p[2] + "3d" + p[10] + "4p" + p[3], 3));
table.push(new Elm(16, 4, 7, 34, 78.97, false, "Se", "Selenium", "#303129", false, 4.809, 0.05, 2.55, "+6, +4, -2", 493.65, 958, 190, 9.752, "(Ar)4s" + p[2] + "3d" + p[10] + "4p" + p[4], 5));
table.push(new Elm(17, 4, 8, 35, 79.90, false, "Br", "Bromine", "#ab4d27", false, 3.110, 2.4, 2.96, "+5, " + m + "1", 265.95, 331.95, 183, 11.814, "(Ar)4s" + p[2] + "3d" + p[10] + "4p" + p[5], 2));
table.push(new Elm(18, 4, 9, 36, 83.8, false, "Kr", "Krypton", "#ad97e2", false, 0.003733, 0.0001, 3, "0", 115.79, 119.93, 202, 14, "(Ar)4s" + p[2] + "3d" + p[10] + "4p" + p[6], 0));

table.push(new Elm(1, 5, 0, 37, 85.468, false, "Rb", "Rubidium", "#7a766a", false, 1.53, 90, 0.82, "+1", 312.46, 961, 303, 4.177, "(Kr)5s" + p[1], 0));
table.push(new Elm(2, 5, 1, 38, 87.62, false, "Sr", "Strontium", "#707068", false, 2.640, 370, 0.95, "+2", 1050, 1655, 249, 5.695, "(Kr)5s" + p[2], 0));
table.push(new Elm(3, 5, 4, 39, 88.90584, false, "Y", "Yttrium", "#8b8376", false, 4.470, 33, 1.22, "+3", 1795, 3618, 219, 6.217, "(Kr)5s" + p[2] + "4d" + p[1], 5));
table.push(new Elm(4, 5, 4, 40, 91.22, false, "Zr", "Zirconium", "#989792", false, 6.520, 165, 1.33, "+4", 2128, 4682, 186, 6.634, "(Kr)5s" + p[2] + "4d" + p[2], 5));
table.push(new Elm(5, 5, 4, 41, 92.90637, false, "Nb", "Niobium", "#707068", false, 8.570, 20, 1.6, "+5, +3", 2750, 5017, 207, 6.759, "(Kr)5s" + p[1] + "4d" + p[4], 0));
table.push(new Elm(6, 5, 4, 42, 95.95, false, "Mo", "Molybdenum", "#52525e", false, 10.200, 1.2, 2.16, "+6", 2896, 4912, 209, 7.092, "(Kr)5s" + p[1] + "4d" + p[5], 0));
table.push(new Elm(7, 5, 4, 43, 96.90636, false, "Tc", "Technetium", "#aca7a3", true, 11.000, 1.35e-12, 1.9, "+7, +6, +4", 2430, 4538, 209, 7.28, "(Kr)5s" + p[2] + "4d" + p[5], 5));
table.push(new Elm(8, 5, 4, 44, 101.1, false, "Ru", "Ruthenium", "#737176", false, 12.100, 0.001, 2.2, "+3", 2607, 4423, 207, 7.361, "(Kr)5s" + p[1] + "4d" + p[7], 5));
table.push(new Elm(9, 5, 4, 45, 102.9055, false, "Rh", "Rhodium", "#afa6a1", false, 12.400, 0.001, 2.28, "+3", 2237, 3968, 195, 7.459, "(Kr)5s" + p[1] + "4d" + p[8], 0));
table.push(new Elm(10, 5, 4, 46, 106.42, false, "Pd", "Palladium", "#a7a6a2", false, 12.000, 0.015, 2.2, "+3, +2", 1828.05, 3236, 202, 8.337, "(Kr)4d" + p[10], 0));
table.push(new Elm(11, 5, 4, 47, 107.868, false, "Ag", "Silver", "#cccfc6", false, 10.501, 0.075, 1.93, "+1", 1234.93, 2435, 172, 7.576, "(Kr)5s" + p[1] + "4d" + p[10], 0));
table.push(new Elm(12, 5, 4, 48, 112.41, false, "Cd", "Cadmium", "#83827e", false, 8.690, 0.15, 1.69, "+2", 594.22, 1040, 158, 8.994, "(Kr)5s" + p[2] + "4d" + p[10], 5));
table.push(new Elm(13, 5, 5, 49, 114.818, false, "In", "Indium", "#83827e", false, 7.310, 0.25, 1.78, "+3", 429.75, 2345, 193, 5.786, "(Kr)5s" + p[2] + "4d" + p[10] + "5p" + p[1], 1));
table.push(new Elm(14, 5, 5, 50, 118.71, false, "Sn", "Tin", "#bbb7b6", false, 7.287, 9.8, 1.96, "+4, +2", 505.08, 2875, 217, 7.344, "(Kr)5s" + p[2] + "4d" + p[10] + "5p" + p[2], 1));
table.push(new Elm(15, 5, 6, 51, 121.76, false, "Sb", "Antimony", "#939b9e", false, 6.685, 0.2, 2.05, "+5, " + m + "3", 903.78, 1860, 206, 8.64, "(Kr)5s" + p[2] + "4d" + p[10] + "5p" + p[3], 3));
table.push(new Elm(16, 5, 6, 52, 127.6, false, "Te", "Tellurium", "#6a6762", false, 6.232, 0.001, 2.1, "+6, +4, -2", 722.66, 1261, 206, 9.01, "(Kr)5s" + p[2] + "4d" + p[10] + "5p" + p[4], 5));
table.push(new Elm(17, 5, 8, 53, 126.9045, false, "I", "Iodine", "#72547a", false, 4.930, 0.45, 2.66, "+7, +5, " + m + "1", 386.85, 457.55, 198, 10.451, "(Kr)5s" + p[2] + "4d" + p[10] + "5p" + p[5], 2));
table.push(new Elm(18, 5, 9, 54, 131.29, false, "Xe", "Xenon", "#6f9cf1", false, 0.005887, 3e-5, 2.6, "0", 161.36, 165.03, 216, 12.13, "(Kr)5s" + p[2] + "4d" + p[10] + "5p" + p[6], 0));

table.push(new Elm(1, 6, 0, 55, 132.9054520, false, "Cs", "Cesium", "#6f6742", false, 1.930, 3, 0.79, "+1", 301.59, 944, 343, 3.894, "(Xe)6s" + p[1], 0));
table.push(new Elm(2, 6, 1, 56, 137.33, false, "Ba", "Barium", "#3c403f", false, 3.620, 425, 0.89, "+2", 1000, 2170, 268, 5.212, "(Xe)6s" + p[2], 0));

table.push(new Elm(3, 8.5, 2, 57, 138.9055, false, "La", "Lanthanum", "#525961", false, 6.150, 39, 1.1, "+3", 1191, 3737, 240, 5.577, "(Xe)6s" + p[2] + "5d" + p[1], 5));
table.push(new Elm(4, 8.5, 2, 58, 140.116, false, "Ce", "Cerium", "#565b54", false, 6.770, 66.5, 1.12, "+4, +3", 1071, 3697, 235, 5.539, "(Xe)6s" + p[2] + "4f" + p[1] + "5d" + p[1], 0));
table.push(new Elm(5, 8.5, 2, 59, 140.90766, false, "Pr", "Praseodymium", "#727177", false, 6.770, 9.2, 1.13, "+3", 1204, 3793, 239, 5.464, "(Xe)6s" + p[2] + "4f" + p[3], 5));
table.push(new Elm(6, 8.5, 2, 60, 144.24, false, "Nd", "Neodymium", "#5d6162", false, 7.010, 41.5, 1.14, "+3", 1294, 3347, 229, 5.525, "(Xe)6s" + p[2] + "4f" + p[4], 5));
table.push(new Elm(7, 8.5, 2, 61, 145.91276, false, "Pm", "Promethium", false, true, 7.260, 2e-17, n, "+3", 1315, 3273, 236, 5.55, "(Xe)6s" + p[2] + "4f" + p[5], 5));
table.push(new Elm(8, 8.5, 2, 62, 150.4, false, "Sm", "Samarium", "#363942", true, 7.520, 7.05, 1.17, "+3, +2", 1347, 2067, 229, 5.644, "(Xe)6s" + p[2] + "4f" + p[6], 3));
table.push(new Elm(9, 8.5, 2, 63, 151.964, false, "Eu", "Europium", "#6c7476", false, 5.240, 2, n, "+3, +2", 1095, 1802, 233, 5.67, "(Xe)6s" + p[2] + "4f" + p[7], 0));
table.push(new Elm(10, 8.5, 2, 64, 157.2, false, "Gd", "Gadolinium", "#6d6e68", false, 7.900, 6.2, 1.2, "+3", 1586, 3546, 237, 6.15, "(Xe)6s" + p[2] + "4f" + p[7] + "5d" + p[1], 5));
table.push(new Elm(11, 8.5, 2, 65, 158.92535, false, "Tb", "Terbium", "#7c7c7a", false, 8.230, 1.2, n, "+3", 1629, 3503, 221, 5.864, "(Xe)6s" + p[2] + "4f" + p[9], 5));
table.push(new Elm(12, 8.5, 2, 66, 162.5, false, "Dy", "Dysprosium", "#827d7a", false, 8.550, 5.2, 1.22, "+3", 1685, 2840, 229, 5.939, "(Xe)6s" + p[2] + "4f" + p[10], 5));
table.push(new Elm(13, 8.5, 2, 67, 164.93033, false, "Ho", "Holmium", "#6c6b67", false, 8.800, 1.3, 1.23, "+3", 1747, 2973, 216, 6.022, "(Xe)6s" + p[2] + "4f" + p[11], 5));
table.push(new Elm(14, 8.5, 2, 68, 167.26, false, "Er", "Erbium", "#7d7f72", false, 9.070, 3.5, 1.24, "+3", 1802, 3141, 235, 6.108, "(Xe)6s" + p[2] + "4f" + p[12], 5));
table.push(new Elm(15, 8.5, 2, 69, 168.93422, false, "Tm", "Thulium", "#736f6e", false, 9.320, 0.52, 1.25, "+3", 1818, 2223, 227, 6.184, "(Xe)6s" + p[2] + "4f" + p[13], 5));
table.push(new Elm(16, 8.5, 2, 70, 173.05, false, "Yb", "Ytterbium", "#8b8a8f", false, 6.900, 3.2, n, "+3, +2", 1092, 1469, 242, 6.254, "(Xe)6s" + p[2] + "4f" + p[14], 0));

table.push(new Elm(3, 6, 4, 71, 174.9668, false, "Lu", "Lutetium", "#969694", false, 9.840, 0.8, 1.27, "+3", 1936, 3675, 221, 5.426, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[1], 5));
table.push(new Elm(4, 6, 4, 72, 178.49, false, "Hf", "Hafnium", "#7c7d78", false, 13.300, 3, 1.3, "+4", 2506, 4876, 212, 6.825, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[2], 5));
table.push(new Elm(5, 6, 4, 73, 180.9479, false, "Ta", "Tantalum", "#626a6c", false, 16.400, 2, 1.5, "+5", 3290, 5731, 217, 7.89, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[3], 0));
table.push(new Elm(6, 6, 4, 74, 183.84, false, "W", "Tungsten", "#414143", false, 19.300, 1.25, 2.36, "+6", 3695, 5828, 210, 7.98, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[4], 0));
table.push(new Elm(7, 6, 4, 75, 186.207, false, "Re", "Rhenium", "#807a86", false, 20.800, 0.0007, 1.9, "+7, +6, +4", 3459, 5869, 217, 7.88, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[5], 5));
table.push(new Elm(8, 6, 4, 76, 190.2, false, "Os", "Osmium", "#4b6b76", false, 22.570, 0.0015, 2.2, "+4, +3", 3306, 5285, 216, 8.7, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[6], 5));
table.push(new Elm(9, 6, 4, 77, 192.22, false, "Ir", "Iridium", "#8b8682", false, 22.420, 0.001, 2.2, "+4, +3", 2719, 4701, 202, 9.1, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[7], 0));
table.push(new Elm(10, 6, 4, 78, 195.08, false, "Pt", "Platinum", "#a5a6a0", false, 21.460, 0.005, 2.28, "+4, +2", 2041.55, 4098, 209, 9, "(Xe)6s" + p[1] + "4f" + p[14] + "5d" + p[9], 0));
table.push(new Elm(11, 6, 4, 79, 196.96657, false, "Au", "Gold", "#e5b803", false, 19.282, 0.004, 2.54, "+3, +1", 1337.33, 3129, 166, 9.226, "(Xe)6s" + p[1] + "4f" + p[14] + "5d" + p[10], 0));
table.push(new Elm(12, 6, 4, 80, 200.59, false, "Hg", "Mercury", "#808082", false, 13.534, 0.085, 2, "+2, +1", 234.32, 629.88, 209, 10.438, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[10], 3));
table.push(new Elm(13, 6, 5, 81, 204.383, false, "Tl", "Thallium", "#6b696e", false, 11.800, 0.85, 1.62, "+3, +1", 577, 1746, 196, 6.108, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[10] + "6p" + p[1], 5));
table.push(new Elm(14, 6, 5, 82, 207, false, "Pb", "Lead", "#656368", false, 11.342, 14, 2.33, "+4, +2", 600.61, 2022, 202, 7.417, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[10] + "6p" + p[2], 0));
table.push(new Elm(15, 6, 5, 83, 208.9804, false, "Bi", "Bismuth", "#8f8f8f", false, 9.807, 0.0085, 2.02, "+5, +3", 544.55, 1837, 207, 7.289, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[10] + "6p" + p[3], 3));
table.push(new Elm(16, 6, 6, 84, 208.98243, true, "Po", "Polonium", false, true, 9.320, 2e-10, 2, "+4, +2", 527, 1235, 197, 8.417, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[10] + "6p" + p[4], 4));
table.push(new Elm(17, 6, 8, 85, 209.98715, true, "At", "Astatine", false, true, 7.000, 3e-20, 2.2, "+7, +5, +3, " + m + "1", 575, n, 202, 9.5, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[10] + "6p" + p[5], 0));
table.push(new Elm(18, 6, 9, 86, 222.01758, true, "Rn", "Radon", false, true, 0.00973, 4e-13, n, "0", 202, 211.45, 220, 10.745, "(Xe)6s" + p[2] + "4f" + p[14] + "5d" + p[10] + "6p" + p[6], 0));

table.push(new Elm(1, 7, 0, 87, 223.01973, true, "Fr", "Francium", false, true, n, 1e-18, 0.7, "+1", 300, n, 348, 3.9, "(Rn)7s" + p[1], 0));
table.push(new Elm(2, 7, 1, 88, 226.02541, true, "Ra", "Radium", "#776968", true, 5.000, 9e-7, 0.89, "+2", 973, 1413, 283, 5.279, "(Rn)7s" + p[2], 0));

table.push(new Elm(3, 9.5, 3, 89, 227.02775, true, "Ac", "Actinium", false, true, 10.070, 6e-13, 0.7, "+3", 1324, 3471, 260, 5.17, "(Rn)7s" + [2] + "6d" + p[1], 0));
table.push(new Elm(4, 9.5, 3, 90, 232.038, false, "Th", "Thorium", "#686a69", true, 11.720, 9.6, 0.9, "+4", 2023, 5061, 237, 6.08, "(Rn)7s" + [2] + "6d" + p[2], 0));
table.push(new Elm(5, 9.5, 3, 91, 231.03588, false, "Pa", "Protactinium", "#1b2433", true, 15.370, 1.4e-6, 1.1, "+5, +4", 1845, n, 243, 5.89, "(Rn)7s" + p[2] + "5f" + p[2] + "6d" + [1], 2));
table.push(new Elm(6, 9.5, 3, 92, 238.0289, false, "U", "Uranium", "#6a6762", true, 18.950, 2.7, 1.3, "+6, +5, +4, +3", 1408, 4404, 240, 6.194, "(Rn)7s" + p[2] + "5f" + p[3] + "6d" + [1], 2));
table.push(new Elm(7, 9.5, 3, 93, 237.048172, true, "Np", "Neptunium", "#8f9a9c", true, 20.250, 3e-12, 1.5, "+6, +5, +4, +3", 917, 4175, 221, 6.266, "(Rn)7s" + p[2] + "5f" + p[4] + "6d" + [1], 2));
table.push(new Elm(8, 9.5, 3, 94, 244.0642, true, "Pu", "Plutonium", "#7a3339", true, 19.840, 3e-11, 1.38, "+6, +5, +4, +3", 913, 3501, 243, 6.06, "(Rn)7s" + p[2] + "5f" + p[6], 4));
table.push(new Elm(9, 9.5, 3, 95, 243.061380, true, "Am", "Americium", "#464a53", true, 13.69, 0, 1.36, "+6, +5, +4, +3", 1449, 2284, 244, 5.993, "(Rn)7s" + p[2] + "5f" + p[7], 5));
table.push(new Elm(10, 9.5, 3, 96, 247.07035, true, "Cm", "Curium", "#767362", true, 13.510, 0, 1.28, "+3", 1618, 3400, 245, 6.02, "(Rn)7s" + p[2] + "5f" + p[7] + "6d" + p[1], 5));
table.push(new Elm(11, 9.5, 3, 97, 247.07031, true, "Bk", "Berkelium", "#60615c", true, 14.000, 0, 1.3, "+4, +3", 1323, n, 244, 6.23, "(Rn)7s" + p[2] + "5f" + p[9], 5));
table.push(new Elm(12, 9.5, 3, 98, 251.07959, true, "Cf", "Californium", "#75747a", true, n, 0, 1.3, "+3", 1173, n, 245, 6.3, "(Rn)7s" + p[2] + "5f" + p[10], 5));
table.push(new Elm(13, 9.5, 3, 99, 252.0830, true, "Es", "Einsteinium", false, true, n, 0, 1.3, "+3", 1133, n, 245, 6.42, "(Rn)7s" + p[2] + "5f" + p[11], -1));
table.push(new Elm(14, 9.5, 3, 100, 257.09843, true, "Fm", "Fermium", false, true, n, 0, 1.3, "+3", 1800, n, n, 6.5, "(Rn)7s" + p[2] + "5f" + p[12], -1));
table.push(new Elm(15, 9.5, 3, 101, 258.09843, true, "Md", "Mendelevium", false, true, n, 0, 1.3, "+3, +2", 1100, n, n, 6.58, "(Rn)7s" + p[2] + "5f" + p[13], -1));
table.push(new Elm(16, 9.5, 3, 102, 259.101, true, "No", "Nobelium", false, true, n, 0, 1.3, "+3, +2", 1100, n, n, 6.65, "(Rn)7s" + p[2] + "5f" + p[14], -1));

table.push(new Elm(3, 7, 4, 103, 266.12, true, "Lr", "Lawrencium", false, true, n, 0, n, "+3", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[1], -1));
table.push(new Elm(4, 7, 4, 104, 267.122, true, "Rf", "Rutherfordium", false, true, n, 0, n, "+4", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[2], -1));
table.push(new Elm(5, 7, 4, 105, 268.126, true, "Db", "Dubnium", false, true, n, 0, n, "+5, +4, +3", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[3], -1));
table.push(new Elm(6, 7, 4, 106, 269.128, true, "Sg", "Seaborgium", false, true, n, 0, n, "+6, +5, +4, +3, 0", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[4], -1));
table.push(new Elm(7, 7, 4, 107, 270.133, true, "Bh", "Bohrium", false, true, n, 0, n, "+7, +5, +4, +3", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[5], -1));
table.push(new Elm(8, 7, 4, 108, 269.1336, true, "Hs", "Hassium", false, true, n, 0, n, "+8, +6, +5, +4, +3, +2", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[6], -1));
table.push(new Elm(9, 7, 4, 109, 277.154, true, "Mt", "Meitnerium", false, true, n, 0, n, "+9, +8, +6, +4, +3, +1", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[7], -1));
table.push(new Elm(10, 7, 4, 110, 282.166, true, "Ds", "Darmastadtium", false, true, n, 0, n, "+8, +6, +4, +2, 0", n, n, n, n, "(Rn)7s" + p[1] + "5f" + p[14] + "6d" + p[9], -1));
table.push(new Elm(11, 7, 4, 111, 282.169, true, "Rg", "Roentgenium", false, true, n, 0, n, "+5, +3, " + m + "1", n, n, n, n, "(Rn)7s" + p[1] + "5f" + p[14] + "6d" + p[10], -1));
table.push(new Elm(12, 7, 4, 112, 286.179, true, "Cn", "Copernicium", false, true, n, 0, n, "+2, +1, 0", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[10], -1));
table.push(new Elm(13, 7, 5, 113, 286.182, true, "Nh", "Nihonium", false, true, n, 0, n, n, n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[10] + "7p" + p[1], -1));
table.push(new Elm(14, 7, 5, 114, 290.192, true, "Fl", "Flerovium", false, true, n, 0, n, "+6, +4, +2, +1, 0", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[10] + "7p" + p[2], -1));
table.push(new Elm(15, 7, 5, 115, 290.196, true, "Mc", "Moscovium", false, true, n, 0, n, "+3, +1", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[10] + "7p" + p[3], -1));
table.push(new Elm(16, 7, 5, 116, 293.205, true, "Lv", "Livermorium", false, true, n, 0, n, "+4, " + m + "2", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[10] + "7p" + p[4], -1));
table.push(new Elm(17, 7, 8, 117, 294.211, true, "Ts", "Tennessine", false, true, n, 0, n, "+5, +3, " + m + "1", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[10] + "7p" + p[5], -1));
table.push(new Elm(18, 7, 9, 118, 295.216, true, "Og", "Oganesson", false, true, n, 0, n, "+6, +4, +2, " + m + "1, 0", n, n, n, n, "(Rn)7s" + p[2] + "5f" + p[14] + "6d" + p[10] + "7p" + p[6], -1));

const lanthanides = document.createElement("inner");
lanthanides.className = "lanthanides";
lanthanides.style.backgroundColor = backgrounds[2];
lanthanides.textContent = "La " + n + " Yb";
document.body.appendChild(lanthanides);

const actinides = document.createElement("inner");
actinides.className = "actinides";
actinides.style.backgroundColor = backgrounds[3];
actinides.textContent = "Ac " + n + " No";
document.body.appendChild(actinides);