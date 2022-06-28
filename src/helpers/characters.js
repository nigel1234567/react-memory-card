import uniqid from 'uniqid';

const characters = [
    { id: uniqid(), name: 'Abaddon', img: require('../img/abaddon.png') },
    { id: uniqid(), name: 'Axe', img: require('../img/axe.png') },
    { id: uniqid(), name: 'Bounty Hunter',  img: require('../img/bounty_hunter.png') },
    { id: uniqid(), name: 'Chaos Knight', img: require('../img/chaos_knight.png') },
    { id: uniqid(), name: 'Dark Seer', img: require('../img/dark_seer.png') },
    { id: uniqid(), name: 'Disruptor', img: require('../img/disruptor.png') },
    { id: uniqid(), name: 'Earthshaker', img: require('../img/earthshaker.png') },
    { id: uniqid(), name: 'Faceless Void', img: require('../img/faceless_void.png') },
    { id: uniqid(), name: 'Invoker', img: require('../img/invoker.png') },
    { id: uniqid(), name: 'Kunkka', img: require('../img/kunkka.png') },
    { id: uniqid(), name: 'Lina', img: require('../img/lina.png') },
    { id: uniqid(), name: 'Magnus', img: require('../img/magnataur.png') },
    { id: uniqid(), name: 'Mirana', img: require('../img/mirana.png') },
    { id: uniqid(), name: 'Necrophos', img: require('../img/necrolyte.png') },
    { id: uniqid(), name: 'Oracle',  img: require('../img/oracle.png') },
    { id: uniqid(), name: 'Phoenix', img: require('../img/phoenix.png') },
    { id: uniqid(), name: 'Queen of Pain', img: require('../img/queenofpain.png') },
    { id: uniqid(), name: 'Shadow Demon', img: require('../img/shadow_demon.png') },
    { id: uniqid(), name: 'Slardar', img: require('../img/slardar.png') },
    { id: uniqid(), name: 'Treant Protector', img: require('../img/treant.png') },
    { id: uniqid(), name: 'Ursa', img: require('../img/ursa.png') },
    { id: uniqid(), name: 'Witch Doctor', img: require('../img/witch_doctor.png') },
];

const randomCharacters = () => {
    const shuffledCharacters = characters.sort(() => 0.5 - Math.random());
    return shuffledCharacters.slice(0, 12);
};

export default randomCharacters;