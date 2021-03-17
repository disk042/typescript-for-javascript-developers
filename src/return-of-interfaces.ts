export {};

class Mahotsukai {}
class Souryo{}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void; // signature
}

interface Senshi {
  kougeki(): void; // signature
}

// interfaceによる多重継承
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
