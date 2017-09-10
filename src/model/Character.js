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

function Character(strength, dexterity, agility, intellect, spirit, training, role) {
    this.strength = strength;
    this.dexterity = dexterity;
    this.agility = agility;
    this.intellect = intellect;
    this.spirit = spirit;
    this.training = training;
    this.role = role;
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

Character.prototype.dryRoll(skill) {
    roll = skill + 1 + Math.floor(Math.random() * 20)
    return roll >= 15;
}

Character.prototype.dodge() {
    skill = this.agility + this.training + CharacterClasses[role].dodge;
    return this.dryRoll(skill);
}

Character.prototype.fight(enemyBuffs) {
    skill = (this.strength + this.intellect) / 2 + this.training + CharacterClasses[role].fight - enemyBuffs;
    return this.dryRoll(skill);
}

Character.prototype.cast(enemyBuffs) {
    skill = this.intellect + this.training + CharacterClasses[role].cast - enemyBuffs;
    return this.dryRoll(skill);
}

Character.prototype.spot() {
    skill = (this.spirit + this.intellect) / 2 + this.training + CharacterClasses[role].spot;
    return this.dryRoll(skill);
}

Character.prototype.shoot(enemyBuffs) {
    skill = (this.dexterity + this.intellect) / 2 + this.training + CharacterClasses[role].shoot - enemyBuffs;
    return this.dryRoll(skill);
}

Character.prototype.sneak() {
    skill = (this.dexterity + this.spirit) / 2 + this.training + CharacterClasses[role].sneak;
    return this.dryRoll(skill);
}

Character.prototype.rebound() {
    skill = (this.strength + this.spirit) / 2 + this.training + CharacterClasses[role].sneak;
    return this.dryRoll(skill);
}
