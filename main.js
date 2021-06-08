
const Class = [
    "Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Mystic", "Paladin", "Ranger",
"Rougue", "Sorcerer", "Warlock", "Wizard"
]; 


const Subclass = []; 

const Artificer_sub = [
    "Alchemist", "Armorer", "Artillerist", "Battle Smith"
];
const Barbarian_sub = [
    "Path of the Ancestral Guardian", "Path of the Battlerager", "Path of the Beast", "Path of the Berserker", 
    "Path of the Storm Herald", "Path of the Totem Warrior", "Path of Wild Magic", "Path of the Zealot"
];
const Bard_sub = [
    "College of Creation", "College of Eloquence", "College of Glamour", "College of Lore", "College of Spirits", 
    "College of Swords", "College of Valor", "College of Whispers"
];
const Blood_Hunter_sub = [
    "Order of the Ghostslayer", "Order of the Lycan", "Order of the Mutant", "Order of the Profane Soul"
];
const Cleric_sub = [
    "Arcana Domain", "Death Domain", "Forge Domain", "Grave Domain", "Knowledge Domain", "Life Domain", "Light Domain", 
    "Nature Domain", "Order Domain", "Peace Domain", "Tempest Domain", "Trickery Domain", "Twilight Domain", "War Domain"
];
const Druid_sub = [
    "Circle of Dreams", "Circle of the Land", "Circle of the Moon", "Circle of the Shepherd", "Circle of Spores", 
    "Circle of Stars", "Circle of Wildfire"
];
const Fighter_sub = [
    "Arcane Archer", "Banneret", "Battle Master", "Cavalier", "Champion", "Echo Knight", "Eldritch Knight", 
    "Psi Warrior", "Rune Knight", "Samurai"
];
const Monk_sub = [
    "Way of Mercy", "Way of the Astral Self", "Way of the Drunken Master", "Way of the Four Elements", 
    "Way of the Kensei", "Way of the Long Death", "Way of the Open Hand", "Way of Shadow", "Way of the Sun Soul"
];
const Mystic_sub = [
    "Avatar", "Awakened", "The Immortal", "Nomad", "Soul Knife", "Wu Jen"
];
const Paladin_sub = [
    "Oath of the Ancients", "Oath of Conquest", "Oath of the Crown", "Oath of Devotion", "Oath of Glory", 
    "Oath of Redemption", "Oath of Vengeance", "Oath of the Watchers", "Oathbreaker"
];
const Ranger_sub = [
    "Beast Master Conclave", "Fey Wanderer", "Gloom Stalker Conclave", "Horizon Walker Conclave", "Hunter Conclave", 
    "Monster Slayer Conclave", "Swarmkeeper"
];
const Rougue_sub = [
    "Arcane Trickster", "Assassin", "Inquisitive", "Mastermind", "Phantom", "Scout", "Soulknife", "Swashbuckler", 
    "Thief"
];
const Sorcerer_sub = [
    "Aberrant Mind", "Clockwork Soul", "Draconic Bloodline", "Divine Soul", "Shadow Magic", "Storm Sorcery", 
    "Wild Magic"
];
const Warlock_sub = [
    "Archfey", "Celestial", "Fathomless", "Fiend", "The Genie", "Great Old One", "Hexblade", "Undying"
];
const Wizard_sub =[
    "School of Abjuration", "School of Bladesinging", "School of Chronurgy", "School of Conjuration", 
    "School of Divination", "School of Enchantment", "School of Evocation", "School of Graviturgy", "School of Illusion", 
        "School of Necromancy", "Order of Scribes", "School of Transmutation", "School of War Magic"
    ];


const Race = [
    "Aarakocra", "Aasimar", "Bugbear", "Centaur", "Changeling", "Dragonborn", "Dwarf", "Elf", "Firbolg", "Genasi", "Gith", 
    "Gnome", "Goblin", "Goliath", "Grung", "Half-Elf", "Half-Orc", "Halfling", "Hobgoblin", "Human", "Kenku", "Kobold", "Lizardfolk", 
        "Locathah", "Minotaur", "Orc", "Shifter", "Tabaxi", "Tiefling", "Tortle", "Triton", "Warforged", "Yuan-Ti Pureblood"
    ];

 
const Subrace_add = ["Yes", "No"] 


