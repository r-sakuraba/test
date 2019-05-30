import { Component, OnInit } from '@angular/core';

const shuffleAlgo = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

@Component({
  selector: 'app-deck-sample',
  templateUrl: './deck-sample.component.html',
  styleUrls: ['./deck-sample.component.css'],
})
export class DeckSampleComponent implements OnInit {
  deck: number[];
  hand: number[] = [];
  stash: number[] = [];
  topN = 0;
  inputTopN;

  constructor() {}

  /**
   * 初期化処理
   */
  ngOnInit() {
    this.deck = [...Array(60).keys()].map(i => ++i);
    this.shuffle();
  }

  /**
   * シャッフル処理
   */
  shuffle() {
    this.deck = shuffleAlgo(this.deck);
  }

  /**
   * ドロー処理
   */
  draw() {
    this.hand.push(this.deck.shift());
  }

  /**
   * 山札の上からN枚を取得(deck to stash)
   */
  onClickShowTopN() {
    this.topN = this.inputTopN;
    this.stash = this.deck.splice(0, this.topN);
  }

  /**
   * 山札を取得(deck to stash)
   */
  onClickShowDeck() {
    this.stash = this.deck.splice(0, this.deck.length);
  }

  /**
   * stashから指定したインデックスを手札に
   * @param stashIndex 手札に加えたいインデックス
   */
  stashToHand(stashIndex: number) {
    this.hand.push(this.stash.splice(stashIndex, 1)[0]);
  }

  /**
   * stashから指定したインデックスを山札の上に
   * @param stashIndex 山札の上に加えたいインデックス
   */
  stashToDeckTop(stashIndex: number) {
    this.deck.unshift(this.stash.splice(stashIndex, 1)[0]);
  }

  /**
   * stashを山札の上に
   * @param stashIndex 山札の上に加えたいインデックス
   */
  stashToDeck() {
    this.deck.unshift(...this.stash);
    this.stash = [];
  }
}
