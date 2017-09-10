/**

This file is part of Climb Dragon Mountain.

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

module.exports = {
    "Fighter": {
        "dodge": 0,
        "fight": 3,
        "cast": 0,
        "spot": 0,
        "shoot": 0,
        "sneak": 0,
        "rebound": 0
    }
    ,"Wizard": {
        "dodge": 0,
        "fight": 0,
        "cast": 3,
        "spot": 0,
        "shoot": 0,
        "sneak": 0,
        "rebound": 0
    }
    ,"Ranger": {
        "dodge": 1,
        "fight": 0,
        "cast": 0,
        "spot": 0,
        "shoot": 2,
        "sneak": 0,
        "rebound": 0
    }
    ,"Skeleton": {
        "hitpoints": 2,
        "nearattack": 2,
        "farattack": 1,
        "defense": 3,
        "elemental_advantage": cold,
        "elemental_weakness": acid,
        "feats": ["first_strike"]
    },
    ,"Basilisk": {
        "hitpoints": 12,
        "nearattack": 6,
        "farattack": 4,
        "defense": 5,
        "elemental_advantage": acid,
        "elemental_weakness": cold,
        "feats": ["stun"]
    },
    ,"Orc": {
        "hitpoints": 18,
        "nearattack": 8,
        "farattack": 4,
        "defense": 8,
        "elemental_advantage": fire,
        "elemental_weakness": fire,
        "feats": []
    },
    ,"Troll": {
        "hitpoints": 14,
        "nearattack": 6,
        "farattack": 3,
        "defense": 7,
        "elemental_advantage": cold,
        "elemental_weakness": fire,
        "feats": ["regenerate"]
    },
    ,"Vampire": {
        "hitpoints": 16,
        "nearattack": 2,
        "farattack": 6,
        "defense": 6,
        "elemental_advantage": fire,
        "elemental_weakness": acid,
        "feats": ["drain_life"]
    },
    ,"Spider": {
        "hitpoints": 10,
        "nearattack": 2,
        "farattack": 6,
        "defense": 4,
        "elemental_advantage": cold,
        "elemental_weakness": cold,
        "feats": ["poison"]
    },
    ,"Wisp": {
        "hitpoints": 4,
        "nearattack": 2,
        "farattack": 6,
        "defense": 2,
        "elemental_advantage": acid,
        "elemental_weakness": acid,
        "feats": ["dodge"]
    },
    ,"Goblin": {
        "hitpoints": 8,
        "nearattack": 4,
        "farattack": 0,
        "defense": 4,
        "elemental_advantage": fire,
        "elemental_weakness": cold,
        "feats": ["flurry"]
    },
    ,"Giant Bat": {
        "hitpoints": 6,
        "nearattack": 3,
        "farattack": 5,
        "defense": 3,
        "elemental_advantage": acid,
        "elemental_weakness": fire,
        "feats": ["acid_spit"]
    },
    ,"Dragon": {
        "hitpoints": 40,
        "nearattack": 30,
        "farattack": 30,
        "defense": 15,
        "elemental_advantage": rolled,
        "elemental_weakness": rolled,
        "feats": ["ground_pound"]
    }
};