const Subrace = []; 
const Aasimar_sub = ["Protector", "Scourge", "Fallen"];
const Dragonborn = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"];
const Dwarf_sub = ["Hill", "Mountain"];
const Elf_sub = ["Dark", "High", "Sea", "Wood"];
const Genasi = ["Air", "Earth", "Fire", "Water"];
const Gith_sub = ["Githyanki", "Githzerai"];
const Gnome_sub = ["Forest", "Rock"];
const Half_Elf = ["General", "High", "Wood", "Dark", "Sea"];
const Halfling_sub = ["Lightfoot", "Stout", "Ghostwise"];
const Human_sub = ["Variant"];
const Shifter = ["Beasthide", "Longtooth", "Swiftstride", "Wildhunt", "Cliffwalk", "Razorclaw"];
const Tiefling_sub = [
    "Bloodline of Asmodeus", "Bloodline of Baalzebul", "Bloodline of Dispater", "Bloodline of Fierna", 
    "Bloodline of Glasya", "Bloodline of Levistus", "Bloodline of Mammon", "Bloodline of Mephistopheles", "Bloodline of Zariel"
];
const Warforged_sub = ["Envoy", "Juggernaut", "Skirmisher"];


const Background = [
    "Acolyte", "Anthropologist", "Archaeologist", "Charlatan", "City Watch", "Clan Crafter", "Cloistered Scholar", 
"Courtier", "Criminal", "Entertainer", "Faceless", "Faction Agent", "Far Traveler", "Folk Hero", "Gladiator", "Guild Artisan", 
"Guild Merchant", "Haunted One", "House Agent", "Hermit", "Inheritor", "Investigator", "Knight", "Knight of the Order", "Marine", 
"Mercenary Veteran", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urban Bounty Hunter", "Urchin", 
"Uthgardt Tribe Member", "Waterdhavian Noble"
];


const s1 = document.getElementById('Class_s');
const s21 = document.getElementById('Artificer_sub');
const s22 = document.getElementById('Barbarian_sub');
const s23 = document.getElementById('Bard_sub');
const s24 = document.getElementById('Blood_Hunter_sub');
const s25 = document.getElementById('Cleric_sub');
const s26 = document.getElementById('Druid_sub');
const s27 = document.getElementById('Fighter_sub');
const s28 = document.getElementById('Monk_sub');
const s29 = document.getElementById('Mystic_sub');
const s210 = document.getElementById('Paladin_sub');
const s211 = document.getElementById('Ranger_sub');
const s212 = document.getElementById('Rougue_sub');
const s213 = document.getElementById('Sorcerer_sub');
const s214 = document.getElementById('Warlock_sub');
const s215 = document.getElementById('Wizard_sub');


const s3 = document.getElementById('Race_s');
const s41 = document.getElementById('Aasimar_subR');
const s42 = document.getElementById('Dragonborn_R');
const s43 = document.getElementById('Dwarf_subR');
const s44 = document.getElementById('Elf_subR');
const s45 = document.getElementById('Genasi_R');
const s46 = document.getElementById('Gith_subR');
const s47 = document.getElementById('Gnome_subR');
const s48 = document.getElementById('Half_Elf_R');
const s49 = document.getElementById('Halfling_subR');
const s410 = document.getElementById('Human_subR');
const s411 = document.getElementById('Shifter_R');
const s412 = document.getElementById('Tiefling_subR');
const s413 = document.getElementById('Warforged_subR');

const s5 = document.getElementById('background_s');



const class_s = document.querySelector('.Class_s');
const add_subc = document.querySelector('.Add_sub');
const all_subc = document.querySelector('.All_sub');
const art_sub = document.querySelector('.Artificer_sub');
const barb_sub = document.querySelector('.Barbarian_sub');
const bard_sub = document.querySelector('.Bard_sub');
const blo_sub = document.querySelector('.Blood_Hunter_sub');
const cle_sub = document.querySelector('.Cleric_sub');
const dru_sub = document.querySelector('.Druid_sub');
const fig_sub = document.querySelector('.Fighter_sub');
const mon_sub = document.querySelector('.Monk_sub');
const mys_sub = document.querySelector('.Mystic_sub');
const pal_sub = document.querySelector('.Paladin_sub');
const ran_sub = document.querySelector('.Ranger_sub');
const rou_sub = document.querySelector('.Rougue_sub');
const sor_sub = document.querySelector('.Sorcerer_sub');
const war_sub = document.querySelector('.Warlock_sub');
const wiz_sub = document.querySelector('.Wizard_sub');

const race_s = document.querySelector('.Race_s');
const add_subr = document.querySelector('.Add_subR');
const add_fill = document.querySelector('.Fill');
const all_subr = document.querySelector('.All_subR');
const aas_sub = document.querySelector('.Aasimar_subR');
const dra_sub = document.querySelector('.Dragonborn_R');
const dwa_sub = document.querySelector('.Dwarf_subR');
const elf_sub = document.querySelector('.Elf_subR');
const gen_sub = document.querySelector('.Genasi_R');
const git_sub = document.querySelector('.Gith_subR');
const gno_sub = document.querySelector('.Gnome_subR');
const h_elf_sub = document.querySelector('.Half_Elf_R');
const hal_sub = document.querySelector('.Halfling_subR');
const hum_sub = document.querySelector('.Human_subR');
const shi_sub = document.querySelector('.Shifter_R');
const tie_sub = document.querySelector('.Tiefling_subR');
const warf_sub = document.querySelector('.Warforged_subR');


