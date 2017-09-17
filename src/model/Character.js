/**

This file is part of Climb Dragon Tower.

Hunt the Yeti is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

var CharacterClasses = require('./CharacterClasses');

function Character(strength, dexterity, agility, intellect, spirit, training, wounds, woundlimit, profession, inventory) {
    if (typeof inventory === 'undefined') {
        inventory = [];
    }

    this.strength = strength;
    this.dexterity = dexterity;
    this.agility = agility;
    this.intellect = intellect;
    this.spirit = spirit;
    this.training = training;
    this.wounds = wounds;
    this.woundlimit = woundlimit;
    this.profession = profession;
    this.inventory = inventory;
}

Character.prototype.modStrength(modifier) {
    this.strength += modifier;
}

Character.prototype.modDexterity(modifier) {
    this.dexterity += modifier;
}

Character.prototype.modAgility(modifier) {
    this.agility += modifier;
}

Character.prototype.modIntellect(modifier) {
    this.intellect += modifier;
}

Character.prototype.modSpirit(modifier) {
    this.spirit += modifier;
}

Character.prototype.modTraining(modifier) {
    this.training += modifier;
}

Character.prototype.takeWounds(modifier) {
    this.wounds += modifier;
}

Character.prototype.isDead() {
    return this.wounds >= this.woundlimit;
}

Character.prototype.dryRoll(skill) {
    roll = skill + 1 + Math.floor(Math.random() * 20)
    return roll >= 15;
}

Character.prototype.addToInventory(myItems) {
    for (int i = 0; i < myItems.length; i++) {
        this.inventory.append(myItems[i]);
    }
}

Character.prototype.isItemInInventory(itemName) {
    found = false;
    for (int i = 0; i < this.inventory.length; i++) {
        if (this.inventory[i].name == itemName) {
            found = true;
        }
    }

    return found;
}

Character.prototype.getStrongestWeadonOfKind(kind) {
    weapon = "none";
    strongestPower = 0;
    for (int i = 0; i < this.inventory.length; i++) {
        if (Items[this.inventory[i]].kind == kind) {
            if (Items[this.inventory[i]].power > strongestPower) {
                strongestPower = Items[this.inventory[i]].power;
                weapon = this.inventory[i];
            }
        }
    }

    return weapon;
}

Character.prototype.getWeaponPower(weapon) {
    if (weapon == "none) {
        return 0;
    }
    return Items[weapon].power;
}

Character.prototype.getPowerOfStrongestRangeWeapon() {
    weapon = this.getStrongestWeaponOfKind("melee");
    return this.getWeaponPower(weapon);
}

Character.prototype.getPowerOfStrongestRangeWeapon() {
    weapon = this.getStrongestWeaponOfKind("range");
    return this.getWeaponPower(weapon);
}

Character.prototype.getBuffs() {
    return this.training - this.wounds * 3;
}

Character.prototype.dodge() {
    skill = this.getBuffs() + this.agility + CharacterClasses[this.profession].dodge;
    return this.dryRoll(skill);
}

Character.prototype.fight(enemyBuffs) {
    skill = this.getBuffs() + this.getPowerOfStrongestMeleeWeapon() + (this.strength + this.intellect) / 2 + CharacterClasses[this.profession].fight - enemyBuffs;
    return this.dryRoll(skill);
}

Character.prototype.cast(enemyBuffs) {
    skill = this.getBuffs() + this.intellect + CharacterClasses[this.profession].cast - enemyBuffs;
    return this.dryRoll(skill);
}

Character.prototype.spot() {
    skill = this.getBuffs() + (this.spirit + this.intellect) / 2 + CharacterClasses[this.profession].spot;
    return this.dryRoll(skill);
}

Character.prototype.shoot(enemyBuffs) {
    skill = this.getBuffs() + this.getPowerOfStrongestRangeWeapon() + (this.dexterity + this.intellect) / 2 + CharacterClasses[this.profession].shoot - enemyBuffs;
    return this.dryRoll(skill);
}

Character.prototype.sneak() {
    skill = this.getBuffs() + (this.dexterity + this.spirit) / 2 + CharacterClasses[this.profession].sneak;
    return this.dryRoll(skill);
}

Character.prototype.rebound() {
    skill = this.getBuffs() + (this.strength + this.spirit) / 2 + CharacterClasses[this.profession].sneak;
    return this.dryRoll(skill);
}
