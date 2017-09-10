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

function Battle(human, npc, humanAction) {
    this.human = human;
    this.npc = npc;
    this.humanAction = humanAction;
    this.enemyAction = this.getRandomAction(npc);
}

Battle.prototype.getRandomAction = function(npc) {
    var dieRoll = Math.random();

    if (dieRoll <= 0.45) {
        return 'nearattack';
    }
    else if (dieRoll <= 0.90) {
        return 'farattack';
    }


};