const btn_r = document.querySelector('.btn_r');
const btn_d = document.querySelector('.btn_d');
const ul = document.querySelector('.items');
const del = document.querySelector('.Del_b')

const characterdel = document.getElementById('character');
const characterList = document.querySelector('#character');



//Når programet først kjører blir alle sub slidene og remove knappen fjernes fra de synelige HTML elementene.
all_subc.remove(all_subc);
all_subr.remove(all_subr);
btn_d.remove();

//Programet ser etter endringer på Class sliden og setter in sub samsvarende sub slide hvis det er en endring
class_s.addEventListener('change', function() { 
if (s1.value == 0) {add_subc.removeChild(add_subc.lastChild)}
else if (s1.value == 1) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(art_sub);}
else if (s1.value == 2) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(barb_sub);}
else if (s1.value == 3) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(bard_sub);}
else if (s1.value == 4) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(blo_sub);}
else if (s1.value == 5) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(cle_sub);}
else if (s1.value == 6) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(dru_sub);}
else if (s1.value == 7) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(fig_sub);}
else if (s1.value == 8) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(mon_sub);}
else if (s1.value == 9) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(mys_sub);}
else if (s1.value == 10) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(pal_sub);}
else if (s1.value == 11) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(ran_sub);}
else if (s1.value == 12) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(rou_sub);}
else if (s1.value == 13) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(sor_sub);}
else if (s1.value == 14) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(war_sub);}
else if (s1.value == 15) {add_subc.removeChild(add_subc.lastChild), add_subc.appendChild(wiz_sub);}
console.log(character.childElementCount)
});

//Programet ser etter endringer på Race sliden og setter in sub samsvarende sub slide hvis det er en endring
race_s.addEventListener('change', function() {
if (s3.value == 0 || s3.value == 1 || s3.value == 3 || s3.value == 4 || s3.value == 5 || s3.value == 9 || s3.value == 13 || s3.value == 14 || s3.value == 15 || s3.value == 17 || s3.value == 19 || s3.value == 21 || s3.value == 22 || s3.value == 23 || s3.value == 24 || s3.value == 25 || s3.value == 26 || s3.value == 28 || s3.value == 30 || s3.value == 31 || s3.value == 33) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(add_fill)}
else if (s3.value == 2) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(aas_sub);}
else if (s3.value == 6) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(dra_sub);}
else if (s3.value == 7) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(dwa_sub);}
else if (s3.value == 8) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(elf_sub);}
else if (s3.value == 10) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(gen_sub);}
else if (s3.value == 11) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(git_sub);}
else if (s3.value == 12) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(gno_sub);}
else if (s3.value == 16) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(h_elf_sub);}
else if (s3.value == 18) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(hal_sub);}
else if (s3.value == 20) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(hum_sub);}
else if (s3.value == 27) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(shi_sub);}
else if (s3.value == 29) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(tie_sub);}
else if (s3.value == 32) {add_subr.removeChild(add_subr.lastChild), add_subr.appendChild(warf_sub);}
});


