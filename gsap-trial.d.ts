declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, options?: any);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
    split(config?: any): this;
  }
}