//Dette er EventListeneren for Roll knappen som føler med på om den blir trykket samt hva som skjer når den blir trykket
btn_r.addEventListener('click', (e) => {
    e.preventDefault();

    //Ser om Background sliden er et spsefikk verdi og setter den til det. Hvis background ikke har blit spesifisert "0" er resultatet tilfeldig
    if (s5.value == 0) {random_background = Math.floor(Math.random() * Background.length)}
     else if (s5.value == 1) {random_background = 0}
     else if (s5.value == 2) {random_background = 1}
     else if (s5.value == 3) {random_background = 2}
     else if (s5.value == 4) {random_background = 3}
     else if (s5.value == 5) {random_background = 4}
     else if (s5.value == 6) {random_background = 5}
     else if (s5.value == 7) {random_background = 6}
     else if (s5.value == 8) {random_background = 7}
     else if (s5.value == 9) {random_background = 8}
     else if (s5.value == 10) {random_background = 9}
     else if (s5.value == 11) {random_background = 10}
     else if (s5.value == 12) {random_background = 11}
     else if (s5.value == 13) {random_background = 12}
     else if (s5.value == 14) {random_background = 13}
     else if (s5.value == 15) {random_background = 14}
     else if (s5.value == 16) {random_background = 15}
     else if (s5.value == 17) {random_background = 16}
     else if (s5.value == 18) {random_background = 17}
     else if (s5.value == 19) {random_background = 18}
     else if (s5.value == 20) {random_background = 19}
     else if (s5.value == 21) {random_background = 20}
     else if (s5.value == 22) {random_background = 21}
     else if (s5.value == 23) {random_background = 22}
     else if (s5.value == 24) {random_background = 23}
     else if (s5.value == 25) {random_background = 24}
     else if (s5.value == 26) {random_background = 25}
     else if (s5.value == 27) {random_background = 26}
     else if (s5.value == 28) {random_background = 27}
     else if (s5.value == 29) {random_background = 28}
     else if (s5.value == 30) {random_background = 29}
     else if (s5.value == 31) {random_background = 30}
     else if (s5.value == 32) {random_background = 31}
     else if (s5.value == 33) {random_background = 32}
     else if (s5.value == 34) {random_background = 33}
     else if (s5.value == 35) {random_background = 34}
    else if (s5.value == 36) {random_background = 35};

    //Fjerner tidligere sub konstanter fra hoved sub konstanten (Subclass og Subrace)
    Subclass.length = 0
    Subrace.length = 0
    
    //Ser om Class sliden er et spsefikk verdi og setter den til det. Hvis background ikke har blit spesifisert "0" er resultatet tilfeldig
    if (s1.value == 0) {random_class = Math.floor(Math.random() * Class.length)}
    else if (s1.value == 1) {random_class = 0}
    else if (s1.value == 2) {random_class = 1}
    else if (s1.value == 3) {random_class = 2}
    else if (s1.value == 4) {random_class = 3}
    else if (s1.value == 5) {random_class = 4}
    else if (s1.value == 6) {random_class = 5}
    else if (s1.value == 7) {random_class = 6}
    else if (s1.value == 8) {random_class = 7}
    else if (s1.value == 9) {random_class = 8}
    else if (s1.value == 10) {random_class = 9}
    else if (s1.value == 11) {random_class = 10}
    else if (s1.value == 12) {random_class = 11}
    else if (s1.value == 13) {random_class = 12}
    else if (s1.value == 14) {random_class = 13}
   else if (s1.value == 15) {random_class = 14};

    //Dytter sub klassen til "Subclass" når den klassen er utgit av "random_class"
    if (random_class == 0) {Subclass.push(...Artificer_sub)}
    else if (random_class == 1) {Subclass.push(...Barbarian_sub)}
    else if (random_class == 2) {Subclass.push(...Bard_sub)}
    else if (random_class == 3) {Subclass.push(...Blood_Hunter_sub)}
    else if (random_class == 4) {Subclass.push(...Cleric_sub)}
    else if (random_class == 5) {Subclass.push(...Druid_sub)}
    else if (random_class == 6) {Subclass.push(...Fighter_sub)} 
    else if (random_class == 7) {Subclass.push(...Monk_sub)}
    else if (random_class == 8) {Subclass.push(...Mystic_sub)}
    else if (random_class == 9) {Subclass.push(...Paladin_sub)}
    else if (random_class == 10) {Subclass.push(...Ranger_sub)}
    else if (random_class == 11) {Subclass.push(...Rougue_sub)}
    else if (random_class == 12) {Subclass.push(...Sorcerer_sub)}
    else if (random_class == 13) {Subclass.push(...Warlock_sub)}
    else if (random_class == 14) {Subclass.push(...Wizard_sub)}

    /*Ser om Class og Subclass slidene er spsefikk verdi og setter den til det. 
    Hvis background ikke har blit spesifisert "0" er resultatet tilfeldig*/
    if (s21.value == 1) {random_subclass = 0}
    else if (s21.value == 2 && s1.value == 1) {random_subclass = 1}
    else if (s21.value == 3 && s1.value == 1) {random_subclass = 2}
    else if (s21.value == 4 && s1.value == 1) {random_subclass = 3}

    else if (s22.value == 1 && s1.value == 2) {random_subclass = 0}
    else if (s22.value == 2 && s1.value == 2) {random_subclass = 1}
    else if (s22.value == 3 && s1.value == 2) {random_subclass = 2}
    else if (s22.value == 4 && s1.value == 2) {random_subclass = 3}
    else if (s22.value == 5 && s1.value == 2) {random_subclass = 4}
    else if (s22.value == 6 && s1.value == 2) {random_subclass = 5}
    else if (s22.value == 7 && s1.value == 2) {random_subclass = 6}
    else if (s22.value == 8 && s1.value == 2) {random_subclass = 7}

    else if (s23.value == 1 && s1.value == 3) {random_subclass = 0}
    else if (s23.value == 2 && s1.value == 3) {random_subclass = 1}
    else if (s23.value == 3 && s1.value == 3) {random_subclass = 2}
    else if (s23.value == 4 && s1.value == 3) {random_subclass = 3}
    else if (s23.value == 5 && s1.value == 3) {random_subclass = 4}
    else if (s23.value == 6 && s1.value == 3) {random_subclass = 5}
    else if (s23.value == 7 && s1.value == 3) {random_subclass = 6}
    else if (s23.value == 8 && s1.value == 3) {random_subclass = 7}

    else if (s24.value == 1 && s1.value == 4) {random_subclass = 0}
    else if (s24.value == 2 && s1.value == 4) {random_subclass = 1}
    else if (s24.value == 3 && s1.value == 4) {random_subclass = 2}
    else if (s24.value == 4 && s1.value == 4) {random_subclass = 3}

    else if (s25.value == 1 && s1.value == 5) {random_subclass = 0}
    else if (s25.value == 2 && s1.value == 5) {random_subclass = 1}
    else if (s25.value == 3 && s1.value == 5) {random_subclass = 2}
    else if (s25.value == 4 && s1.value == 5) {random_subclass = 3}
    else if (s25.value == 5 && s1.value == 5) {random_subclass = 4}
    else if (s25.value == 6 && s1.value == 5) {random_subclass = 5}
    else if (s25.value == 7 && s1.value == 5) {random_subclass = 6}
    else if (s25.value == 8 && s1.value == 5) {random_subclass = 7}
    else if (s25.value == 9 && s1.value == 5) {random_subclass = 8}
    else if (s25.value == 10 && s1.value == 5) {random_subclass = 9}
    else if (s25.value == 11 && s1.value == 5) {random_subclass = 10}
    else if (s25.value == 12 && s1.value == 5) {random_subclass = 11}
    else if (s25.value == 13 && s1.value == 5) {random_subclass = 12}
    else if (s25.value == 14 && s1.value == 5) {random_subclass = 13}

    else if (s26.value == 1 && s1.value == 6) {random_subclass = 0}
    else if (s26.value == 2 && s1.value == 6) {random_subclass = 1}
    else if (s26.value == 3 && s1.value == 6) {random_subclass = 2}
    else if (s26.value == 4 && s1.value == 6) {random_subclass = 3}
    else if (s26.value == 5 && s1.value == 6) {random_subclass = 4}
    else if (s26.value == 6 && s1.value == 6) {random_subclass = 5}
    else if (s26.value == 7 && s1.value == 6) {random_subclass = 6}

    else if (s27.value == 1 && s1.value == 7) {random_subclass = 0}
    else if (s27.value == 2 && s1.value == 7) {random_subclass = 1}
    else if (s27.value == 3 && s1.value == 7) {random_subclass = 2}
    else if (s27.value == 4 && s1.value == 7) {random_subclass = 3}
    else if (s27.value == 5 && s1.value == 7) {random_subclass = 4}
    else if (s27.value == 6 && s1.value == 7) {random_subclass = 5}
    else if (s27.value == 7 && s1.value == 7) {random_subclass = 6}
    else if (s27.value == 8 && s1.value == 7) {random_subclass = 7}
    else if (s27.value == 9 && s1.value == 7) {random_subclass = 8}
    else if (s27.value == 10 && s1.value == 7) {random_subclass = 9}

    else if (s28.value == 1 && s1.value == 8) {random_subclass = 0}
    else if (s28.value == 2 && s1.value == 8) {random_subclass = 1}
    else if (s28.value == 3 && s1.value == 8) {random_subclass = 2}
    else if (s28.value == 4 && s1.value == 8) {random_subclass = 3}
    else if (s28.value == 5 && s1.value == 8) {random_subclass = 4}
    else if (s28.value == 6 && s1.value == 8) {random_subclass = 5}
    else if (s28.value == 7 && s1.value == 8) {random_subclass = 6}
    else if (s28.value == 8 && s1.value == 8) {random_subclass = 7}
    else if (s28.value == 9 && s1.value == 8) {random_subclass = 8}

    else if (s29.value == 1 && s1.value == 9) {random_subclass = 0}
    else if (s29.value == 2 && s1.value == 9) {random_subclass = 1}
    else if (s29.value == 3 && s1.value == 9) {random_subclass = 2}
    else if (s29.value == 4 && s1.value == 9) {random_subclass = 3}
    else if (s29.value == 5 && s1.value == 9) {random_subclass = 4}
    else if (s29.value == 6 && s1.value == 9) {random_subclass = 5}

    else if (s210.value == 1 && s1.value == 10) {random_subclass = 0}
    else if (s210.value == 2 && s1.value == 10) {random_subclass = 1}
    else if (s210.value == 3 && s1.value == 10) {random_subclass = 2}
    else if (s210.value == 4 && s1.value == 10) {random_subclass = 3}
    else if (s210.value == 5 && s1.value == 10) {random_subclass = 4}
    else if (s210.value == 6 && s1.value == 10) {random_subclass = 5}
    else if (s210.value == 7 && s1.value == 10) {random_subclass = 6}
    else if (s210.value == 8 && s1.value == 10) {random_subclass = 7}
    else if (s210.value == 9 && s1.value == 10) {random_subclass = 8}

    else if (s211.value == 1 && s1.value == 11) {random_subclass = 0}
    else if (s211.value == 2 && s1.value == 11) {random_subclass = 1}
    else if (s211.value == 3 && s1.value == 11) {random_subclass = 2}
    else if (s211.value == 4 && s1.value == 11) {random_subclass = 3}
    else if (s211.value == 5 && s1.value == 11) {random_subclass = 4}
    else if (s211.value == 6 && s1.value == 11) {random_subclass = 5}
    else if (s211.value == 7 && s1.value == 11) {random_subclass = 6}

    else if (s212.value == 1 && s1.value == 12) {random_subclass = 0}
    else if (s212.value == 2 && s1.value == 12) {random_subclass = 1}
    else if (s212.value == 3 && s1.value == 12) {random_subclass = 2}
    else if (s212.value == 4 && s1.value == 12) {random_subclass = 3}
    else if (s212.value == 5 && s1.value == 12) {random_subclass = 4}
    else if (s212.value == 6 && s1.value == 12) {random_subclass = 5}
    else if (s212.value == 7 && s1.value == 12) {random_subclass = 6}
    else if (s212.value == 8 && s1.value == 12) {random_subclass = 7}
    else if (s212.value == 9 && s1.value == 12) {random_subclass = 8}

    else if (s213.value == 1 && s1.value == 13) {random_subclass = 0}
    else if (s213.value == 2 && s1.value == 13) {random_subclass = 1}
    else if (s213.value == 3 && s1.value == 13) {random_subclass = 2}
    else if (s213.value == 4 && s1.value == 13) {random_subclass = 3}
    else if (s213.value == 5 && s1.value == 13) {random_subclass = 4}
    else if (s213.value == 6 && s1.value == 13) {random_subclass = 5}
    else if (s213.value == 7 && s1.value == 13) {random_subclass = 6}

    else if (s214.value == 1 && s1.value == 14) {random_subclass = 0}
    else if (s214.value == 2 && s1.value == 14) {random_subclass = 1}
    else if (s214.value == 3 && s1.value == 14) {random_subclass = 2}
    else if (s214.value == 4 && s1.value == 14) {random_subclass = 3}
    else if (s214.value == 5 && s1.value == 14) {random_subclass = 4}
    else if (s214.value == 6 && s1.value == 14) {random_subclass = 5}
    else if (s214.value == 7 && s1.value == 14) {random_subclass = 6}

    else if (s215.value == 1 && s1.value == 15) {random_subclass = 0}
    else if (s215.value == 2 && s1.value == 15) {random_subclass = 1}
    else if (s215.value == 3 && s1.value == 15) {random_subclass = 2}
    else if (s215.value == 4 && s1.value == 15) {random_subclass = 3}
    else if (s215.value == 5 && s1.value == 15) {random_subclass = 4}
    else if (s215.value == 6 && s1.value == 15) {random_subclass = 5}
    else if (s215.value == 7 && s1.value == 15) {random_subclass = 6}
    else if (s215.value == 8 && s1.value == 15) {random_subclass = 7}
    else if (s215.value == 9 && s1.value == 15) {random_subclass = 8}
    else if (s215.value == 10 && s1.value == 15) {random_subclass = 9}
    else if (s215.value == 11 && s1.value == 15) {random_subclass = 10}
    else if (s215.value == 12 && s1.value == 15) {random_subclass = 11}
    else if (s215.value == 13 && s1.value == 15) {random_subclass = 12}
    else if (s21.value == 0 || s22.value == 0 || s23.value == 0 || s24.value == 0 || s25.value == 0 || s26.value == 0 || s27.value == 0 || s28.value == 0 || s29.value == 0 || s210.value == 0 || s211.value == 0 || s212.value == 0 || s213.value == 0 || s214.value == 0 || s215.value == 0) 
    {random_subclass = Math.floor(Math.random() * Subclass.length);}
    
     //Ser om Race sliden er et spsefikk verdi og setter den til det. Hvis background ikke har blit spesifisert "0" er resultatet tilfeldig
    if (s3.value == 0) {random_race = Math.floor(Math.random() * Race.length);}
    else if (s3.value == 1) {random_race = 0}
    else if (s3.value == 2) {random_race = 1}
    else if (s3.value == 3) {random_race = 2}
    else if (s3.value == 4) {random_race = 3}
    else if (s3.value == 5) {random_race = 4}
    else if (s3.value == 6) {random_race = 5}
    else if (s3.value == 7) {random_race = 6}
    else if (s3.value == 8) {random_race = 7}
    else if (s3.value == 9) {random_race = 8}
    else if (s3.value == 10) {random_race = 9}
    else if (s3.value == 11) {random_race = 10}
    else if (s3.value == 12) {random_race = 11}
    else if (s3.value == 13) {random_race = 12}
    else if (s3.value == 14) {random_race = 13}
    else if (s3.value == 15) {random_race = 14}
    else if (s3.value == 16) {random_race = 15}
    else if (s3.value == 17) {random_race = 16}
    else if (s3.value == 18) {random_race = 17}
    else if (s3.value == 19) {random_race = 18}
    else if (s3.value == 20) {random_race = 19}
    else if (s3.value == 21) {random_race = 20}
    else if (s3.value == 22) {random_race = 21}
    else if (s3.value == 23) {random_race = 22}
    else if (s3.value == 24) {random_race = 23}
    else if (s3.value == 25) {random_race = 24}
    else if (s3.value == 26) {random_race = 25}
    else if (s3.value == 27) {random_race = 26}
    else if (s3.value == 28) {random_race = 27}
    else if (s3.value == 29) {random_race = 28}
    else if (s3.value == 30) {random_race = 29}
    else if (s3.value == 31) {random_race = 30}
    else if (s3.value == 32) {random_race = 31}
    else if (s3.value == 33) {random_race = 32};
    

    //Dytter sub rasene til "Subrace" når den rasen utgit av "random_race" har sub raser
    if (random_race == 1) {Subrace.push(...Aasimar_sub)}
    else if (random_race == 5) {Subrace.push(...Dragonborn)}
    else if (random_race == 6) {Subrace.push(...Dwarf_sub)}
    else if (random_race == 7) {Subrace.push(...Elf_sub)}
    else if (random_race == 9) {Subrace.push(...Genasi)}
    else if (random_race == 10) {Subrace.push(...Gith_sub)}
    else if (random_race == 11) {Subrace.push(...Gnome_sub)} 
    else if (random_race == 15) {Subrace.push(...Half_Elf)}
    else if (random_race == 17) {Subrace.push(...Halfling_sub)}
    else if (random_race == 19) {Subrace.push(...Human_sub)}
    else if (random_race == 26) {Subrace.push(...Shifter)}
    else if (random_race == 28) {Subrace.push(...Tiefling_sub)}
    else if (random_race == 31) {Subrace.push(...Warforged_sub)};
    
    /*Ser om Race og SubRass slidene er spsefikk verdi og setter den til det. 
    Hvis background ikke har blit spesifisert "0" er resultatet tilfeldig*/
    if (s41.value == 3 && random_race == 1) {random_subrace = 0}
    else if (s41.value == 4 && random_race == 1) {random_subrace = 1}
    else if (s41.value == 5 && random_race == 1) {random_subrace = 2}

    else if (s42.value == 1 && random_race == 5) {random_subrace = 0}
    else if (s42.value == 2 && random_race == 5) {random_subrace = 1}
    else if (s42.value == 3 && random_race == 5) {random_subrace = 2}
    else if (s42.value == 4 && random_race == 5) {random_subrace = 3}
    else if (s42.value == 5 && random_race == 5) {random_subrace = 4}
    else if (s42.value == 6 && random_race == 5) {random_subrace = 5}
    else if (s42.value == 7 && random_race == 5) {random_subrace = 6}
    else if (s42.value == 8 && random_race == 5) {random_subrace = 7}
    else if (s42.value == 9 && random_race == 5) {random_subrace = 8}
    else if (s42.value == 10 && random_race == 5) {random_subrace = 9}

    else if (s43.value == 3 && random_race == 6) {random_subrace = 0}
    else if (s43.value == 4 && random_race == 6) {random_subrace = 1}

    else if (s44.value == 3 && random_race == 7) {random_subrace = 0}
    else if (s44.value == 4 && random_race == 7) {random_subrace = 1}
    else if (s44.value == 5 && random_race == 7) {random_subrace = 2}
    else if (s44.value == 6 && random_race == 7) {random_subrace = 3}

    else if (s45.value == 1 && random_race == 9) {random_subrace = 0}
    else if (s45.value == 2 && random_race == 9) {random_subrace = 1}
    else if (s45.value == 3 && random_race == 9) {random_subrace = 2}
    else if (s45.value == 4 && random_race == 9) {random_subrace = 3}

    else if (s46.value == 3 && random_race == 10) {random_subrace = 0}
    else if (s46.value == 4 && random_race == 10) {random_subrace = 1}

    else if (s47.value == 3 && random_race == 11) {random_subrace = 0}
    else if (s47.value == 4 && random_race == 11) {random_subrace = 1}

    else if (s48.value == 1 && random_race == 15) {random_subrace = 0}
    else if (s48.value == 2 && random_race == 15) {random_subrace = 1}
    else if (s48.value == 3 && random_race == 15) {random_subrace = 2}
    else if (s48.value == 4 && random_race == 15) {random_subrace = 3}
    else if (s48.value == 5 && random_race == 15) {random_subrace = 4}

    else if (s49.value == 3 && random_race == 17) {random_subrace = 0}
    else if (s49.value == 4 && random_race == 17) {random_subrace = 1}
    else if (s49.value == 5 && random_race == 17) {random_subrace = 2}

    else if (s410.value == 1 && random_race == 19) {random_subrace = 0}

    else if (s411.value == 1 && random_race == 26) {random_subrace = 0}
    else if (s411.value == 2 && random_race == 26) {random_subrace = 1}
    else if (s411.value == 3 && random_race == 26) {random_subrace = 2}
    else if (s411.value == 4 && random_race == 26) {random_subrace = 3}
    else if (s411.value == 5 && random_race == 26) {random_subrace = 4}
    else if (s411.value == 6 && random_race == 26) {random_subrace = 5}
    else if (s411.value == 7 && random_race == 26) {random_subrace = 6}

    else if (s412.value == 3 && random_race == 28) {random_subrace = 0}
    else if (s412.value == 4 && random_race == 28) {random_subrace = 1}
    else if (s412.value == 5 && random_race == 28) {random_subrace = 2}
    else if (s412.value == 6 && random_race == 28) {random_subrace = 3}
    else if (s412.value == 7 && random_race == 28) {random_subrace = 4}
    else if (s412.value == 8 && random_race == 28) {random_subrace = 5}
    else if (s412.value == 9 && random_race == 28) {random_subrace = 6}
    else if (s412.value == 10 && random_race == 28) {random_subrace = 7}
    else if (s412.value == 11 && random_race == 28) {random_subrace = 8}

    else if (s413.value == 3 && random_race == 31) {random_subrace = 0}
    else if (s413.value == 4 && random_race == 31) {random_subrace = 1}
    else if (s413.value == 5 && random_race == 31) {random_subrace = 2}

    /*
    Disse tre siste "else if" er for tre første vallgene på "Subrace" slidene. 
    "Maybe" = 0, gir deg en random sub race og en 50/50 skjange for å få den
    "Any" = 1, gir deg en random sub race
    "None" = 2, Du får ikke en sub race i resultatet
    */
    else if (s41.value == 2 || s43.value == 2 || s44.value == 2 || s46.value == 2 || s47.value == 2 || s48.value == 2 || s49.value == 2 || s410.value == 2 || s411.value == 2 || s413.value == 2) 
    {add_subrace = 1}
    else if (s41.value == 1 || s43.value == 1 || s44.value == 1 || s46.value == 1 || s47.value == 1 || s48.value == 1 || s49.value == 1 || s410.value == 1 || s411.value == 1 || s413.value == 1) 
    {random_subrace = Math.floor(Math.random() * Subrace.length), add_subrace = 0}
    else if (s41.value == 0 || s42.value == 0 || s43.value == 0 || s44.value == 0 || s45.value == 0 || s46.value == 0 || s47.value == 0 || s48.value == 0 || s49.value == 0 || s410.value == 0 || s411.value == 0 || s412.vlaue == 0 || s413.value == 0) 
    {random_subrace = Math.floor(Math.random() * Subrace.length), add_subrace = Math.floor(Math.random() * Subrace_add.length);}
    
    
    //Her tar programet alle resutatene du fått og gjør det om til et HTML element som kan sendes videre.
    const li = document.createElement('li');

    if (random_race == 1 || random_race == 6 || random_race == 7 || random_race == 10 || random_race == 11 || random_race == 17 || random_race == 19 || random_race == 28 || random_race == 31) 
    {if (add_subrace == 0) {
        li.appendChild(document.createTextNode(`${random_background, Background[random_background]} || ${random_subclass, Subclass[random_subclass]}-${random_class, Class[random_class]} || ${random_subrace, Subrace[random_subrace]}-${random_race, Race[random_race]}`));
    }
        else {li.appendChild(document.createTextNode(`${random_background, Background[random_background]} || ${random_subclass, Subclass[random_subclass]}-${random_class, Class[random_class]} || ${random_race, Race[random_race]}`));}
 }
 
    else if 
    (
    random_race == 5 || random_race == 9 || random_race == 15 || random_race == 26) 
    { 
     li.appendChild(document.createTextNode(`${random_background, Background[random_background]} || ${random_subclass, Subclass[random_subclass]}-${random_class, Class[random_class]} || ${random_subrace, Subrace[random_subrace]}-${random_race, Race[random_race]}`));
    }

    else {
        li.appendChild(document.createTextNode(`${random_background, Background[random_background]} || ${random_subclass, Subclass[random_subclass]}-${random_class, Class[random_class]} || ${random_race, Race[random_race]}`));
 }
    

    // Fester det nye elemnte til "ul" i HTML
    characterList.insertBefore(li, characterList.childNodes[0]);

    //Nå som det er et karakter element på HTML, setter programet "Remove" kappen også på HTML his den ikke alerede er der.  
    del.appendChild(btn_d);

});

/*
Hvis HTML har "Remove" kappen og den blir tryket vil alle tidligere karakterer bli slettet fra listen
Derfor fjernes også "Remove"
*/
btn_d.addEventListener('click', (e) => {
    characterdel.innerHTML = '';
    btn_d.remove();
});


